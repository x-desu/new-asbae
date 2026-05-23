import type { Metadata } from "next"

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://asbaetech.com"
export const SITE_NAME = "ASBAE"
export const TWITTER_SITE = "@asbae"

export const DEFAULT_TITLE = "ASBAE — Intelligent IT Solutions"
export const DEFAULT_DESCRIPTION =
  "Documentation as a Service (DaaS) and Unified Governance Solutions for enterprise IT. Streamline operations, secure data, and deliver seamless digital services."

export function absoluteUrl(path: string = ""): string {
  const base = SITE_URL.replace(/\/$/, "")
  if (!path || path === "/") return base
  return `${base}${path.startsWith("/") ? path : `/${path}`}`
}

type PageMetadataInput = {
  title: string
  description: string
  path: string
  noIndex?: boolean
}

/** Per-route metadata with canonical, Open Graph, and Twitter card fields. */
export function createPageMetadata({
  title,
  description,
  path,
  noIndex = false,
}: PageMetadataInput): Metadata {
  const canonical = path === "/" ? SITE_URL : path
  const url = absoluteUrl(path === "/" ? "" : path)

  return {
    title,
    description,
    ...(noIndex && {
      robots: { index: false, follow: true },
    }),
    alternates: {
      canonical,
    },
    openGraph: {
      type: "website",
      url,
      title,
      description,
      siteName: SITE_NAME,
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      site: TWITTER_SITE,
      creator: TWITTER_SITE,
      title,
      description,
    },
  }
}

export const rootMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: "%s | ASBAE",
  },
  description: DEFAULT_DESCRIPTION,
  generator: "ASBAE",
  keywords: [
    "documentation as a service",
    "DaaS",
    "unified governance",
    "UGS",
    "IT documentation",
    "e-governance",
    "enterprise IT",
    "software development",
  ],
  authors: [{ name: SITE_NAME }],
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    siteName: SITE_NAME,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: TWITTER_SITE,
    creator: TWITTER_SITE,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
  },
}
