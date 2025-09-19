import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const WhoThisIsFor: React.FC = () => {
  const situations = [
    "navigating politics that leave you second-guessing your voice.",
    "managing team dynamics where you carry the emotional load.",
    "wondering if there's a way to lead that doesn't require losing parts of yourself."
  ];

  const questions = [
    "Is it possible to succeed and still feel whole?",
    "Can I speak up without being labelled \"difficult\"?",
    "How do I keep leading when I feel so unseen?"
  ];

  return (
    <section id="who-this-is-for" className="border-t bg-secondary/30">
      <div className="container mx-auto py-16">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold mb-6">
              Who This Is For
            </h2>
            
            <div className="text-left space-y-6">
              <p className="text-lg leading-relaxed">
                This coaching experience is for high-performing Women of Colour in leadership who know success on paper doesn't always feel like success on the inside.
              </p>
              
              <p className="text-lg leading-relaxed">
                You've earned your seat at the table — but the unspoken rules, constant code-switching, and invisible tax of leadership are exhausting.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">You may be:</h3>
                <ul className="space-y-3">
                  {situations.map((situation, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-primary mt-1">…</span>
                      <span className="text-muted-foreground">{situation}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">If you've ever asked yourself:</h3>
                <ul className="space-y-3">
                  {questions.map((question, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="mt-1">💭</span>
                      <span className="text-muted-foreground">{question}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Badge variant="secondary" className="text-lg py-2 px-6">
              ✨ Then this is the coaching space for you.
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoThisIsFor;