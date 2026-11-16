import type { Metadata } from "next"
import { createPageMetadata } from "@/lib/seo"

export const metadata: Metadata = createPageMetadata({
  title: "About ASBAE Technologies LLP",
  description: "Meet ASBAE Technologies LLP in Lucknow. We build enterprise platforms, technical documentation, and digital governance solutions around your organization.",
  path: "/about",
})

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children
}
