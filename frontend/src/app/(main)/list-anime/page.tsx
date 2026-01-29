"use client";
import { List } from "@/components/animelist";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { H3 } from "@/components/ui/typography";
import { useAnime } from "@/hooks/use-anime";
import { AnimeList } from "@/lib/utils";
import { Trash2 } from "lucide-react";
import { useState } from "react";

export default function Page() {
  const [letter, setLetter] = useState("All");
  const [page, setPage] = useState(1);
  const { data, isLoading } = useAnime(page, letter.toLowerCase());
  const totalPages = data?.pageInfo?.totalPages;
  const anime: AnimeList[] = data?.response;

  console.log(anime);

  const handleLetter = (item: string) => {
    setPage(1);
    setLetter(item);
  };

  const list = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  list.splice(0, 0, "All", "0-9");
  return (
    <div className="w-full flex flex-col py-16 mx-auto md:px-12 px-4 md:gap-12 gap-8 overflow-x-hidden bg-black/20 backdrop-blur-sm border border-border/20 rounded-lg">
      <H3 text={"List Anime"}/>
      <div className="flex gap-8 items-center w-full">
        <div className="flex flex-col gap-2">
          <p className="text-xs font-semibold">Letter</p>
          <Select value={letter} onValueChange={(value) => handleLetter(value)}>
            <SelectTrigger className="w-96">
              <SelectValue placeholder="Select Letter" />
            </SelectTrigger>
            <SelectContent className="w-96">
              {list.map((char) => (
                <SelectItem key={char} value={char}>
                  {char}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-xs font-semibold">Page</p>
          <Select
            value={page.toString()}
            onValueChange={(value) => setPage(Number(value))}
          >
            <SelectTrigger className="w-96">
              <SelectValue placeholder="Select Page" />
            </SelectTrigger>
            <SelectContent>
              {Array.from({ length: totalPages }).map((_, index) => (
                <SelectItem key={index} value={String(index + 1)}>
                  {index + 1}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-xs">‎ </p>
          <div className="flex gap-2">
            <button
              onClick={() => {
                setLetter("All");
                setPage(1);
              }}
              className="h-9 py-1 px-2 border border-border w-32 bg-popover
              hover:bg-popover/80 transition-colors rounded-md flex justify-center   items-center gap-2 cursor-pointer hover:text-destructive"
            >
              <Trash2 className="size-4" />
              <p className="text-sm">Reset</p>
            </button>
          </div>
        </div>
      </div>

      <List anime={anime} isLoading={isLoading} />
    </div>
  );
}
