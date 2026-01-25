"use client";
import { saveWatchProgress } from "@/app/actions/watchHistory";
import dynamic from "next/dynamic";
import { APITypes, PlyrProps } from "plyr-react";
import "plyr-react/plyr.css";
import { useCallback, useEffect, useRef } from "react";
import Hls from "hls.js";

// Define local interface if import fails or verify import
interface PlyrConfigurationProps extends PlyrProps {}

const Plyr = dynamic(() => import("plyr-react").then((p) => p.Plyr as any), {
  ssr: false,
});

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
  const playerRef = useRef<APITypes>(null);
  // Stabilize saveProgress with useCallback to prevent effect re-firing
  const { saveProgress } = useWatchHistory({
    animeId,
    episodeId,
    episodeNumber,
    title,
    image,
  });

  const englishSubtitle = subtitles.filter((s) => s.label === "English");

  const plyrOptions: PlyrConfigurationProps = {
    source: {
      type: "video" as "video",
      sources: [
        {
          src:
            src && src.startsWith("http")
              ? `/api/proxy/stream?url=${encodeURIComponent(src)}`
              : src,
        },
      ],
      tracks: englishSubtitle.map((s) => ({
        src: `/api/proxy/subtitle?url=${encodeURIComponent(s.file)}`,
        kind: "subtitles" as const,
        srclang: s.label,
        label: s.label === "English" ? "English" : s.label,
        default: s.label === "English",
      })),
    },
    options: {
      controls: [
        "play-large",
        "play",
        "progress",
        "current-time",
        "mute",
        "captions",
        "settings",
        "pip",
        "airplay",
        "fullscreen",
        "quality",
      ],
      settings: ["captions", "quality", "speed"],
    },
  };

  useEffect(() => {
    const player = playerRef.current?.plyr;
    if (!player || !src) return;

    // Use Hls.js if supported and not natively supported (like in Firefox)
    // Note: Safari supports HLS natively, so this block won't run there usually.
    if (Hls.isSupported()) {
      // You might want to check if the src extension is indeed m3u8.
      // Assuming src is HLS based on typical failures in Firefox (which lacks native HLS).
      if (src.includes(".m3u8")) {
        const hls = new Hls();
        const proxiedSrc =
          src && src.startsWith("http")
            ? `/api/proxy/stream?url=${encodeURIComponent(src)}`
            : src;
        hls.loadSource(proxiedSrc);
        const media = (player as any).media;
        
        // Ensure media element exists
        if (media) {
           hls.attachMedia(media as HTMLMediaElement);
        }
        
        // Cleanup HLS instance on unmount or src change
        return () => {
          hls.destroy();
        };
      }
    }
  }, [src]);

  useEffect(() => {
    const player = playerRef.current?.plyr;

    // Check if player exists for event listeners, but DON'T return early preventing interval
    if (player) {
      if (typeof player.once === "function") {
        player.once("ready", () => {
          if (initialProgress && initialProgress > 0) {
            player.currentTime = initialProgress;
          }
        });
      } else if (typeof player.on === "function") {
        player.on("ready", () => {
          if (initialProgress && initialProgress > 0) {
            player.currentTime = initialProgress;
          }
        });
      }
    }

    const interval = setInterval(() => {
      const currentPlayer = playerRef.current?.plyr;

      // Ensure player is still valid during interval execution
      if (
        currentPlayer &&
        currentPlayer.playing &&
        currentPlayer.currentTime > 0
      ) {
        saveProgress(currentPlayer.currentTime, currentPlayer.duration);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [initialProgress, saveProgress]);

  // Cast to any to avoid IntrinsicAttributes error with dynamic component ref
  const PlyrComponent = Plyr as any;

  return (
    <div className="w-full rounded-lg h-full">
      <PlyrComponent ref={playerRef} {...plyrOptions} />
    </div>
  );
};

// Hook for debounced saving or just saving logic
const useWatchHistory = ({
  animeId,
  episodeId,
  episodeNumber,
  title,
  image,
}: any) => {
  // Basic useCallback to stabilize the function reference
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
        console.error("Failed to call saveWatchProgress action:", err);
      }
    },
    [animeId, episodeId, episodeNumber, title, image]
  );

  return { saveProgress };
};