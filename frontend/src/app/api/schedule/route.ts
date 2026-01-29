import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

// Query asli dari Anda
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
    // 1. Tentukan Rentang Waktu (Misal: 7 hari ke depan dari sekarang)
    const now = new Date();
    // Set ke jam 00:00 hari ini agar rapi
    now.setHours(0, 0, 0, 0);

    const weekStart = Math.floor(now.getTime() / 1000); // Unix timestamp (seconds)
    const weekEnd = weekStart + 7 * 24 * 60 * 60; // +7 Hari

    // 2. Request ke AniList API
    const response = await axios.post(
      "https://graphql.anilist.co",
      {
        query: ANILIST_QUERY,
        variables: {
          weekStart: weekStart,
          weekEnd: weekEnd,
          page: page, // Anda bisa membuat logika pagination jika datanya sangat banyak
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

    // 3. Transformasi & Grouping Data berdasarkan Hari
    // Format AniList: Linear List (Array lurus) -> Kita ubah jadi Grouped by Day
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

// --- Helper Functions ---

// --- Helper Functions ---

function groupSchedulesByDay(schedules: any[]) {
  const daysMap = new Map<string, any[]>();

  // PENTING: Tentukan Timezone target (Misal: WIB 'Asia/Jakarta' atau JST 'Asia/Tokyo')
  const TARGET_TIMEZONE = "Asia/Tokyo";

  // Format Hari
  const dayFormatter = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    timeZone: TARGET_TIMEZONE, // <--- INI KUNCINYA
  });

  // Format Jam
  const timeFormatter = new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
    timeZone: TARGET_TIMEZONE, // <--- INI JUGA PENTING
  });

  schedules.forEach((item: any) => {
    // Konversi Unix Timestamp ke JS Date
    const date = new Date(item.airingAt * 1000);

    // Format nama hari berdasarkan Timezone yang dipilih
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
      // Jam tayang juga akan menyesuaikan timezone
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
