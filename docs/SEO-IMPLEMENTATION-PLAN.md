# SEO Implementation Plan — ASBAE Tech

## Production domain

**Canonical site URL:** `https://www.asbaetech.in`

Set in deployment (Vercel / hosting):

```bash
NEXT_PUBLIC_SITE_URL=https://www.asbaetech.in
```

Optional — Google Search Console HTML tag verification:

```bash
GOOGLE_SITE_VERIFICATION=your-verification-code-from-search-console
```

Redirect other hosts (`asbaetech.com`, non-www) to `https://www.asbaetech.in` in DNS/hosting so Google and WhatsApp use one canonical URL.

---

## Current implementation

| Area | Status | Notes |
|------|--------|-------|
| Root `app/layout.tsx` | Complete | `metadataBase`, title, OG/Twitter, JSON-LD Organization + WebSite |
| `lib/seo.ts` | Complete | `SITE_URL`, `createPageMetadata()`, `getDefaultShareImages()`, robots index |
| `public/og-image.png` | Complete | 1200×630 static share image (WhatsApp-friendly); regenerated via `npm run generate:og` |
| Dynamic `opengraph-image` routes | Removed | Static `og-image.png` used in metadata (better WhatsApp compatibility) |
| `app/robots.ts` | Complete | Allows `/`, sitemap → `{SITE_URL}/sitemap.xml` |
| `app/sitemap.ts` | Complete | `/`, `/about`, `/services`, `/contact`, `/statements-and-registrations` |
| Home SSR | Complete | Below-fold sections lazy-load **with** SSR (no `ssr: false`) |

---

## Share preview image (WhatsApp, iMessage, Slack)

- **Primary:** `https://www.asbaetech.in/og-image.png` (static, set in metadata)
- **Dimensions:** 1200×630
- **Design:** Navy gradient, **white rounded plate** behind black logo, headline + tagline
- **Regenerate:** `npm run generate:og` (also runs before `npm run build`)

### After deploy — refresh WhatsApp cache

1. Open [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
2. Enter `https://www.asbaetech.in` → **Debug** → **Scrape Again**
3. Paste the URL in a **new** WhatsApp chat (previews are cached per URL)

---

## Google Search indexing (required — not automatic)

Code alone does not list your site on Google. You must:

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add property **`https://www.asbaetech.in`**
3. Verify ownership (HTML meta via `GOOGLE_SITE_VERIFICATION`, or DNS)
4. Submit sitemap: **`https://www.asbaetech.in/sitemap.xml`**
5. **URL Inspection** → Request indexing for `/`, `/about`, `/services`, `/contact`

Indexing often takes **days to weeks**.

---

## Testing checklist

1. **View source** on production home — confirm:
   - `<link rel="canonical" href="https://www.asbaetech.in" />`
   - `og:image` → `https://www.asbaetech.in/og-image.png`
   - `og:title`, `og:description` present
2. **`https://www.asbaetech.in/robots.txt`** — sitemap URL uses `.in` domain
3. **`https://www.asbaetech.in/sitemap.xml`** — all public routes listed
4. [opengraph.xyz](https://www.opengraph.xyz/) — paste production URL
5. Facebook Sharing Debugger — scrape again after changes

---

## Routes metadata

| Route | Metadata source |
|-------|-----------------|
| `/` | `rootMetadata` in `app/layout.tsx` |
| `/about` | `app/about/layout.tsx` |
| `/contact` | `app/contact/layout.tsx` |
| `/services` | `app/services/layout.tsx` |
| `/statements-and-registrations` | `app/statements-and-registrations/layout.tsx` |
| `/legal/*` | Per-route layouts, `noIndex: true` |
