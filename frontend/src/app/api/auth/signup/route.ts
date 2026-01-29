import { supabaseServer } from "@/lib/supabaseServer";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const supabase = await supabaseServer();
  const body = await req.json();
  const { email, password, username } = body;

  if (!email || !username || !password) {
    return NextResponse.json(
      { message: "Email, username and password are required!" },
      { status: 400 },
    );
  }

  const { data: listUser } = await supabase.auth.admin.listUsers();

  const existed = listUser.users?.find((user) => user.email === email);

  if (existed) {
    return NextResponse.json(
      { message: "Email already exists!" },
      { status: 400 },
    );
  }

  const { data: authData, error: authErr } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: "http://localhost:3000/auth/login",
    },
  });

  if (authErr) {
    return NextResponse.json(
      { message: authErr.message, error: authErr.message },
      { status: 500 },
    );
  }

  const userId = authData?.user?.id;

  if (!userId) {
    return NextResponse.json(
      { message: "User ID not found!", error: "User ID not found!" },
      { status: 500 },
    );
  }

  const { error: insertErr } = await supabase.from("user").insert({
    id: userId,
    username,
    email,
    picture: "",
    createdAt: new Date(),
    updatedAt: new Date(),
  });

  if (insertErr) {
    return NextResponse.json(
      { message: insertErr.message, error: insertErr.message },
      { status: 400 },
    );
  }

  return NextResponse.json(
    { message: "Account created successfully!" },
    { status: 200 },
  );
}
