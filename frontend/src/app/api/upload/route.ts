import { supabase } from "@/lib/supabaseClient";
import { IAnime } from "@/lib/utils";
import { createId } from "@paralleldrive/cuid2";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body: IAnime = await req.json();

  const id = createId()

  const { data, error } = await supabase.from("anime").insert({
    id: id,
    title: body.title,
    synopsis: body.synopsis,
    coverImage: body.coverImage,
    bannerImage: body.bannerImage,
    genre: body.genre,
    status: body.status,
    releaseDate: Number(body.releaseDate),
    rating: Number(body.rating),
  });

  if (error) {
    console.log(error);
    return NextResponse.json({
      status: 400,
      message: "Kesalahan pengisian data",
    });
  } else return NextResponse.json({ status: 200, message: "Done !", data });
}

export async function PUT(req: NextRequest) {
  const body = await req.json();

  return NextResponse.json({ message: body, status: 200 });
}
