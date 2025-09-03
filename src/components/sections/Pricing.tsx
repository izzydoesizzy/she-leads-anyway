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
          <div className="bg-destructive/20 text-destructive px-4 py-2 rounded-full inline-block mb-4">
            <span className="font-bold">⏰ FINAL DEADLINE: Applications close February 15th</span>
          </div>
          <h2 className="text-3xl font-semibold">The Investment That Pays for Itself</h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            At $73K average salary increase, this investment pays for itself in the first 30 days. 
            <strong className="text-foreground">What's the cost of staying stuck?</strong>
          </p>
        </div>
        
        <div className="mx-auto mb-8 max-w-3xl text-center">
          <div className="rounded-xl border border-primary/30 bg-gradient-primary/10 p-6">
            <h3 className="text-xl font-semibold text-primary mb-2">Total Program Value: $18,500</h3>
            <p className="text-sm text-muted-foreground mb-2">Based on comparable executive coaching rates ($300/hr × 24 sessions)</p>
            <div className="text-xs space-y-1 text-muted-foreground">
              <div>• 6 months of 1:1 coaching: $7,200</div>
              <div>• BOLD Method materials & assessments: $1,500</div>
              <div>• Leadership presence intensive: $2,800</div>
              <div>• Negotiation strategy session: $1,500</div>
              <div>• Access to private community: $1,200</div>
              <div>• Lifetime access to recorded trainings: $4,300</div>
            </div>
            <p className="mt-3 font-semibold text-destructive">
              You save $13,500 when you join today
            </p>
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
                  <Button variant={option.popular ? "hero" : "outline"} className={`w-full ${option.popular ? 'pulse' : ''}`} asChild>
                    <a href="https://calendly.com/ameconsulting/coach-session" target="_blank" rel="noopener noreferrer">
                      {option.popular ? 'SECURE YOUR SPOT NOW' : 'Choose This Option'}
                    </a>
                  </Button>
                  {option.popular && (
                    <p className="text-xs text-destructive mt-2 font-medium">Only 3 spots remaining</p>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mx-auto mt-8 max-w-2xl space-y-4">
          <div className="rounded-xl border border-accent/30 bg-accent/10 p-6 text-center">
            <h4 className="font-bold text-accent-foreground mb-2">100% RISK-FREE GUARANTEE</h4>
            <p className="text-sm text-muted-foreground">
              If you don't see measurable progress in your leadership confidence and career advancement within 60 days, 
              I'll refund every penny. No questions asked.
            </p>
          </div>
          
          <div className="text-center text-sm text-muted-foreground">
            HST applicable. Payment plans available for nonprofit leaders.
            <br />
            <strong>This is the last cohort at this price.</strong> Investment increases to $7,500 in Q2 2024.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;