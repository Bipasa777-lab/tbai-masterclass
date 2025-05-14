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
    <section className="bg-gradient-to-b from-slate-50 to-white px-4 sm:px-6 md:px-8 lg:px-16 py-12 lg:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14" data-aos="fade-up">
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start">
          {/* Contact Info */}
          <div
            className="order-2 lg:order-1 lg:col-span-5"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <div className="lg:sticky top-24">
              <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-slate-100 bg-gradient-to-br from-white to-slate-50 transition-shadow hover:shadow-xl duration-300">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-red-100 rounded-full mb-4">
                  <MessageCircleIcon className="h-6 w-6 text-red-600" />
                </div>
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
                          href="mailto:hello@technobillion.ai"
                          className="inline-flex items-center text-red-600 hover:text-red-800 font-medium group transition-all"
                        >
                          <span className="truncate">
                            hello@technobillion.ai
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
                          href="tel:+1234567890"
                          className="inline-flex items-center text-red-600 hover:text-red-800 font-medium group transition-all"
                        >
                          <span className="truncate">+1 (234) 567-890</span>
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
            <div className="bg-white rounded-xl shadow-lg border border-slate-100 p-1 transition-shadow hover:shadow-xl duration-300">
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
      </div>
    </section>
  );
};

export default FAQSection;
