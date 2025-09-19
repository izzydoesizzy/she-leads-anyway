import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
const ApplicationForm: React.FC = () => {
  const {
    toast
  } = useToast();
  const onApply = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Application received",
      description: "Thank you! We’ll be in touch within 24–48 hours."
    });
    (e.currentTarget as HTMLFormElement).reset();
  };
  return <section id="apply" className="border-t">
      <div className="container mx-auto grid gap-10 md:grid-cols-2 py-[25px]">
        

        <form onSubmit={onApply} className="rounded-xl border bg-card p-6 shadow-sm">
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Full name</Label>
              <Input id="name" name="name" required placeholder="Your name" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" required placeholder="you@example.com" />
            </div>
            
            
            <div className="grid gap-2">
              <Label htmlFor="goals">What would make this coaching a win?</Label>
              <Textarea id="goals" name="goals" placeholder="Share your top 1–3 goals" rows={4} />
            </div>
            <Button type="submit" variant="hero" size="lg" className="hover-scale">Submit Application</Button>
            <p className="text-xs text-muted-foreground">We’ll never share your information.</p>
          </div>
        </form>
      </div>
    </section>;
};
export default ApplicationForm;