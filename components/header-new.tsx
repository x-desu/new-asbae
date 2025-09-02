"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { viewTransition } from "@/lib/view-transitions"
import gsap from "gsap"
import Link from "next/link"

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glassmorphic-strong glow-orange" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-3">
              <div className="p-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 shadow-sm">
                <img 
                  src="/images/asbae-logo.png" 
                  alt="ASBAE Logo" 
                  className={`h-7 w-7 lg:h-9 lg:w-9 transition-transform duration-300 ${
                    isScrolled ? 'scale-100' : 'scale-110'
                  }`} 
                />
              </div>
              <h1 className="text-2xl md:text-3xl font-serif font-bold bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-400 bg-clip-text text-transparent">ASBAE</h1>
            </Link>
          </div>

          <nav className="hidden lg:flex items-center space-x-12">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-foreground/80 hover:text-primary transition-all duration-300 font-medium text-base cursor-pointer relative group px-3 py-2 rounded-lg hover:bg-primary/10"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-orange-accent transition-all duration-300 group-hover:w-full rounded-full glow-orange"></span>
                <span className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-primary/5 to-orange-accent/5"></span>
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex">
            <Button className="btn-primary-glow font-bold px-12 py-4 text-lg rounded-full transform hover:scale-105 transition-all duration-300 shadow-2xl" onClick={handleCTAClick}>
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
              className="fixed left-0 right-0 top-16 z-50 hidden"
            >
              <div className="container mx-auto px-4 py-3">
                <div className="dropdown-glass p-4">
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
                      className="w-full bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-600 hover:to-amber-600 text-white font-medium rounded-lg py-3 text-base transition-all duration-300 transform hover:scale-[1.02] shadow-lg"
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
