"use client";

import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  MailIcon,
  ArrowRightIcon,
  MessageCircleIcon,
  PhoneIcon,
} from "lucide-react";
import { faqItems } from "@/constant";
import AOS from "aos";
import "aos/dist/aos.css";

const FAQSection: React.FC = () => {
  const [activeAccordion, setActiveAccordion] = useState<string | undefined>(
    "item-0"
  );

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
      offset: 60,
    });

    const refreshOnResize = () => AOS.refresh();
    window.addEventListener("resize", refreshOnResize);

    return () => {
      window.removeEventListener("resize", refreshOnResize);
    };
  }, []);

  return (
    <section id="faq" className="bg-gradient-to-b from-slate-50 to-white px-4 sm:px-6 md:px-8 lg:px-16 py-12 lg:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-10" data-aos="fade-up">
          <span className="bg-red-100 text-red-600 text-xs font-medium py-1 px-3 rounded-full">
            Support
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-3 mb-4 text-slate-800">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base">
            Find answers to the most common questions about our AI courses and
            programs.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start py-20">
          {/* Contact Info */}
          <div
            className="order-2 lg:order-1 lg:col-span-5"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <div className="lg:sticky top-24">
              <div className="  ">
                
                <h3 className="text-xl sm:text-2xl font-bold mb-4 text-slate-800">
                  Didn't find your answer?
                </h3>
                <p className="text-slate-600 mb-6 text-sm sm:text-base leading-relaxed">
                  No worries! If you have any other questions or need more
                  information, feel free to reach out directly through any of
                  these channels.
                </p>

                <div className="space-y-6">
                  {/* Email */}
                  <div className="border-t border-slate-200 pt-6">
                    <div className="flex items-start">
                      <div className="bg-red-100 p-2 rounded-lg">
                        <MailIcon className="h-5 w-5 text-red-600 " />
                      </div>
                      <div className="ml-3">
                        <h4 className="text-base font-medium mb-1 text-slate-800">
                          Email us at
                        </h4>
                        <a
                          href="mailto:hello@empower@technobillionai.com"
                          className="inline-flex items-center text-red-600 hover:text-red-800 font-medium group transition-all"
                        >
                          <span className="truncate">
                            empower@technobillionai.com
                          </span>
                          <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="border-t border-slate-200 pt-6">
                    <div className="flex items-start">
                      <div className="bg-red-100 p-2 rounded-lg">
                        <PhoneIcon className="h-5 w-5 text-red-600" />
                      </div>
                      <div className="ml-3">
                        <h4 className="text-base font-medium mb-1 text-slate-800">
                          Call us
                        </h4>
                        <a
                          href="tel:+918240879502"
                          className="inline-flex items-center text-red-600 hover:text-red-800 font-medium group transition-all"
                        >
                          <span className="truncate">+91 82408 79502</span>
                          <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Accordion */}
          <div
            className="order-1 lg:order-2 lg:col-span-7"
            data-aos="fade-right"
            data-aos-delay="100"
          >
              <Accordion
                type="single"
                collapsible
                value={activeAccordion}
                onValueChange={setActiveAccordion}
                className="divide-y divide-slate-200"
              >
                {faqItems.map((item, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="first:rounded-t-lg last:rounded-b-lg overflow-hidden"
                    data-aos="fade-up"
                    data-aos-delay={150 + index * 50}
                  >
                    <AccordionTrigger
                      className="px-5 sm:px-6 py-4 hover:bg-slate-50 text-slate-800 font-medium text-left text-sm sm:text-base flex transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
                      onClick={() =>
                        setActiveAccordion(
                          activeAccordion === `item-${index}`
                            ? undefined
                            : `item-${index}`
                        )
                      }
                    >
                      <span className="line-clamp-2">{item.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="px-5 sm:px-6 pb-5 pt-1 text-slate-600 text-sm lg:text-base">
                      <div className="bg-slate-50 p-4 rounded-lg leading-relaxed">
                        {item.answer}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
    </section>
  );
};

export default FAQSection;
