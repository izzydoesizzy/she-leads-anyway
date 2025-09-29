import React from "react";
import GradientSpotlight from "@/components/marketing/GradientSpotlight";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
const heroImage = "/lovable-uploads/79947212-b061-4abb-8a2c-4eb1acc94457.png";
const Hero: React.FC = () => {
  return <section id="hero" className="relative overflow-hidden">
      <GradientSpotlight className="relative">
        <div className="container mx-auto grid items-center gap-6 py-12 md:grid-cols-2 md:gap-10 md:py-24">
          <div className="space-y-4 animate-enter md:space-y-6">
            <div className="flex flex-wrap gap-2 mb-3 sm:flex-nowrap">
              <Badge variant="secondary" className="px-2 py-1 text-xs whitespace-nowrap sm:px-3 sm:text-sm">
                Specialized for Women of Colour
              </Badge>
              <Badge variant="outline" className="px-2 py-1 text-xs whitespace-nowrap sm:px-3 sm:text-sm">
                6-Month Private Experience
              </Badge>
            </div>
            
            <h1 className="text-3xl font-bold leading-relaxed sm:text-4xl md:text-5xl text-gradient-primary py-2">
              She Leads Anyway™
            </h1>
            
            <h2 className="text-lg font-semibold text-muted-foreground sm:text-xl md:text-2xl">
              Executive Coaching for Women of Colour in Leadership
            </h2>
            
            <p className="text-base font-medium sm:text-lg md:text-xl">Lead with Purpose. Empower with Heart.</p>
            
            <p className="text-sm text-muted-foreground sm:text-base">Backed by 30+ years of corporate human resources leadership. Trusted by women of colour leaders and diverse professionals navigating high-stakes spaces with authenticity.</p>
            
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Button variant="hero" size="lg" className="hover-scale pulse w-full sm:w-auto text-sm sm:text-base" asChild>
                <a href="https://calendly.com/ameconsulting/30-minute-discovery-meeting" target="_blank" rel="noopener noreferrer">
                  👉 Book Your Complimentary Discovery Call
                </a>
              </Button>
              
            </div>
            
            
          </div>
          <div className="relative mt-6 md:mt-0">
            <img src={heroImage} alt="A confident woman of colour executive in a modern office — She Leads Anyway coaching" className="w-full h-auto rounded-xl shadow-xl ring-1 ring-border animate-scale-in" loading="eager" />
            <div className="pointer-events-none absolute -inset-10 -z-10 rounded-[2rem] bg-gradient-primary opacity-30 blur-3xl" aria-hidden />
          </div>
        </div>
      </GradientSpotlight>
    </section>;
};
export default Hero;