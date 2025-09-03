import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const PainPoints: React.FC = () => {
  const struggles = [
    {
      title: "Invisible Tax of Leadership",
      description: "Carrying the emotional load while navigating unspoken rules and constant code-switching.",
      icon: "😔"
    },
    {
      title: "Second-Guessing Your Voice", 
      description: "Wondering if speaking up will label you as 'difficult' or 'too much.'",
      icon: "🤐"
    },
    {
      title: "Exhausting Politics",
      description: "Managing team dynamics where you're always managing racial dynamics too.",
      icon: "😰"
    },
    {
      title: "Feeling Unseen",
      description: "Leading with influence but still feeling like you don't truly belong.",
      icon: "👻"
    }
  ];

  return (
    <section id="pain" className="border-t bg-destructive/5">
      <div className="container mx-auto py-16">
        <div className="text-center">
          <h2 className="text-3xl font-semibold">You've Earned Your Seat at the Table...</h2>
          <p className="mx-auto mt-3 max-w-3xl text-lg text-muted-foreground">
            But the unspoken rules, constant code-switching, and invisible tax of leadership are exhausting.
          </p>
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