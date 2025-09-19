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
      
    </section>;
};
export default ApplicationForm;