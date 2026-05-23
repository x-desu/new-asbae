import type { Metadata } from "next"
import { createPageMetadata } from "@/lib/seo"

export const metadata: Metadata = createPageMetadata({
  title: "About ASBAE",
  description:
    "Learn about ASBAE: our mission, values, and how we deliver reliable, client-centric software and IT services for enterprise and e-governance.",
  path: "/about",
})

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children
}
