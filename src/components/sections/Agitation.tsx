import React from "react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertTriangle } from "lucide-react";

const Agitation: React.FC = () => {
  const costs = [
    "Another year of burning out while everyone else advances",
    "Missing out on leadership opportunities because you stayed silent", 
    "Watching less qualified people get promoted while you over-deliver",
    "Your family seeing you stressed, exhausted, and disconnected",
    "Never feeling like you truly belong in the spaces you've earned",
    "Retiring with regret about the leader you never became"
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
              <p className="text-lg font-semibold text-destructive">
                The brutal truth? This doesn't get easier with time.
              </p>
              <p className="mt-2 text-muted-foreground">
                Without the right framework, you'll keep cycling through the same patterns — over-performing, under-recognized, and slowly losing yourself in the process.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Agitation;