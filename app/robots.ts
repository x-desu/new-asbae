import type { MetadataRoute } from "next"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://asbaetech.com"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/*",
          "/_next/*",
          "/private/*",
        ],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  }
}
