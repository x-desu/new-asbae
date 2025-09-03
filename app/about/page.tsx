"use client";

import React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Sparkles, Users, Target, BarChart, Zap, Shield } from "lucide-react"
import { Accordion } from "@/components/about/accordion"
import Header from "@/components/header"

// Team section removed per request

const values = [
  {
    Icon: Zap,
    title: "Innovation",
    description: "We push boundaries and challenge the status quo to create breakthrough AI solutions.",
  },
  {
    Icon: Users,
    title: "Collaboration",
    description: "We believe the best results come from working together and sharing knowledge.",
  },
  {
    Icon: Shield,
    title: "Integrity",
    description: "We're committed to ethical AI practices and transparent operations.",
  },
  {
    Icon: BarChart,
    title: "Excellence",
    description: "We strive for the highest quality in everything we build and deliver.",
  },
]

const faqItems = [
  {
    title: "What makes your AI different from others?",
    content: "Our AI is built on proprietary algorithms that prioritize both performance and ethical considerations. We focus on explainable AI that delivers transparent and auditable results.",
  },
  {
    title: "How do you ensure data privacy?",
    content: "We implement enterprise-grade security measures including end-to-end encryption, regular security audits, and strict access controls to protect your data.",
  },
  {
    title: "What industries do you serve?",
    content: "Our solutions are versatile and can be applied across various industries including healthcare, finance, e-commerce, and more.",
  },
  {
    title: "How can I get started?",
    content: "Getting started is easy! Simply sign up for a free trial and our team will guide you through the onboarding process.",
  },
]

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-neutral-950 to-neutral-900">
      <Header />
      <div className="pt-20">
        {/* Animated Background Elements */}
        <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute left-1/2 top-1/3 -translate-x-1/2 h-80 w-80 rounded-full bg-yellow-400/15 blur-3xl animate-float"></div>
          <div className="absolute right-10 bottom-0 h-56 w-56 rounded-full bg-yellow-500/10 blur-3xl animate-float animation-delay-2000"></div>
          <div className="absolute left-20 top-1/4 h-64 w-64 rounded-full bg-yellow-300/10 blur-3xl animate-float animation-delay-4000"></div>
          {/* Decorative background pattern removed to avoid parser issues */}
        </div>

        {/* Hero Section */}
        <section className="py-16 md:py-24 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-yellow-500/10 backdrop-blur-sm text-yellow-300 text-sm font-medium mb-6 border border-yellow-500/20 shadow-sm"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                <span>About Our Journey</span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600 mb-6"
              >
                Building the Future of AI Solutions
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto mb-10"
              >
                We're on a mission to democratize AI technology and make it accessible to businesses of all sizes.
              </motion.p>
              
              <motion.div 
                className="mt-12"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-3xl shadow-lg shadow-black/30">
                  <div className="grid md:grid-cols-3 gap-8">
                    {[
                      { number: '10K+', label: 'Active Users' },
                      { number: '50+', label: 'Countries Served' },
                      { number: '99.9%', label: 'Uptime' },
                    ].map((stat, index) => (
                      <div key={index} className="text-center">
                        <div className="text-4xl font-bold text-yellow-400 mb-2">{stat.number}</div>
                        <div className="text-neutral-400">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Team Section removed */}

        {/* Mission & Values */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div 
                className="text-center mb-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-yellow-300">Our Mission & Values</h2>
                <p className="text-neutral-300">
                  We're on a mission to make AI accessible and beneficial for everyone, guided by our core values.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-8">
                <motion.div
                  className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl shadow-lg shadow-black/30"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="w-12 h-12 rounded-full bg-yellow-500/10 flex items-center justify-center mb-6 shadow-inner">
                    <Target className="w-6 h-6 text-yellow-400" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-neutral-100">Our Mission</h3>
                  <p className="text-neutral-300 mb-6">
                    To democratize AI technology and empower businesses of all sizes to leverage cutting-edge artificial intelligence to solve complex problems and drive innovation.
                  </p>
                  <div className="h-px bg-white/10 my-6"></div>
                  <h4 className="text-lg font-semibold mb-3 text-neutral-100">Our Vision</h4>
                  <p className="text-neutral-300">
                    We envision a future where AI is an accessible and trusted partner in every organization's journey towards digital transformation and success.
                  </p>
                </motion.div>

                <div className="space-y-6">
                  {values.map((value, index) => (
                    <motion.div
                      key={value.title}
                      className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-xl shadow-lg shadow-black/30 hover:shadow-xl hover:shadow-black/40 transition-all duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      whileHover={{ x: 5 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 p-2 bg-yellow-500/10 rounded-lg">
                          <value.Icon className="w-6 h-6 text-yellow-400" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold mb-1 text-neutral-100">{value.title}</h3>
                          <p className="text-neutral-300">{value.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gradient-to-b from-neutral-900/20 to-neutral-900/0">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-yellow-300">Frequently Asked Questions</h2>
              <p className="text-neutral-300 max-w-2xl mx-auto">
                Find answers to common questions about our platform and services.
              </p>
            </motion.div>

            <motion.div
              className="max-w-3xl mx-auto bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl shadow-lg shadow-black/30"
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
              <Link href="/legal/privacy" className="text-neutral-300 hover:text-yellow-300 transition-colors">Privacy</Link>
              <Link href="/legal/cookies" className="text-neutral-300 hover:text-yellow-300 transition-colors">Cookies</Link>
              <Link href="/legal/terms" className="text-neutral-300 hover:text-yellow-300 transition-colors">Terms</Link>
            </nav>
          </div>
        </footer>

        {/* Global styles removed; using Tailwind utility classes only */}
      </div>
    </div>
  )
}

export default AboutPage
