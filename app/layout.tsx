import type React from "react"
import type { Metadata, Viewport } from "next"
import { Poppins, Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { ModalProvider } from "@/components/modal-context"
import { SiteBackground } from "@/components/site-background"
import { NavigationProgressBar } from "@/components/navigation-progress-bar"
import { ChromePerformanceMonitor } from "@/components/chrome-performance-monitor"
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider"
import { SITE_URL, rootMetadata } from "@/lib/seo"
import Script from "next/script"
import { Suspense } from "react"

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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a1628",
}

export const metadata: Metadata = rootMetadata

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <Script id="ldjson-org" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'ASBAE',
            url: SITE_URL,
            logo: `${SITE_URL}/images/asbae-logo.png`,
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
            url: SITE_URL,
            potentialAction: {
              '@type': 'SearchAction',
              target: `${SITE_URL}/?q={search_term_string}`,
              'query-input': 'required name=search_term_string',
            },
          })}
        </Script>
      </head>
      <body className={`${poppins.variable} ${inter.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <ModalProvider>
            <ChromePerformanceMonitor />
            <SmoothScrollProvider />
            <Suspense fallback={null}>
              <NavigationProgressBar />
            </Suspense>
            <SiteBackground />
            {children}
          </ModalProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
