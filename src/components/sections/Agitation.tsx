import React from "react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertTriangle } from "lucide-react";

const Agitation: React.FC = () => {
  const costs = [
    "Another year watching mediocre leaders get promoted while you over-deliver in silence",
    "Waking up Sunday nights with dread, knowing you'll spend Monday code-switching again", 
    "Your brilliant ideas dismissed, then credited to someone else when they finally speak up",
    "Your children asking why mommy is always tired, always stressed, never truly present",
    "Looking in the mirror and not recognizing the woman who used to dream bigger",
    "Reaching retirement knowing you spent 30 years playing small instead of changing the game",
    "The crushing realization that you're 47, in a senior role, and still waiting for permission to lead",
    "Calculating the MILLIONS in salary you left on the table because you never learned to negotiate from power"
  ];

  return (
    <section id="agitation" className="border-t">
      <div className="container mx-auto py-16">
        <div className="mx-auto max-w-4xl text-center">
          <Alert className="border-destructive/30 bg-destructive/5">
            <AlertTriangle className="h-4 w-4 text-destructive" />
            <AlertDescription className="text-lg font-medium">
              Here's what staying stuck actually costs you...
            </AlertDescription>
          </Alert>
          
          <div className="mt-12 space-y-6">
            <h2 className="text-3xl font-semibold text-destructive">
              Every Day You Wait, You're Losing...
            </h2>
            
            <div className="grid gap-4 text-left">
              {costs.map((cost, index) => (
                <div key={index} className="flex items-start gap-3 rounded-lg border border-destructive/20 bg-destructive/5 p-4">
                  <div className="mt-1 h-2 w-2 rounded-full bg-destructive flex-shrink-0" />
                  <p className="text-muted-foreground">{cost}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-8 rounded-xl border border-destructive/30 bg-destructive/10 p-6">
              <p className="text-xl font-bold text-destructive mb-3">
                Here's the part that will keep you awake tonight...
              </p>
              <p className="text-lg font-semibold text-destructive mb-2">
                Every month you wait is another $6,000+ in lost salary.
              </p>
              <p className="text-muted-foreground">
                Without a proven framework, you'll spend the next 5 years exactly where you are now — talented, hardworking, and grossly undervalued. The women who transform their leadership don't wait for perfect timing. They create it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Agitation;