import Link from "next/link"
import { ArrowUpRight, MessageSquare, Globe, ShieldCheck } from "lucide-react"
import { MarketingSection } from "@/components/ui/marketing-section"

export default function Contact() {
  return (
    <MarketingSection id="contact" eyebrow="Start a conversation" title="Let’s give your next project a clear direction." description="Talk to our team about your documentation, enterprise IT, or digital governance requirements.">
      <Link href="/contact" className="site-button mb-10">Discuss your project <ArrowUpRight size={17} aria-hidden /></Link>
      <div className="grid gap-4 md:grid-cols-3">
        {[
          { icon: MessageSquare, title: "Direct consultation", description: "Discuss your project requirements with our technical team." },
          { icon: Globe, title: "Connected delivery", description: "Specialized IT documentation and e-Governance support for your organization." },
          { icon: ShieldCheck, title: "A secure partnership", description: "NDA-ready processes for government and enterprise projects." },
        ].map(({icon:Icon,title,description}) => <article key={title} className="marketing-card"><Icon className="marketing-icon" aria-hidden /><h3>{title}</h3><p>{description}</p></article>)}
      </div>
    </MarketingSection>
  )
}
