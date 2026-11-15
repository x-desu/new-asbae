"use client";

import * as React from "react";
import { motion, MotionConfig, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";
import {
  ChevronRight,
  Search,
  FileText,
  ArrowUpRight,
  GitPullRequest,
} from "lucide-react";

const S = { type: "spring" as const, stiffness: 300, damping: 28 };
const S_SOFT = { type: "spring" as const, stiffness: 260, damping: 24 };

export interface ProductFeatureHeroProps {
  title?: string;
  description?: string;
  secondaryText?: React.ReactNode;
  ctaText?: string;
  ctaHref?: string;
  features?: {
    title: string;
    description: string;
    id?: string;
    detailTitle?: string;
    deliverables?: string[];
    steps?: string[];
    eyebrow?: string;
  }[];
  className?: string;
}

export function ProductFeatureHero({
  title = "Built for how you think",
  description = "An intelligent editor that understands your intent. Completions, refactors, and explanations surface exactly when you need them.",
  secondaryText,
  ctaText = "Get started",
  ctaHref = "#",
  features = [],
  className,
}: ProductFeatureHeroProps) {
  const reduced = useReducedMotion();
  const [active, setActive] = React.useState(0);
  const selected = features[active] ?? features[0];
  return (
    <MotionConfig reducedMotion="user"><section className={cn("", className)}>
      <div className="mx-auto w-full max-w-5xl p-6">
        <div className="grid items-center gap-12 pb-14 md:grid-cols-2">
          {/* ── Left ─────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...S, delay: 0 }}
          >
            <div className="max-w-md">
              <h2 className="text-balance text-4xl font-semibold text-foreground">
                {title}
              </h2>
              <p className="my-6 text-balance text-lg">{description}</p>
              <div className="product-feature-summary" aria-live="polite"><motion.p key={active} initial={reduced ? false : { opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reduced ? 0 : 0.28 }} className="text-muted-foreground">{selected.description}</motion.p></div>
              <a
                href={ctaHref}
                className="mt-8 inline-flex h-9 items-center justify-center gap-2 rounded-md border border-transparent bg-card px-4 py-2 pr-2 text-sm font-medium shadow-sm shadow-black/10 ring-1 ring-foreground/10 transition-colors duration-200 hover:bg-muted/50 dark:ring-foreground/15 dark:hover:bg-muted/50"
              >
                {ctaText}
                <ChevronRight className="size-4 opacity-50" />
              </a>
            </div>
          </motion.div>

          {/* ── Right ────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...S_SOFT, delay: 0.12 }}
            className="product-feature-preview relative flex items-start justify-center overflow-hidden rounded-2xl border border-border bg-muted/30 px-8 pt-10 dark:bg-muted/20"
          >
            <div className="product-feature-fade max-w-full">
              <motion.div key={active} initial={reduced ? false : { opacity: 0, y: 14, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: reduced ? 0 : 0.32, ease: [0.22, 1, 0.36, 1] }} className="w-[18rem] max-w-full rounded-xl bg-card p-1.5 shadow-lg border shadow-black/[0.06] ring-1 ring-border/50 dark:shadow-black/20">
                <div className="flex items-center gap-2.5 rounded-lg bg-muted/50 px-3 py-2">
                  <FileText className="size-3.5 shrink-0 text-foreground/40" strokeWidth={1.5}/>
                  <span className="text-[13px] text-foreground/70">{selected.title}</span>
                </div>
                <div className="mt-1.5">
                  <div className="px-3 pb-1 pt-2"><span className="text-[10px] font-medium uppercase tracking-widest text-foreground/40">What we deliver</span></div>
                  {selected.deliverables?.map(item=><div key={item} className="flex cursor-default items-start gap-2.5 rounded-lg px-3 py-1.5 transition-colors duration-150 hover:bg-muted/60"><FileText className="mt-0.5 size-3.5 shrink-0 text-foreground/30" strokeWidth={1.5}/><span className="text-[12px] tracking-tight text-foreground/80">{item}</span></div>)}
                  <div className="mx-3 my-1.5 h-px bg-border/50"/>
                  <div className="px-3 pb-1 pt-1"><span className="text-[10px] font-medium uppercase tracking-widest text-foreground/40">Delivery stages</span></div>
                  {selected.steps?.map((item,i)=><div key={item} className="flex cursor-default items-center gap-2.5 rounded-lg px-3 py-1.5 transition-colors duration-150 hover:bg-muted/60"><span className="w-3.5 shrink-0 text-[10px] text-foreground/35">0{i+1}</span><span className="text-[12px] tracking-tight text-foreground/75">{item}</span></div>)}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* ── Features ──────────────────────────────────── */}
        <div className="grid grid-cols-2 gap-6 border-t border-border/40 pt-8 lg:grid-cols-4 lg:gap-10">
          {features.map((feature, i) => (
            <motion.button
              type="button"
              aria-pressed={active === i}
              onClick={()=>setActive(i)}
              key={i}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
              transition={{ ...S, delay: 0.2 + i * 0.08 }}
              className="ruixen-feature-selector space-y-1 text-left rounded-md p-2 -m-2 transition-colors hover:bg-muted/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-400"
            >
              <p className="text-sm font-medium text-foreground">
                {feature.title}<span className={`ml-2 text-xs text-blue-300 ${active === i ? "opacity-100" : "opacity-0"}`} aria-hidden>{"↗"}</span>
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {feature.deliverables?.[0] ?? feature.description}
              </p>
            </motion.button>
          ))}
        </div>
      </div>
    </section></MotionConfig>
  );
}
