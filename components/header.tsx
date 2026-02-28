"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { viewTransition } from "@/lib/view-transitions"
import gsap from "gsap"
import Link from "next/link"
import ShinyText from "@/lib/TextAnimations/ShinyText/ShinyText"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  // Refs
  const dropdownRef = useRef<HTMLDivElement>(null)
  const dropdownContentRef = useRef<HTMLDivElement>(null)
  const tl = useRef<gsap.core.Timeline | null>(null)

  // GSAP Animations
  useEffect(() => {
    if (!dropdownContentRef.current) return

    tl.current = gsap.timeline({ paused: true })
      .fromTo(dropdownContentRef.current,
        { y: -20, opacity: 0, display: 'none' },
        {
          y: 0,
          opacity: 1,
          display: 'block',
          duration: 0.3,
          ease: 'power2.out',
          backdropFilter: 'blur(10px)',
          webkitBackdropFilter: 'blur(10px)'
        }
      )

    return () => {
      tl.current?.kill()
    }
  }, [])

  // Toggle dropdown animation
  useEffect(() => {
    if (!tl.current) return

    if (isDropdownOpen) {
      document.body.style.overflow = 'hidden'
      tl.current.play()
    } else {
      document.body.style.overflow = ''
      tl.current.reverse()
    }
  }, [isDropdownOpen])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.body.style.overflow = ''
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = async (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    if (href.startsWith('#')) {
      await viewTransition.transitionToSection(href, { duration: 600 })
    } else {
      // For full page navigation
      window.location.href = href
    }
  }

  const handleCTAClick = async (e: React.MouseEvent) => {
    e.preventDefault()
    await viewTransition.transitionToSection("#contact", { duration: 800 })
  }

  const navItems = [
    { name: "Services", href: "#services" },
    { name: "Products", href: "#products" },
    { name: "About", href: "/about" },
    { name: "Reviews", href: "#reviews" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <header
      className={`fixed left-0 right-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${isScrolled
        ? "top-4 mx-auto max-w-4xl px-2"
        : "top-0 max-w-full px-0"
        }`}
    >
      <div
        className={`transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${isScrolled
          ? "bg-background/60 backdrop-blur-2xl border border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.4),0_0_80px_rgba(59,130,246,0.06)] rounded-full px-6"
          : "bg-transparent rounded-none px-4 sm:px-6 lg:px-8"
          }`}
      >
        <div className={`flex items-center justify-between transition-all duration-500 ${isScrolled ? "h-14" : "h-16 lg:h-20"
          } ${!isScrolled ? "container mx-auto" : ""}`}>
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <div className={`rounded-full bg-white/10 backdrop-blur-sm border border-white/15 transition-all duration-500 ${isScrolled ? "p-1" : "p-1.5"
                }`}>
                <img
                  src="/images/asbae-logo.png"
                  alt="ASBAE Logo"
                  className={`transition-all duration-500 invert brightness-125 ${isScrolled ? 'h-6 w-6' : 'h-7 w-7 lg:h-9 lg:w-9'
                    }`}
                />
              </div>
              <ShinyText
                className={`font-serif font-bold tracking-wide transition-all duration-500 ${isScrolled ? "text-xl" : "text-2xl md:text-3xl"}`}
                baseColor="rgba(96, 165, 250, 0.9)"
                shineColor="rgba(255, 255, 255, 0.95)"
                shimmerWidth={120}
                speed={4}
              >
                ASBAE
              </ShinyText>
            </Link>
          </div>

          <nav className={`hidden lg:flex items-center transition-all duration-500 ${isScrolled ? "space-x-6" : "space-x-12"
            }`}>
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`text-foreground/80 hover:text-primary transition-all duration-300 font-medium cursor-pointer relative group rounded-lg hover:bg-primary/10 ${isScrolled ? "text-sm px-2 py-1.5" : "text-base px-3 py-2"
                  }`}
              >
                {item.name}
                <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-indigo-500 transition-all duration-300 group-hover:w-3/4 rounded-full"></span>
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center">
            <Button
              className={`btn-primary-glow font-bold rounded-full transform hover:scale-105 transition-all duration-500 shadow-2xl ${isScrolled ? "px-6 py-2 text-sm" : "px-2 lg:px-12 py-2 lg:py-4 text-sm lg:text-lg"
                }`}
              onClick={handleCTAClick}
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="lg:hidden relative" ref={dropdownRef}>
            <Button
              variant="ghost"
              size="icon"
              className="neomorphic-button relative z-50"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              {isDropdownOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>

            {/* Dropdown Menu */}
            <div
              ref={dropdownContentRef}
              className={`fixed left-0 right-0 z-50 hidden ${isScrolled ? "top-20" : "top-16"
                }`}
            >
              <div className="container mx-auto px-4 py-3">
                <div className="dropdown-glass p-4 rounded-2xl">
                  <div className="space-y-2">
                    {navItems.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="group block px-4 py-3 text-base font-medium text-foreground/90 hover:text-primary transition-all duration-300 ease-out hover:bg-foreground/5 rounded-lg"
                        onClick={(e) => {
                          handleNavClick(e, item.href)
                          setIsDropdownOpen(false)
                        }}
                      >
                        <span className="relative group-hover:translate-x-1 transition-transform duration-300 flex items-center">
                          <span className="absolute -left-2 opacity-0 group-hover:opacity-100 text-primary transition-all duration-300">→</span>
                          <span className="ml-2">{item.name}</span>
                        </span>
                      </a>
                    ))}
                  </div>
                  <div className="pt-3 mt-2 border-t border-foreground/10">
                    <Button
                      className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-medium rounded-lg py-3 text-base transition-all duration-300 transform hover:scale-[1.02] shadow-lg"
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
          </div>
        </div>
      </div>
    </header>
  )
}
