"use client"

import type React from "react"
import { useState, useEffect, useRef, useMemo, useCallback } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { HStack, VStack } from "@/components/ui/stack"
import { viewTransition } from "@/lib/view-transitions"
import gsap from "gsap"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { AsbaeLogo } from "@/components/asbae-logo"
import { cn } from "@/lib/utils"

type NavItem = {
  name: string
  href: string
  path: string
  hash?: string
}

const navLinkClass = (active: boolean) =>
  cn(
    "group relative rounded-lg px-3 py-2 text-sm font-medium outline-none ring-blue-400/50 transition-colors duration-200 focus-visible:ring-2",
    active
      ? "bg-white/[0.08] text-blue-300"
      : "text-white/75 hover:bg-white/[0.06] hover:text-blue-300",
  )

const navUnderlineClass = (active: boolean) =>
  cn(
    "absolute inset-x-3 -bottom-px h-px bg-gradient-to-r from-blue-400 to-indigo-400 transition-transform duration-300",
    active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
  )

const mobileNavLinkClass = (active: boolean) =>
  cn(
    "block rounded-xl px-4 py-3.5 text-base font-medium transition-colors",
    active
      ? "bg-blue-500/15 text-blue-200"
      : "text-white/90 hover:bg-blue-500/10 hover:text-blue-200",
  )

