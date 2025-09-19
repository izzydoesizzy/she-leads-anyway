import React from "react";
import { Linkedin, Instagram, Mail } from "lucide-react";
import coachImage from "@/assets/coach-aileen-yellow.jpg";
const CoachIntro: React.FC = () => {
  return <section className="border-t">
      <div className="container mx-auto py-16">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="relative">
            <div className="aspect-square overflow-hidden rounded-2xl">
              <img src={coachImage} alt="Aileen Edwards, Executive Coach for Women of Colour" className="h-full w-full object-contain" loading="lazy" />
            </div>
            <div className="pointer-events-none absolute -inset-6 -z-10 rounded-3xl bg-gradient-primary opacity-20 blur-2xl" />
          </div>
          
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold">Meet Your Coach & Guide:</h2>
              <p className="mt-2 text-muted-foreground text-lg font-medium my-[25px]">👋 I’m Aileen Edwards, an Executive Coach, HR Executive, and Crucial Conversations® Facilitator with 30+ years of leadership experience.</p>
            </div>
            
            <div className="space-y-4 text-muted-foreground">
              
              <p>I’ve sat in the boardroom and the backroom. I’ve led million-dollar portfolios, coached executives in crisis, while carrying the weight of being “the first,” “the only,” or “the one who has to fix it.”</p>
              
            </div>
            
            <div className="rounded-xl border-l-4 border-primary bg-secondary/50 p-6 py-[18px]">
              <p className="font-medium text-primary">
                Now, I help women like you build a new legacy, one where your leadership isn't rooted in survival, but in sovereignty.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <a 
                    href="https://www.ameconsulting.ca/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    AME Consulting & Leadership Coaching
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-accent" />
                  <span>amedwards@ameconsulting.ca</span>
                </div>
                <a 
                  href="mailto:amedwards@ameconsulting.ca" 
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-3 py-1.5 rounded-md hover:bg-primary/90 transition-colors text-sm font-medium"
                >
                  <Mail className="h-4 w-4" />
                  Send Email
                </a>
              </div>
              
              <div className="flex gap-3">
                <a 
                  href="https://www.linkedin.com/in/aileen-m-edwards/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a 
                  href="https://www.instagram.com/ame_consulting/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default CoachIntro;