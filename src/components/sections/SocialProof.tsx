import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import diverseLeaders from "@/assets/diverse-leaders.jpg";
const SocialProof: React.FC = () => {
  return <section id="social-proof" className="border-t">
      <div className="container mx-auto py-[20px]">
        <h2 className="text-center text-3xl font-semibold">Why Clients Choose This Space</h2>
        <p className="mx-auto mt-3 max-w-3xl text-center text-muted-foreground">
          It’s deeply restorative. It sharpens your executive edge. It’s about finally giving yourself permission to be you.
        </p>
        <div className="mx-auto mt-8 max-w-3xl">
          <ul className="grid gap-2 text-muted-foreground">
            <li>Transition into executive positions with clarity and confidence.</li>
            <li>Recover from burnout and reclaim your voice.</li>
            <li>Navigate racial dynamics and politics in toxic team environments.</li>
            <li>Design exits and pivots that lead to more peace and prosperity.</li>
            <li>Step into bolder leadership — and finally feel like you belong.</li>
          </ul>
        </div>
      </div>
    </section>;
};
export default SocialProof;