export default function Header() {
  const pathname = usePathname()
  const router = useRouter()
  const isHome = pathname === "/"
  const [activeHash, setActiveHash] = useState("")

  const navItems = useMemo<NavItem[]>(
    () => [
      { name: "Home", href: "/", path: "/" },
      { name: "Services", href: isHome ? "#services" : "/services", path: "/services", hash: "services" },
      { name: "About", href: "/about", path: "/about" },
      {
        name: "Statements",
        href: "/statements-and-registrations",
        path: "/statements-and-registrations",
      },
      { name: "Contact", href: isHome ? "#contact" : "/contact", path: "/contact", hash: "contact" },
    ],
    [isHome],
  )

  const isNavActive = useCallback(
    (item: NavItem) => {
      if (item.hash) {
        return isHome && activeHash === `#${item.hash}`
      }
      if (item.path === "/") {
        return pathname === "/" && !activeHash
      }
      return pathname === item.path || pathname.startsWith(`${item.path}/`)
    },
    [activeHash, isHome, pathname],
  )
  const [isScrolled, setIsScrolled] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const dropdownContentRef = useRef<HTMLDivElement>(null)
  const tl = useRef<gsap.core.Timeline | null>(null)

  useEffect(() => {
    if (!dropdownContentRef.current) return

    tl.current = gsap.timeline({ paused: true }).fromTo(
      dropdownContentRef.current,
      { y: -16, opacity: 0, display: "none" },
      {
        y: 0,
        opacity: 1,
        display: "block",
        duration: 0.28,
        ease: "power2.out",
      }
    )

    return () => {
      tl.current?.kill()
    }
  }, [])

  useEffect(() => {
    if (!tl.current) return
    if (isDropdownOpen) {
      document.body.style.overflow = "hidden"
      tl.current.play()
    } else {
      document.body.style.overflow = ""
      tl.current.reverse()
    }
  }, [isDropdownOpen])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.body.style.overflow = ""
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 48)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const syncHash = () => setActiveHash(window.location.hash)
    syncHash()
    window.addEventListener("hashchange", syncHash)
    return () => window.removeEventListener("hashchange", syncHash)
  }, [pathname])

  const handleNavClick = async (
    e: React.MouseEvent<HTMLAnchorElement>,
    item: NavItem,
  ) => {
    if (item.href.startsWith("#")) {
      e.preventDefault()
      const hash = item.href
      window.history.pushState(null, "", hash)
      setActiveHash(hash)
      await viewTransition.transitionToSection(hash, { duration: 600 })
      return
    }

    if (item.path === pathname) {
      e.preventDefault()
      if (item.path === "/" && activeHash) {
        window.history.pushState(null, "", "/")
        setActiveHash("")
        window.scrollTo({ top: 0, behavior: "smooth" })
      }
      return
    }

    e.preventDefault()
    setActiveHash("")
    router.push(item.href)
  }

  const handleCTAClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setActiveHash("")
    router.push("/contact")
  }

  const renderNavLink = (item: NavItem, className: string) => {
    const active = isNavActive(item)
    const content = (
      <>
        {item.name}
        <span className={navUnderlineClass(active)} />
      </>
    )

    if (item.href.startsWith("#")) {
      return (
        <a
          key={item.name}
          href={item.href}
          onClick={(e) => void handleNavClick(e, item)}
          className={className}
          aria-current={active ? "page" : undefined}
        >
          {content}
        </a>
      )
    }

    return (
      <Link
        key={item.name}
        href={item.href}
        onClick={(e) => void handleNavClick(e, item)}
        className={className}
        aria-current={active ? "page" : undefined}
      >
        {content}
      </Link>
    )
  }

  return (
    <header
      className={cn(
        "fixed inset-x-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]",
        isScrolled ? "top-3 px-3 sm:px-4" : "top-0 px-0"
      )}
    >
      <div
        className={cn(
          "mx-auto transition-all duration-500",
          isScrolled
            ? "max-w-5xl rounded-full border border-white/[0.08] bg-[#0a1628]/75 px-4 sm:px-6 shadow-[0_8px_40px_rgba(0,0,0,0.45),0_0_60px_rgba(59,130,246,0.08)] backdrop-blur-2xl"
            : "max-w-full border-b border-white/[0.04] bg-[#060d18]/40 backdrop-blur-md lg:border-b-0 lg:bg-transparent"
        )}
      >
        <HStack
          className={cn(
            "mx-auto h-16 justify-between lg:h-[4.5rem]",
            !isScrolled && "container px-4 sm:px-6 lg:px-8"
          )}
        >
          <Link href="/" className="shrink-0 rounded-lg outline-none ring-blue-400/50 focus-visible:ring-2">
            <AsbaeLogo size={isScrolled ? "sm" : "md"} />
          </Link>

          <nav className="hidden lg:flex" aria-label="Main">
            <HStack space="lg" className="px-2">
              {navItems.map((item) => renderNavLink(item, navLinkClass(isNavActive(item))))}
            </HStack>
          </nav>

          <HStack space="md" className="hidden lg:flex">
            <Button
              size="lg"
              className={cn(
                "btn-primary-glow rounded-full font-semibold shadow-[0_0_24px_rgba(59,130,246,0.35)] transition-transform hover:scale-[1.02]",
                isScrolled ? "h-10 px-6 text-sm" : "h-11 px-8 text-base"
              )}
              onClick={handleCTAClick}
            >
              Get Started
            </Button>
          </HStack>

          <div className="lg:hidden" ref={dropdownRef}>
            <Button
              variant="ghost"
              size="icon"
              className="h-11 w-11 rounded-xl border border-white/10 bg-white/[0.04] text-white hover:bg-white/[0.08]"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              aria-expanded={isDropdownOpen}
              aria-label="Toggle menu"
            >
              {isDropdownOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>

            <div
              ref={dropdownContentRef}
              className={cn(
                "fixed inset-x-0 z-40 hidden px-4",
                isScrolled ? "top-[4.25rem]" : "top-16"
              )}
            >
              <div className="dropdown-glass rounded-2xl p-2">
                <VStack space="xs">
                  {navItems.map((item) => {
                    const active = isNavActive(item)
                    const className = mobileNavLinkClass(active)
                    const closeMenu = () => setIsDropdownOpen(false)

                    if (item.href.startsWith("#")) {
                      return (
                        <a
                          key={item.name}
                          href={item.href}
                          className={className}
                          aria-current={active ? "page" : undefined}
                          onClick={(e) => {
                            void handleNavClick(e, item)
                            closeMenu()
                          }}
                        >
                          {item.name}
                        </a>
                      )
                    }

                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={className}
                        aria-current={active ? "page" : undefined}
                        onClick={(e) => {
                          void handleNavClick(e, item)
                          closeMenu()
                        }}
                      >
                        {item.name}
                      </Link>
                    )
                  })}
                </VStack>
                <div className="mt-2 border-t border-white/10 pt-2">
                  <Button
                    className="btn-primary-glow h-12 w-full rounded-xl font-semibold"
                    onClick={(e) => {
                      handleCTAClick(e)
                      setIsDropdownOpen(false)
                    }}
                  >
                    Get Started
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </HStack>
      </div>
    </header>
  )
}
