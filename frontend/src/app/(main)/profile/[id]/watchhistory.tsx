import { getAllWatchHistory } from "@/app/actions/watchHistory";
import { Card } from "@/components/ui/card";
import CircularProgress from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";


import Image from "next/image";
import Link from "next/link";
import { FaChevronCircleRight } from "react-icons/fa";

export const WatchHistory = async () => {
  const history = await getAllWatchHistory();
  return (
    <div className="flex bg-white/5 backdrop-blur-xl rounded-lg border border-white/20 p-8 w-full flex-col gap-6">
      <div className="border-b-2 border-border py-4">
        <p className="md:text-2xl text-lg font-bold">Watch History</p>
      </div>

      <div className="flex flex-col gap-4 rounded-lg">
        {history.length === 0 ? (
          <p className="text-sm text-muted-foreground">
            You haven't watched any anime yet.
          </p>
        ) : (
          <ScrollArea className="w-full max-h-[60vh] overflow-y-auto rounded-lg bg-background/30 border border-border">
            <div className="flex flex-col gap-8 rounded-lg">
              {history.map((item: any, index) => (
                <Link
                  key={item.id}
                  href={`/anime/${item.anime_id}/watch?ep=${item.episode_number}`}
                  className={`w-full h-[200px] flex justify-between px-6 relative group-hover:-scale-y-110 group-hover:-translate-y-1 items-center rounded-md hover:bg-accent/50 transition-colors group`}
                >
                  <div className="flex items-center gap-6">
                    <Image
                      loading="eager"
                      width={720}
                      height={1080}
                      src={item.image}
                      alt={item.title || "Episode"}
                      className="object-cover rounded-md max-w-48 aspect-[1/0.8] animate-in fade-in-0 zoom-in-95 dat group-hover:zoom-in-110 transition-transform"
                    />
                    <div className="flex flex-col gap-2">
                      <p className="text-base font-medium truncate">
                        {item.title || `Episode ${item.episode_number}`}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Episode {item.episode_number}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {Math.floor(item.progress / 60)}m /{" "}
                        {Math.floor(item.duration / 60)}m
                      </p>
                    </div>
                  </div>
              <CircularProgress value={Math.floor((item.progress / item.duration) * 100)} />

                </Link>
              ))}
            </div>
          </ScrollArea>
        )}
      </div>
    </div>
  );
};

export const LatestWatched = async () => {
  const history = await getAllWatchHistory();
  const latest = history.sort((a: any, b: any) => b.updated_at - a.updated_at)[0];
  if (!latest) {
    return;
  }
  return (
    <div className="relative w-[95%] bg-white/5 backdrop-blur-xl rounded-lg border border-white/20 group overflow-hidden">
                <Link
                  href={`/anime/${latest.anime_id}/watch?ep=${latest.episode_number}`}
                  className={`w-full h-full flex justify-between pr-6 relative group-hover:scale-105 items-center rounded-md hover:bg-accent/10 transition-transform group`}
                >
                  <div className="flex items-center gap-6">
                    <Image
                      loading="eager"
                      width={720}
                      height={1080}
                      src={latest.image}
                      alt={latest.title || "Episode"}
                      className="object-cover rounded-md max-w-48 aspect-[1/0.8] animate-in fade-in-0 zoom-in-95 dat group-hover:zoom-in-110 transition-transform"
                    />
                    <div className="flex flex-col gap-2">
                      <p className="text-xs text-muted-foreground">Continue Watch</p>
                      <p className="text-base font-semibold truncate">
                        {latest.title || `Episode ${latest.episode_number}`}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Episode {latest.episode_number}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {Math.floor(latest.progress / 60)}m /{" "}
                        {Math.floor(latest.duration / 60)}m
                      </p>
                    </div>
                  </div>
                  <FaChevronCircleRight/>

                </Link>
    </div>
  )
}
