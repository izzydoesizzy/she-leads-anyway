import React from "react";
import GradientSpotlight from "@/components/marketing/GradientSpotlight";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/hero-coaching.jpg";

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative overflow-hidden">
      <GradientSpotlight className="relative">
        <div className="container mx-auto grid items-center gap-10 py-16 md:grid-cols-2 md:py-24">
          <div className="space-y-6 animate-enter">
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="secondary" className="px-3 py-1">
                Women of Colour Only
              </Badge>
              <Badge variant="outline" className="px-3 py-1">
                6-Month Private Experience
              </Badge>
            </div>
            
            <h1 className="text-4xl font-bold leading-tight md:text-5xl">
              Finally Lead Without <span className="text-gradient-primary">Losing Yourself</span>
            </h1>
            
            <p className="text-lg text-muted-foreground md:text-xl">
              The only executive coaching program that helps women of colour rise to power while staying whole — using the proven BOLD™ Method that's transformed 100+ leaders.
            </p>
            
            <div className="rounded-xl border-l-4 border-primary bg-secondary/50 p-4">
              <p className="font-medium text-primary">
                🎯 Lead with Purpose. Rise with Power. Stay Whole.
              </p>
            </div>
            
            <div className="flex flex-wrap items-center gap-4">
              <Button variant="hero" size="lg" className="hover-scale" asChild>
                <a href="https://calendly.com/ameconsulting/coach-session" target="_blank" rel="noopener noreferrer">
                  Book Your FREE Discovery Call
                </a>
              </Button>
              <a href="#proof" className="story-link text-sm">See 100+ client transformations →</a>
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
