import type { Metadata } from "next"
import { createPageMetadata } from "@/lib/seo"

export const metadata: Metadata = createPageMetadata({
  title: "Cookie Policy",
  description: "How ASBAE uses cookies and similar technologies on our website.",
  path: "/legal/cookies",
  noIndex: true,
})

export default function CookiesLayout({ children }: { children: React.ReactNode }) {
  return children
}
