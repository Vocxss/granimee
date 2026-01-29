"use client";
import {
  useDetailAnime,
  useLatestAnime,
  usePopularAnime,
  useSchedule,
} from "@/hooks/use-anime";
import { AnimeList } from "@/lib/utils";
import { Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Skeleton } from "./ui/skeleton";
import { H3, H4 } from "./ui/typography";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export const List = ({
  anime,
  isLoading,
}: {
  anime: AnimeList[];
  isLoading: boolean;
}) => {
  console.log(anime);

  if (isLoading) {
    return (
      <div className="mx-auto grid grid-cols-3 sm:grid-cols-4 2xl:grid-cols-5 gap-6">
        {Array.from({ length: 5 }).map((_, index) => (
          <Skeleton key={index} className="w-full aspect-[1/1.45] rounded-lg" />
        ))}
      </div>
    );
  }

  return (
    <div className="z-20 overflow-hidden bg-transparent gap-8 md:my-12 my-8 md:mx-0 mx-4 flex flex-col">
      {/* <div className="flex items-center justify-between">
        <H3 text={"Latest Episode"} />
      </div> */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
        {anime?.map((anime, index: number) => (
          <Link
            href={`/anime/${anime.id}`}
            className="relative group rounded-lg hover:-translate-y-2 transition-all duration-300 hover:shadow-sm h-auto flex flex-col gap-2"
            key={index}
          >
            <div className="absolute w-full rounded-lg aspect-[1/1.45] group-hover:bg-black/30 group-hover:backdrop-blur-xs flex justify-center items-center transition-all duration-500">
              <span className="p-4 rounded-full bg-muted text-muted-foreground hidden group-hover:block">
                <Play className="w-5 h-5" />
              </span>
            </div>
            <div className="absolute w-full max-h-24 h-full bottom-0 justify-center px-3 rounded-br-lg rounded-bl-lg bg-black/30 backdrop-blur-sm flex flex-col gap-4">
              <p className="md:text-sm text-xs text-left max-w-4/5 line-clamp-2 font-semibold">
                {anime?.title}
              </p>
              <div className="flex items-center justify-between">
                <p className="rounded-sm text-[9px] font-semibold p-2 bg-accent text-accent-foreground">
                  {anime.episodes.eps} Episode
                </p>
                <p className="rounded-sm text-[9px] font-semibold p-2 bg-accent text-accent-foreground">
                  {anime.type}
                </p>
                {/* <p className="text-[9px] font-bold">{anime?.}</p> */}
              </div>
            </div>

            {/* <p className="absolute top-1 right-1 rounded-sm opacity-85 text-xs font-semibold p-2 bg-border text-primary">
              {anime?.}
            </p> */}
            {anime?.poster ? (
              <Image
                alt={`${index}`}
                width={640}
                height={960}
                src={anime.poster}
                className="object-cover w-full aspect-[1/1.45] rounded-lg"
              />
            ) : (
              <Skeleton className="w-full aspect-[1/1.45] rounded-lg" />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export const LatestList = () => {
  const { anime, isLoading, error } = useLatestAnime();

  if (isLoading) {
    return (
      <div className="mx-auto grid grid-cols-2 sm:grid-cols-3 2xl:grid-cols-4 gap-6">
        {Array.from({ length: 10 }).map((_, index) => (
          <Skeleton key={index} className="w-full aspect-[1/1.45] rounded-lg" />
        ))}
      </div>
    );
  }

  return (
    <div className="z-20 overflow-hidden bg-transparent gap-8 md:my-12 my-8 md:mx-8 mx-4 flex flex-col">
      <div className="flex items-center justify-between">
        <H3 text={"Latest Episode"} />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 2xl:grid-cols-4 gap-6">
        {anime?.map((anime, index: number) => (
          <Link
            href={`/anime/${anime.id}/watch?ep=${anime.episodes.eps}`}
            className="relative group rounded-lg hover:-translate-y-2 transition-all duration-300 hover:shadow-sm h-auto flex flex-col gap-2"
            key={index}
          >
            <div className="absolute w-full rounded-lg aspect-[1/1.45] group-hover:bg-black/30 group-hover:backdrop-blur-xs flex justify-center items-center transition-all duration-500">
              <span className="p-4 rounded-full bg-muted text-muted-foreground hidden group-hover:block">
                <Play className="w-5 h-5" />
              </span>
            </div>
            <div className="absolute w-full max-h-24 h-full bottom-0 justify-center px-3 rounded-br-lg rounded-bl-lg bg-black/30 backdrop-blur-sm flex flex-col gap-4">
              <p className="md:text-sm text-xs text-left max-w-4/5 line-clamp-2 font-semibold">
                {anime?.title}
              </p>
              <div className="flex items-center justify-between">
                <p className="rounded-sm text-[9px] font-semibold p-2 bg-accent text-accent-foreground">
                  Episode {anime.episodes.eps}
                </p>
                {/* <p className="text-[9px] font-bold">{anime.episodes.}</p> */}
              </div>
            </div>

            {/* <p className="absolute top-1 right-1 rounded-sm opacity-85 text-xs font-semibold p-2 bg-border text-primary">
              {anime?.}
            </p> */}
            <Image
              alt={`${index}`}
              width={640}
              height={960}
              src={anime?.poster || ""}
              className="object-cover w-full aspect-[1/1.45] rounded-lg"
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export const RecommendedList = ({
  slug,
  header,
}: {
  slug: string;
  header?: string;
}) => {
  const { anime, isLoading, isError } = useDetailAnime(slug);

  const relatedAnime = anime?.recommended.slice(0, 5);

  if (isError) {
    toast.error("Terjadi kesalahan saat pengambilan data :(");
  }

  if (isLoading) {
    return (
      <div className="w-full mx-auto bg-card rounded-sm py-12 px-12 flex flex-wrap gap-4 justify-center">
        {Array.from({ length: 5 }).map((_, index) => (
          <Skeleton key={index} className="w-48 h-64 rounded-sm" />
        ))}
      </div>
    );
  }

  return (
    <div className="z-20 overflow-hidden gap-8 md:my-12 my-8 md:mx-12 mx-4 flex flex-col">
      <div className="flex items-center justify-between">
        <H3 text={"Recommended for you"} />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 md:gap-6 gap-4">
        {relatedAnime?.map((anime, index: number) => (
          <Link
            href={`/anime/${anime.id}`}
            className="relative group rounded-lg hover:-translate-y-2 transition-all duration-300 hover:shadow-sm h-auto flex flex-col gap-2"
            key={index}
          >
            <div className="absolute w-full rounded-lg aspect-[1/1.45] group-hover:bg-black/30 group-hover:backdrop-blur-xs flex justify-center items-center transition-all duration-500">
              <span className="p-4 rounded-full bg-muted text-muted-foreground hidden group-hover:block">
                <Play className="w-5 h-5" />
              </span>
            </div>
            <div className="absolute w-full max-h-24 h-full bottom-0 justify-center px-3 rounded-br-lg rounded-bl-lg bg-black/30 backdrop-blur-sm flex flex-col gap-4">
              <p className="md:text-sm text-xs text-left max-w-4/5 line-clamp-2 font-semibold">
                {anime?.title}
              </p>
              <div className="flex items-center justify-between">
                <p className="rounded-sm text-[9px] font-semibold p-2 bg-accent text-accent-foreground">
                  {anime.episodes.eps} Episodes
                </p>
                <p className="rounded-sm text-[9px] font-semibold p-2 bg-accent text-accent-foreground">
                  {anime.type}
                </p>
              </div>
            </div>
            {anime?.poster ? (
              <Image
                alt={`${index}`}
                width={640}
                height={960}
                src={anime.poster}
                className="object-cover w-full aspect-[1/1.45] rounded-lg"
              />
            ) : (
              <Skeleton className="w-full aspect-[1/1.45] rounded-lg" />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export const TopList = () => {
  const { anime, isLoading } = usePopularAnime();
  const [selected, setSelected] = useState("today");
  const topToday = anime?.today;
  const topWeek = anime?.week;
  const topMonth = anime?.month;

  const animes =
    selected === "today"
      ? anime?.today.slice(0, 10)
      : selected === "week"
        ? anime?.week.slice(0, 10)
        : anime?.month.slice(0, 10);

  if (isLoading) {
    return (
      <div className="w-full mx-auto bg-card rounded-sm py-12 px-12 flex flex-wrap gap-4 justify-center">
        {Array.from({ length: 5 }).map((_, index) => (
          <Skeleton key={index} className="w-48 h-64 rounded" />
        ))}
      </div>
    );
  }

  return (
    <Card className="flex bg-white/5 flex-col gap-6 py-6">
      <CardHeader className="text-primary">
        <H4 text={"Top Airing"} />
      </CardHeader>
      <CardContent className="flex flex-col gap-6">
        {animes?.map((anime, index) => (
          <Link
            key={index}
            href={`/anime/${anime.id}`}
            className={`flex gap-4 hover:border-r-2 hover:border-r-accent-foreground hover:-translate-x-2 transition-transform items-center pb-4 ${
              index < animes?.length - 1 ? "border-b border-b-border" : ""
            }`}
          >
            <p className="text-lg text-accent-foreground font-bold">
              {index < 9 ? `0${index + 1}` : index + 1}
            </p>
            {anime?.poster ? (
              <Image
                alt={`${index}`}
                width={480}
                height={720}
                src={anime.poster}
                className="object-cover w-12 aspect-square rounded-full"
              />
            ) : (
              <Skeleton className="w-12 aspect-square rounded-full" />
            )}
            <div className="flex flex-col gap-2">
              <p className="text-sm line-clamp-2 max-w-28 w-full">
                {anime?.title}
              </p>
              {/* <span className="text-xs px-2 py-1 bg-accent text-accent-foreground font-semibold rounded-full w-max">
                {anime?.episodes.eps}
              </span> */}
            </div>
          </Link>
        ))}
      </CardContent>
    </Card>
  );
};

export const ScheduleList = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading, error } = useSchedule(page);
  if (isLoading) {
    return (
      <div className="w-full mx-auto py-12 px-12 flex flex-wrap gap-4 justify-center">
        {Array.from({ length: 10 }).map((_, index) => (
          <Skeleton key={index} className="w-48 h-24 rounded-lg" />
        ))}
      </div>
    );
  }

  if (error) return toast.error("Something wrong :(. Please try again.");

  return (
    <div className="flex flex-col gap-4 my-16 mx-8">
        <H3 text={"Schedules"} />
        <div className="flex flex-col gap-2">
          <p className="text-xs font-semibold">Page</p>
          <Select
            value={page.toString()}
            onValueChange={(value) => setPage(Number(value))}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select Page" />
            </SelectTrigger>
            <SelectContent>
              {Array.from({ length: 3 }).map((_, index) => (
                <SelectItem key={index} value={String(index + 1)}>
                  {index + 1}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
      </div>
      <div className="flex flex-col gap-16">
        {data &&
          data.map((item) => (
            <div className="flex flex-col gap-6" key={item.day}>
              <h2 className="text-xl font-semibold">{item.day}</h2>
              <div className="grid grid-cols-3 gap-12">
                {item.animes.map((anime, index) => (
                  <div
                    key={anime.id}
                    className="bg-linear-to-tr from-blue-400/30 via-primary/30 to-accent-foreground/30 p-0.5 ransition-transform duration-300 hover:scale-105 rounded-lg"
                  >
                    <div className="flex gap-6 items-center rounded-md bg-background">
                      <Image
                        alt={`${index}`}
                        width={480}
                        height={720}
                        src={anime.image}
                        className="object-cover rounded-tl-md rounded-bl-md max-w-20 w-full aspect-[1/1.3]"
                      />
                      <div className="flex flex-col gap-2 md:mr-4 mr-2">
                        <p className="text-sm font-semibold line-clamp-2 w-full">
                          {anime.title}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Episode {anime.episode} will be aired at {anime.time}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
