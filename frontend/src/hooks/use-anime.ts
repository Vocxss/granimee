import { AnimeSchedule, DaySchedule } from "@/lib/types";
import {
  AnimeDetail,
  AnimeListEpisode,
  AnimeStreamData,
  AnimeWithEpisodes,
  BackendIP,
  SpotlightAnime,
  TopTenSection,
} from "@/lib/utils";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

const DEFAULT_QUERY_OPTIONS = {
  retry: 3,
  retryDelay: 2000,
  refetchOnWindowFocus: false,
  staleTime: 720 * 60 * 1000,
};

export const useWatchEpisode = (episodeNow: number, slug: string) => {
  const { data: episodes = [] } = useQuery<AnimeListEpisode[]>({
    queryKey: ["episode", `${slug}-${episodeNow}`],
    queryFn: async () => {
      const response = await fetch(`${BackendIP}/episodes/${slug}`, {
        method: "GET",
      });
      if (!response.ok) {
        throw new Error("Response was not ok");
      }
      const data = await response.json();
      return data.data;
    },
    ...DEFAULT_QUERY_OPTIONS,
  });

  const episode_id = episodes?.filter(
    (ep) => ep.episodeNumber === episodeNow,
  )[0]?.id;

  const {
    data: streamData,
    isLoading,
    isError,
  } = useQuery<AnimeStreamData>({
    queryKey: ["watch", episode_id],
    queryFn: async () => {
      const response = await fetch(
        `${BackendIP}/stream?server=hd-2&type=sub&id=${episode_id}`,
        {
          headers: {
            Accept: "*/*",
          },
        },
      );
      if (!response.ok) {
        throw new Error("Response was not ok");
      }
      const data = await response.json();
      return data.data;
    },
    ...DEFAULT_QUERY_OPTIONS,
  });

  return { episodes, streamData, isLoading, isError };
};

export const useDetailAnime = (slug: string) => {
  const {
    data: anime,
    isLoading,
    isError,
  } = useQuery<AnimeDetail>({
    queryKey: ["detail", slug],
    queryFn: async () => {
      const response = await fetch(`${BackendIP}/anime/${slug}`, {
        method: "GET",
      });
      if (!response.ok) {
        throw new Error("Response was not ok");
      }
      const data = await response.json();
      return data.data;
    },
    ...DEFAULT_QUERY_OPTIONS,
  });
  return { anime, isLoading, isError };
};

export const usePopularAnime = () => {
  const { data: anime, isLoading } = useQuery<TopTenSection>({
    queryKey: ["top"],
    queryFn: async () => {
      const response = await fetch(`http://localhost:3030/api/v1/topten`, {
        method: "GET",
      });
      const data = await response.json();
      return data.data;
    },
    retry: 3,
    retryDelay: 2000,
    refetchOnWindowFocus: false,
    staleTime: 720 * 60 * 1000,
  });

  return { anime, isLoading };
};

export const useLatestAnime = () => {
  const {
    data: anime = [],
    isLoading,
    error,
  } = useQuery<AnimeWithEpisodes[]>({
    queryKey: ["latest"],
    queryFn: async () => {
      const response = await fetch(`${BackendIP}/home`, {
        method: "GET",
      });
      if (!response.ok) {
        throw new Error("Response was not ok");
      }
      const data = await response.json();
      // console.log(data.data.spotlight);
      return data.data.latestEpisode;
    },
    ...DEFAULT_QUERY_OPTIONS,
  });

  if (error) {
    console.log(error);
  }

  return { anime, isLoading, error };
};

export const useSpotlightAnime = () => {
  const {
    data: anime = [],
    isLoading,
    error,
  } = useQuery<SpotlightAnime[]>({
    queryKey: ["popular-season"],
    queryFn: async () => {
      const response = await fetch(`${BackendIP}/spotlight`, {
        method: "GET",
      });
      if (!response.ok) {
        throw new Error("Response was not ok");
      }
      const data = await response.json();
      // console.log(data.data.spotlight);
      return data.data;
    },
    ...DEFAULT_QUERY_OPTIONS,
  });

  if (error) {
    console.log(error);
  }

  return { anime, isLoading, error };
};

export const useAnime = (page: number, letter: string) => {
  const { data, isLoading, error } = useQuery<AnimeWithEpisodes[]>({
    queryKey: ["list", `${letter}-${page}`],
    queryFn: async () => {
      const response = await fetch(
        `${BackendIP}/az-list/${letter}?page=${page}`,
      );
      if (!response.ok) {
        throw new Error("Response was not ok");
      }
      const data = await response.json();
      // console.log(data.data.spotlight);
      return data.data.responses;
    },
    placeholderData: keepPreviousData,
    ...DEFAULT_QUERY_OPTIONS,
  });

  if (error) {
    console.log(error);
  }

  return { data, isLoading, error };
};

export const useSchedule = (page: number) => {
  const { data, isLoading, error } = useQuery<DaySchedule[]>({
    queryKey: ["schedule", page],
    queryFn: async () => {
      const response = await fetch(
        `http://localhost:3000/api/schedule?page=${page}`,
      );
      if (!response.ok) {
        throw new Error("Response was not ok");
      }
      const data = await response.json();
      return data.data;
    },
    ...DEFAULT_QUERY_OPTIONS,
  });

  if (error) {
    console.log(error);
  }

  return { data, isLoading, error };
};
