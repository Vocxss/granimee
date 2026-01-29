import type { NextConfig } from "next";

// const securityHeaders = [
//   {
//     key: 'X-Content-Type-Options',
//     value: 'nosniff'
//   },
//   {
//     key: 'X-Frame-Options',
//     value: 'DENY'
//   },
//   {
//     key: 'X-XSS-Protection',
//     value: '1; mode=block'
//   },
//   {
//     key: 'Strict-Transport-Security',
//     value: 'max-age=63072000; includeSubDomains; preload'
//   },
//   {
//     key: 'Content-Security-Policy',
//     value: "default-src 'self'" // ini bisa dikustom sesuai kebutuhan
//   },
//   {
//     key: 'Referrer-Policy',
//     value: 'no-referrer'
//   }
// ]

// module.exports = {
//   async headers() {
//     return [
//       {
//         source: '/(.*)', // apply ke semua route
//         headers: securityHeaders
//       }
//     ]
//   }
// }

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lqsqshlqlaojjsaezqtw.supabase.co",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.myanimelist.net",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.noitatnemucod.net",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "s4.anilist.co",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
