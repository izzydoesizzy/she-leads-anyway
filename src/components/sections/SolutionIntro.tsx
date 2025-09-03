import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const SolutionIntro: React.FC = () => {
  return (
    <section id="solution" className="border-t bg-secondary/50">
      <div className="container mx-auto py-16">
        <div className="mx-auto max-w-4xl text-center">
          <Badge className="mb-4 bg-gradient-primary text-white">The Solution</Badge>
          <h2 className="text-4xl font-bold">
            Introducing: <span className="text-gradient-primary">She Leads Anyway™</span>
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
            The only 6-month private coaching experience designed specifically for women of colour who refuse to choose between success and authenticity.
          </p>
        </div>
        
        <div className="mx-auto mt-12 max-w-5xl">
          <Card className="border-primary/30 bg-gradient-primary/5 shadow-xl">
            <CardContent className="p-8">
              <div className="grid gap-8 md:grid-cols-2 md:items-center">
                <div>
                  <h3 className="text-2xl font-semibold mb-4">This Is Your Bridge From:</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="mt-2 h-2 w-2 rounded-full bg-destructive flex-shrink-0" />
                      <span className="text-muted-foreground">Feeling exhausted by code-switching</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="mt-2 h-2 w-2 rounded-full bg-destructive flex-shrink-0" />
                      <span className="text-muted-foreground">Second-guessing your voice</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="mt-2 h-2 w-2 rounded-full bg-destructive flex-shrink-0" />
                      <span className="text-muted-foreground">Leading with survival energy</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="mt-2 h-2 w-2 rounded-full bg-destructive flex-shrink-0" />
                      <span className="text-muted-foreground">Carrying everyone else's load</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-primary">To This Reality:</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="mt-2 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                      <span className="text-muted-foreground">Leading with authentic confidence</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="mt-2 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                      <span className="text-muted-foreground">Speaking with courageous clarity</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="mt-2 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                      <span className="text-muted-foreground">Leading from sovereignty, not survival</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="mt-2 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                      <span className="text-muted-foreground">Building the legacy you're meant for</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 rounded-xl border border-primary/30 bg-primary/10 p-6 text-center">
                <p className="text-lg font-semibold text-primary mb-2">
                  The BOLD™ Method isn't just coaching—it's liberation.
                </p>
                <p className="text-muted-foreground">
                  A proven framework that blends strategy, emotional intelligence, and lived wisdom to transform how you lead and how you live.
                </p>
              </div>
              
              <div className="mt-6 text-center">
                <Button variant="hero" size="lg" asChild>
                  <a href="#offer">See Exactly What's Included →</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SolutionIntro;