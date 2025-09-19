import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
const testimonials = [{
  quote: "I met Aileen when I was at a pivotal point in my career as a rising leader, feeling uncertain about how to navigate the next phase of executive leadership. I had questions about my direction, my impact, and how to align my values with achieving business results as a racialized, female leader. Working with Aileen was a turning point. She helped me see myself and my path with fresh clarity.",
  name: "Joan T.",
  role: "Senior Vice President, Culture Talent Diversity",
  outcome: "Executive Clarity"
}, {
  quote: "Starting a CEO role was definitely exciting and equally daunting. Sessions with Aileen helped me to clarify my unique strengths and attributes. Aileen's positive approach builds confidence and inspires you to bring your very best self to every interaction.",
  name: "Geraldine A.",
  role: "Chief Executive Officer",
  outcome: "CEO Transition"
}, {
  quote: "Working with Aileen has been a truly transformative experience. She helped me find my inner voice, giving me the confidence to trust myself, make responsible decisions, and navigate difficulties with resilience. Thanks to Aileen, I now approach challenges with a renewed perspective, knowing I have the tools to move forward and emerge even stronger.",
  name: "Natalie A.",
  role: "Labour Relations Advisor",
  outcome: "Inner Voice Discovery"
}, {
  quote: "AME consulting provided support in managing a sensitive issue. Aileen's approach was practical, transparent and thorough. She managed the situation with sophistication and delicacy, as well as empathy, which was much appreciated. All parties involved found her supportive and thorough.",
  name: "Myfanwy M.",
  role: "Vice President, People & Experience",
  outcome: "Sensitive Issue Resolution"
}];
const Testimonials: React.FC = () => {
  return <section id="proof" className="border-t bg-secondary/30">
      <div className="container mx-auto py-0 my-[15px]">
        <div className="text-center">
          <h2 className="text-3xl font-semibold">Client Success Stories</h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            Real transformations from women who chose to lead anyway.
          </p>
        </div>
        
        <div className="mx-auto mt-6 max-w-5xl">
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