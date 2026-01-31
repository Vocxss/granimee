"use server";
import { supabaseServer } from "@/lib/supabaseServer";

export async function saveWatchProgress(
  animeId: string,
  episodeId: string,
  episodeNumber: number,
  title: string,
  image: string,
  progress: number,
  duration: number,
) {
  const supabase = await supabaseServer();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return;

  const { error } = await supabase.from("watch_history").upsert(
    {
      user_id: user.id,
      anime_id: animeId,
      episode_id: episodeId,
      episode_number: episodeNumber,
      title,
      image,
      progress: Math.floor(progress),
      duration: Math.floor(duration),
      last_watched_at: new Date().toISOString(),
    },
    {
      onConflict: "user_id, anime_id, episode_id",
    },
  );

  if (error) {
    console.error("Error saving watch history:", error);
  }
}

export async function getWatchHistory(animeId: string, episodeId: string) {
  const supabase = await supabaseServer();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return null;

  const { data, error } = await supabase
    .from("watch_history")
    .select("progress, duration")
    .eq("user_id", user.id)
    .eq("anime_id", animeId)
    .eq("episode_id", episodeId)
    .single();
  // console.log(data);
  if (error) return null;
  return data;
}

export async function getAllWatchHistory() {
  const supabase = await supabaseServer();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return [];

  const { data, error } = await supabase
    .from("watch_history")
    .select("*")
    .eq("user_id", user.id)
    .order("last_watched_at", { ascending: false });

  if (error) {
    console.error("Error fetching watch history:", error);
    return [];
  }
  // console.log(data);
  return data;
}

