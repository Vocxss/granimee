import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const BackendIP = process.env.BACKEND_IP
  ? process.env.BACKEND_IP
  : "https://granime.up.railway.app/api/v1";

export const BackendIP2 = process.env.BACKEND_IP2
  ? process.env.BACKEND_IP2
  : "https://granime.vercel.app/api";

// User tanpa relasi
export interface IUser {
  id?: string;
  email?: string;
  username?: string | null;
  role: "user" | "admin";
  createdAt?: Date;
  updatedAt?: Date;
}

// Anime tanpa relasi
export interface IAnime {
  id?: string;
  title: string;
  synopsis?: string | null;
  coverImage?: string | null;
  bannerImage?: string | null;
  genre: string[];
  status: "ongoing" | "completed" | "upcoming";
  releaseDate: number;
  rating: number;
}

// Episode tanpa relasi
export interface IEpisode {
  id: string;
  animeId: string;
  title: string;
  episodeNum: number;
  duration: string;
  releaseDate?: Date | null;
  videoUrl: string;
  subtitleUrl?: string | null;
  createdAt: Date;
  updatedAt: Date;
}

// Watch History tanpa relasi
export interface IWatchHistory {
  id: string;
  userId: string;
  episodeId: string;
  progress: number; // detik terakhir ditonton
  updatedAt: Date;
}

// User dengan riwayat tontonan
export interface IUserWithHistory extends IUser {
  watchHistories: IWatchHistoryWithEpisode[];
}

// Anime dengan episode
export interface IAnimeWithEpisodes extends IAnime {
  episode: IEpisode[];
}

// Episode dengan anime & riwayat tontonan
export interface IEpisodeWithRelations extends IEpisode {
  anime: IAnime;
  watchHistories: IWatchHistory[];
}

// Watch history dengan detail episode
export interface IWatchHistoryWithEpisode extends IWatchHistory {
  episode: IEpisode;
}

// HIANIME API

// Root response
export interface AnimeStreamResponse {
  success: boolean;
  data: AnimeStreamData;
}

// Main data object
export interface AnimeStreamData {
  id: string;
  type: "sub" | "dub";
  link: StreamLink;
  tracks: StreamTrack[];
  intro: TimeRange;
  outro: TimeRange;
  server: string;
  usedFallback: boolean;
  referer: string;
}

// Stream link (video source)
export interface StreamLink {
  file: string;
  type: "hls" | "mp4";
}

// Subtitle / thumbnail tracks
export interface StreamTrack {
  file: string;
  label?: string;
  kind: "captions" | "thumbnails";
  default?: boolean;
}

// Intro / Outro timing
export interface TimeRange {
  start: number;
  end: number;
}

export interface AnimeEpisodes {
  sub: number;
  dub: number;
  eps: number;
}

export interface AnimeListEpisode {
  title: string;
  alternativeTitle: string;
  id: string;
  isFiller: boolean;
  episodeNumber: number;
}

export interface AnimeAired {
  from: string;
  to: string;
}

export interface RelatedAnime {
  id: string;
  title: string;
  poster: string;
  type?: string;
}

export interface BaseAnime {
  title: string;
  alternativeTitle: string;
  id: string;
  poster: string;
}

export interface AnimeList extends BaseAnime {
  episodes: AnimeEpisodes;
  type: string;
  duration: string;
}

export interface AnimeDetail extends BaseAnime {
  episodes: AnimeEpisodes;
  rating: string;
  type: string;
  is18Plus: boolean;
  synopsis: string;
  synonyms: string;
  aired: AnimeAired;
  premiered: string;
  duration: string;
  status: string;
  MAL_score: string;
  genres: string[];
  studios: string[];
  producers: string[];
  related: RelatedAnime[];
  mostPopular: RelatedAnime[];
  recommended: AnimeList[];
}

export interface SpotlightAnime extends BaseAnime {
  episodes: AnimeEpisodes;
  rank: number;
  type: string;
  quality: string;
  duration: string;
  aired: string;
  synopsis: string;
}

export interface SpotlightResponse {
  status: boolean;
  data: SpotlightAnime[];
}

export interface AnimeWithEpisodes extends BaseAnime {
  episodes: AnimeEpisodes;
}

export interface AnimeWithEpisodesAndType extends AnimeWithEpisodes {
  type: string;
}

export interface TrendingAnime extends BaseAnime {
  rank: number;
}

export interface TopTenSection {
  today: AnimeWithEpisodes[];
  week: AnimeWithEpisodes[];
  month: AnimeWithEpisodes[];
}

export interface HomeData {
  spotlight: SpotlightAnime[];
  trending: TrendingAnime[];
  topAiring: AnimeWithEpisodesAndType[];
  mostPopular: AnimeWithEpisodesAndType[];
  mostFavorite: AnimeWithEpisodesAndType[];
  latestCompleted: AnimeWithEpisodesAndType[];
  latestEpisode: AnimeWithEpisodes[];
  newAdded: AnimeWithEpisodes[];
  topUpcoming: AnimeWithEpisodes[];
  topTen: TopTenSection;
  genres: (string | null)[];
}

export interface SearchedAnime {
  title: string;
  alternativeTitle: string;
  id: string;
  poster: string;
  aired: string;
  type: string;
  duration: string;
}
