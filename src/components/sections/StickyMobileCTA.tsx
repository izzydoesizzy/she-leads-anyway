import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const StickyMobileCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero section (roughly 800px)
      setIsVisible(window.scrollY > 800);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-t p-4 md:hidden">
      <div className="flex gap-3">
        <Button variant="hero" className="flex-1" asChild>
          <a href="https://calendly.com/ameconsulting/30-minute-discovery-meeting" target="_blank" rel="noopener noreferrer">
            Book Discovery Call
          </a>
        </Button>
        <Button variant="outline" className="flex-1" asChild>
          <a href="mailto:amedwards@ameconsulting.ca">Email Me</a>
        </Button>
      </div>
    </div>
  );
};

export default StickyMobileCTA;