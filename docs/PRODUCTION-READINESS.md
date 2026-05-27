# Production readiness checklist

## Build

- `npm run build` — TypeScript validation enabled (`typescript.ignoreBuildErrors: false`)
- `npx tsc --noEmit` — optional local check

## Home page sections

- Hero, documentation overview (`HomeServicesOverview`), industries, mission/vision, values, approach, contact (`#contact`)

## Background (DarkVeil)

- Single `SiteBackground` in `app/layout.tsx` (`z-0` veil, `z-[1]` overlay); page content at `z-[2]`

## Deploy

- Set `NEXT_PUBLIC_SITE_URL=https://www.asbaetech.in`
- Verify `asbaetech.in` in Resend before enabling contact-form email delivery
- Set `RESEND_API_KEY` in Vercel
- Set `RESEND_FROM="ASBAE <info@asbaetech.in>"` in Vercel
- Optional: set `CONTACT_TO_EMAIL=info@asbaetech.in` in Vercel
- API routes: chat provider keys as configured in `app/api/`

## Removed from repo (build hygiene)

- `app/about/page.backup.tsx`, `app/about/page-updated.tsx` (invalid TS, unused)
