import type React from "react"
import WhatsAppButton from "@/components/whatsapp-button"
import type { Metadata, Viewport } from "next"
import { Poppins, Inter } from "next/font/google"
import "lenis/dist/lenis.css"
import "./globals.css"
import "@/styles/saas.css"
import "@/styles/inner-pages.css"
import "@/styles/theme.css"
import "@/styles/chat.css"
import "@/styles/home-capabilities.css"
import { ThemeProvider } from "@/components/theme-provider"
import { ModalProvider } from "@/components/modal-context"
import { SiteBackground } from "@/components/site-background"
import { NavigationProgressBar } from "@/components/navigation-progress-bar"
import { ChromePerformanceMonitor } from "@/components/chrome-performance-monitor"
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider"
import { SITE_URL, rootMetadata } from "@/lib/seo"
import { COMPANY } from "@/lib/company"
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <script id="ldjson-org" type="application/ld+json" dangerouslySetInnerHTML={{ __html:
          JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            '@id': `${SITE_URL}/#organization`,
            name: 'ASBAE Technologies',
            email: 'info@asbaetech.in',
            telephone: '+918922900541',
            address: { '@type': 'PostalAddress', streetAddress: '5/588 Vikas Khand, Gomti Nagar', addressLocality: 'Lucknow', addressRegion: 'Uttar Pradesh', postalCode: '226010', addressCountry: 'IN' },
            legalName: COMPANY.legalName,
            foundingDate: COMPANY.incorporatedOn,
            identifier: { '@type': 'PropertyValue', propertyID: 'LLPIN', value: COMPANY.llpin },
            url: SITE_URL,
            logo: `${SITE_URL}/images/asbae-logo.png`,
            sameAs: [
              'https://www.instagram.com/asbaetech2025/',
              'https://www.linkedin.com/in/asbae-technologies-767209433/',
              'https://www.linkedin.com/company/asbae-technologies/',
            ],
          }).replace(/</g, "\\u003c") }} />
        <script id="ldjson-website" type="application/ld+json" dangerouslySetInnerHTML={{ __html:
          JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            '@id': `${SITE_URL}/#website`,
            name: 'ASBAE Technologies',
            alternateName: 'ASBAE',
            publisher: { '@id': `${SITE_URL}/#organization` },
            inLanguage: 'en-IN',
            url: SITE_URL,

          }).replace(/</g, "\\u003c") }} />
      </head>
      <body className={`${poppins.variable} ${inter.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <ModalProvider>
            <ChromePerformanceMonitor />
            <SmoothScrollProvider />
            <Suspense fallback={null}>
              <NavigationProgressBar />
            </Suspense>
            <SiteBackground />
            {children}
            <WhatsAppButton />
          </ModalProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
