export const runtime = "nodejs";

import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  );

  const { data: anime, error } = await supabase
    .from("anime")
    .select(`*, episode(*)`)
    .eq("id", id)
    .maybeSingle();

  if (error) {
    console.log(error);
    return NextResponse.json({ message: "Anime not found", status: 404 });
  }

  return NextResponse.json({ anime, status: 200 });

  // try {
  //   const anime = await prisma.anime.findFirst({
  //     where: { id: id },
  //     include: {episodes: true}
  //   });

  //   if (!anime)
  //     return NextResponse.json({ message: "Anime not found", status: 404 });

  //   return NextResponse.json({ anime, status: 200 });
  // } catch (error) {
  //   console.log(error);
  //   return NextResponse.json({ message: error, status: 400 });
  // }
}
