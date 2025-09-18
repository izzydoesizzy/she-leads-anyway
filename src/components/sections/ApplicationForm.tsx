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
      <div className="container mx-auto grid gap-10 md:grid-cols-2 py-[10px]">
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold">Apply for a Private Consultation</h2>
          <p className="text-muted-foreground">
            Prefer to start with an application? Share a few details below. If it’s a fit, we’ll follow up to schedule your consultation.
          </p>
          <ul className="grid gap-2 text-sm text-muted-foreground">
            <li>Confidential and obligation‑free</li>
            <li>Response within 24–48 hours</li>
          </ul>
        </div>

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
              <Label htmlFor="role">Current role</Label>
              <Input id="role" name="role" placeholder="e.g., Senior Product Manager" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="company">Company / Industry</Label>
              <Input id="company" name="company" placeholder="Your organization" />
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