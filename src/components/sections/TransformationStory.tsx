import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
const TransformationStory: React.FC = () => {
  return <section className="border-t bg-secondary/30">
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
    </section>;
};
export default TransformationStory;