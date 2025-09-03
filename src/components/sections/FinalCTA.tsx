import React from "react";
import { Button } from "@/components/ui/button";

const FinalCTA: React.FC = () => {
  return (
    <section id="call" className="border-t">
      <div className="container mx-auto py-16">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-primary p-8 text-center text-white shadow-xl">
          <div className="relative z-10">
            <div className="bg-white/20 text-white px-4 py-2 rounded-full inline-block mb-4">
              <span className="font-bold">⏰ DEADLINE: Applications close February 15th</span>
            </div>
            
            <h2 className="text-3xl font-bold mb-2">Decision Time: Stay Stuck or Transform</h2>
            <p className="text-xl font-semibold mb-4">
              Last 3 spots for Q1 2024 cohort
            </p>
            <p className="mx-auto max-w-2xl opacity-90 mb-2">
              147 women just like you chose transformation. They're now leading with confidence, earning 6-figures, and sleeping peacefully at night.
            </p>
            <p className="font-semibold text-lg mb-6">
              What will you choose?
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-white/90 font-bold pulse" asChild>
                <a href="https://calendly.com/ameconsulting/coach-session" target="_blank" rel="noopener noreferrer">
                  YES! I CHOOSE TRANSFORMATION → Book My Strategy Session
                </a>
              </Button>
            </div>
            
            <div className="text-center border-t border-white/20 pt-6">
              <p className="text-lg font-semibold mb-2">100% RISK-FREE GUARANTEE</p>
              <p className="text-sm opacity-90">
                If you don't see measurable progress in your leadership confidence within 60 days, I'll refund every penny. You have nothing to lose except another year of staying small.
              </p>
            </div>
          </div>
          
          <div className="pointer-events-none absolute -inset-10 bg-gradient-to-r from-white/10 to-transparent opacity-20" />
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;