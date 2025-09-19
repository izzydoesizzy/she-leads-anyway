import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
const SolutionIntro: React.FC = () => {
  const benefits = ["Build presence that commands respect", "Strengthen influence with senior leaders and decision-makers", "Lead high-stakes conversations with clarity and courage", "Thrive in leadership without burning out", "Design a leadership identity rooted in authenticity"];
  return <section id="solution" className="border-t bg-secondary/50">
      <div className="container mx-auto py-16">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              The Solution: <span className="text-gradient-primary">She Leads Anyway™</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              A 6-month private coaching experience for Women of Colour ready to lead with sovereignty — not survival.
            </p>
          </div>
          
          <Card className="border-primary/30 bg-gradient-primary/5 shadow-xl">
            <CardContent className="p-8 py-[20px]">
              <p className="text-lg text-muted-foreground mb-6">
                Through a high-touch, customized coaching partnership you will:
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => <div key={index} className="flex items-center gap-3">
                    <div className="text-emerald-600 dark:text-emerald-400">✅</div>
                    <span className="text-foreground">{benefit}</span>
                  </div>)}
              </div>
              
              <div className="mt-8 text-center">
                <Button variant="hero" size="lg" asChild>
                  <a href="#application">Book your complimentary discovery call →</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
};
export default SolutionIntro;