import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const pricingOptions = [
  {
    title: "One‑Time Payment",
    price: "$5,000",
    description: "Save $250 CAD with the full investment upfront. HST applicable.",
    popular: true
  },
  {
    title: "6 Monthly Payments", 
    price: "$875",
    description: "Total $5,250 CAD. HST applicable. Custom plans available for nonprofit or early‑career leaders.",
    popular: false
  }
];

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="border-t bg-secondary/50">
      <div className="container mx-auto py-16">
        <div className="text-center">
          <h2 className="text-3xl font-semibold">The Investment</h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            Your leadership is powerful. Let's make sure it's also sustainable.
          </p>
        </div>
        
        <div className="mx-auto mb-8 max-w-3xl text-center">
          <div className="rounded-xl border border-primary/30 bg-gradient-primary/10 p-6">
            <h3 className="text-xl font-semibold text-primary mb-2">Total Program Value: $15,000+</h3>
            <p className="text-sm text-muted-foreground">Based on comparable executive coaching rates and included bonuses</p>
          </div>
        </div>
        
        <div className="mx-auto mt-8 grid max-w-3xl gap-6 md:grid-cols-2">
          {pricingOptions.map((option, index) => (
            <Card key={index} className={`group shadow-sm transition-all hover:shadow-lg hover:-translate-y-1 ${option.popular ? 'ring-2 ring-primary' : ''}`}>
              <CardHeader className="text-center">
                {option.popular && (
                  <Badge className="mx-auto mb-2 w-fit bg-gradient-primary text-white">
                    Most Popular
                  </Badge>
                )}
                <CardTitle className="text-xl">{option.title}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-gradient-primary">{option.price}</span>
                  <span className="text-muted-foreground"> CAD</span>
                </div>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground leading-relaxed">{option.description}</p>
                <div className="mt-6">
                  <Button variant={option.popular ? "hero" : "outline"} className="w-full" asChild>
                    <a href="https://calendly.com/ameconsulting/coach-session" target="_blank" rel="noopener noreferrer">
                      Choose This Option
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mx-auto mt-8 max-w-2xl rounded-xl border bg-muted/30 p-6 text-center">
          <div className="text-sm text-muted-foreground">
            <strong>Investment Protection:</strong> Your coaching experience is backed by a 30-day satisfaction guarantee. 
            HST applicable. Custom payment plans available for nonprofit or early-career leaders.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;