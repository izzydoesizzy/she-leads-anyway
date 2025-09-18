import React from "react";
import GradientSpotlight from "@/components/marketing/GradientSpotlight";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
const heroImage = "/lovable-uploads/79947212-b061-4abb-8a2c-4eb1acc94457.png";

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative overflow-hidden">
      <GradientSpotlight className="relative">
        <div className="container mx-auto grid items-center gap-10 py-16 md:grid-cols-2 md:py-24">
          <div className="space-y-6 animate-enter">
            <div className="flex flex-nowrap gap-2 mb-4">
              <Badge variant="secondary" className="px-3 py-1 whitespace-nowrap">
                Specialized for Women of Colour
              </Badge>
              <Badge variant="outline" className="px-3 py-1 whitespace-nowrap">
                6-Month Private Experience
              </Badge>
            </div>
            
            <h1 className="text-4xl font-bold leading-tight md:text-5xl">
              She Leads Anyway™ — Executive Coaching for Women of Colour in Leadership
            </h1>
            
            <p className="text-lg text-muted-foreground md:text-xl">
              The ONLY 6-month executive transformation that's helped 147 women of colour command $50K+ salary increases while reclaiming their authentic leadership voice — without burning out or losing themselves.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 text-sm font-medium">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-accent" />
                <span>147 leaders transformed</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-accent" />
                <span>Average $73K salary increase</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-accent" />
                <span>100% Success Rate</span>
              </div>
            </div>
            
            <div className="rounded-xl border-l-4 border-destructive bg-destructive/10 p-4">
              <p className="font-semibold text-destructive text-sm">
                ⚠️ DEADLINE WARNING: Only 3 spots left for Q1 2024 cohort. Applications close February 15th.
              </p>
            </div>
            
            <div className="flex flex-wrap items-center gap-4">
              <Button variant="hero" size="lg" className="hover-scale pulse" asChild>
                <a href="https://calendly.com/ameconsulting/coach-session" target="_blank" rel="noopener noreferrer">
                  CLAIM YOUR SPOT → FREE Strategy Session
                </a>
              </Button>
              <a href="#testimonials" className="story-link text-sm font-medium">Read 147+ transformation stories →</a>
            </div>
          </div>
          <div className="relative">
            <img
              src={heroImage}
              alt="A confident woman of colour executive in a modern office — She Leads Anyway coaching"
              className="rounded-xl shadow-xl ring-1 ring-border animate-scale-in"
              loading="eager"
            />
            <div className="pointer-events-none absolute -inset-10 -z-10 rounded-[2rem] bg-gradient-primary opacity-30 blur-3xl" aria-hidden />
          </div>
        </div>
      </GradientSpotlight>
    </section>
  );
};

export default Hero;
