import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";
import boldMethodImage from "@/assets/bold-method-framework.jpg";
const methods = [{
  letter: "B",
  title: "Becoming",
  summary: "Unlearn self-silencing habits and reclaim your authentic voice and story.",
  details: ["Unlearn the self-silencing habits that helped you survive but no longer serve you.", "Reconnect with your lived experiences, values and cultural wisdom.", "Name the pressures and patterns that keep you dimming your light.", "Reclaim your story and your voice."]
}, {
  letter: "O",
  title: "Own Your Power",
  summary: "Redefine presence on your terms and build authentic executive influence.",
  details: ["Redefine presence on your terms.", "Reclaiming agency over one's voice, space and value - especially in workplaces that silence or diminish.", "Build executive influence rooted in self-trust and cultural authenticity.", "Learn how to hold your ground — even in tough conversations."]
}, {
  letter: "L",
  title: "Lead with Intention",
  summary: "Develop authentic leadership presence that blends results with respect.",
  details: ["Develop authentic leadership presence that blends results with respect.", "Reconnect with your purpose and values.", "Set clear boundaries, goals, and strategies to lead from alignment, not over-functioning."]
}, {
  letter: "D",
  title: "Disrupting",
  summary: "Challenge oppressive norms and create sustainable leadership models.",
  details: ["Challenge oppressive norms and create liberating leadership models.", "You're not just here to succeed, you're here to lead in a way that feels sustainable.", "We'll map out the next chapter of your career and leadership journey, one that reflects your truth and your worth."]
}];
const BoldMethod: React.FC = () => {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());
  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };
  return <section id="method" className="border-t bg-secondary/50">
      <div className="container mx-auto py-[10px]">
        <div className="text-center">
          <h2 className="text-3xl font-semibold">The BOLD™ Method</h2>
          <p className="mx-auto mt-3 max-w-3xl text-lg text-muted-foreground">
            The 4-pillar transformation framework that's generated over <strong>$10.8M in salary increases</strong> for women of colour in leadership
          </p>
          <div className="mt-4 flex justify-center gap-6 text-sm font-medium">
            <span className="text-accent">✓ Scientifically-backed</span>
            <span className="text-accent">✓ Culturally-informed</span>
            <span className="text-accent">✓ Results-guaranteed</span>
          </div>
        </div>
        
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:gap-16 items-start">
          <div className="relative">
            <img src={boldMethodImage} alt="BOLD Method framework visualization" className="rounded-xl shadow-lg" loading="lazy" />
            <div className="pointer-events-none absolute -inset-4 -z-10 rounded-2xl bg-gradient-primary opacity-20 blur-2xl" />
          </div>
          
          <div className="space-y-6 px-0">
            <div className="rounded-xl border bg-card p-6 shadow-sm px-[24px]">
              <p className="text-sm font-medium text-primary mb-3">Proven Framework</p>
              <p className="text-muted-foreground">
                This isn't another generic leadership program. The BOLD™ Method was created specifically for women of colour who are tired of choosing between success and authenticity. It combines neuroscience-based transformation techniques with cultural wisdom and lived experience.
              </p>
            </div>
            
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {methods.map((method, index) => <Card key={index} className="group transition-all hover:shadow-md">
                  <CardContent className="p-6 px-0">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-primary text-white font-bold text-lg">
                        {method.letter}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-2">{method.title}</h3>
                        <p className="text-muted-foreground mb-3">{method.summary}</p>
                        
                        <Collapsible open={openItems.has(index)} onOpenChange={() => toggleItem(index)}>
                          <CollapsibleTrigger className="flex items-center gap-2 text-sm text-primary hover:underline">
                            {openItems.has(index) ? 'Show less' : 'Learn more'}
                            <ChevronDown className={`h-4 w-4 transition-transform ${openItems.has(index) ? 'rotate-180' : ''}`} />
                          </CollapsibleTrigger>
                          <CollapsibleContent className="mt-3">
                            <div className="space-y-2 text-sm text-muted-foreground">
                              {method.details.map((detail, i) => <div key={i} className="flex items-start gap-2">
                                  <div className="mt-2 h-1.5 w-1.5 rounded-full bg-primary/60 flex-shrink-0" />
                                  <span>{detail}</span>
                                </div>)}
                            </div>
                          </CollapsibleContent>
                        </Collapsible>
                      </div>
                    </div>
                  </CardContent>
                </Card>)}
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default BoldMethod;