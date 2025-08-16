"use client";
import { ArrowRight, Play } from "lucide-react";
import type React from "react";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { gsapAnimations } from "@/lib/gsap-animations";
import { viewTransition } from "@/lib/view-transitions";
import DarkVeil from "@/lib/Backgrounds/DarkVeil/DarkVeil";
import GradientText from "@/lib/TextAnimations/GradientText/GradientText";

export default function Hero() {
  useEffect(() => {
    gsapAnimations.initAllAnimations();

    return () => {
      gsapAnimations.cleanup();
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
          speed={0.3}
          scanlineFrequency={0}
          warpAmount={0}
          resolutionScale={1}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-12 hero-content max-w-6xl mx-auto">
          <div className="space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight">
              <span className="hero-title-line text-foreground block mb-4">
                Your
              </span>
              <span className="hero-title-line text-foreground block mb-4">
                All In One
              </span>
              <div className="hero-title-line block mt-6">
                <GradientText
                  colors={["#ff6b35", "#f7931e", "#ffaa40", "#f7931e", "#ff6b35"]}
                  animationSpeed={4}
                  showBorder={false}
                  className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold"
                >
                  Software System
                </GradientText>
              </div>
            </h1>

            <p className="hero-description text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mt-8">
              Empowering businesses with innovative software solutions and
              comprehensive IT services. From custom development to digital
              transformation, we turn your vision into reality.
            </p>
          </div>

          <div className="hero-buttons flex flex-col sm:flex-row gap-8 justify-center items-center mt-12">
            <Button
              size="lg"
              className="group font-medium px-10 py-4 text-lg bg-gradient-to-r from-orange-500/80 via-amber-500/80 to-yellow-500/80 backdrop-blur-xl border border-orange-400/30 hover:border-orange-400/50 text-white hover:text-orange-100 shadow-lg hover:shadow-orange-400/30 transition-all duration-500 transform hover:scale-105 rounded-2xl hover:from-orange-600/90 hover:via-amber-600/90 hover:to-yellow-600/90 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-orange-400/20 before:via-amber-400/20 before:to-yellow-400/20 before:blur-xl before:-z-10 drop-shadow-[0_0_20px_rgba(255,165,0,0.3)] glow-orange"
              onClick={handleGetStartedClick}
            >
              Get Started
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>

            <Button
              size="sm"
              variant="outline"
              className="group font-normal px-8 py-3 text-base bg-white/5 backdrop-blur-xl border-2 border-yellow-400/40 hover:border-yellow-400/60 text-foreground/70 hover:text-foreground/90 transition-all duration-500 transform hover:scale-102 rounded-2xl hover:bg-white/10 relative"
              onClick={handleLearnMoreClick}
            >
              <Play className="mr-2 h-4 w-4 group-hover:scale-105 transition-transform duration-300" />
              Learn More
            </Button>
          </div>

          <div className="hero-stats flex flex-wrap justify-center gap-6 pt-16 text-sm text-muted-foreground/80">
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-background/5 backdrop-blur-sm border border-white/5">
              <div className="w-2 h-2 bg-orange-400/60 rounded-full animate-pulse" />
              <span>25+ Projects Delivered</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-background/5 backdrop-blur-sm border border-white/5">
              <div className="w-2 h-2 bg-amber-400/60 rounded-full animate-pulse" />
              <span>15+ Happy Clients</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-background/5 backdrop-blur-sm border border-white/5">
              <div className="w-2 h-2 bg-orange-400/60 rounded-full animate-pulse" />
              <span>Based in India</span>
            </div>
          </div>
        </div>
      </div>

      {/* Background effects - Full Width */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-background/80 via-transparent to-background/40 pointer-events-none" />
    </section>
  );
}
