"use client";

import { saveWatchProgress } from "@/app/actions/watchHistory";
import Hls from "hls.js";
import { useCallback, useEffect, useRef } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import "videojs-contrib-quality-levels";
import "videojs-hls-quality-selector";

export const VideoPlayer = ({
  src,
  subtitles,
  animeId,
  episodeId,
  episodeNumber,
  title,
  image,
  initialProgress = 0,
}: {
  src: string;
  subtitles: { label: string; file: string }[];
  animeId?: string;
  episodeId?: string;
  episodeNumber?: number;
  title?: string;
  image?: string;
  initialProgress?: number;
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const playerRef = useRef<any | null>(null);

  const { saveProgress } = useWatchHistory({
    animeId,
    episodeId,
    episodeNumber,
    title,
    image,
  });

  useEffect(() => {
    if (!videoRef.current) return;

    // Initialize Video.js player
    const player = videojs(videoRef.current, {
      controls: true,
      fluid: true,
      preload: "auto",
      controlBar: { volumePanel: { inline: true } },
    });

    // Store player reference for other useEffects (subtitles, watch history)
    playerRef.current = player;

    const videoEl = videoRef.current;
    const proxiedSrc = `/api/proxy/stream?server=hd-2&type=sub&url=${encodeURIComponent(src)}`;

    if (Hls.isSupported() && videoEl) {
      const hls = new Hls({ enableWorker: true, lowLatencyMode: true });
      player.src({ src: proxiedSrc, type: "application/x-mpegURL" });
      hls.loadSource(proxiedSrc);
      hls.attachMedia(videoEl);

      // Sync HLS quality levels with Video.js quality levels plugin
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        const qualityLevels = (player as any).qualityLevels();

        hls.levels.forEach((level: any, index: number) => {
          qualityLevels.addQualityLevel({
            id: index.toString(),
            width: level.width,
            height: level.height,
            bandwidth: level.bitrate,
            enabled: (enable?: boolean) => {
              if (enable === undefined) {
                return hls.currentLevel === index || hls.currentLevel === -1;
              }
              if (enable) {
                hls.currentLevel = index;
              }
              return enable;
            },
          });
        });

        // Initialize quality selector after quality levels are ready
        (player as any).hlsQualitySelector({ displayCurrentQuality: true });
      });

      // Cleanup HLS when component unmounts or src changes
      return () => {
        hls.destroy();
      };
    } else {
      player.src({ src: proxiedSrc, type: "application/x-mpegURL" });

      // For native HLS support (Safari), initialize quality selector after player is ready
      player.ready(() => {
        (player as any).hlsQualitySelector({ displayCurrentQuality: true });
      });

      return () => {
        if (!player.isDisposed()) {
          player.dispose();
        }
        playerRef.current = null;
      };
    }
  }, [src]);

  // Subtitle tracks
  useEffect(() => {
    const player = playerRef.current;
    if (!player) return;

    // Clear old tracks
    const existingTracks = player.remoteTextTracks();
    while (existingTracks.length > 0) {
      player.removeRemoteTextTrack(existingTracks[0]);
    }

    subtitles.forEach((s) => {
      player.addRemoteTextTrack(
        {
          src: `/api/proxy/subtitle?url=${encodeURIComponent(s.file)}`,
          kind: "subtitles",
          label: s.label,
          srclang: s.label.toLowerCase(),
          default: s.label === "English",
        },
        false,
      );
    });
  }, [subtitles]);

  // Watch progress saving
  useEffect(() => {
    const player = playerRef.current;
    if (!player) return;

    player.on("loadedmetadata", () => {
      if (initialProgress > 0) {
        player.currentTime(initialProgress);
      }
    });

    const interval = setInterval(() => {
      if (!player.paused()) {
        saveProgress(player.currentTime(), player.duration());
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [initialProgress, saveProgress]);

  return (
    <div className="w-full aspect-video rounded-lg overflow-hidden">
      <video
        ref={videoRef}
        className="video-js vjs-default-skin"
        poster={image}
        crossOrigin="anonymous"
        controls
      >
        {subtitles.map((s, i) => (
          <track
            key={i}
            src={`/api/proxy/subtitle?url=${encodeURIComponent(s.file)}`}
            kind="subtitles"
            label={s.label}
            srcLang={s.label.toLowerCase()}
            default={s.label === "English"}
          />
        ))}
      </video>
    </div>
  );
};

// Hook for saving watch progress
const useWatchHistory = ({
  animeId,
  episodeId,
  episodeNumber,
  title,
  image,
}: any) => {
  const saveProgress = useCallback(
    async (progress: number, duration: number) => {
      if (!animeId || !episodeId) return;
      try {
        await saveWatchProgress(
          animeId,
          episodeId,
          episodeNumber,
          title,
          image,
          progress,
          duration,
        );
      } catch (err) {
        console.error("Failed to save watch progress:", err);
      }
    },
    [animeId, episodeId, episodeNumber, title, image],
  );

  return { saveProgress };
};
