import { createServerClient } from "@supabase/ssr";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  let response = NextResponse.next();

 const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
       cookies: {
        getAll() {
          return req.cookies.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => req.cookies.set(name, value))
          response = NextResponse.next({
            request: req,
          })
          cookiesToSet.forEach(({ name, value, options }) =>
            response.cookies.set(name, value, options)
          )
        },
      }
    }
  );
  
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();
  
  const protectedRoutes = [
    "/kami",
    "/kami/upload",
    "/kami/upload/anime",
    "/kami/upload/anime/episode",
  ];
  const isProtectedRoute = protectedRoutes.some((route) =>
    req.nextUrl.pathname.startsWith(route)
  );

  if (isProtectedRoute && !user) {
    return NextResponse.redirect(new URL("/auth/login", req.nextUrl.origin));
  }

  const authRoutes = ["/auth/login", "/auth/signup"];
  const isAuthRoute = authRoutes.some((route) =>
    req.nextUrl.pathname.startsWith(route)
  );

 if (isAuthRoute && user) {
    const role = user.user_metadata?.role; 
    // console.log(role)
    return NextResponse.redirect(
      new URL(role === "kami" ? "/kami/upload/anime" : "/home", req.nextUrl.origin)
    );
  }

if (user && user.user_metadata?.role === "kami" && req.nextUrl.pathname === "/home") {
    return NextResponse.redirect(new URL("/kami/upload/anime", req.nextUrl.origin));
  }

if (user && user.user_metadata?.role === "user" && isProtectedRoute) {
    return NextResponse.redirect(new URL("/home", req.nextUrl.origin));
  }

  return response;
}

export const config = {
  matcher: ["/auth/:path*", "/kami/:path*", "/home"],
};
