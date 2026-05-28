import type { Metadata } from "next"
import { OG_IMAGE_ALT } from "@/lib/og-image"

/** Production site URL — set NEXT_PUBLIC_SITE_URL=https://www.asbaetech.in on deploy. */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.asbaetech.in"
export const SITE_NAME = "ASBAE"
export const TWITTER_SITE = "@asbae"

export const SHARE_IMAGE_PATH = "/og-image.png"
export const SHARE_IMAGE_WIDTH = 1200
export const SHARE_IMAGE_HEIGHT = 630

export const DEFAULT_TITLE = "ASBAE — Intelligent IT Solutions"
export const DEFAULT_DESCRIPTION =
  "Documentation as a Service (DaaS) and Unified Governance Solutions for enterprise IT. Streamline operations, secure data, and deliver seamless digital services."

export function absoluteUrl(path: string = ""): string {
  const base = SITE_URL.replace(/\/$/, "")
  if (!path || path === "/") return base
  return `${base}${path.startsWith("/") ? path : `/${path}`}`
}

/** Shared Open Graph / Twitter image fields for rich link previews (WhatsApp, Slack, etc.). */
export function getDefaultShareImages(): Pick<Metadata, "openGraph" | "twitter"> {
  const image = {
    url: SHARE_IMAGE_PATH,
    width: SHARE_IMAGE_WIDTH,
    height: SHARE_IMAGE_HEIGHT,
    alt: OG_IMAGE_ALT,
    type: "image/png" as const,
  }

  return {
    openGraph: {
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      images: [SHARE_IMAGE_PATH],
    },
  }
}

const shareImages = getDefaultShareImages()

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
    ...(noIndex
      ? { robots: { index: false, follow: true } }
      : {
          robots: {
            index: true,
            follow: true,
            googleBot: { index: true, follow: true },
          },
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
      ...shareImages.openGraph,
    },
    twitter: {
      site: TWITTER_SITE,
      creator: TWITTER_SITE,
      title,
      description,
      ...shareImages.twitter,
    },
  }
}

const googleVerification = process.env.GOOGLE_SITE_VERIFICATION

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
    "ASBAE",
    "asbaetech",
  ],
  authors: [{ name: SITE_NAME }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  ...(googleVerification && {
    verification: {
      google: googleVerification,
    },
  }),
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/favicon-180.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    siteName: SITE_NAME,
    locale: "en_US",
    ...shareImages.openGraph,
  },
  twitter: {
    site: TWITTER_SITE,
    creator: TWITTER_SITE,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    ...shareImages.twitter,
  },
}
