import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
const pricingOptions = [{
  title: "One‑Time Payment",
  price: "$5,000",
  description: "Save $250 CAD with the full investment upfront. HST applicable.",
  popular: true
}, {
  title: "6 Monthly Payments",
  price: "$875",
  description: "Total $5,250 CAD. HST applicable. Custom plans available for nonprofit or early‑career leaders.",
  popular: false
}];
const Pricing: React.FC = () => {
  return <section id="pricing" className="border-t bg-secondary/50">
      <div className="container mx-0 py-[20px]">
        <div className="text-center">
          
          <h2 className="text-3xl font-semibold">Your lnvestment</h2>
          
        </div>
        
        <div className="mx-auto mb-8 max-w-3xl text-center">
          
        </div>
        
        <div className="mx-auto mt-8 grid max-w-3xl gap-6 md:grid-cols-2">
          {pricingOptions.map((option, index) => <Card key={index} className={`group shadow-sm transition-all hover:shadow-lg hover:-translate-y-1 ${option.popular ? 'ring-2 ring-primary' : ''}`}>
              <CardHeader className="text-center">
                {option.popular && <Badge className="mx-auto mb-2 w-fit bg-gradient-primary text-white">
                    Most Popular
                  </Badge>}
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
                  {option.popular}
                </div>
              </CardContent>
            </Card>)}
        </div>
        
        <div className="mx-auto mt-8 max-w-2xl space-y-4">
          
          
          
        </div>
      </div>
    </section>;
};
export default Pricing;