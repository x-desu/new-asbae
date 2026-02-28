"use client"

import { MessageSquare, ArrowRight, Sparkles, Globe, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

export default function Contact() {
  const redirectCards = [
    {
      icon: MessageSquare,
      title: "Direct Consultation",
      description: "Speak directly with our technical experts about your project requirements and governance needs.",
      link: "/contact",
      color: "blue"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "We support organizations worldwide with specialized IT documentation and e-Governance solutions.",
      link: "/contact",
      color: "indigo"
    },
    {
      icon: Shield,
      title: "Secure Partnership",
      description: "Enterprise-grade security and NDA-ready processes for high-stakes government and private contracts.",
      link: "/contact",
      color: "blue"
    }
  ]

  return (
    <section id="contact" className="py-24 sm:py-32 relative overflow-hidden bg-[#050505]">
      {/* Dynamic Background Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 blur-[120px] rounded-full opacity-50 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto space-y-6 mb-16"
        >
          <Badge className="bg-blue-500/10 text-blue-400 border-blue-500/20 backdrop-blur-md px-4 py-1.5 mb-2">
            <Sparkles className="w-3.5 h-3.5 mr-2" />
            Connect With Our Team
          </Badge>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
            Ready to Elevate Your <br />
            <span className="text-blue-500">Infrastructure?</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground/80 leading-relaxed max-w-2xl mx-auto italic">
            "We don't just write documentation; we build the governance framework for your digital future."
          </p>

          <div className="pt-4">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-500 text-white rounded-full px-10 py-7 text-lg font-bold shadow-[0_0_40px_-10px_rgba(59,130,246,0.6)] transform transition-all duration-300 hover:scale-105 active:scale-95"
              onClick={() => window.location.href = "/contact"}
            >
              Get in Touch Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto mt-20">
          {redirectCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="relative group cursor-pointer"
              onClick={() => window.location.href = card.link}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-3xl blur opacity-0 group-hover:opacity-10 transition duration-500" />
              <div className="relative h-full glassmorphic rounded-3xl p-8 bg-white/5 border border-white/10 backdrop-blur-xl flex flex-col items-center text-center">
                <div className={`p-4 rounded-full bg-${card.color}-500/10 text-${card.color}-400 group-hover:bg-${card.color}-500/20 transition-all mb-6 group-hover:scale-110 duration-300`}>
                  <card.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors mb-3">
                  {card.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {card.description}
                </p>
                <div className="mt-6 flex items-center text-blue-400/0 group-hover:text-blue-400 transition-all duration-300 font-semibold text-xs uppercase tracking-widest">
                  Connect <ArrowRight className="ml-1 h-3 w-3" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

