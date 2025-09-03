import { Helmet } from "react-helmet-async";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import PainPoints from "@/components/sections/PainPoints";
import Agitation from "@/components/sections/Agitation";
import Vision from "@/components/sections/Vision";
import CoachIntro from "@/components/sections/CoachIntro";
import SolutionIntro from "@/components/sections/SolutionIntro";
import OfferStack from "@/components/sections/OfferStack";
import HowItWorks from "@/components/sections/HowItWorks";
import BoldMethod from "@/components/sections/BoldMethod";
import Testimonials from "@/components/sections/Testimonials";
import SocialProof from "@/components/sections/SocialProof";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";
import ApplicationForm from "@/components/sections/ApplicationForm";
import FinalCTA from "@/components/sections/FinalCTA";
import StickyMobileCTA from "@/components/sections/StickyMobileCTA";
const Index = () => {
  const canonical = typeof window !== "undefined" ? window.location.href.split("?")[0] : "";

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "She Leads Anyway™ — Executive Coaching for Women of Colour",
    description:
      "A 6-month private coaching experience to lead with purpose, rise with power, and stay whole.",
    provider: {
      "@type": "Organization",
      name: "AME Consulting & Leadership Coaching",
      email: "amedwards@ameconsulting.ca",
      telephone: "+1-416-768-3612",
    },
    areaServed: "Global",
    offers: {
      "@type": "Offer",
      priceCurrency: "CAD",
      price: "5000",
      url: canonical,
      availability: "https://schema.org/InStock",
    },
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How long is the coaching experience?",
        acceptedAnswer: { "@type": "Answer", text: "Six months with biweekly sessions, a strategy intensive, and between-session support." }
      },
      {
        "@type": "Question",
        name: "Who is this best suited for?",
        acceptedAnswer: { "@type": "Answer", text: "Women of colour in leadership or high-influence roles seeking executive presence, courageous voice, and aligned leadership." }
      },
      {
        "@type": "Question",
        name: "Can my organization sponsor this?",
        acceptedAnswer: { "@type": "Answer", text: "Yes—many clients use professional development budgets. A proposal or invoice can be provided for employer sponsorship." }
      },
      {
        "@type": "Question",
        name: "What are the payment options?",
        acceptedAnswer: { "@type": "Answer", text: "One-time payment of $5,000 CAD or six monthly payments of $875 CAD (total $5,250 CAD). HST applies." }
      },
      {
        "@type": "Question",
        name: "Is this confidential?",
        acceptedAnswer: { "@type": "Answer", text: "Yes. This is a safe, private coaching space with clear agreements for confidentiality and psychological safety." }
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>She Leads Anyway™ — Executive Coaching for Women of Colour | AME Consulting</title>
        <meta
          name="description"
          content="A 6‑month private coaching experience for women of colour to lead with purpose, rise with power, and stay whole."
        />
        {canonical && <link rel="canonical" href={canonical} />}
        <meta property="og:title" content="She Leads Anyway™ — Executive Coaching for Women of Colour | AME Consulting" />
        <meta property="og:description" content="Lead with purpose. Rise with power. Stay whole. A private executive coaching experience for women of colour." />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(serviceLd)}</script>
        <script type="application/ld+json">{JSON.stringify(faqLd)}</script>
      </Helmet>

      <Header />

      <main>
        <Hero />
        <PainPoints />
        <Agitation />
        <Vision />
        <CoachIntro />
        <SolutionIntro />
        <OfferStack />
        <HowItWorks />
        <BoldMethod />
        <Testimonials />
        <SocialProof />
        <Pricing />
        <FAQ />
        <ApplicationForm />
        <FinalCTA />
      </main>

      <footer className="border-t">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 py-8 md:flex-row">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} AME Consulting & Leadership Coaching</p>
          <div className="flex items-center gap-6 text-sm">
            <a href="#pain" className="story-link">The Problem</a>
            <a href="#solution" className="story-link">The Solution</a>
            <a href="#pricing" className="story-link">Investment</a>
            <a href="#proof" className="story-link">Proof</a>
          </div>
        </div>
      </footer>

      <StickyMobileCTA />
    </>
  );
};

export default Index;
