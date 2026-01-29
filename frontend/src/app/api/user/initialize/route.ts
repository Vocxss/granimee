import prisma from "@/lib/prisma";
import { supabaseServer } from "@/lib/supabaseServer";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const supabase = await supabaseServer();

    const {
      data: { session },
      error: sessionError,
    } = await supabase.auth.getSession();

    if (sessionError || !session?.user) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const userId = session.user.id;
    const userEmail = session.user.email;
    const userName = session.user.user_metadata?.name || userEmail?.split("@")[0];
    const userImage = session.user.user_metadata?.picture || "";

    const existingUser = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (existingUser) {
      return NextResponse.json({
        message: "User already initialized",
        alreadyExists: true,
      });
    }

    await prisma.$transaction(async (tx: any) => {
      await tx.user.create({
        data: {
          id: userId,
          email: userEmail,
          username: userName,
          picture: userImage,
          role: "user",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      });
    });

    return NextResponse.json({
      message: "User initialized successfully",
    }, {
      status: 200,
    });
  } catch (error) {
    console.error("Error initializing user:", error);
    return NextResponse.json(
      { message: "Failed to initialize user", error: String(error) },
      { status: 500 }
    );
  }
}
