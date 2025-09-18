import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Vision: React.FC = () => {
  const outcomes = [
    {
      title: "Presence that commands respect",
      description: "Show up and be recognized for your expertise."
    },
    {
      title: "Voice with courageous clarity",
      description: "Speak in high-stakes rooms without shrinking."
    },
    {
      title: "Influence under pressure",
      description: "Move decisions and people with strategic impact."
    },
    {
      title: "Leadership that sustains you",
      description: "Results without burnout; integrity without compromise."
    },
    {
      title: "A leadership legacy",
      description: "That opens space for others."
    }
  ];

  return (
    <section id="vision" className="border-t bg-gradient-primary/5">
      <div className="container mx-auto py-16">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Imagine Leadership That Feels Like This</h2>
        </div>
        
        <div className="mx-auto mt-12 max-w-4xl">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1">
            {outcomes.map((outcome, index) => (
              <div key={index} className="flex items-start gap-4 p-4">
                <div className="mt-2 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">{outcome.title}</h3>
                  <p className="text-muted-foreground">{outcome.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mx-auto mt-12 text-center">
            <p className="text-lg text-muted-foreground mb-8">
              If you're ready to lead without losing yourself, you're in the right place.
            </p>
            <Button variant="hero" size="lg" asChild>
              <a href="#application">Book your complimentary discovery call →</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;