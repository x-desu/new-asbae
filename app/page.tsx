"use client"
import { useEffect } from "react"
import dynamic from "next/dynamic"
import Header from "@/components/header"
import SaaSHome from "@/components/saas-home"
import Footer from "@/components/footer"
import { viewTransition } from "@/lib/view-transitions"

const ChatWidget = dynamic(() => import("@/components/chat-widget"))
export default function Home() {
  useEffect(() => {
    if (!window.location.hash) return
    const timer = window.setTimeout(() => { void viewTransition.transitionToSection(window.location.hash, { duration: 600 }) }, 400)
    return () => window.clearTimeout(timer)
  }, [])
  return <main className="saas-site asbae-experience relative z-[2] min-h-screen"><Header/><SaaSHome/><Footer/><ChatWidget/></main>
}
