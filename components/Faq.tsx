import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MailIcon, ArrowRightIcon } from "lucide-react";
import { faqItems } from "@/constant";
import Button from "./Button";

const FAQSection: React.FC = () => {
  // Dummy FAQ data

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 p-16 h-screen">

      {/* Left Column - Contact Info */}
      <div className="flex flex-col space-y-6 order-2 lg:order-1">
        <div className="bg-white p-8 rounded-lg">
          <h3 className="text-xl font-semibold mb-4 text-slate-800">
            Didn't find your answer?
          </h3>
          <p className="text-slate-600 mb-6">
            No worries! If you have any other questions or need more
            information, feel free to reach out directly.
          </p>
          <div className="border-t border-slate-200 pt-6">
            <h4 className="text-lg font-medium mb-3 text-slate-700">
              Have more questions? Let us know at:
            </h4>
            <a
              href="mailto:hello@technobillion.ai"
              className="flex items-center text-blue-600 hover:text-blue-800 font-medium group"
            >
              <MailIcon className="mr-2 h-5 w-5" />
              hello@technobillion.ai
              <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>

      {/* Right Column - FAQ Accordion */}
      <div className="order-1 lg:order-2 ">
        <h2 className="text-3xl font-bold mb-12 text-slate-800">
          Frequently Asked Questions
        </h2>
        <Accordion
          type="single"
          collapsible
          className="bg-white rounded-lg  p-1"
        >
          {faqItems.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-b border-slate-200 last:border-0"
            >
              <AccordionTrigger className="px-6 py-4 hover:bg-slate-50 text-slate-800 font-medium text-left">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-1 text-slate-600">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
