"use client";

import { Loader } from "@/components/ui/loader";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AuthCallback() {
  const router = useRouter();
  useEffect(() => {
    const getSession = async () => {
      try {
        const {
          data: { session },
          error,
        } = await supabase.auth.getSession();

        if (error) {
          console.error("Session error:", error.message);
          router.push("/auth/login");
          return;
        }

        if (session) {
          // console.log("Session established for:", user.email);

          // Initialize user data for new OAuth users
          try {
            const initResponse = await fetch("/api/user/initialize", {
              method: "POST",
            });

            // const initData = await initResponse.json();

            // if (initResponse.ok) {
            //   // console.log("User initialization:", initData.message);
            // } else {
            //   // console.warn("Initialization warning:", initData.message);
            // }
          } catch (initError) {
            // console.error("Failed to initialize user:", initError);
            // Don't block login if initialization fails
          }

          router.push("/");
        } else {
          // console.warn("No session found, redirecting to login");
          router.push("/auth/login");
        }
      } catch (err) {
        // console.error("Callback error:", err);
        router.push("/auth/login");
      }
    };
    getSession();
  }, [router, supabase]);

  return (
    <div className="flex flex-col gap-12 justify-center items-center w-screen h-screen">
      <Loader />
      <p className="text-primary font-bold text-center text-sm">
        Authenticating...
      </p>
    </div>
  );
}
