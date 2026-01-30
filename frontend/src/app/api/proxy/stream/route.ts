import { NextRequest } from "next/server";

export const runtime = "nodejs"; // ⬅️ Ganti ke Node.js runtime!

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const target = searchParams.get("url");
  if (!target) return new Response("Missing url", { status: 400 });

  const headers: HeadersInit = {
    Accept: "*/*",
    "User-Agent":
      req.headers.get("user-agent") ||
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    Referer: new URL(target).origin + "/",
  };

  const range = req.headers.get("range");
  if (range) headers["Range"] = range;

  let upstream: Response;
  try {
    upstream = await fetch(target, { headers });
  } catch (err) {
    console.error("FETCH ERROR:", err);
    return new Response("Upstream fetch failed", { status: 502 });
  }

  const contentType = upstream.headers.get("content-type") || "";

  // Handle .m3u8 manifest rewriting
  if (contentType.includes("mpegurl")) {
    const text = await upstream.text();
    const base = new URL(target);

    const rewritten = text
      .split("\n")
      .map((line) => {
        line = line.trim();
        if (!line) return line;

        if (line.startsWith("#") && line.includes('URI="')) {
          return line.replace(/URI="([^"]+)"/, (_, uri) => {
            const abs = new URL(uri, base).toString();
            return `URI="/api/proxy/stream?url=${encodeURIComponent(abs)}"`;
          });
        }

        if (line.startsWith("#")) return line;

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

// 🔹 SEGMENT STREAM (TS / MP4)
const passthroughHeaders = [
  "content-type",
  "content-length",
  "accept-ranges",
  "content-range",
  "cache-control",
  "etag",
  "last-modified",
];

const headersOut: Record<string, string> = {
  "Access-Control-Allow-Origin": "*",
};

for (const key of passthroughHeaders) {
  const value = upstream.headers.get(key);
  if (value) headersOut[key] = value;
}

// pastikan tidak reset cache setiap segmen
if (!headersOut["cache-control"]) {
  headersOut["cache-control"] = "public, max-age=3600, immutable";
}

return new Response(upstream.body, {
  status: upstream.status,
  headers: headersOut,
});

}
