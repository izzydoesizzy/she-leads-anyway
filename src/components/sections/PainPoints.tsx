import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const PainPoints: React.FC = () => {
  const struggles = [
    {
      title: "Unspoken Rules & Code-Switching",
      description: "Constantly adapting your communication style and energy to fit in drains your authentic self.",
      icon: "🎭"
    },
    {
      title: "Emotional Load of Team Dynamics", 
      description: "Carrying the weight of racialized expectations while managing complex team relationships.",
      icon: "💭"
    },
    {
      title: "Fear of Being 'Difficult'",
      description: "Second-guessing your voice and holding back your true thoughts for fear of negative labels.",
      icon: "🤐"
    },
    {
      title: "Feeling Unseen Despite Results",
      description: "Having influence and delivering results but still feeling invisible and undervalued.",
      icon: "👻"
    }
  ];

  return (
    <section id="pain" className="border-t bg-destructive/5">
      <div className="container mx-auto py-16">
        <div className="text-center">
          <h2 className="text-3xl font-semibold">You've Earned Your Seat — But at What Cost?</h2>
          <p className="mx-auto mt-3 max-w-3xl text-lg text-muted-foreground">
            You've broken through glass ceilings and landed roles with influence. Still, leadership can feel costly when the rules weren't written for you.
          </p>
          
          <div className="mt-6 p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
            <p className="text-destructive font-medium">
              This is the "messy middle" of leadership — and most coaching misses these nuances.
            </p>
          </div>
        </div>
        
        <div className="mx-auto mt-12 max-w-4xl">
          <div className="grid gap-6 md:grid-cols-2">
            {struggles.map((struggle, index) => (
              <Card key={index} className="border-destructive/20 bg-card">
                <CardContent className="flex items-start gap-4 p-6">
                  <div className="text-2xl">{struggle.icon}</div>
                  <div>
                    <h3 className="font-semibold text-destructive">{struggle.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{struggle.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-lg font-medium text-muted-foreground">
              You're a high-performing woman of colour in a role with influence — but you're still...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;