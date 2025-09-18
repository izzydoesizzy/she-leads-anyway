import React from "react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertTriangle } from "lucide-react";

const Agitation: React.FC = () => {
  return (
    <section id="agitation" className="border-t">
      <div className="container mx-auto py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-semibold text-destructive mb-6">
            What's Really at Stake
          </h2>
          
          <div className="text-left space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Waiting costs more than opportunities. It costs clarity, health, relationships, and the leadership legacy you could be building. Without tailored support, the pattern repeats: over-functioning, diminished visibility, and leadership that feels like survival instead of sovereignty.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Agitation;