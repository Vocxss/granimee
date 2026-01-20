"use client";
import { getWatchHistory } from "@/app/actions/watchHistory";
import { useDetailAnime, useWatchEpisode } from "@/hooks/use-anime";
import { Clock, Home } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "./ui/breadcrumb";
import { Loader } from "./ui/loader";
import { H3 } from "./ui/typography";
import { VideoPlayer } from "./videosupported";

export const EpisodeDetail = ({
  slug,
  episodeNow,
}: {
  slug: string;
  episodeNow: number;
}) => {
  const { anime, isLoading: isLoadingDetail } = useDetailAnime(slug);
  const { episodes, streamData, isLoading } = useWatchEpisode(episodeNow, slug);
  console.log(streamData);
  const episodeListData = anime?.episodes;

  const [initialProgress, setInitialProgress] = useState(0);

    const episode_id = episodes?.filter((ep) => ep.episodeNumber === episodeNow)[0]?.id;


  useEffect(() => {
    const fetchHistory = async () => {
      if (anime?.id && episode_id) {
        const history = await getWatchHistory(anime.id, episode_id);
        if (history?.progress) {
          setInitialProgress(history.progress);
        }
      }
    };
    fetchHistory();
  }, [anime?.id, episode_id]);
  const subtitle = streamData?.tracks.filter((t) => t.label === "English");
  // console.log(episodeData)

  if (isLoading || isLoadingDetail) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-background/50">
        <Loader />
      </div>
    );
  }

  return (
    <div>
      <div className="max-w-7xl w-full mx-auto md:py-30 py-24 md:px-24 px-0 flex flex-col gap-6">
        <Breadcrumb>
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
            <BreadcrumbItem className="text-xs">Anime</BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink className="text-xs" href={`/anime/${slug}`}>
                {anime?.title}
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-xs">
                <p>Episode {episodeNow}</p>
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="bg-card w-full aspect-video border border-border rounded-lg">
          <div className="w-full">
            <VideoPlayer
              subtitles={
                streamData?.tracks
                  ?.filter((t) => t.kind === "captions")
                  .map((t) => ({
                    label: t.label || "Unknown",
                    file: t.file,
                  })) || []
              }
              src={streamData?.link?.file || ""}
              animeId={anime?.id}
              episodeId={episode_id}
              episodeNumber={episodeNow}
              title={anime?.title}
              image={anime?.poster}
              initialProgress={initialProgress}
            />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-foreground border-b-2 mt-6 pb-4 text-xs font-semibold">
            Episode List:
          </p>
          <div className="flex flex-wrap gap-4">
            {episodes?.map((ep, index) => (
              <Link
                key={index}
                href={`/anime/${slug}/watch?ep=${index + 1}`}
                className={`${
                  index + 1 == episodeNow
                    ? (index + 1) % 2 !== 0
                      ? "bg-border/40 border border-primary text-primary"
                      : "bg-border border border-accent text-accent-foreground"
                    : ""
                } text-center rounded border border-border hover:border-primary hover:text-primary  md:py-4 py-2 md:px-4 px-1 md:w-24 w-16 md:text-base text-xs`}
              >
                <p className="font-medium">{index + 1}</p>
              </Link>
            ))}
          </div>
        </div>
        <div className="md:flex hidden bg-card/10 backdrop-blur-sm border border-primary rounded-lg justify-between">
          <div className="flex gap-8">
            <Image
              priority
              src={anime?.poster || ""}
              width={480}
              height={720}
              className="object-cover w-1/4 aspect-[1/1.3] rounded-tl-lg rounded-bl-lg shadow-lg"
              alt="cover"
            />
            <div className="flex flex-col gap-2 my-4 mr-4">
              <H3 text={anime?.title || ""} />
              <div className="text-xs flex gap-6 mb-2 items-center">
                <p className="font-semibold px-2 py-1 bg-accent text-accent-foreground rounded-sm">
                  {anime?.type}
                </p>
                <p className="flex items-center gap-2 font-medium">
                  <Clock className="w-5 h-5" /> {anime?.duration}
                </p>
                <p className="flex items-center gap-2 font-medium">
                  {anime?.status}
                </p>
              </div>
              <div className="max-w-lg max-h-24 overflow-y-auto line-clamp-6 leading-relaxed text-xs">
                {anime?.synopsis}
              </div>
            </div>
          </div>
          <div className="flex md:flex-col h-full rounded-tr-lg justify-center rounded-br-lg w-1/3 bg-white/10 flex-row gap-6">
            <div className="flex flex-col gap-4 p-4">
              <p className="text-xs">Aired: {anime?.aired?.from}</p>
              <p className="text-xs">Status: {anime?.status}</p>
              <p className="text-xs">Duration: {anime?.duration}</p>
              <p className="text-xs">Rating: {anime?.MAL_score}</p>
              {/* <div className="flex flex-wrap gap-4 items-center">
                <p className="mb-2 text-xs">Genre:</p>
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
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
