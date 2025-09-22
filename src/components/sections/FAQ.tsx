import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
const FAQ: React.FC = () => {
  return <section id="faq" className="border-t">
      <div className="container mx-auto py-[20px]">
        <h2 className="text-center text-3xl font-semibold">Frequently Asked Questions</h2>
        <div className="mx-auto mt-6 max-w-3xl">
          <Accordion type="single" collapsible>
            <AccordionItem value="length">
              <AccordionTrigger>How long is the coaching experience?</AccordionTrigger>
              <AccordionContent>
                It’s a six‑month private coaching partnership, including biweekly sessions, a strategy intensive, and between‑session support.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="fit">
              <AccordionTrigger>Who is this best suited for?</AccordionTrigger>
              <AccordionContent>
                Women leaders and diverse professionals ready to sharpen communication and influence.<br/>
                HR/DEI leaders building inclusive leadership pipelines<br/>
                Organizations committed to advancing Women of Color in leadership
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="sponsorship">
              <AccordionTrigger>Can my organization sponsor this?</AccordionTrigger>
              <AccordionContent>
                Many clients use professional development budgets. I’m happy to provide a proposal or invoice for employer sponsorship.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="payments">
              <AccordionTrigger>What are the payment options?</AccordionTrigger>
              <AccordionContent>
                One‑time payment of $5,000 CAD or six monthly payments of $875 CAD (total $5,250 CAD). HST applies.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="confidentiality">
              <AccordionTrigger>Is this confidential?</AccordionTrigger>
              <AccordionContent>
                Yes. This is a safe, private coaching space. We’ll set clear agreements for confidentiality and psychological safety.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>;
};
export default FAQ;