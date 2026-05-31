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
import GlassSurface from "@/components/glass-surface"
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
      { name: "Services", href: "/services", path: "/services" },
      { name: "About", href: "/about", path: "/about" },
      {
        name: "Statements",
        href: "/statements-and-registrations",
        path: "/statements-and-registrations",
      },
      { name: "Contact", href: "/contact", path: "/contact" },
    ],
    [],
  )

  const isNavActive = useCallback(
    (item: NavItem) => {
      if (item.path === "/") {
        return pathname === "/"
      }
      return pathname === item.path || pathname.startsWith(`${item.path}/`)
    },
    [pathname],
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
      tl.current.play()
    } else {
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
    }
  }, [])

  useEffect(() => {
    let frameId = 0

    const handleScroll = () => {
      cancelAnimationFrame(frameId)
      frameId = requestAnimationFrame(() => {
        setIsScrolled((current) => {
          if (!current && window.scrollY > 88) return true
          if (current && window.scrollY < 24) return false
          return current
        })
      })
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      cancelAnimationFrame(frameId)
      window.removeEventListener("scroll", handleScroll)
    }
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
    // Close dropdown immediately to prevent "stuck" UI
    setIsDropdownOpen(false)

    if (item.path === pathname) {
      if (item.path === "/") {
        if (window.__ASBAE_LENIS__) {
          window.__ASBAE_LENIS__.scrollTo(0, { duration: 0.8 })
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" })
        }
      }
      return
    }

    setActiveHash("")
  }

  const handleCTAClick = (e: React.MouseEvent) => {
    setIsDropdownOpen(false)
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

    return (
      <Link
        key={item.name}
        href={item.href}
        onClick={(e) => handleNavClick(e, item)}
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
        "fixed inset-x-0 z-50 px-3 transition-[top,padding] duration-700 ease-out sm:px-4",
        isScrolled ? "top-3" : "top-0"
      )}
    >
      <GlassSurface
        width="100%"
        height="auto"
        borderRadius={isScrolled ? 32 : 28}
        borderWidth={0.1}
        brightness={62}
        opacity={0.8}
        blur={9}
        displace={0.35}
        backgroundOpacity={isScrolled ? 0.62 : 0.38}
        saturation={1.75}
        distortionScale={-135}
        redOffset={3}
        greenOffset={12}
        blueOffset={22}
        mixBlendMode="screen"
        className={cn(
          "mx-auto w-[calc(100%-1rem)] px-4 sm:w-full sm:px-6",
          isScrolled
            ? "max-w-5xl"
            : "max-w-6xl"
        )}
      >
        <HStack
          className="mx-auto h-[4.25rem] w-full justify-between gap-3 lg:h-[4.5rem]"
        >
          <Link href="/" className="shrink-0 rounded-lg outline-none ring-blue-400/50 focus-visible:ring-2">
            <AsbaeLogo
              size="sm"
              className="gap-2.5 lg:gap-2.5"
              wordmarkClassName="text-[1.45rem] sm:text-2xl lg:text-2xl"
            />
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
              className="h-10 w-10 rounded-full border border-white/10 bg-white/[0.035] text-white/90 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-sm transition-colors hover:bg-white/[0.08] hover:text-white"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              aria-expanded={isDropdownOpen}
              aria-label="Toggle menu"
            >
              {isDropdownOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>

            <div
              ref={dropdownContentRef}
              className={cn(
                "absolute z-40 hidden left-[-1rem] right-[-1rem] sm:left-[-1.5rem] sm:right-[-1.5rem]",
                isScrolled ? "top-[3.65rem]" : "top-[3.45rem]"
              )}
            >
              <div className="dropdown-glass mx-auto max-h-[calc(100svh-5.5rem)] w-full max-w-6xl overflow-y-auto px-2 pb-2 pt-5">
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
      </GlassSurface>
    </header>
  )
}
