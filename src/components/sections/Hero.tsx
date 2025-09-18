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
            
            <h1 className="text-4xl font-bold leading-tight md:text-5xl text-gradient-primary">
              She Leads Anyway™
            </h1>
            
            <h2 className="text-xl font-semibold text-muted-foreground md:text-2xl">
              Executive Coaching for Women of Colour in Leadership
            </h2>
            
            <p className="text-lg font-medium md:text-xl">
              Lead with Purpose. Rise with Power. Stay Whole.
            </p>
            
            <p className="text-base text-muted-foreground">
              Backed by 30+ years of corporate leadership and coaching expertise — trusted by women of colour leaders navigating high-stakes spaces with authenticity.
            </p>
            
            <div className="rounded-xl border-l-4 border-destructive bg-destructive/10 p-4">
              <p className="font-semibold text-destructive text-sm">
                ⚠️ Limited spots available for the next cohort. Apply to secure your spot.
              </p>
            </div>
            
            <div className="flex flex-wrap items-center gap-4">
              <Button variant="hero" size="lg" className="hover-scale pulse" asChild>
                <a href="https://calendly.com/ameconsulting/coach-session" target="_blank" rel="noopener noreferrer">
                  👉 Book Your Complimentary Discovery Call
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
