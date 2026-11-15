import type { ReactNode } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function InnerPage({ eyebrow, title, description, children }: { eyebrow: string; title: string; description: string; children: ReactNode }) {
  return <div className="inner-site relative z-[2] min-h-screen"><Header/><main>
    <section className="inner-hero"><Image src="/images/asbae-mountain-hero.webp" alt="" fill priority sizes="100vw"/><div className="inner-hero-shade"/><div className="inner-container"><span className="saas-eyebrow">{eyebrow}</span><h1>{title}</h1><p>{description}</p></div></section>
    {children}
  </main><Footer/></div>
}

export function InnerCTA() {
  return <section className="inner-container inner-cta"><div><span className="saas-eyebrow">LET’S BUILD WHAT COMES NEXT</span><h2>Bring your next project into focus.</h2></div><Link href="/contact" className="saas-primary">Discuss your project <ArrowUpRight size={16}/></Link></section>
}
