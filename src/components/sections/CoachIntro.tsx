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
              <h2 className="text-3xl font-semibold">I'm Aileen Edwards</h2>
              <p className="mt-2 text-lg text-muted-foreground">
                and I created this space because I've lived this story.
              </p>
            </div>
            
            <div className="space-y-4 text-muted-foreground">
              <p>
                As a Black woman, former HR Executive, and now leadership coach, I've sat in the boardroom and the backroom.
              </p>
              <p>
                I've led million-dollar portfolios. I've coached executives in crisis. And I've been the only one in the room more times than I can count.
              </p>
              <p>
                For 30+ years in corporate leadership, I navigated the tension between responsibility and representation — leading major change while carrying the weight of being "the first," "the only," or "the one who has to fix it."
              </p>
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
    </section>
  );
};

export default CoachIntro;