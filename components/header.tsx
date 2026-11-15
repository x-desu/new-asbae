"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ArrowUpRight, Menu, X } from "lucide-react"
import ThemeToggle from "@/components/theme-toggle"
import { AsbaeLogo } from "@/components/asbae-logo"

const links = [
  { label: "Work", href: "/#work" },
  { label: "Services", href: "/services" },
  { label: "Approach", href: "/#approach" },
  { label: "Company", href: "/about" },
]

export default function Header() {
  const pathname = usePathname()
  const navLinks = links.map(link => link.label === "Services" && pathname === "/" ? { ...link, href: "/#services" } : link)
  const [open, setOpen] = useState(false)
  const [section, setSection] = useState("")
  const [scrolled, setScrolled] = useState(false)
  const headerRef = useRef<HTMLElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 48)
    update()
    window.addEventListener("scroll", update, { passive: true })
    return () => window.removeEventListener("scroll", update)
  }, [])
  useEffect(() => {
    if (pathname !== "/") return
    const update = () => {
      const threshold = window.innerHeight * .35
      let current = ""
      for (const id of ["work", "services", "approach"]) {
        const element = document.getElementById(id)
        if (element && element.getBoundingClientRect().top <= threshold) current = id
      }
      setSection(current)
    }
    update()
    window.addEventListener("scroll", update, { passive: true })
    return () => window.removeEventListener("scroll", update)
  }, [pathname])
  const isActive = (href: string) => href.includes("#") ? pathname === "/" && section === href.split("#")[1] : pathname === href
  useEffect(() => {
    const close = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) setOpen(false)
    }
    const escape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }
    document.addEventListener("pointerdown", close)
    document.addEventListener("keydown", escape)
    return () => {
      document.removeEventListener("pointerdown", close)
      document.removeEventListener("keydown", escape)
    }
  }, [])
  return (
    <header ref={headerRef} data-home={!pathname.startsWith("/legal") && !pathname.startsWith("/components-preview")} data-scrolled={scrolled} data-menu-open={open} className="corporate-header fixed inset-x-0 top-0 z-50">
      <div className="asbae-nav-shell">
        <Link href="/" aria-label="ASBAE home" onClick={() => setOpen(false)} className="rounded focus-visible:outline-blue-400">
          <AsbaeLogo size="sm" markOnLight={false} wordmarkClassName="!font-sans !tracking-[0.08em] !text-white !bg-none !drop-shadow-none" />
        </Link>
        <nav aria-label="Main navigation" className="asbae-desktop-nav">
          {navLinks.map(({ label, href }) => (
            <Link key={href} href={href} aria-current={isActive(href) ? (href.includes("#") ? "location" : "page") : undefined}
              className="asbae-nav-link">
              {label}
            </Link>
          ))}
        </nav>
        <ThemeToggle/>
        <Link href="/contact" className="asbae-nav-cta">
          Let’s talk <ArrowUpRight size={16} aria-hidden />
        </Link>
        <button ref={toggleRef} type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-navigation"
          onClick={() => setOpen(!open)} className="asbae-menu-toggle">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <nav id="mobile-navigation" aria-label="Mobile navigation" className="asbae-mobile-nav">
          {navLinks.map(({ label, href }) => <Link key={href} href={href} onClick={() => setOpen(false)} aria-current={isActive(href) ? "location" : undefined}
            className="asbae-nav-link">{label}</Link>)}
          <Link href="/contact" onClick={() => setOpen(false)} className="mt-3 flex items-center justify-between rounded-md bg-blue-600 px-4 py-3 text-sm font-semibold text-white">Let’s talk <ArrowUpRight size={16} /></Link>
        </nav>
      )}
    </header>
  )
}
