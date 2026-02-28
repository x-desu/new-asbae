"use client";

import React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Sparkles, Target, Eye, Users, Shield, BarChart, Layers } from "lucide-react"
import { Accordion } from "@/components/about/accordion"
import Header from "@/components/header"
import GradientText from "@/lib/TextAnimations/GradientText/GradientText"
import DarkVeil from "@/lib/Backgrounds/DarkVeil/DarkVeil"

const approachItems = [
  {
    Icon: Users,
    title: "Client-Centric Design",
    description: "Tailored solutions for your workflows",
  },
  {
    Icon: Shield,
    title: "Secure & Compliant Systems",
    description: "Advanced encryption and audit-ready platforms",
  },
  {
    Icon: Layers,
    title: "Scalable Technology",
    description: "Solutions that grow with your organization",
  },
  {
    Icon: BarChart,
    title: "Insight & Intelligence",
    description: "Dashboards, analytics, and KPI tracking for data-driven decisions",
  },
]

const faqItems = [
  {
    title: "What industries do you serve?",
    content: "We serve organizations across multiple sectors including enterprise, government, healthcare, education, and logistics — anyone looking to streamline operations with intelligent IT solutions.",
  },
  {
    title: "How do you ensure data security?",
    content: "We implement enterprise-grade security measures including end-to-end encryption, regular security audits, role-based access controls, and compliance-ready platforms to protect your data.",
  },
  {
    title: "Can your solutions scale with our organization?",
    content: "Absolutely. Our cloud-native architecture and modular SaaS platforms are designed to scale seamlessly as your organization grows, from startups to large enterprises.",
  },
  {
    title: "How can we get started?",
    content: "Simply reach out through our contact page or click 'Get Started'. Our team will schedule a consultation to understand your needs and propose a tailored solution.",
  },
]

const AboutPage = () => {
  return (
    <div className="min-h-screen relative">
      {/* DarkVeil Background - fixed full-screen */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
      >
        <DarkVeil
          hueShift={28}
          noiseIntensity={0}
          scanlineIntensity={0}
          speed={0.4}
          scanlineFrequency={0}
          warpAmount={1}
          resolutionScale={1}
        />
      </div>
      {/* Dark overlay for text readability */}
      <div className="fixed inset-0 bg-black/40" style={{ zIndex: 1 }}></div>

      {/* Content layer */}
      <div className="relative" style={{ zIndex: 2 }}>
        <Header />
        <div className="pt-20">

          {/* Hero Section */}
          <section className="py-16 md:py-24 relative">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-blue-500/10 backdrop-blur-sm text-blue-300 text-sm font-medium mb-6 border border-blue-500/20 shadow-sm"
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  <span>About Us</span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-normal pb-1"
                >
                  <span className="text-foreground">Empowering Organizations with</span>
                  <br />
                  <GradientText
                    colors={["#3b82f6", "#6366f1", "#60a5fa", "#6366f1", "#3b82f6"]}
                    animationSpeed={8}
                    showBorder={false}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold"
                  >
                    Intelligent IT Solutions
                  </GradientText>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-lg md:text-xl text-neutral-300 max-w-3xl mx-auto mb-10 leading-relaxed"
                >
                  At ASBAE TECHNOLOGIES, we help organisations streamline operations, secure data, and deliver seamless digital services. Our solutions combine enterprise IT, SaaS platforms, and cloud infrastructure to create a unified, scalable, and future-ready ecosystem.
                </motion.p>
              </div>
            </div>
          </section>

          {/* Mission & Vision */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Mission Card */}
                  <motion.div
                    className="relative group bg-white/[0.03] backdrop-blur-lg border border-white/10 p-8 md:p-10 rounded-2xl shadow-lg shadow-black/30 hover:border-blue-500/30 transition-all duration-500"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative z-10">
                      <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 border border-blue-500/20">
                        <Target className="w-6 h-6 text-blue-400" />
                      </div>
                      <h3 className="text-2xl font-bold mb-4 text-foreground">Our Mission</h3>
                      <p className="text-neutral-300 leading-relaxed">
                        To empower enterprises and organizations with intelligent, secure, and scalable IT solutions that streamline workflows, enhance decision-making, and deliver seamless digital experiences.
                      </p>
                    </div>
                  </motion.div>

                  {/* Vision Card */}
                  <motion.div
                    className="relative group bg-white/[0.03] backdrop-blur-lg border border-white/10 p-8 md:p-10 rounded-2xl shadow-lg shadow-black/30 hover:border-indigo-500/30 transition-all duration-500"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                  >
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative z-10">
                      <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center mb-6 border border-indigo-500/20">
                        <Eye className="w-6 h-6 text-indigo-400" />
                      </div>
                      <h3 className="text-2xl font-bold mb-4 text-foreground">Our Vision</h3>
                      <p className="text-neutral-300 leading-relaxed">
                        To become the leading provider of integrated IT, SaaS, and cloud solutions that transform the way organizations operate, enabling a future-ready, data-driven, and digitally secure ecosystem across all sectors.
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </section>

          {/* Our Approach */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto">
                <motion.div
                  className="text-center mb-14"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Our Approach</h2>
                  <p className="text-neutral-400 max-w-2xl mx-auto">
                    We combine deep expertise with modern technology to deliver solutions that make a real difference.
                  </p>
                </motion.div>

                <div className="grid sm:grid-cols-2 gap-6">
                  {approachItems.map((item, index) => (
                    <motion.div
                      key={item.title}
                      className="relative group bg-white/[0.03] backdrop-blur-lg border border-white/10 p-6 md:p-8 rounded-2xl shadow-lg shadow-black/30 hover:border-blue-500/20 transition-all duration-500"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="relative z-10 flex items-start space-x-4">
                        <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                          <item.Icon className="w-5 h-5 text-blue-400" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold mb-1.5 text-foreground">{item.title}</h3>
                          <p className="text-neutral-400 text-sm leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <motion.div
                className="text-center mb-14"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Frequently Asked Questions</h2>
                <p className="text-neutral-400 max-w-2xl mx-auto">
                  Find answers to common questions about our platform and services.
                </p>
              </motion.div>

              <motion.div
                className="max-w-3xl mx-auto bg-white/[0.03] backdrop-blur-lg border border-white/10 p-8 rounded-2xl shadow-lg shadow-black/30"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Accordion items={faqItems} />
              </motion.div>
            </div>
          </section>

          {/* Footer */}
          <footer className="border-t border-white/10 mt-10">
            <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-neutral-400 text-sm">© {new Date().getFullYear()} ASBAE. All rights reserved.</p>
              <nav className="flex items-center gap-6 text-sm">
                <Link href="/legal/privacy" className="text-neutral-300 hover:text-blue-400 transition-colors">Privacy</Link>
                <Link href="/legal/cookies" className="text-neutral-300 hover:text-blue-400 transition-colors">Cookies</Link>
                <Link href="/legal/terms" className="text-neutral-300 hover:text-blue-400 transition-colors">Terms</Link>
              </nav>
            </div>
          </footer>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
