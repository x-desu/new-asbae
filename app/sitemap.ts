import type { MetadataRoute } from "next"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://asbaetech.com"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const routes = [
    "",
    "/about",
    "/legal/privacy",
    "/legal/terms",
    "/legal/cookies",
  ]

  return routes.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.6,
  }))
}
