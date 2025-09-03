import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Vision: React.FC = () => {
  const outcomes = [
    {
      title: "Executive Presence That Commands Respect",
      description: "Walk into any room knowing you belong there — and having everyone else know it too.",
      icon: "👑"
    },
    {
      title: "Courageous Voice Without Compromise",
      description: "Speak up in high-stakes conversations with confidence, not fear of being labeled.",
      icon: "🎯"
    },
    {
      title: "Authentic Leadership Style",
      description: "Lead in a way that feels true to you — no more code-switching or shrinking.",
      icon: "✨"
    },
    {
      title: "Sustainable Success",
      description: "Achieve your goals without burning out or sacrificing your well-being.",
      icon: "🌟"
    },
    {
      title: "Legacy Leadership",
      description: "Create the change you want to see and pave the way for others like you.",
      icon: "🚀"
    },
    {
      title: "Deep Inner Peace",
      description: "Finally feel whole in your leadership — no more imposter syndrome.",
      icon: "🕊️"
    }
  ];

  return (
    <section id="vision" className="border-t bg-gradient-primary/5">
      <div className="container mx-auto py-16">
        <div className="text-center">
          <Badge className="mb-4 bg-gradient-primary text-white">Your Future Awaits</Badge>
          <h2 className="text-4xl font-bold">Imagine Leading Like This...</h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
            What if you could have it all — the influence, the impact, AND your integrity intact?
          </p>
        </div>
        
        <div className="mx-auto mt-12 grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {outcomes.map((outcome, index) => (
            <Card key={index} className="group border-primary/20 transition-all hover:shadow-xl hover:-translate-y-2 hover:border-primary/40">
              <CardContent className="p-6 text-center">
                <div className="mb-4 text-4xl">{outcome.icon}</div>
                <h3 className="font-semibold text-lg mb-2">{outcome.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{outcome.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mx-auto mt-12 max-w-3xl text-center">
          <div className="rounded-2xl border border-primary/30 bg-gradient-primary/10 p-8">
            <h3 className="text-2xl font-semibold text-primary mb-4">
              This isn't just a dream — it's your destiny.
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Every successful woman of colour leader has walked this path. The only difference? They had the right guide, the right framework, and the right time to make the leap.
            </p>
            <p className="mt-4 font-medium text-primary">
              Your time is now.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;