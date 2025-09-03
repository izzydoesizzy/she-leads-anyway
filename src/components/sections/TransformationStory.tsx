import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const TransformationStory: React.FC = () => {
  return (
    <section className="border-t bg-secondary/30">
      <div className="container mx-auto py-16">
        <div className="mx-auto max-w-4xl text-center mb-12">
          <Badge variant="secondary" className="mb-4 px-4 py-2">
            Real Client Transformation
          </Badge>
          <h2 className="text-3xl font-bold mb-4">
            From Invisible to CEO in 18 Months
          </h2>
          <p className="text-lg text-muted-foreground">
            How Sarah went from being passed over for promotion to landing her dream C-suite role
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <Card className="border-destructive/20 bg-destructive/5">
            <CardContent className="p-6 text-center">
              <div className="text-3xl mb-3">😔</div>
              <h3 className="font-semibold text-destructive mb-2">BEFORE</h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Passed over for VP role (again)</li>
                <li>• $95K salary for 8 years</li>
                <li>• Sunday scaries every week</li>
                <li>• Imposter syndrome in every meeting</li>
                <li>• "Maybe I'm not cut out for this"</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-accent/20 bg-accent/10 transform scale-105">
            <CardContent className="p-6 text-center">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="font-semibold text-accent-foreground mb-2">THE SHIFT</h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• BOLD Method framework</li>
                <li>• Weekly 1:1 coaching calls</li>
                <li>• Salary negotiation strategy</li>
                <li>• Leadership presence work</li>
                <li>• Cultural authenticity integration</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-primary/20 bg-primary/10">
            <CardContent className="p-6 text-center">
              <div className="text-3xl mb-3">🎉</div>
              <h3 className="font-semibold text-primary mb-2">AFTER</h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• CEO role at tech startup</li>
                <li>• $180K + equity package</li>
                <li>• Featured in Forbes 30 Under 30</li>
                <li>• Speaks at leadership conferences</li>
                <li>• "I finally feel like myself"</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <Card className="mx-auto max-w-2xl border-primary/20 bg-primary/5">
            <CardContent className="p-8">
              <blockquote className="text-lg italic mb-4">
                "Aileen didn't just help me get promoted — she helped me reclaim who I was. I spent years trying to fit into their mold. Now I lead from my authentic power, and the results speak for themselves."
              </blockquote>
              <cite className="font-semibold text-primary">
                — Sarah Chen, CEO, TechFlow Solutions
              </cite>
            </CardContent>
          </Card>
          
          <p className="mt-6 text-sm text-muted-foreground">
            <strong>Sarah's transformation happened in 6 months.</strong> Imagine where you'll be by this time next year.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TransformationStory;