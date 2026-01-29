import { PrismaClient } from "@/generated/prisma";
import { supabase } from "@/lib/supabaseClient";
import { createId } from "@paralleldrive/cuid2";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  const body = await req.json();
  const id = createId();

  const {data} = body

  // console.log(body);

  const { data: anime } = await supabase
    .from("anime")
    .select("*")
    .eq("title", data[0].animeTitle)
    .maybeSingle();
    
    if (!anime) return NextResponse.json({ message: "Anime not found", status: 404 });

const dataToInsert = data.map((ep) => ({
  id: createId(),
  animeId: anime.id,
  title: ep.title,
  episodeNum: Number(ep.episodeNum),
  duration: ep.duration,
  videoUrl: `https://pixeldrain.com/api/file/${ep.videoUrl}`,
  createdAt: new Date(),
  updatedAt: new Date(),
}));

  const { error } = await supabase.from("episode").insert(dataToInsert);

  if (error) {
    console.log(error);
    return NextResponse.json({ status: 400, message: error });
  }
  return NextResponse.json({ message: "Done!", status: 200 });
}

export async function PUT() {}

export async function DELETE(req: NextRequest) {
  const body = await req.json();

  try {
    const data = await prisma.episode.delete({
      where: {
        id: body.episodeId,
      },
    });

    if (!data)
      return NextResponse.json({ message: "Episode not found", status: 404 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: error, status: 400 });
  }

  return NextResponse.json({ message: "Done!", status: 200 });
}
