import React from "react";
import { Button } from "@/components/ui/button";

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto flex items-center justify-between py-4">
        <a href="#hero" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-gradient-primary" aria-hidden />
          <span className="text-sm font-semibold md:text-base">She Leads Anyway™</span>
        </a>
        <div className="hidden items-center gap-6 md:flex">
          <a href="#solution" className="story-link text-sm">The Solution</a>
          <a href="#method" className="story-link text-sm">BOLD™ Method</a>
          <a href="#offer" className="story-link text-sm">What you get</a>
          <a href="#pricing" className="story-link text-sm">Investment</a>
          <a href="#faq" className="story-link text-sm">FAQ</a>
        </div>
        <Button asChild variant="hero" size="sm" className="hover-scale">
          <a href="https://calendly.com/ameconsulting/30-minute-discovery-meeting" target="_blank" rel="noopener noreferrer">
            Book Discovery Call
          </a>
        </Button>
      </nav>
    </header>
  );
};

export default Header;
