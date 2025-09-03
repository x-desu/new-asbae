import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: true,
  },
  title: {
    default: "Legal | ASBAE",
    template: "%s | ASBAE",
  },
}

export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-neutral-950 to-neutral-900">
      <Header />
      <main className="pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
}
