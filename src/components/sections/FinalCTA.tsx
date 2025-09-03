import React from "react";
import { Button } from "@/components/ui/button";

const FinalCTA: React.FC = () => {
  return (
    <section id="call" className="border-t">
      <div className="container mx-auto py-16">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-primary p-8 text-center text-white shadow-xl">
          <div className="relative z-10">
            <h2 className="text-3xl font-semibold">Your Leadership Legacy Starts Now</h2>
            <p className="mx-auto mt-3 max-w-2xl opacity-90">
              The women who transform their leadership don't wait for permission. They take action. Today is your day to lead anyway.
            </p>
            
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
                <a href="https://calendly.com/ameconsulting/coach-session" target="_blank" rel="noopener noreferrer">
                  CLAIM YOUR SPOT - Book FREE Discovery Call
                </a>
              </Button>
              <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10" asChild>
                <a href="mailto:amedwards@ameconsulting.ca">Email amedwards@ameconsulting.ca</a>
              </Button>
            </div>
            
            <p className="mt-6 text-sm opacity-75">
              You've carried everyone else for years. Now it's time to invest in you.
            </p>
          </div>
          
          <div className="pointer-events-none absolute -inset-10 bg-gradient-to-r from-white/10 to-transparent opacity-20" />
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;