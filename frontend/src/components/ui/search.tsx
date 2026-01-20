"use client";
import { useDebounce } from "@/hooks/use-debounce";
import { useIsMobile } from "@/hooks/use-mobile";
import { BackendIP, SearchedAnime } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import { Search, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "./button";
import { Input } from "./input";
import { ScrollArea } from "./scroll-area";

export const SearchTrigger = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  function SearchBar() {
    const [query, setQuery] = useState("");
    const debouncedQuery = useDebounce(query, 1500);

    const clearSearch = () => {
      setQuery("");
    };

    const { data, isError, isLoading } = useQuery<SearchedAnime[]>({
      queryKey: ["search", debouncedQuery],
      queryFn: async () => {
        const response = await fetch(
          `${BackendIP}/suggestion?keyword=${debouncedQuery}`,
          {
            method: "GET",
          },
        );
        const data = await response.json();
        return data.data;
      },
      enabled: !!debouncedQuery,
      refetchOnWindowFocus: false,
    });

    return (
      <div className={`relative w-full`}>
        <Button
          variant={"outline"}
          size={"sm"}
          className="mb-2"
          onClick={() => setIsOpen(false)}
        >
          <X className="w-4 h-4" />
        </Button>
        <form
          className="relative flex items-center w-full"
          onSubmit={(e) => e.preventDefault()}
        >
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            type="search"
            placeholder="Search anime..."
            className="w-full pl-9 pr-10 py-4 bg-background border-border focus:border-primary/50 transition-colors"
          />
          {query && (
            <button
              onClick={clearSearch}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:bg-accent rounded-full transition-colors"
            >
              <X className="w-3 h-3 text-muted-foreground" />
            </button>
          )}
        </form>

        {/* Results Dropdown */}
        {(isLoading || isError || (data && data.length > 0)) && (
          <div className="absolute top-full left-0 right-0 mt-2 z-50 bg-popover border border-border rounded-md shadow-lg ring-1 ring-black/5 overflow-hidden animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95">
            {isLoading && (
              <div className="p-4 flex items-center justify-center text-muted-foreground">
                <div className="h-5 w-5 animate-spin rounded-full border-2 border-primary border-t-transparent" />
              </div>
            )}

            {isError && (
              <div className="p-4 text-center text-sm text-muted-foreground">
                No results found.
              </div>
            )}

            {!isLoading && !isError && data && data.length > 0 && (
              <ScrollArea className="max-h-[60vh] overflow-y-auto">
                <div className="p-2 space-y-1">
                  {data.map((anime) => (
                    <Link
                      key={anime.id}
                      href={`/anime/${anime.id}`}
                      onClick={() => {
                        setIsOpen(false);
                        if (isMobile) {
                          // Close mobile search if parent controls it,
                          // but currently SearchBar doesn't have a close prop.
                          // Assuming parent component handles unmounting or we just navigate.
                        }
                        setQuery("");
                      }}
                      className="flex items-start gap-3 p-2 rounded-md hover:bg-accent/50 transition-colors group"
                    >
                      <div className="relative shrink-0 rounded-sm overflow-hidden w-12 aspect-[3/4]">
                        <Image
                          src={anime.poster || ""}
                          fill
                          className="object-cover transition-transform group-hover:scale-105"
                          alt={anime.title}
                          sizes="48px"
                        />
                      </div>
                      <div className="flex-1 min-w-0 flex flex-col justify-center h-full py-0.5">
                        <p className="text-sm font-medium leading-none text-foreground truncate group-hover:text-primary transition-colors">
                          {anime.title}
                        </p>
                        <div className="flex items-center gap-2 mt-1.5 text-xs text-muted-foreground">
                          <span className="truncate">
                            {anime.alternativeTitle || "Anime"}
                          </span>
                          {anime.type && (
                            <>
                              <span className="w-1 h-1 rounded-full bg-border shrink-0" />
                              <span className="uppercase text-[10px] bg-accent px-1 rounded-sm">
                                {anime.type}
                              </span>
                            </>
                          )}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </ScrollArea>
            )}
          </div>
        )}
      </div>
    );
  }

  return isOpen ? (
    <div className="fixed top-0 left-0 w-dvw h-dvh z-50 flex items-center justify-center">
      <div
        className="absolute w-full h-full bg-black/70 backdrop-blur-lg"
        onClick={() => setIsOpen(false)}
      ></div>
      <div className="relative md:w-1/3 w-2/3 z-10">
        <SearchBar />
      </div>
    </div>
  ) : isMobile ? (
    <Button variant={"outline"} size={"icon"} onClick={() => setIsOpen(true)}>
      <Search className="w-4 h-4" />
    </Button>
  ) : (
    <Button
      variant={"outline"}
      onClick={() => setIsOpen(true)}
      className="w-full px-8 py-4 flex items-center justify-start cursor-default"
    >
      <Search className="w-4 h-4" />
      <p className="ml-2 text-xs">Search anime...</p>
    </Button>
  );
};
