# Durgesh Kumar — Portfolio

Personal developer portfolio built with Next.js (App Router), TypeScript, and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Editing content

All portfolio content lives in `src/data/` — no component edits needed for text/link changes:

| File | Controls |
|---|---|
| `src/data/profile.ts` | Name, role, bio, email, resume path, social links |
| `src/data/skills.ts` | Skill groups and badges |
| `src/data/projects.ts` | Project cards |
| `src/data/experience.ts` | Work experience timeline |
| `src/data/education.ts` | Education card |
| `src/data/codingProfiles.ts` | GitHub / LeetCode / GeeksforGeeks / CodeChef links |
| `src/data/nav.ts` | Navbar links |

### Resume

Drop your resume PDF at `public/resume.pdf`. The download button reads its path from `profile.resumeUrl` in `src/data/profile.ts`, so changing that one value repoints every "Resume" button on the site.

### Deployment / SEO

Set `NEXT_PUBLIC_SITE_URL` in your deployment environment (e.g. Vercel project settings) to your production domain — it's used for canonical URLs, `sitemap.xml`, `robots.txt`, and Open Graph metadata.

## Stack

Next.js · React · TypeScript · Tailwind CSS v4 · Framer Motion · lucide-react · react-icons

## Deploy on Vercel

```bash
vercel
```

See the [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying) for other targets.
