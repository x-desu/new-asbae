# SEO audit — 16 November 2026

Checked the public deployment and local updated pages: homepage, About, Services, Contact, Statements & Registrations, and three legal pages.

## Corrections

- Removed the incorrect X account from the footer, Organization sameAs, and social card attribution. Twitter card format remains for link previews without an account claim.
- Allowed Next.js assets in robots.txt so crawlers can render the site.
- Removed build-time sitemap lastmod timestamps; only genuine page updates should set them.
- Added noindex/nofollow to component previews; legal pages retain noindex/follow.
- Rendered Organization and WebSite JSON-LD in the initial HTML. Removed SearchAction for the nonexistent site search. Added known organization contact and address details.
- Normalized canonical base URLs and set Open Graph locale to en_IN.
- Updated homepage title and description to current services and legal company identity.
- Replaced social artwork with the current mountain design, current headline, services, company name, and domain. All routes use the versioned 1200×630 PNG /asbae-social-2026-11.png. The old /og-image.png also contains the updated design for existing consumers. Build generation produces both.

## Verification

Public content pages return HTTP 200, contain one h1, route-specific titles/descriptions, and canonical URLs. Checked local structured data parses as JSON; two schema blocks per route. Checked internal linked paths and favicon/share assets: no broken responses. The live apex redirects HTTP 308 to the www host. The live sitemap uses the expected www.asbaetech.in domain. TypeScript and production build pass.

## External follow-up

Search Console ownership, sitemap submission status, actual Google indexing, query rankings, and field Core Web Vitals require authenticated Search Console data and were not verified. No ranking or PageSpeed score is claimed. After deployment, inspect the homepage and sitemap in Search Console. Social platforms may retain cached cards for existing shared URLs; the new image filename helps refresh the artwork but cannot force every platform cache to expire.

References: https://developers.google.com/search/docs/fundamentals/get-started and https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap.
