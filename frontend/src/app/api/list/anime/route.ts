export const runtime = "nodejs";

import { createClient } from "@supabase/supabase-js";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  // const apiKey = req.headers.get("X-Frontend-Auth")

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const { data: anime, error } = await supabase.from("anime").select("*");

  // console.log(supabase);
  // console.log(anime);

  if (error) {
    console.log(error);
    return NextResponse.json({ message: "Anime not found", status: 404 });
  }

  // console.log(anime)
  return NextResponse.json({ anime, status: 200 });
  //   const prisma = new PrismaClient()

  //   const data = await prisma.anime.findMany()

  // return NextResponse.json({ data, status: 200 });
}
