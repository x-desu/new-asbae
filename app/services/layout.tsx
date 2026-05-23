import type { Metadata } from "next"
import { createPageMetadata } from "@/lib/seo"

export const metadata: Metadata = createPageMetadata({
  title: "Services",
  description:
    "Documentation as a Service (DaaS), Unified Governance Solutions (UGS), and enterprise IT platforms — technical writing, workflow automation, and governance-ready systems.",
  path: "/services",
})

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children
}
