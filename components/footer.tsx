import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { COMPANY } from "@/lib/company"
import { AsbaeLogo } from "@/components/asbae-logo"

export default function Footer() {
  return <footer className="saas-footer"><div className="saas-footer-main"><div className="saas-footer-brand"><Link href="/" aria-label="ASBAE home"><AsbaeLogo size="sm" markOnLight={false} wordmarkClassName="!font-sans !tracking-[0.08em] !text-white !bg-none !drop-shadow-none"/></Link><p>Enterprise technology.<br/>Clear documentation. Better governance.</p><a href="mailto:info@asbaetech.in">info@asbaetech.in <ArrowUpRight size={14}/></a></div><div><h3>Explore</h3><Link href="/services">Services</Link><Link href="/about">Company</Link><Link href="/statements-and-registrations">Statements & registrations</Link><Link href="/contact">Contact</Link></div><div><h3>Our office</h3><address>{COMPANY.legalName} (D-05), 1st Floor<br/>5/588, Vikas Khand, Gomti Nagar<br/>Lucknow – 226010, Uttar Pradesh</address><a href="https://www.google.com/maps/search/?api=1&query=5%2F588%20Vikas%20Khand%20Gomti%20Nagar%20Lucknow%20226010" target="_blank" rel="noreferrer">Get directions <ArrowUpRight size={13}/></a></div></div><div className="saas-footer-bottom"><span>© {new Date().getFullYear()} {COMPANY.legalName} <span className="footer-gstin">· LLPIN {COMPANY.llpin}</span></span><nav aria-label="Legal"><Link href="/legal/privacy">Privacy</Link><Link href="/legal/terms">Terms</Link><Link href="/legal/cookies">Cookies</Link></nav></div></footer>
}
