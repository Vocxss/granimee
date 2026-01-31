"use client";

import { Button } from "@/components/ui/button";
import { H3 } from "@/components/ui/typography";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  return (
    <div className="flex justify-center items-center w-full h-dvh">
      <div className="relative flex items-center w-4/5">
        <Image
          src="/pg.webp"
          alt="Granime"
          width={1280}
          height={720}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <H3 text={"Granime"} />
          <h1 className="text-lg font-medium text-white">Welcome to Granime</h1>
          <p className="text-white">The best anime streaming platform</p>
          <Button size={"lg"} onClick={() => router.push("/home")}>
            Watch Now!
          </Button>
        </div>
      </div>
    </div>
  );
}
