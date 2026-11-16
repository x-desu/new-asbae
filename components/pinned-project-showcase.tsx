"use client"

import { useEffect, useRef, useState } from "react"
import ProjectWorkspace, { workspaceViews } from "@/components/project-workspace"
import { ArrowDown, ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { LinkPreview } from "@/components/ui/link-preview"
import { motion, useScroll, useSpring, useTransform } from "motion/react"

export default function PinnedProjectShowcase() {
  const track = useRef<HTMLDivElement>(null)
  const stage = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)
  const [reduced, setReduced] = useState(false)
  const { scrollYProgress: entry } = useScroll({ target: track, offset: ["start end", "start 92px"] })
  const smoothEntry = useSpring(entry, { stiffness: 160, damping: 32, restDelta: .0001 })
  const entryScale = useTransform(smoothEntry, [0, .9, 1], [.82, 1, 1])
  const entryTilt = useTransform(smoothEntry, [0, .9, 1], [24, 0, 0])
  const entryY = useTransform(smoothEntry, [0, .9, 1], [110, 0, 0])
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)")
    const sync = () => setReduced(preference.matches)
    sync(); preference.addEventListener("change",sync)
    return ()=>preference.removeEventListener("change",sync)
  }, [])
  useEffect(()=>{
    if(reduced) return
    let frame = 0
    const update = ()=>{
      frame=0
      const el=track.current, sticky=stage.current
      if(!el||!sticky) return
      const top = window.innerHeight < 650 ? 76 : 92
      const range=el.offsetHeight-sticky.offsetHeight
      const progress=Math.min(1,Math.max(0,(top-el.getBoundingClientRect().top)/Math.max(range,1)))
      const index=Math.min(2,Math.floor(progress*3))
      setActive(current=>current===index?current:index)
      el.style.setProperty("--showcase-progress",String(progress))
    }
    const onScroll=()=>{ if(!frame) frame=requestAnimationFrame(update) }
    update(); window.addEventListener("scroll",onScroll,{passive:true}); window.addEventListener("resize",onScroll)
    return ()=>{cancelAnimationFrame(frame);window.removeEventListener("scroll",onScroll);window.removeEventListener("resize",onScroll)}
  },[reduced])
  const select=(index:number)=>{
    if(reduced||!track.current||!stage.current){setActive(index);return}
    const top=window.innerHeight<650?76:92
    const range=track.current.offsetHeight-stage.current.offsetHeight
    const destination=track.current.getBoundingClientRect().top+window.scrollY-top+range*((index+.12)/3)
    if(window.__ASBAE_LENIS__)window.__ASBAE_LENIS__.scrollTo(destination,{duration:.65})
    else window.scrollTo({top:destination,behavior:"smooth"})
  }
  return (
    <section id="work" className="pinned-showcase" aria-label="Vidhayak Connect project showcase">
      <div ref={track} className={`showcase-track ${reduced?"is-reduced":""}`}>
        <div ref={stage} className="showcase-sticky">
          <div className="showcase-caption"><div><span className="saas-eyebrow">ASBAE IN ACTION</span><h2><LinkPreview url="https://vidhayakconnect.in/" isStatic imageSrc="/images/vidhayak-connect-preview.jpg" width={320} height={200} className="showcase-project-link">Vidhayak Connect ↗</LinkPreview><span> / MLA office workspace</span></h2></div><Link href="/contact">Discuss a similar project <ArrowUpRight size={14} aria-hidden/></Link></div>
          <motion.div className="showcase-window-entry" style={reduced ? undefined : { scale: entryScale, rotateX: entryTilt, y: entryY }}>
            <ProjectWorkspace active={active} onSelect={select}/>
          </motion.div>
          <div className="showcase-story"><div className="showcase-count">0{active+1}<span>/ 03</span></div><div className="showcase-story-copy" aria-live="polite"><h3>{workspaceViews[active].title}</h3><p>{workspaceViews[active].description}</p></div><div className="showcase-controls" aria-label="Choose showcase screen">{workspaceViews.map((view,i)=><button key={view.id} type="button" onClick={()=>select(i)} aria-label={`Show ${view.label}`} aria-pressed={active===i}><span/> <span className="showcase-control-label">{view.label}</span></button>)}</div><span className="showcase-scroll-hint">Scroll to explore <ArrowDown size={13} aria-hidden/></span></div>
          <div className="showcase-progress" aria-hidden><span/></div>
        </div>
      </div>
    </section>
  )
}
