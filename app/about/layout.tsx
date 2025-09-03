import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About ASBAE",
  description:
    "Learn about ASBAE: our mission, values, and how we deliver reliable AI-driven software and IT services.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About ASBAE",
    description:
      "Learn about ASBAE: our mission, values, and how we deliver reliable AI-driven software and IT services.",
    url: "/about",
  },
  twitter: {
    title: "About ASBAE",
    description:
      "Learn about ASBAE: our mission, values, and how we deliver reliable AI-driven software and IT services.",
  },
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children
}
