import React from "react";
import coachImage from "@/assets/coach-aileen.jpg";
const CoachIntro: React.FC = () => {
  return <section className="border-t">
      <div className="container mx-auto py-16">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="relative">
            <div className="aspect-square overflow-hidden rounded-2xl">
              <img src={coachImage} alt="Aileen Edwards, Executive Coach for Women of Colour" className="h-full w-full object-cover" loading="lazy" />
            </div>
            <div className="pointer-events-none absolute -inset-6 -z-10 rounded-3xl bg-gradient-primary opacity-20 blur-2xl" />
          </div>
          
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold">Meet Your Coach & Guide:</h2>
              <p className="mt-2 text-muted-foreground text-lg font-medium my-[20px]">👋 I’m Aileen Edwards, an Executive Coach, HR Executive, and Crucial Conversations® Facilitator with 30+ years of leadership experience.</p>
            </div>
            
            <div className="space-y-4 text-muted-foreground">
              
              <p>I help women leaders like you build presence that commands respect, strengthen influence under pressure, and thrive without burnout.</p>
              <p>Clients report:
✨ Greater confidence in high-stakes moments
✨ Increased visibility and influence with senior leaders
✨ Promotions into senior roles
✨ A stronger, more authentic leadership identity</p>
            </div>
            
            <div className="rounded-xl border-l-4 border-primary bg-secondary/50 p-6">
              <p className="font-medium text-primary">
                Now, I help women like you build a new legacy, one where your leadership isn't rooted in survival, but in sovereignty.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <span>AME Consulting & Leadership Coaching</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-accent" />
                <span>amedwards@ameconsulting.ca</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <span>416-768-3612</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default CoachIntro;