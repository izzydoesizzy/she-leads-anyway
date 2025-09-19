import React from "react";
import { Button } from "@/components/ui/button";
const FinalCTA: React.FC = () => {
  return <section id="call" className="border-t">
      <div className="container mx-auto py-[10px]">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-primary p-8 text-center text-white shadow-xl py-[25px]">
          <div className="relative z-10 flex flex-col items-center justify-center">
            
            
            <h2 className="text-3xl font-bold mb-2">Decision Time: Stay Stuck or Transform</h2>
            
            <p className="mx-auto max-w-2xl opacity-90 mb-2">You’ve carried everyone else for years. Now it’s time to invest in you.</p>
            <p className="font-semibold text-lg mb-6">
              What will you choose?
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-white/90 font-bold pulse" asChild>
                <a href="https://calendly.com/ameconsulting/30-minute-discovery-meeting" target="_blank" rel="noopener noreferrer">YES! I CHOOSE TRANSFORMATION → Book My Discovery Call</a>
              </Button>
            </div>
            
            
          </div>
          
          <div className="pointer-events-none absolute -inset-10 bg-gradient-to-r from-white/10 to-transparent opacity-20" />
        </div>
      </div>
    </section>;
};
export default FinalCTA;