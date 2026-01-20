import { NextRequest } from "next/server";

export const runtime = "nodejs";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const target = searchParams.get("url");

  if (!target) {
    return new Response("Missing url", { status: 400 });
  }

  // Forward headers penting
  const headers: HeadersInit = {
    "Accept": "*/*",
    "User-Agent": req.headers.get("user-agent") || "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
  };

  // 🔥 RANGE WAJIB
  const range = req.headers.get("range");
  if (range) {
    headers["Range"] = range;
  } else {
    headers["Range"] = "bytes=0-";
  }

  let upstream;
  try {
    upstream = await fetch(target, {
      headers,
    });
  } catch (err) {
    console.error("FETCH ERROR:", err);
    return new Response("Upstream fetch failed", { status: 502 });
  }

  if (!upstream.ok && upstream.status !== 206) {
    console.error("UPSTREAM STATUS:", upstream.status);
    return new Response("Upstream error", { status: upstream.status });
  }

  const contentType = upstream.headers.get("content-type") || "";

  // 🔹 Rewrite m3u8
  if (contentType.includes("mpegurl")) {
    const text = await upstream.text();
    const base = new URL(target);

    const rewritten = text
      .split("\n")
      .map((line) => {
        line = line.trim();

        if (!line) return line;

        // EXT-X-KEY
        if (line.startsWith("#") && line.includes('URI="')) {
          return line.replace(/URI="([^"]+)"/, (_, uri) => {
            const abs = new URL(uri, base).toString();
            return `URI="/api/proxy/stream?url=${encodeURIComponent(abs)}"`;
          });
        }

        // komentar biasa
        if (line.startsWith("#")) return line;

        // segment / nested playlist
        const abs = new URL(line, base).toString();
        return `/api/proxy/stream?url=${encodeURIComponent(abs)}`;
      })
      .join("\n");

    return new Response(rewritten, {
      headers: {
        "Content-Type": "application/vnd.apple.mpegurl",
        "Access-Control-Allow-Origin": "*",
      },
    });
  }

  // 🔹 SEGMENT STREAM
  return new Response(upstream.body, {
    status: upstream.status,
    headers: {
      "Content-Type": contentType,
      "Accept-Ranges": "bytes",
      "Access-Control-Allow-Origin": "*",
      "Content-Range": upstream.headers.get("content-range") || "",
    },
  });
}
