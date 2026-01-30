"use client";

import { useEffect, useRef, useCallback } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import Hls from "hls.js";
import "videojs-contrib-quality-levels";
import "videojs-hls-quality-selector";
import { saveWatchProgress } from "@/app/actions/watchHistory";

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

player.ready(() => {
 player.hlsQualitySelector({ displayCurrentQuality: true });
});
    // Use videoRef.current directly as it is the HTMLVideoElement
    const videoEl = videoRef.current;
    const proxiedSrc = `/api/proxy/stream?server=hd-2&type=sub&url=${encodeURIComponent(src)}`;

    if (Hls.isSupported() && videoEl) {
      const hls = new Hls({ enableWorker: true, lowLatencyMode: true });
      hls.loadSource(proxiedSrc);
      hls.attachMedia(videoEl);
      
      // Removed player.play() to avoid Autoplay Policy Violation
      // hls.on(Hls.Events.MANIFEST_PARSED, () => player.play());

      // Cleanup HLS when component unmounts or src changes
      return () => {
        hls.destroy();
      };
    } else {
      player.src({ src: proxiedSrc, type: "application/x-mpegURL" });
    }


    // Cleanup on unmount
    // Cleanup on unmount (fallback if not handled in HLS block)
    return () => {
      if (!player.isDisposed()) {
        player.dispose();
      }
    };
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
        false
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
          duration
        );
      } catch (err) {
        console.error("Failed to save watch progress:", err);
      }
    },
    [animeId, episodeId, episodeNumber, title, image]
  );

  return { saveProgress };
};
