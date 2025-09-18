import React from "react";
import coachImage from "@/assets/coach-aileen.jpg";

const CoachIntro: React.FC = () => {
  return (
    <section className="border-t">
      <div className="container mx-auto py-16">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="relative">
            <div className="aspect-square overflow-hidden rounded-2xl">
              <img
                src={coachImage}
                alt="Aileen Edwards, Executive Coach for Women of Colour"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="pointer-events-none absolute -inset-6 -z-10 rounded-3xl bg-gradient-primary opacity-20 blur-2xl" />
          </div>
          
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-semibold">Meet Aileen Edwards — Your Coach & Guide</h2>
              <p className="mt-2 text-lg text-muted-foreground">
                Leadership isn't just strategy — it's presence, influence, and the courage to show up fully in high-stakes spaces.
              </p>
            </div>
            
            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm Aileen Edwards — Executive Coach, former HR Executive, Certified Coach (ACC), and Crucial Conversations® Facilitator with 30+ years of leadership experience. I understand both the corporate realities and the lived experience of leading in spaces not built for you.
              </p>
              <p>
                I created She Leads Anyway™ because too often women — especially Women of Colour — step into leadership without tailored support to navigate the realities of being the only one in the room. My work is built to meet that reality.
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
    </section>
  );
};

export default CoachIntro;