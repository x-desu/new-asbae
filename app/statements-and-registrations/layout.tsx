import type { Metadata } from "next"
import { createPageMetadata } from "@/lib/seo"

export const metadata: Metadata = createPageMetadata({
  title: "Company Statements & Registrations",
  description: "View ASBAE Technologies LLP’s registration details, capability statements, and AI service portfolio and engagement guides.",
  path: "/statements-and-registrations",
})

export default function StatementsLayout({ children }: { children: React.ReactNode }) {
  return children
}
