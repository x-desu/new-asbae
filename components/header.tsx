"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { viewTransition } from "@/lib/view-transitions"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = async (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    await viewTransition.transitionToSection(href, { duration: 600 })
  }

  const handleCTAClick = async (e: React.MouseEvent) => {
    e.preventDefault()
    await viewTransition.transitionToSection("#contact", { duration: 800 })
  }

  const navItems = [
    { name: "Services", href: "#services" },
    { name: "Products", href: "#products" },
    { name: "About", href: "#about" },
    { name: "Reviews", href: "#reviews" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glassmorphic shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center space-x-3">
              <img src="/images/asbae-logo.png" alt="ASBAE Logo" className="h-8 w-8 lg:h-10 lg:w-10" />
              <h1 className="text-2xl lg:text-3xl font-bold text-foreground tracking-tight">ASBAE</h1>
            </div>
          </div>

          <nav className="hidden lg:flex items-center space-x-12">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-foreground/80 hover:text-foreground transition-colors font-medium text-base cursor-pointer"
              >
                {item.name}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex">
            <Button className="btn-primary-glow font-semibold px-8 py-3 rounded-full" onClick={handleCTAClick}>
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="glassmorphic">
              <div className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block text-lg font-medium text-foreground hover:text-primary transition-colors cursor-pointer"
                    onClick={(e) => {
                      handleNavClick(e, item.href)
                      setIsMobileMenuOpen(false)
                    }}
                  >
                    {item.name}
                  </a>
                ))}
                <Button
                  className="btn-primary-glow font-semibold mt-4 rounded-full"
                  onClick={(e) => {
                    handleCTAClick(e)
                    setIsMobileMenuOpen(false)
                  }}
                >
                  Get Started
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
