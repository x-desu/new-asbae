import type { Metadata } from "next"
import { createPageMetadata } from "@/lib/seo"

export const metadata: Metadata = createPageMetadata({
  title: "Contact ASBAE",
  description:
    "Get in touch for DaaS, governance-ready documentation, and tender-aligned IT solutions. Schedule a consultation with the ASBAE team.",
  path: "/contact",
})

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
