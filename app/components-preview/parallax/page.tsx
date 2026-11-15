"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import ParallaxHeroImagesDemo from "@/components/parallax-hero-images-demo"

export default function ParallaxPreviewPage() {
  const { theme, setTheme } = useTheme()
  const previous = useRef(theme ?? "dark")
  const [mounted,setMounted] = useState(false)
  const restore = useRef(setTheme)
  restore.current = setTheme
  useEffect(()=>{setMounted(true);return ()=>restore.current(previous.current)},[])
  return <><div className="fixed left-4 top-4 z-50 flex items-center gap-2 rounded-lg border border-neutral-300 bg-white p-2 text-xs text-neutral-900 shadow-sm dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100"><Link href="/" className="px-2 py-1">← ASBAE</Link><button type="button" onClick={()=>setTheme("light")} disabled={!mounted} aria-pressed={mounted && theme==="light"} className="rounded border border-neutral-300 px-2 py-1 dark:border-neutral-700">Light</button><button type="button" onClick={()=>setTheme("dark")} disabled={!mounted} aria-pressed={mounted && theme==="dark"} className="rounded border border-neutral-300 px-2 py-1 dark:border-neutral-700">Dark</button></div><ParallaxHeroImagesDemo/></>
}
