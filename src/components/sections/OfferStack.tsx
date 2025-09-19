import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import coachingMaterials from "@/assets/coaching-materials.jpg";
const offers = [{
  title: "75‑Minute Deep‑Dive Strategy Session",
  description: "To map your goals, uncover challenges, and align on your leadership vision."
}, {
  title: "9 × 45‑Minute Biweekly Private Coaching Sessions",
  description: "Each session is designed to support you through the BOLD™ Method and real-time leadership scenarios."
}, {
  title: "Voice Note & Email Support Between Sessions",
  description: "Get personalized support when you need it most — not just when you're on the call."
}, {
  title: "CliftonStrengths Debrief",
  description: "Understand your top strengths and how to lead from them — especially under pressure."
}, {
  title: "Legacy Leadership Map™",
  description: "My signature tool to help you design your career, relationships, and decisions with clarity."
}, {
  title: "Curated Tools & Resource Library",
  description: "Worksheets, reflection prompts, and templates to deepen your learning between sessions."
}];
const OfferStack: React.FC = () => {
  return <section id="offer" className="border-t">
      <div className="container mx-auto py-16">
        <div className="text-center">
          <h2 className="text-3xl font-semibold">What You'll Receive</h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            A comprehensive 6-month coaching experience designed specifically for women of colour in leadership.
          </p>
        </div>
        
        <div className="mx-auto mt-12 max-w-6xl">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {offers.map((offer, index) => <Card key={index} className="group shadow-sm transition-all hover:shadow-lg hover:-translate-y-1">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{offer.title}</CardTitle>
                    <Badge variant="secondary" className="text-xs">
                      {index < 2 ? "Core" : "Bonus"}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">{offer.description}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </div>
    </section>;
};
export default OfferStack;