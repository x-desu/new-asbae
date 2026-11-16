import type { Metadata } from "next"
import { createPageMetadata } from "@/lib/seo"

export const metadata: Metadata = createPageMetadata({
  title: "Contact ASBAE in Lucknow",
  description: "Discuss enterprise software, technical documentation, governance, or tender requirements with ASBAE Technologies LLP. Contact our team in Lucknow.",
  path: "/contact",
})

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
