import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

const ANILIST_QUERY = `
query (
    $weekStart: Int,
    $weekEnd: Int,
    $page: Int
) {
    Page(page: $page) {
        pageInfo {
            hasNextPage
            total
        }
        airingSchedules(
            airingAt_greater: $weekStart
            airingAt_lesser: $weekEnd
            sort: TIME
        ) {
            id
            episode
            airingAt
            media {
                id
                idMal
                title {
                    english
                    romaji
                }
                startDate {
                    year
                    month
                    day
                }
                endDate {
                    year
                    month
                    day
                }
                status
                season
                format
                genres
                duration
                popularity
                episodes
                coverImage {
                    extraLarge
                    color
                }
            }
        }
    }
}
`;

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const page = parseInt(searchParams.get("page") || "1");
    const now = new Date();
    now.setHours(0, 0, 0, 0);

    const weekStart = Math.floor(now.getTime() / 1000);
    const weekEnd = weekStart + 7 * 24 * 60 * 60;

    const response = await axios.post(
      "https://graphql.anilist.co",
      {
        query: ANILIST_QUERY,
        variables: {
          weekStart: weekStart,
          weekEnd: weekEnd,
          page: page,
        },
      },
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      },
    );

    const schedules = response.data.data.Page.airingSchedules;

    const groupedSchedule = groupSchedulesByDay(schedules);

    return NextResponse.json(
      {
        success: true,
        data: groupedSchedule,
        length: groupedSchedule.length,
      },
      { status: 200 },
    );
  } catch (error: any) {
    console.error("AniList API Error:", error.response?.data || error.message);
    return NextResponse.json(
      {
        success: false,
        error: error.message,
      },
      { status: 500 },
    );
  }
}

function groupSchedulesByDay(schedules: any[]) {
  const daysMap = new Map<string, any[]>();

  const TARGET_TIMEZONE = "Asia/Tokyo";
  const dayFormatter = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    timeZone: TARGET_TIMEZONE,
  });

  const timeFormatter = new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
    timeZone: TARGET_TIMEZONE,
  });

  schedules.forEach((item: any) => {
    const date = new Date(item.airingAt * 1000);

    const dayName = dayFormatter.format(date);

    const isAdultAnime = item.media.genres.includes("Hentai");
    if (isAdultAnime) {
      return;
    }

    const animeData = {
      id: item.media.id,
      title: item.media.title.english || item.media.title.romaji,
      episode: item.episode,
      color: item.media.coverImage.color,
      time: timeFormatter.format(date),
      image: item.media.coverImage.extraLarge || item.media.coverImage.large,
      genres: item.media.genres.slice(0, 3),
    };

    if (!daysMap.has(dayName)) {
      daysMap.set(dayName, []);
    }
    daysMap.get(dayName)?.push(animeData);
  });

  return Array.from(daysMap, ([day, animes]) => ({ day, animes }));
}
