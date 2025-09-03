import type React from "react"
import type { Metadata } from "next"
import { Poppins, Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Script from "next/script"

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
})

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["400", "500", "600"],
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://asbaetech.com"

export const metadata: Metadata = {
  title: {
    default: "ASBAE - Software & IT Services",
    template: "%s | ASBAE",
  },
  description:
    "Professional software development and IT services for modern businesses. Transform your digital presence with ASBAE.",
  generator: "ASBAE",
  keywords: ["software development", "IT services", "web development", "mobile apps", "cloud solutions"],
  authors: [{ name: "ASBAE" }],
  viewport: "width=device-width, initial-scale=1",
  themeColor: "hsl(188 85% 53%)",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "ASBAE - Software & IT Services",
    description:
      "Professional software development and IT services for modern businesses. Transform your digital presence with ASBAE.",
    siteName: "ASBAE",
    images: [
      {
        url: "/images/asbae-logo.png",
        width: 1200,
        height: 630,
        alt: "ASBAE - Software & IT Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@asbae",
    creator: "@asbae",
    title: "ASBAE - Software & IT Services",
    description:
      "Professional software development and IT services for modern businesses. Transform your digital presence with ASBAE.",
    images: ["/images/asbae-logo.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js" strategy="beforeInteractive" />
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/TextPlugin.min.js"
          strategy="beforeInteractive"
        />
        <style>{`
html {
  font-family: ${inter.style.fontFamily};
  --font-sans: ${inter.variable};
  --font-serif: ${poppins.variable};
}
        `}</style>
        <Script id="ldjson-org" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'ASBAE',
            url: siteUrl,
            logo: `${siteUrl}/images/asbae-logo.png`,
            sameAs: [
              'https://x.com/asbae',
            ],
          })}
        </Script>
        <Script id="ldjson-website" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'ASBAE',
            url: siteUrl,
            potentialAction: {
              '@type': 'SearchAction',
              target: `${siteUrl}/?q={search_term_string}`,
              'query-input': 'required name=search_term_string',
            },
          })}
        </Script>
      </head>
      <body className={`${poppins.variable} ${inter.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
