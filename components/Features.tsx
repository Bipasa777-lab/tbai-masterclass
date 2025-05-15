'use client';
import React, { useEffect } from 'react';
import { HiCheckCircle } from 'react-icons/hi';
import { FaBook, FaGraduationCap, FaClock } from 'react-icons/fa';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';

const FeatureSection = ({ id }: { id?: string }) => {
  useEffect(() => {
    AOS.init({ duration: 800, once: false, mirror: true, offset: 100 });
    AOS.refresh();
  }, []);

  return (
    <section id={id} className="relative w-full py-16 px-4 sm:px-6 md:px-8 bg-white overflow-hidden">
      {/* Gradient borders */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-gray-100 to-white"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-gray-100 to-white"></div>

      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 md:gap-16 lg:gap-20">
        {/* Left Text Section */}
        <div
          data-aos="fade-right"
          data-aos-delay="100"
          className="flex-1 max-w-xl text-center lg:text-left"
        >
          <h2 className="text-3xl sm:text-4xl font-bold leading-snug mb-6 text-gray-900">
            The only program you need to be <br />
            <span className="relative inline-block z-10">among the top 1%</span>
          </h2>

          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8"
          >
            <button className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition hover:shadow-lg transform hover:-translate-y-1 duration-200">
              Enroll now
            </button>
            <a
              href="/curriculms.pdf" // Update this path to the actual location of your PDF
              download
              className="border border-gray-300 text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition hover:shadow-md transform hover:-translate-y-1 duration-200"
            >
              See curriculum
            </a>
          </div>

          <ul
            data-aos="fade-up"
            data-aos-delay="300"
            className="space-y-4 text-sm sm:text-base text-gray-800 text-left max-w-lg mx-auto lg:mx-0"
          >
            {[
              "Understand AI from the ground up—no tech background needed.",
              "Explore real-world tools like GPT-4o, Canva AI, and DALL·E 3.",
              "Build practical AI projects, from chatbots to personal assistants.",
              "Get expert guidance and feedback to sharpen your skills.",
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <HiCheckCircle className="text-red-600 mt-1 shrink-0" size={20} />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Middle Image */}
        <div
          data-aos="zoom-in"
          data-aos-delay="300"
          className="hidden md:block flex-1 max-w-sm relative"
        >
          <div className="absolute inset-0 rounded-full blur-xl opacity-40 -rotate-12 z-0"></div>
          <Image
            src="/assets/mobile_feat.svg"
            alt="AI program preview"
            className="w-full h-auto object-contain relative z-10 drop-shadow-xl"
            width={500}
            height={500}
            priority
          />
        </div>

        {/* Right Features */}
        <div
          data-aos="fade-left"
          data-aos-delay="400"
          className="flex-1 space-y-8 w-full max-w-lg"
        >
          {[
            {
              icon: <FaBook size={20} />,
              title: "Learn AI Hands-on",
              description: "Work on real-life projects using tools like GPT-4o, Canva AI, and more.",
            },
            {
              icon: <FaGraduationCap size={20} />,
              title: "Built for Non-Techies or Techies",
              description: "No coding required—just curiosity and a drive to explore AI.",
            },
            {
              icon: <FaClock size={20} />,
              title: "Create Your Own AI Assistant",
              description: "Finish the course with a working AI tool built entirely by you.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={500 + index * 100}
              className="flex items-start gap-4 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition transform hover:-translate-y-1 duration-300"
            >
              <div className="bg-red-600 text-white p-3 rounded-lg">{feature.icon}</div>
              <div>
                <h4 className="font-semibold text-lg text-gray-900">{feature.title}</h4>
                <p className="text-sm text-gray-600 mt-2">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Decorative Dots */}
      <div className="absolute top-1/4 left-10 w-6 h-6 bg-red-100 rounded-full hidden lg:block" data-aos="fade-down-right" data-aos-delay="700"></div>
      <div className="absolute bottom-1/4 right-10 w-8 h-8 bg-red-200 rounded-full hidden lg:block" data-aos="fade-up-left" data-aos-delay="800"></div>
      <div className="absolute top-3/4 left-1/4 w-4 h-4 bg-red-300 rounded-full hidden lg:block" data-aos="zoom-in" data-aos-delay="900"></div>
    </section>
  );
};

export default FeatureSection;
