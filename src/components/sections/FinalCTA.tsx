import React from "react";
import { Button } from "@/components/ui/button";

const FinalCTA: React.FC = () => {
  return (
    <section id="call" className="border-t">
      <div className="container mx-auto py-3 sm:py-[10px]">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-primary p-4 text-center text-white shadow-xl sm:p-8 sm:py-[25px]">
          <div className="relative z-10 flex flex-col items-center justify-center">
            
            
            <h2 className="text-xl font-bold mb-2 sm:text-2xl md:text-3xl">Decision Time: Stay Stuck or Transform</h2>
            
            <p className="mx-auto max-w-2xl opacity-90 mb-2 text-sm sm:text-base">You've carried everyone else for years. Now it's time to invest in you.</p>
            <p className="font-semibold text-base mb-4 sm:text-lg sm:mb-6">
              What will you choose?
            </p>
            
            <div className="flex flex-col gap-3 mb-4 w-full max-w-md sm:flex-row sm:justify-center sm:gap-4 sm:mb-6 sm:max-w-none">
              <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-white/90 font-bold pulse w-full sm:w-auto text-[10px] sm:text-xs md:text-sm px-2 sm:px-3 md:px-4 leading-tight" asChild>
                <a href="https://calendly.com/ameconsulting/30-minute-discovery-meeting" target="_blank" rel="noopener noreferrer">YES! I CHOOSE TRANSFORMATION → Book My Discovery Call</a>
              </Button>
            </div>
            
            
          </div>
          
          <div className="pointer-events-none absolute -inset-10 bg-gradient-to-r from-white/10 to-transparent opacity-20" />
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;