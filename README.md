# 🎬 Granime

> **The best anime streaming platform** — built with love for anime fans, by anime fans. 💜

Granime is a full-stack anime streaming web app that lets you browse, discover, and watch your favorite anime — all in one beautiful, modern interface. Whether you're catching up on the latest seasonal drops or diving into a classic series, Granime has you covered!

---

## ✨ Features

- 🔍 **Browse & Search Anime** — Explore a rich catalog with cover art, ratings, synopses, and genre tags.
- 📺 **Stream Episodes** — Watch anime with a smooth HLS video player, complete with quality selection and subtitle support.
- 📅 **Anime Schedule** — Stay up to date with airing schedules so you never miss a new episode.
- 🕓 **Watch History** — Automatically tracks what you've watched and where you left off — resume anytime!
- 👤 **User Profiles** — Sign up, log in (with OAuth support), and manage your profile.
- 🌙 **Stunning Dark UI** — A gorgeous dark theme with glassmorphism effects, smooth animations, and a premium feel.

---

## 🛠️ Tech Stack

### Frontend

| Technology                                                                        | Purpose                                    |
| --------------------------------------------------------------------------------- | ------------------------------------------ |
| [Next.js 15](https://nextjs.org/) (+ Turbopack)                                   | React framework with server-side rendering |
| [React 19](https://react.dev/)                                                    | UI library                                 |
| [TailwindCSS v4](https://tailwindcss.com/)                                        | Utility-first CSS framework                |
| [Radix UI](https://www.radix-ui.com/) (shadcn/ui)                                 | Accessible, unstyled UI primitives         |
| [TanStack React Query](https://tanstack.com/query)                                | Data fetching & caching                    |
| [Motion](https://motion.dev/)                                                     | Animations & transitions                   |
| [HLS.js](https://github.com/video-dev/hls.js/) + [Video.js](https://videojs.com/) | Adaptive video streaming                   |
| [Prisma](https://www.prisma.io/)                                                  | Type-safe database ORM                     |
| [Supabase](https://supabase.com/)                                                 | Auth & PostgreSQL database                 |
| [Zod](https://zod.dev/) + [React Hook Form](https://react-hook-form.com/)         | Form validation                            |

### Backend

| Technology                                                                         | Purpose                               |
| ---------------------------------------------------------------------------------- | ------------------------------------- |
| [Hono](https://hono.dev/)                                                          | Lightweight, ultra-fast web framework |
| [Bun](https://bun.sh/)                                                             | JavaScript runtime & package manager  |
| [Cheerio](https://cheerio.js.org/)                                                 | HTML parsing & web scraping           |
| [Upstash Redis](https://upstash.com/)                                              | Serverless caching layer              |
| [Zod OpenAPI](https://github.com/honojs/middleware/tree/main/packages/zod-openapi) | API documentation & validation        |

---

## 📁 Project Structure

```
granimee/
├── frontend/          # Next.js web application
│   ├── src/
│   │   ├── app/       # App router pages & API routes
│   │   ├── components/# Reusable UI components
│   │   ├── lib/       # Utilities, hooks, and providers
│   │   └── generated/ # Prisma generated client
│   ├── prisma/        # Database schema & migrations
│   └── public/        # Static assets
│
└── backend/           # Hono API server
    └── src/
        ├── modules/   # Feature modules (scraping logic)
        ├── routes/    # API route definitions
        ├── services/  # Business logic
        ├── utils/     # Helper utilities
        └── config/    # App configuration
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have these installed:

- [Bun](https://bun.sh/) (v1.0+)
- [Node.js](https://nodejs.org/) (v18+) — for Next.js compatibility
- A [Supabase](https://supabase.com/) project (for auth & database)
- An [Upstash Redis](https://upstash.com/) instance (for backend caching)

### 1. Clone the repo

```bash
git clone https://github.com/your-username/granimee.git
cd granimee
```

### 2. Set up the Backend

```bash
cd backend
bun install
```

Create a `.env` file and configure your environment variables, then start the dev server:

```bash
bun run dev
```

The backend API will be running at `http://localhost:3030`. Visit `http://localhost:3030/doc` for the Swagger API docs! 📖

### 3. Set up the Frontend

```bash
cd frontend
bun install
```

Copy the example env file and fill in your credentials:

```bash
cp .env.example .env
```

Then configure your `.env`:

```env
BACKEND_IP=http://localhost:3030

DATABASE_URL=your_supabase_pooled_connection_string
DIRECT_URL=your_supabase_direct_connection_string

NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

Generate the Prisma client and run migrations:

```bash
bunx prisma generate
bunx prisma migrate dev
```

Start the development server:

```bash
bun run dev
```

The app will be live at `http://localhost:3000` 🎉

---

## 📡 API Documentation

The backend comes with built-in Swagger/OpenAPI documentation. Once the backend is running, visit:

```
http://localhost:3030/doc
```

---

## 🧰 Useful Commands

| Command                   | Description                                |
| ------------------------- | ------------------------------------------ |
| `bun run dev`             | Start dev server (frontend or backend)     |
| `bun run build`           | Build the frontend for production          |
| `bun run start`           | Start production server                    |
| `bun run lint`            | Run ESLint                                 |
| `bunx prisma studio`      | Open Prisma Studio to browse your database |
| `bunx prisma migrate dev` | Run database migrations                    |

---

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests. Let's make Granime even better together! 💪

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/awesome-feature`
3. Commit your changes: `git commit -m 'Add awesome feature'`
4. Push to the branch: `git push origin feature/awesome-feature`
5. Open a Pull Request

---

## 📄 License

This project is private and not currently licensed for public distribution.

---

<p align="center">
  Made with 💜 and lots of anime binge-watching
</p>
