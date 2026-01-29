import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

export async function GET() {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const { data: anime, error } = await supabase.from("anime").select("*");

  if (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Something went error on server :(",
      },
      {
        status: 404,
      }
    );
  }

  // console.log(anime)
  return NextResponse.json(
    { anime },
    {
      status: 200,
    }
  );
}
