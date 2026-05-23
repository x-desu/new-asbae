# Production readiness checklist

## Build

- `npm run build` — TypeScript validation enabled (`typescript.ignoreBuildErrors: false`)
- `npx tsc --noEmit` — optional local check

## Home page sections

- Hero, documentation overview (`HomeServicesOverview`), industries, mission/vision, values, approach, contact (`#contact`)

## Background (DarkVeil)

- Single `SiteBackground` in `app/layout.tsx` (`z-0` veil, `z-[1]` overlay); page content at `z-[2]`

## Deploy

- Set `NEXT_PUBLIC_SITE_URL` (or `SITE_URL` in `lib/seo.ts`) to the production domain
- API routes: `RESEND_API_KEY`, chat provider keys as configured in `app/api/`

## Removed from repo (build hygiene)

- `app/about/page.backup.tsx`, `app/about/page-updated.tsx` (invalid TS, unused)
