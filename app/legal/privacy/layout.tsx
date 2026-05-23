import type { Metadata } from "next"
import { createPageMetadata } from "@/lib/seo"

export const metadata: Metadata = createPageMetadata({
  title: "Privacy Policy",
  description: "How ASBAE collects, uses, and protects your personal information when you use our website and services.",
  path: "/legal/privacy",
  noIndex: true,
})

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return children
}
