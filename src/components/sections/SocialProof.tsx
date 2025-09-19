import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Target, Shield, TrendingUp, Crown } from "lucide-react";
import diverseLeaders from "@/assets/diverse-leaders.jpg";

const SocialProof: React.FC = () => {
  const benefits = [
    {
      icon: Target,
      text: "Transition into executive positions with clarity and confidence.",
      highlight: "executive positions"
    },
    {
      icon: Shield,
      text: "Recover from burnout and reclaim your voice.",
      highlight: "reclaim your voice"
    },
    {
      icon: CheckCircle,
      text: "Navigate racial dynamics and politics in toxic team environments.",
      highlight: "Navigate racial dynamics"
    },
    {
      icon: TrendingUp,
      text: "Design exits and pivots that lead to more peace and prosperity.",
      highlight: "peace and prosperity"
    },
    {
      icon: Crown,
      text: "Step into bolder leadership — and finally feel like you belong.",
      highlight: "bolder leadership"
    }
  ];

  return (
    <section id="social-proof" className="border-t bg-gradient-to-br from-background via-secondary/20 to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container mx-auto py-16 relative">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
            Why Clients Choose This Space
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground leading-relaxed">
            It's deeply restorative. It sharpens your executive edge. It's about finally giving yourself permission to be you.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary/50 hover:border-l-primary">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <benefit.icon className="w-6 h-6 text-primary" />
                    </div>
                    <p className="text-foreground leading-relaxed">
                      {benefit.text}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="relative">
            <div className="relative overflow-hidden rounded-xl shadow-2xl">
              <img 
                src={diverseLeaders} 
                alt="Diverse executive leaders in a collaborative meeting environment"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-secondary/30 rounded-full blur-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;