"use client";
import { useDetailAnime } from "@/hooks/use-anime";
import { Home, Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaBoxArchive, FaClock, FaStar, FaVideo } from "react-icons/fa6";
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
import { Loader } from "./ui/loader";
import { Skeleton } from "./ui/skeleton";

export const AnimeDetail = ({ slug }: { slug: string }) => {
  // console.log(slug);
  const [showMore, setShowMore] = useState(false);
  const { anime, isLoading, isError } = useDetailAnime(slug);

  const listDetail = [
    {
      title: "Episodes",
      icon: <FaBoxArchive />,
      detail: anime?.episodes.eps,
    },
    {
      title: "Aired",
      icon: <FaClock />,
      detail: anime?.aired.from.slice(-4),
    },
    {
      title: "Format",
      icon: <FaVideo />,
      detail: anime?.type,
    },
    {
      title: "Status",
      icon: <FaClock />,
      detail: anime?.status,
    },
    {
      title: "Rating",
      icon: <FaStar />,
      detail: anime?.MAL_score,
    },
    {
      title: "Studios",
      icon: <FaBoxArchive />,
      detail: anime?.studios,
    },
  ];
  // console.log(anime);

  if (isLoading)
    return (
      <div className="w-full h-screen flex items-center justify-center bg-background/50">
        <Loader />
      </div>
    );

  if (isError) return toast.error("Something went wrong :(");

  return (
    <div className="flex flex-col gap-4 md:px-12 px-4 pt-24">
      <div className="relative md:shrink-0 md:max-h-[400px] md:h-[70vh] w-full flex mb-4">
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

        <div className="flex flex-col md:flex-row md:justify-start justify-center items-center px-4 md:gap-18 gap-6 md:mt-12 mt-0">
          <Image
            src={anime?.poster || ""}
            width={480}
            height={720}
            className="max-w-56 w-full max-h-80 aspect-[1/1.45] rounded-sm shadow-lg"
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
              <p className="scroll-m-20 w-full pb-2 md:text-3xl text-lg font-bold md:text-start text-center tracking-tight first:mt-0">
                {anime?.title}
              </p>
              <p className="scroll-m-20 w-full pb-2 md:mt-1 bg-linear-to-r from-primary to-accent-foreground text-transparent bg-clip-text md:text-base text-sm italic font-semibold md:text-start text-center tracking-tight first:mt-0">
                {anime?.alternativeTitle}
              </p>
            </div>
            <div className="flex gap-4 items-center">
              {anime?.genres?.map((genre) => (
                <p
                  key={genre}
                  className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-sm font-semibold"
                >
                  {genre}
                </p>
              ))}
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-semibold md:text-start text-center">
                Overview
              </p>
              <p
                className={`md:text-sm text-xs md:text-start text-center leading-wide ${showMore ? "" : "line-clamp-4 text-ellipsis"}`}
              >
                {anime?.synopsis}
              </p>
              <span
                className="text-xs md:text-start text-center underline cursor-pointer hover:text-primary transition-colors"
                onClick={() => setShowMore(!showMore)}
              >
                {showMore ? "Show Less" : "Show More"}
              </span>
            </div>
            <Button
              variant={"default"}
              className="py-6 font-semibold my-2 w-max"
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
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:p-6 p-2">
        {listDetail.map((detail, index) => (
          <div
            key={index}
            className="flex flex-col gap-4 bg-primary/10 md:justify-start justify-center md:items-start items-center p-4 border border-border rounded-sm"
          >
            <div className="flex items-center gap-2">
              <span className="text-xs">{detail.icon}</span>
              <p className="font md:text-sm text-xs md:text-start text-center">
                {detail.title}
              </p>
            </div>
            <p className="font-semibold md:text-start text-center">
              {detail.detail}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
