"use client";
import { useDetailAnime } from "@/hooks/use-anime";
import { Home, Play, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "./ui/breadcrumb";
import { Button } from "./ui/button";
import { Skeleton } from "./ui/skeleton";

export const AnimeDetail = ({ slug }: { slug: string }) => {
  // console.log(slug);

  const { anime, isLoading, isError } = useDetailAnime(slug);

  // console.log(anime);

  if (isLoading)
    return (
      <div className="flex flex-col gap-4 px-12 py-30 mx-auto w-full">
        <div className="flex flex-col md:flex-row justify-between w-full">
          <Skeleton className="w-1/5 h-[40vh] rounded-sm shadow-lg" />
          <Skeleton className="w-1/2 h-[70vh] rounded-sm shadow-lg" />
          <Skeleton className="w-1/4 h-[50vh] rounded-sm shadow-lg" />
        </div>
        <div>
          <Skeleton className="w-full h-[20vh] rounded-sm shadow-lg" />
        </div>
      </div>
    );

  if (isError) return toast.error("Something went wrong :(");

  return (
    <div className="flex flex-col gap-12">
      <div className="relative md:shrink-0 max-h-[400px] h-[70vh] w-full flex justify-center items-center md:mt-12 mt-32 mb-4">
        {anime?.poster ? (
          <Image
            alt={`cover`}
            width={640}
            height={960}
            src={anime.poster}
            className="absolute -z-10 top-0 left-0 h-full w-full brightness-50 saturate-50 object-cover blur-xl"
          />
        ) : (
          <Skeleton className="w-full aspect-[1/1.45] rounded-sm" />
        )}

        <div className="flex flex-col md:flex-row md:justify-between justify-center items-center px-14 md:gap-18 gap-6">
          <Image
            src={anime?.poster || ""}
            width={480}
            height={720}
            className="md:w-48 md:h-58 w-56 h-72 rounded-sm shadow-lg"
            alt="cover"
          />

          <div className="flex flex-col md:justify-start md:items-start items-center gap-3 md:w-3/5 w-full">
            <Breadcrumb className="md:block hidden">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink
                    href="/home"
                    className="flex items-center gap-2 text-xs"
                  >
                    <Home className="w-4 h-4" /> Home
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="/list-anime" className="text-xs">
                    Anime
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-xs">
                    {anime?.title}
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <div className="flex flex-col">
              <p className="scroll-m-20 w-full pb-2 md:text-2xl text-lg font-bold md:text-start text-center tracking-tight first:mt-0">
                {anime?.title}
              </p>
              <p className="scroll-m-20 w-full pb-2 md:mt-1 bg-linear-to-r from-primary to-accent-foreground text-transparent bg-clip-text md:text-base text-sm italic font-semibold md:text-start text-center tracking-tight first:mt-0">
                {anime?.alternativeTitle}
              </p>
            </div>
            <div className="text-xs flex gap-6 mb-2 items-center">
              <p className="font-semibold px-2 py-1 flex gap-2 items-center bg-accent text-accent-foreground rounded-sm">
                <Star className="w-4 h-4" /> {anime?.MAL_score}
              </p>
              <p className="font-semibold px-2 py-1 bg-accent text-accent-foreground rounded-sm">
                {anime?.type}
              </p>
            </div>
            <Button
              variant={"default"}
              className="py-6 font-semibold mb-2 w-max"
            >
              <Link
                href={`/anime/${slug}/watch?ep=1`}
                className="flex items-center gap-2"
              >
                <Play className="w-5 h-5" />
                <p className="">Start Waching</p>
              </Link>
            </Button>
          </div>
          <div className="md:flex-col h-full bg-white/10 flex-row gap-6 md:flex hidden">
            <div className="flex flex-col gap-4 p-4">
              <p className="text-sm">Aired: {anime?.aired?.from}</p>
              <p className="text-sm capitalize">Status: {anime?.status}</p>
              <p className="text-sm">Duration: {anime?.duration}</p>
              <p className="text-sm">Studio: {anime?.studios?.[0]}</p>
              <div className="flex flex-wrap gap-4 items-center">
                <p className="mb-2 text-sm">Genre:</p>
                {(anime?.genres ?? [])
                  .join(", ")
                  .split(", ")
                  .map((g, index) => (
                    <Link
                      href={`/discover/genre/${g}`}
                      className="py-1.5 px-2 text-xs font-medium border border-slate-50/60 hover:border-slate-50/80 rounded-xl"
                      key={index}
                    >
                      {g}
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:justify-start md:items-start items-center gap-4 py-6 border-y border-border md:mx-12 mx-6">
        <p className="text-xl font-bold text-primary">The Synopsis</p>
        <p className="text-xs leading-5 text-center md:text-start md:max-w-3/5 max-w-full font-light">
          {anime?.synopsis}
        </p>
      </div>
    </div>
  );
};
