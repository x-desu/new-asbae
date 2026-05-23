# SEO Implementation Plan — ASBAE Tech

## Current state audit (pre-implementation)

| Area | Status | Notes |
|------|--------|-------|
| Root `app/layout.tsx` | Partial | Has `metadataBase`, title template, OG/Twitter, JSON-LD. OG `images` pointed at `/images/asbae-logo.png` with incorrect 1200×630 dimensions (logo is not OG-sized). |
| `app/robots.ts` | Present | Uses `NEXT_PUBLIC_SITE_URL` or `https://asbaetech.com` |
| `app/sitemap.ts` | Partial | Missing `/contact`, `/services`, `/statements-and-registrations` |
| `app/icon.png` | Present | Static favicon (generated via `scripts/generate-favicons.mjs`) |
| `app/opengraph-image.*` | Missing | No dedicated share preview image |
| Per-route metadata | Mixed | `about`, `statements-and-registrations` have layout metadata; `contact`, `services` are client-only pages with none; legal layout has robots noindex only |
| `app/about/metadata.ts` | Orphan | Stale copy (asbae.com, wrong branding); **not imported** — superseded by `app/about/layout.tsx` |
| Domain | `https://asbaetech.com` | From `NEXT_PUBLIC_SITE_URL` env or default in layout/robots/sitemap |

### Routes inventory

| Route | Page type | Metadata before |
|-------|-----------|-----------------|
| `/` | `app/page.tsx` (client) | Root defaults only |
| `/about` | client + `about/layout.tsx` | Title, description, partial OG/Twitter |
| `/contact` | client | None |
| `/services` | client | None |
| `/statements-and-registrations` | `layout.tsx` | Title, description, partial OG/Twitter |
| `/legal/privacy` | client | Legal layout: noindex, generic title template |
| `/legal/terms` | client | Same |
| `/legal/cookies` | client | Same |

---

## Metadata strategy

### Root defaults (`app/layout.tsx`)

- **`metadataBase`**: `new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://asbaetech.com")`
- **Title template**: `%s | ASBAE` with default aligned to hero copy
- **Description**: DaaS + UGS / enterprise IT positioning (matches hero and contact page tone)
- **Open Graph / Twitter**: `summary_large_image`; images supplied by App Router `opengraph-image.tsx` / `twitter-image.tsx` (not the square logo file)
- **JSON-LD**: Keep existing Organization + WebSite scripts

### Per-route overrides

Use `export const metadata` in route `layout.tsx` files (client pages cannot export metadata). Shared helper: `lib/seo.ts` → `createPageMetadata({ title, description, path, noIndex? })` for consistent `alternates.canonical`, `openGraph`, and `twitter`.

Legal pages: `noIndex: true` (already intended via legal layout).

---

## OG image approach

**Chosen: dynamic `app/opengraph-image.tsx` + `app/twitter-image.tsx`**

- Reuses pattern from `app/icon.tsx` (`ImageResponse`, logo loaded from `public/images/asbae-logo.png`)
- Shared generator in `lib/og-image.tsx` for one source of truth
- **Dimensions**: 1200×630 (Facebook, LinkedIn, Slack, Discord, iMessage, WhatsApp)
- **Design**: Navy gradient (`#0a1628` → `#1e3a5f`), ASBAE logo, headline + tagline readable at thumbnail size
- **Absolute URLs**: Resolved via `metadataBase` + Next-generated `/opengraph-image` route

Static `public/og/*.png` was considered but dynamic generation avoids maintaining duplicate assets and keeps branding in sync.

Per-route OG images (e.g. `app/about/opengraph-image.tsx`) are **optional future enhancement**; route-specific **title/description** in metadata is sufficient for rich previews.

---

## Twitter card

- **Type**: `summary_large_image`
- **Site / creator**: `@asbae` (matches JSON-LD `sameAs`)
- Image: same as OG via `twitter-image.tsx`

---

## Implementation checklist

- [x] `docs/SEO-IMPLEMENTATION-PLAN.md` (this document)
- [x] `lib/seo.ts` — site URL, helpers, `createPageMetadata`
- [x] `lib/og-image.tsx` — shared OG/Twitter image JSX
- [x] `app/opengraph-image.tsx`, `app/twitter-image.tsx`
- [x] Refactor `app/layout.tsx` to use `lib/seo.ts`
- [x] `app/contact/layout.tsx`, `app/services/layout.tsx`
- [x] Enhance `about`, `statements-and-registrations`, `legal/*` metadata
- [x] Update `app/sitemap.ts` with all public routes

---

## Testing share previews

1. **Local**: Run `npm run dev`, open route, view page source — confirm `<meta property="og:*">` and `twitter:*` tags; `og:image` should reference `/opengraph-image` (absolute with `metadataBase`).
2. **Production build**: `npm run build && npm run start` — OG image routes require build for full validation.
3. **External validators** (use production URL `https://asbaetech.com` or deployed preview):
   - [opengraph.xyz](https://www.opengraph.xyz/)
   - [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
   - [Twitter Card Validator](https://cards-dev.twitter.com/validator) (X may require login)
4. **Messengers**: Paste URL in iMessage, WhatsApp, Slack, Discord — expect large image, title, and description.

### Environment

Set in deployment:

```bash
NEXT_PUBLIC_SITE_URL=https://asbaetech.com
```

---

## Copy reference (descriptions)

Aligned with on-site hero and service positioning:

- **Home**: Intelligent IT Solutions — DaaS & UGS, enterprise IT ecosystem
- **About**: Mission, values, AI-driven / reliable software and IT services
- **Services**: DaaS, UGS, documentation, governance, enterprise platforms
- **Contact**: Consultation, DaaS, governance-ready docs, tender alignment
- **Statements**: Capability statements and technical documentation for registrations
- **Legal**: Short policy-specific descriptions, noindex
