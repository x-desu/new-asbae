import type { MetadataRoute } from "next"
import { absoluteUrl, SITE_URL } from "@/lib/seo"

const CANONICAL_HOST = "www.asbaetech.in"

/** Warn at build time if deploy env still points at the old .com domain. */
if (
  process.env.NEXT_PUBLIC_SITE_URL &&
  !process.env.NEXT_PUBLIC_SITE_URL.includes(CANONICAL_HOST)
) {
  console.warn(
    `[sitemap] NEXT_PUBLIC_SITE_URL should be https://${CANONICAL_HOST} (current: ${process.env.NEXT_PUBLIC_SITE_URL}). ` +
      "Google Search Console will report sitemap errors if URLs do not match your property.",
  )
}

type RouteEntry = {
  path: string
  priority: number
  changeFrequency: NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>
}

const publicRoutes: RouteEntry[] = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/about", priority: 0.8, changeFrequency: "monthly" },
  { path: "/services", priority: 0.9, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.8, changeFrequency: "monthly" },
  { path: "/statements-and-registrations", priority: 0.7, changeFrequency: "monthly" },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return publicRoutes.map(({ path, priority, changeFrequency }) => ({
    url: path === "/" ? SITE_URL.replace(/\/$/, "") : absoluteUrl(path),
    lastModified,
    changeFrequency,
    priority,
  }))
}
