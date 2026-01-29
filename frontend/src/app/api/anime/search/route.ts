import { createClient } from "@supabase/supabase-js";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const query = searchParams.get("q");

  if (!query) {
    return NextResponse.json(
      { error: 'Query is required' },
      { status: 400 }
    );
  }

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const { data: anime, error } = await supabase
    .from("anime")
    .select("*")
    .ilike("title", `%${query}%`);

  if (error) {
    console.log(error);
    return NextResponse.json({ message: "Anime not found", status: 404 });
  }

  return NextResponse.json({ anime, status: 200 });
}
