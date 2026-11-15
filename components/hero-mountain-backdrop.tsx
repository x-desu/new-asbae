"use client"

import Image from "next/image"
import { useEffect } from "react"
import { motion, useMotionValue, useReducedMotion, useSpring } from "motion/react"

export default function HeroMountainBackdrop() {
  const reduced = useReducedMotion()
  const targetX = useMotionValue(0)
  const targetY = useMotionValue(0)
  const x = useSpring(targetX, { damping:30, stiffness:90 })
  const y = useSpring(targetY, { damping:30, stiffness:90 })
  useEffect(()=>{
    if(reduced) { targetX.set(0); targetY.set(0); return }
    if(!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return
    const move=(event:MouseEvent)=>{
      targetX.set((event.clientX/window.innerWidth-.5)*18)
      targetY.set((event.clientY/window.innerHeight-.5)*12)
    }
    const reset=()=>{targetX.set(0);targetY.set(0)}
    window.addEventListener("mousemove",move,{passive:true})
    window.addEventListener("blur",reset)
    return ()=>{window.removeEventListener("mousemove",move);window.removeEventListener("blur",reset)}
  },[reduced,targetX,targetY])
  return <div className="hero-mountain-backdrop" aria-hidden><motion.div style={reduced?undefined:{x,y}}><Image src="/images/asbae-mountain-hero.webp" alt="" fill priority sizes="100vw"/></motion.div></div>
}
