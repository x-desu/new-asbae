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
      gradient: "from-blue-600/20 to-blue-500/10",
      borderColor: "border-blue-500/20",
      iconBg: "bg-blue-500/10",
      iconColor: "text-blue-400",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "We support organizations worldwide with specialized IT documentation and e-Governance solutions.",
      link: "/contact",
      gradient: "from-indigo-600/20 to-indigo-500/10",
      borderColor: "border-indigo-500/20",
      iconBg: "bg-indigo-500/10",
      iconColor: "text-indigo-400",
    },
    {
      icon: Shield,
      title: "Secure Partnership",
      description: "Enterprise-grade security and NDA-ready processes for high-stakes government and private contracts.",
      link: "/contact",
      gradient: "from-sky-600/20 to-sky-500/10",
      borderColor: "border-sky-500/20",
      iconBg: "bg-sky-500/10",
      iconColor: "text-sky-400",
    },
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
            <span className="text-blue-400">Infrastructure?</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full" />
          <p className="text-lg sm:text-xl text-blue-100/60 leading-relaxed max-w-2xl mx-auto">
            We don't just write documentation; we build the governance framework for your digital future.
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
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className={`group relative p-8 rounded-3xl bg-gradient-to-br ${card.gradient} ${card.borderColor} border backdrop-blur-sm overflow-hidden cursor-pointer`}
              onClick={() => window.location.href = card.link}
            >
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className={`w-16 h-16 rounded-2xl ${card.iconBg} ${card.borderColor} border flex items-center justify-center mb-6 ${card.iconColor}`}
              >
                <card.icon className="w-8 h-8" />
              </motion.div>
              
              <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors mb-3">
                {card.title}
              </h3>
              <p className="text-blue-200/50 text-sm leading-relaxed mb-6">
                {card.description}
              </p>
              
              <div className="flex items-center text-sm font-semibold text-blue-400 group/btn">
                Connect <ArrowRight className="ml-1 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

