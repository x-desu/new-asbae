# Home page alignment plan

**Baseline:** `origin/main` (HEAD `f14384b` on local branch) — home and hero as shipped before agent-added marketing sections.

**Date:** 2026-05-23

## Git vs current (before this fix)

| Area | `origin/main` | Current (pre-fix) |
|------|---------------|-------------------|
| `app/page.tsx` sections | Header → Hero → HomeServicesOverview → Industries → Mission → Values → Approach → Contact → Footer | Same + **Services**, **Products**, **Reviews** inserted after Hero |
| `components/hero.tsx` | Unified mobile/desktop layouts; separate mobile 3D block + desktop grid; no `VStack` split grid | Split **2-column grid** with eyebrow + inline DaaS/UGS cards; radial overlay |
| DarkVeil | **Home only** — fixed layer in `app/page.tsx` | Home + duplicate stacks on about, contact, services, statements |
| `app/layout.tsx` | Inline metadata | `lib/seo.ts` `rootMetadata` (keep) |

## Sections to remove from home

These were re-added via dynamic imports on `app/page.tsx`; titles live in the components:

1. **"Comprehensive IT Solutions"** — `components/services.tsx` (`<Services />`)
2. **"Ready-to-Use Solutions"** — `components/products.tsx` (`<Products />`)
3. **"Trusted by Growing Businesses"** — `components/reviews.tsx` (`<Reviews />`)

**Keep** `HomeServicesOverview` (documentation-focused home section; not the Services component above).

## Sections to restore from git

- `app/page.tsx` section order without Services/Products/Reviews
- `components/hero.tsx` from `origin/main` (unified hero, no split marketing grid)

## Features to preserve (do not revert)

- Footer Lucknow office address
- `/statements-and-registrations` + PDFs in `public/documents/`
- SEO: `lib/seo.ts`, route metadata, OG/twitter images
- Nav **Statements** link
- `components/asbae-logo.tsx` + `public/images/asbae-logo.png`
- Footer column layout improvements
- Production fixes: `app/api/chat`, `app/loading.tsx`, `app/error.tsx`, tsc-enabled build
- Home hash deep-link + `gsapAnimations.refreshAfterLazySections()` for lazy sections

## Background strategy

**Problem:** Multiple pages each mount their own fixed `DarkVeil` + `bg-black/40` overlay → WebGL re-init, z-index fights, non-seamless feel.

**Solution:** Single client wrapper `components/site-background.tsx` in `app/layout.tsx` (fixed `z-0` veil, `z-[1]` overlay). Remove per-page DarkVeil from home, about, contact, services, statements. Page content uses `relative z-[2]` (or existing stacking) so text stays readable.

Git had DarkVeil **only on home**; global layout is an improvement that matches the user request for one seamless site background without changing visual params (`hueShift={28}`, etc.).

## Implementation checklist

- [x] Restore `components/hero.tsx` from `origin/main`
- [x] Restore `app/page.tsx` structure; drop Services/Products/Reviews imports
- [x] Add `SiteBackground` to root layout
- [x] Strip duplicate DarkVeil from marketing pages
- [x] Keep GSAP scoped contexts + lazy refresh on home
- [x] `npm run build` passes
