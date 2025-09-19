import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
const testimonials = [{
  quote: "Working with Aileen helped me transition into my executive role with confidence I never knew I had. The BOLD™ Method gave me practical tools to navigate difficult conversations while staying true to myself.",
  name: "Sarah M.",
  role: "Director of Operations",
  outcome: "Executive Transition"
}, {
  quote: "I was on the edge of burnout when I started coaching. Aileen helped me reclaim my voice and set boundaries that actually work. I'm leading differently now — with more peace and power.",
  name: "Jennifer K.",
  role: "VP Marketing",
  outcome: "Burnout Recovery"
}, {
  quote: "The racial dynamics in my workplace were suffocating. Through this coaching, I learned how to navigate politics without compromising my values. I finally feel like I belong in leadership.",
  name: "Michelle D.",
  role: "Senior Manager",
  outcome: "Authentic Leadership"
}, {
  quote: "Aileen helped me design an exit strategy that led to a role where I can be myself fully. The Legacy Leadership Map™ was a game-changer for my career planning.",
  name: "Patricia R.",
  role: "Chief Human Resources Officer",
  outcome: "Career Pivot"
}];
const Testimonials: React.FC = () => {
  return <section id="proof" className="border-t bg-secondary/30">
      <div className="container mx-auto py-0">
        <div className="text-center">
          <h2 className="text-3xl font-semibold">Client Success Stories</h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            Real transformations from women who chose to lead anyway.
          </p>
        </div>
        
        <div className="mx-auto mt-10 max-w-5xl">
          <Carousel opts={{
          align: "start",
          loop: true
        }} className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial, index) => <CarouselItem key={index} className="pl-2 md:basis-1/2 md:pl-4 lg:basis-1/2">
                  <Card className="h-full shadow-sm transition-shadow hover:shadow-md">
                    <CardContent className="flex h-full flex-col justify-between p-6">
                      <div>
                        <div className="mb-4 text-3xl text-primary/20">"</div>
                        <blockquote className="text-sm leading-relaxed text-muted-foreground">
                          {testimonial.quote}
                        </blockquote>
                      </div>
                      
                      <div className="mt-6 pt-4 border-t">
                        <div className="font-medium">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                        <div className="mt-2 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                          {testimonial.outcome}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>)}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>;
};
export default Testimonials;