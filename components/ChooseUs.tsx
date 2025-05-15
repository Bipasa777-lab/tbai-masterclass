'use client';

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import {
  HiOutlineHome,
  HiOutlineTrendingUp,
  HiOutlineGlobeAlt,
  HiOutlineLightBulb,
  HiOutlineBriefcase,
  HiOutlineSparkles,
} from 'react-icons/hi';

import { HiChevronDown } from 'react-icons/hi2';
import { AvatarCircles } from './magicui/avatar-circles';
import { dummyAvatars, modules } from '@/constant';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Link from 'next/link';

const ChooseUs = ({ id }: { id?: string }) => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      easing: 'ease-out-cubic',
      mirror: true,
      offset: 50,
    });

    const handleResize = () => {
      AOS.refresh();
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const features = [
    {
      icon: <HiOutlineBriefcase className="text-red-600 w-6 h-6" />,
      title: 'High Paying',
      description: 'AI skills open doors to well-paying roles in tech, business, and design.',
    },
    {
      icon: <HiOutlineGlobeAlt className="text-red-600 w-6 h-6" />,
      title: 'In Demand',
      description: 'AI talent is needed across industries—from startups to global enterprises.',
    },
    {
      icon: <HiOutlineHome className="text-red-600 w-6 h-6" />,
      title: 'Work From Home',
      description: 'Master tools that power remote jobs in automation, content, and consulting.',
    },
    {
      icon: <HiOutlineLightBulb className="text-red-600 w-6 h-6" />,
      title: 'No Tech Needed',
      description: 'You don’t need a tech degree—just curiosity and a willingness to learn.',
    },
    {
      icon: <HiOutlineTrendingUp className="text-red-600 w-6 h-6" />,
      title: 'Growth Opportunities',
      description: 'Start with basics and grow into roles in AI integration, product strategy, and more.',
    },
    {
      icon: <HiOutlineSparkles className="text-red-600 w-6 h-6" />,
      title: 'Make an Impact',
      description: 'Build real tools that solve real problems—and help shape the future of work.',
    },
  ];

  return (
    <section  className="w-full min-h-screen flex flex-col bg-black relative overflow-hidden">
      <img
        src="/design/m5.svg"
        alt="Zigzag"
        className="absolute top-4 left-4 w-12 sm:w-14 md:w-16 h-auto z-10"
      />

      <section className="py-16 px-4 sm:px-6 md:px-10 lg:px-12 bg-[#F9FAFB] flex-1 relative">
        <div className="max-w-7xl mx-auto text-center">
          <button
            className="bg-red-600 text-white text-sm px-4 py-1.5 rounded-full font-medium mb-4 hover:bg-red-700 transition"
            data-aos="fade-up"
          >
            Why Us?
          </button>
          <h2
            className="text-2xl md:text-3xl lg:text-4xl font-bold mb-10"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Why you should choose us
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition"
                data-aos="fade-up"
                data-aos-delay={150 + index * 100}
              >
                <div className="shrink-0 bg-red-100 p-3 rounded-lg">
                  {feature.icon}
                </div>
                <div>
                  <h4 className="text-lg font-semibold">{feature.title}</h4>
                  <p className="text-sm text-gray-600 mt-1">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <img
          src="/design/m4.svg"
          alt="Zigzag"
          className="absolute bottom-4 right-4 w-12 sm:w-14 md:w-16 h-auto"
        />
      </section>

      <section id={id} className="py-16 px-4 sm:px-6 md:px-10 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
          <div
            className="w-full lg:max-w-sm bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-xl p-6 flex flex-col justify-between text-white"
            data-aos="fade-left"
          >
            <div>
              <div className="bg-gradient-to-r from-red-600 to-red-500 text-white rounded-xl p-5 mb-6 shadow-md">
                <h3 className="text-lg font-semibold">Fundamentals of AI</h3>
                <p className="text-sm mt-1 mb-2 opacity-90">Join now for an extra discount.</p>
                <Link href="/curriculms.pdf" target='_blank' download className="mt-4 px-4 py-2 bg-white text-red-600 font-semibold rounded-md text-sm hover:bg-gray-100 transition">
                  See curriculum
                </Link>
              </div>

              <h4 className="text-base sm:text-lg font-semibold mb-2">
                Fundamentals of AI: The Ultimate AI program by TBAI
              </h4>
              <p className="text-sm text-gray-300 mb-4">
                Live, practical, and built for your schedule.
              </p>

              <div className="flex items-center space-x-2 mb-5">
                <AvatarCircles numPeople={10} avatarUrls={dummyAvatars.slice(0, 5)} />
              </div>

              <ul className="text-sm space-y-3 text-gray-200">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✅</span>
                  <span>Duration: 4 weeks (2×90-min live Zoom sessions/week)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✅</span>
                  <span>Trainers: IIT-MTech grads with analogies & stories</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✅</span>
                  <span>Labs: Weekly GPT-4o & AI tools hands-on</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✅</span>
                  <span>Final Project: Build & present your own AI assistant</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✅</span>
                  <span>Certification: Digital badge + "Prompt Sheet"</span>
                </li>
              </ul>
            </div>

            <Link href="https://www.technobillion.ai/career" target='_blank'
              className="mt-6 w-full py-3 bg-gradient-to-r from-red-600 to-red-500 text-white rounded-lg font-semibold hover:from-red-700 hover:to-red-600 transform hover:scale-105 transition shadow-md flex items-center justify-center text-center"
              data-aos="zoom-in"
            >
              Enroll now
            </Link>
          </div>

          <div
            className="flex-1 bg-black text-white rounded-2xl p-6 bg-[url('/stripe-pattern.png')] bg-cover relative overflow-hidden"
            data-aos="fade-right"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-black/90 to-black/70 pointer-events-none rounded-2xl" />
            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">
                What you'll learn in this course
              </h2>
              <Accordion type="single" collapsible className="space-y-3">
                {modules.map((mod, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    data-aos="fade-up"
                    data-aos-delay={100 + index * 80}
                    className="bg-[#1a1a1a] border border-white/10 rounded-xl"
                  >
                    <AccordionTrigger className="text-white px-5 py-4 hover:bg-[#222] transition rounded-xl">
                      <div className="text-left">
                        <div className="font-semibold">{mod.title}</div>
                        <div className="text-sm text-gray-400">{mod.subtitle}</div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-5 pb-4 text-sm text-gray-300">
                      {mod.content || 'This module covers essential concepts and real-world applications of AI.'}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default ChooseUs;
