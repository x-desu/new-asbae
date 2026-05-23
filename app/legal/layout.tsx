import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import type { Metadata } from "next"

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: true,
  },
  title: {
    default: "Legal",
    template: "%s | ASBAE",
  },
}

export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative z-[2]">
      <Header />
      <main className="pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
}
