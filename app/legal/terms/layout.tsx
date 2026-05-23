import type { Metadata } from "next"
import { createPageMetadata } from "@/lib/seo"

export const metadata: Metadata = createPageMetadata({
  title: "Terms of Service",
  description: "Terms governing your access to and use of the ASBAE website, products, and services.",
  path: "/legal/terms",
  noIndex: true,
})

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return children
}
