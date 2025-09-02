"use client";
import { ArrowRight, Play } from "lucide-react";
import type React from "react";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { gsapAnimations } from "@/lib/gsap-animations";
import { viewTransition } from "@/lib/view-transitions";
import DarkVeil from "@/lib/Backgrounds/DarkVeil/DarkVeil";
import GradientText from "@/lib/TextAnimations/GradientText/GradientText";

export default function Hero() {
  // Refs for animations
  const title1Ref = useRef<HTMLSpanElement>(null);
  const title2Ref = useRef<HTMLSpanElement>(null);
  const gradientTextRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const ctaContainerRef = useRef<HTMLDivElement>(null);
  const primaryButtonRef = useRef<HTMLButtonElement>(null);
  const secondaryButtonRef = useRef<HTMLButtonElement>(null);
  const statsContainerRef = useRef<HTMLDivElement>(null);
  const statRefs = useRef<HTMLDivElement[]>([]);
  const setStatRef = (el: HTMLDivElement | null, index: number) => {
    if (el) statRefs.current[index] = el;
  };
  useEffect(() => {
    gsapAnimations.initAllAnimations();
    
    // Create timeline for hero animations - faster sequence
    const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });
    
    // Set initial states
    gsap.set([title1Ref.current, title2Ref.current], { y: 20, opacity: 0 });
    gsap.set(gradientTextRef.current, { y: 25, opacity: 0, scale: 0.97 });
    gsap.set(descriptionRef.current, { y: 15, opacity: 0 });
    gsap.set(ctaContainerRef.current, { opacity: 0, y: 20 });
    gsap.set([primaryButtonRef.current, secondaryButtonRef.current], { y: 15, opacity: 0 });
    gsap.set(statsContainerRef.current, { opacity: 0, y: 15 });
    gsap.set(statRefs.current, { y: 10, opacity: 0 });
    
    // Faster animation sequence
    tl.to(title1Ref.current, { y: 0, opacity: 1, duration: 0.5 })
      .to(title2Ref.current, { y: 0, opacity: 1, duration: 0.4 }, '-=0.2')
      .to(gradientTextRef.current, { 
        y: 0, 
        opacity: 1, 
        scale: 1, 
        duration: 0.5,
        ease: 'back.out(1.5)'
      }, '-=0.2')
      .to(descriptionRef.current, { 
        y: 0, 
        opacity: 1, 
        duration: 0.4 
      }, '-=0.2')
      .to(ctaContainerRef.current, { 
        opacity: 1, 
        y: 0, 
        duration: 0.4 
      }, '-=0.2')
      .to([primaryButtonRef.current, secondaryButtonRef.current], { 
        y: 0, 
        opacity: 1, 
        duration: 0.4,
        stagger: 0.05,
        ease: 'back.out(1.2)'
      }, '-=0.1')
      // Animate stats container and items together
      .to(statsContainerRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.4
      }, '-=0.2')
      // Animate individual stats with minimal stagger
      .to(statRefs.current, {
        y: 0,
        opacity: 0.9,
        duration: 0.3,
        stagger: 0.05,
        ease: 'power2.out'
      }, '-=0.2');

    return () => {
      gsapAnimations.cleanup();
      tl.kill();
    };
  }, []);

  const handleGetStartedClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    await viewTransition.transitionToSection("#services", { duration: 800 });
  };

  const handleLearnMoreClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    await viewTransition.transitionToSection("#about", { duration: 800 });
  };

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center"
      style={{ margin: 0, padding: 0 }}
    >
      {/* Dark Veil Background - Full Width */}
      <div
        className="absolute inset-0 w-full h-full overflow-hidden"
        style={{
          width: "100%",
          height: "100%",
          margin: 0,
          padding: 0,
        }}
      >
        <DarkVeil
          hueShift={201}
          noiseIntensity={0}
          scanlineIntensity={0}
          speed={0.5}
          scanlineFrequency={0}
          warpAmount={1}
          resolutionScale={1}
        />
      </div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10 py-16 md:py-24">
        <div className="text-center space-y-10 md:space-y-14 max-w-4xl mx-auto">
          <div className="space-y-6 md:space-y-8">
            <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl font-bold leading-tight tracking-tight">
              <span ref={title1Ref} className="hero-title-line text-foreground block mb-3 md:mb-4">
                Your
              </span>
              <span ref={title2Ref} className="hero-title-line text-foreground block mb-3 md:mb-4">
                All In One
              </span>
              <div ref={gradientTextRef} className="hero-title-line block mt-6 md:mt-8">
                <GradientText
                  colors={["#ff6b35", "#f7931e", "#ffaa40", "#f7931e", "#ff6b35"]}
                  animationSpeed={4}
                  showBorder={false}
                  className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl font-bold"
                >
                  Software System
                </GradientText>
              </div>
            </h1>

            <p ref={descriptionRef} className="hero-description text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mt-8 md:mt-10">
              Empowering businesses with innovative software solutions and
              comprehensive IT services. From custom development to digital
              transformation, we turn your vision into reality.
            </p>
          </div>

          <div ref={ctaContainerRef} className="flex flex-col sm:flex-row gap-5 md:gap-6 justify-center items-center mt-10 md:mt-14 px-4">
            <Button
              ref={primaryButtonRef}
              size="lg"
              className="group w-full max-w-xs sm:w-auto font-medium px-8 py-4 text-lg md:text-xl bg-gradient-to-r from-orange-500/80 via-amber-500/80 to-yellow-500/80 hover:from-orange-600/90 hover:via-amber-600/90 hover:to-yellow-600/90 border border-orange-400/30 hover:border-orange-400/50 text-white hover:text-orange-100 shadow-lg hover:shadow-orange-400/30 transition-all duration-300 transform hover:scale-105 rounded-2xl relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-orange-400/20 before:via-amber-400/20 before:to-yellow-400/20 before:blur-xl before:-z-10 drop-shadow-[0_0_20px_rgba(255,165,0,0.3)] glow-orange"
              onClick={handleGetStartedClick}
            >
              Get Started
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>

            <Button
              ref={secondaryButtonRef}
              size="lg"
              variant="outline"
              className="group w-full max-w-xs sm:w-auto font-medium px-8 py-4 text-lg md:text-xl bg-white/5 backdrop-blur-xl border-2 border-yellow-400/40 hover:border-yellow-400/60 text-foreground/90 hover:text-foreground transition-all duration-300 transform hover:scale-105 rounded-2xl hover:bg-white/10"
              onClick={handleLearnMoreClick}
            >
              <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
              Learn More
            </Button>
          </div>

          {/* Stats Section */}
          <div ref={statsContainerRef} className="mt-10 md:mt-12 flex flex-wrap justify-center gap-3 md:gap-5 text-sm md:text-base text-muted-foreground/80">
            {[
              { label: '25+ Projects', color: 'bg-orange-400/60' },
              { label: '15+ Clients', color: 'bg-amber-400/60' },
              { label: '10+ Years Experience', color: 'bg-yellow-400/60' },
              { label: '100% Satisfaction', color: 'bg-green-400/60' }
            ].map((stat, index) => (
              <div 
                key={stat.label}
                ref={el => setStatRef(el, index)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-background/5 backdrop-blur-sm border border-white/5 hover:bg-white/5 transition-colors"
              >
                <div className={`w-1.5 h-1.5 ${stat.color} rounded-full animate-pulse flex-shrink-0`} />
                <span className="whitespace-nowrap">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Background effects - Full Width */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-background/80 via-transparent to-background/40 pointer-events-none" />
    </section>
  );
}
