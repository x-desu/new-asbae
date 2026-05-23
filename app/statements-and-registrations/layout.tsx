import type { Metadata } from "next"
import { createPageMetadata } from "@/lib/seo"

export const metadata: Metadata = createPageMetadata({
  title: "Statements and Registrations",
  description:
    "View ASBAE organizational capability statements and technical capability documentation for registrations, tenders, and vendor onboarding.",
  path: "/statements-and-registrations",
})

export default function StatementsLayout({ children }: { children: React.ReactNode }) {
  return children
}
