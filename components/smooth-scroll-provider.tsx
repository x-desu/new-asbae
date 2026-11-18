"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"
import Lenis from "lenis"

declare global {
  interface Window { __ASBAE_LENIS__?: Lenis }
}

export function SmoothScrollProvider() {
  const pathname = usePathname()
  useEffect(() => {
    const preference=window.matchMedia("(prefers-reduced-motion: reduce)")
    let instance: Lenis | undefined
    let frameId=0
    const stop=()=>{
      cancelAnimationFrame(frameId)
      if(instance){
        if(window.__ASBAE_LENIS__===instance) delete window.__ASBAE_LENIS__
        instance.destroy()
        instance=undefined
      }
    }
    const sync=()=>{
      stop()
      if(preference.matches) return
      window.__ASBAE_LENIS__?.destroy()
      // Match Brevity's duration and native wheel distance. Keep touch native
      // and let chat, menus, and other nested panels scroll independently.
      const lenis=new Lenis({
        duration:1.1,
        smoothWheel:true,
        syncTouch:false,
        anchors:true,
        allowNestedScroll:true,
      })
      instance=lenis
      window.__ASBAE_LENIS__=lenis
      void import("gsap/ScrollTrigger").then(({ScrollTrigger})=>{
        if(instance!==lenis) return
        lenis.on("scroll",ScrollTrigger.update)
        ScrollTrigger.refresh()
      })
      const raf=(time:number)=>{lenis.raf(time);frameId=requestAnimationFrame(raf)}
      frameId=requestAnimationFrame(raf)
    }
    sync()
    preference.addEventListener("change",sync)
    return ()=>{preference.removeEventListener("change",sync);stop()}
  }, [])
  useEffect(()=>{window.__ASBAE_LENIS__?.resize()},[pathname])
  return null
}
