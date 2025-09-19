import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
const SolutionIntro: React.FC = () => {
  const benefits = ["Speak up in high-stakes rooms, with courage, not fear", "Strengthen their executive presence and influence", "Lead without shrinking or over-performing", "Reclaim their time, peace, and voice", "Define leadership on their terms, and design a path to get there"];
  return <section id="solution" className="border-t bg-secondary/50">
      <div className="container mx-auto py-12">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              The Solution: <span className="text-gradient-primary">She Leads Anyway™</span>
            </h2>
            <p className="text-xl font-medium mb-6">A 6-Month Private Coaching Experience for Women of Colour in Leadership</p>
            <p className="text-lg text-muted-foreground">This is a high-touch, customized coaching partnership for women who are ready to:</p>
          </div>
          
          <Card className="border-primary/30 bg-gradient-primary/5 shadow-xl">
            <CardContent className="p-8 py-[20px]">
              <div className="space-y-4">
                {benefits.map((benefit, index) => <div key={index} className="flex items-center gap-3">
                    <div className="text-emerald-600 dark:text-emerald-400">✅</div>
                    <span className="text-foreground">{benefit}</span>
                  </div>)}
              </div>
              
              <p className="text-lg text-center font-medium mt-8 text-foreground">
                This isn't corporate polish. This is liberated leadership — rooted in truth, guided by values, and powered by your full self.
              </p>
              
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