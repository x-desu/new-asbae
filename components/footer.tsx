"use client"

import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Github, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const footerLinks = {
    services: [
      { name: "Web Development", href: "#web-dev" },
      { name: "Mobile Apps", href: "#mobile" },
      { name: "Cloud Solutions", href: "#cloud" },
      { name: "IT Consulting", href: "#consulting" },
    ],
    products: [
      { name: "Analytics Pro", href: "#analytics" },
      { name: "Team Manager", href: "#team-manager" },
      { name: "E-Commerce Suite", href: "#ecommerce" },
      { name: "Schedule Master", href: "#schedule" },
    ],
    company: [
      { name: "About Us", href: "#about" },
      { name: "Careers", href: "#careers" },
      { name: "Blog", href: "#blog" },
      { name: "Case Studies", href: "#case-studies" },
    ],
    legal: [
      { name: "Privacy Policy", href: "/legal/privacy" },
      { name: "Terms of Service", href: "/legal/terms" },
      { name: "Cookie Policy", href: "/legal/cookies" },
    ],
  }

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" },
  ]

  return (
    <footer className="relative bg-gradient-to-b from-background to-primary/5 border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Section */}
        <div className="py-12 border-b border-white/5">
          <div className="neomorphic rounded-3xl p-6 sm:p-8 lg:p-12 bg-gradient-to-br from-white/5 to-white/[0.02]">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-4 text-center lg:text-left">
                <h3 className="text-2xl lg:text-3xl font-serif font-bold bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-400 bg-clip-text text-transparent">
                  Stay Updated
                </h3>
                <p className="text-muted-foreground text-sm sm:text-base">
                  Subscribe to our newsletter for the latest tech insights, product updates, and industry trends.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Input 
                  placeholder="Enter your email" 
                  className="neomorphic border-0 flex-1 bg-white/5 backdrop-blur-sm focus:ring-2 focus:ring-yellow-400/30" 
                />
                <Button 
                  className="neomorphic-button bg-gradient-to-r from-yellow-500/80 to-amber-500/80 text-white hover:from-yellow-600/90 hover:to-amber-600/90 transition-all transform hover:scale-[1.02]"
                >
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-8 sm:py-12">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-6 gap-8 sm:gap-6 md:gap-8">
            {/* Company Info */}
            <div className="col-span-2 lg:col-span-2 space-y-6 mb-8 sm:mb-0">
              <div className="space-y-2">
                <h2 className="text-4xl md:text-5xl font-serif font-bold bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-400 bg-clip-text text-transparent mb-2">Asbae</h2>
                <p className="text-muted-foreground text-sm md:text-base">
                  Transforming businesses through innovative software solutions and expert IT services.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-2">
                <a 
                  href="mailto:hello@asbaetech.com" 
                  className="flex items-center space-x-3 group"
                >
                  <Mail className="h-5 w-5 text-primary group-hover:text-yellow-400 transition-colors" />
                  <span className="text-sm md:text-base text-muted-foreground group-hover:text-foreground transition-colors">
                    hello@asbaetech.com
                  </span>
                </a>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="p-2 rounded-lg glassmorphic text-muted-foreground hover:text-primary transition-colors"
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div className="space-y-4  sm:pt-0">
              <h4 className="font-semibold text-foreground">Services</h4>
              <ul className="space-y-2">
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Products */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Products</h4>
              <ul className="space-y-2">
                {footerLinks.products.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Company</h4>
              <ul className="space-y-2">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Legal</h4>
              <ul className="space-y-2">
                {footerLinks.legal.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/5">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground text-center md:text-left">
              © 2025 asbae. All rights reserved.
            </div>

            <Button 
              variant="ghost" 
              size="sm" 
              onClick={scrollToTop} 
              className="neomorphic-button group bg-white/5 hover:bg-white/10"
            >
              Back to Top
              <ArrowUp className="ml-2 h-4 w-4 group-hover:-translate-y-0.5 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}
