import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import coachingSession from "@/assets/coaching-session.jpg";

const steps = [
  {
    title: "Discovery Call",
    desc: "We explore your goals, context, and whether this partnership is the right fit.",
  },
  {
    title: "Strategy Intensive",
    desc: "A 75‑minute deep dive to map your 90‑day plan and align on outcomes.",
  },
  {
    title: "Biweekly Coaching",
    desc: "Nine 45‑minute private sessions with between‑session support.",
  },
  {
    title: "Integration & Legacy Map",
    desc: "We consolidate wins, codify your leadership rhythms, and map what’s next.",
  },
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="border-t bg-secondary/50">
      <div className="container mx-auto py-16">
        <div className="text-center">
          <h2 className="text-3xl font-semibold">How It Works</h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            A clear 4-step process to transform your leadership journey.
          </p>
        </div>
        
        <div className="mx-auto mt-12 grid max-w-6xl gap-8 lg:grid-cols-2">
          <div className="relative">
            <img
              src={coachingSession}
              alt="Professional coaching session in progress"
              className="rounded-xl shadow-lg"
              loading="lazy"
            />
            <div className="pointer-events-none absolute -inset-4 -z-10 rounded-2xl bg-gradient-primary opacity-20 blur-2xl" />
          </div>
          
          <div className="space-y-6">
            {steps.map((step, index) => (
              <Card key={index} className="group transition-all hover:shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-primary text-white font-bold text-sm">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">{step.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
