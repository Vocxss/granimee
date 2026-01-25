"use client";

import { useQuery } from "@tanstack/react-query";
import { supabase } from "./supabaseClient";

export interface Profile {
  id: string;
  email: string;
  username: string;
  picture: string;
  created_at: string;
  updated_at: string;
}

export function useProfile() {
  const { data } = useQuery<Profile | null>({
    queryKey: ["profile"],
    queryFn: async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) return null;
      const { data, error } = await supabase
        .from("user")
        .select("*")
        .eq("id", user.id)
        .single();
      if (error) return null;
      return data;
    },
  });
  return data;
}
