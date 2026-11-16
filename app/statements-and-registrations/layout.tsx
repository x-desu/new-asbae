import type { Metadata } from "next"
import { createPageMetadata } from "@/lib/seo"

export const metadata: Metadata = createPageMetadata({
  title: "Company Statements & Registrations",
  description: "View ASBAE Technologies LLP’s company details, capability statements, and technical documentation for tender and vendor onboarding.",
  path: "/statements-and-registrations",
})

export default function StatementsLayout({ children }: { children: React.ReactNode }) {
  return children
}
