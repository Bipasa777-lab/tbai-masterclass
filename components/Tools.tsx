"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  Cog6ToothIcon,
  CubeTransparentIcon,
  BoltIcon,
  CloudIcon,
} from "@heroicons/react/24/solid";



function Tools({ id }: { id?: string }) {
  useEffect(() => {
    AOS.init({ duration: 900, once: true, easing: "ease-in-out" });
  }, []);

  const cards = [
    {
      title: "Plugins",
      description:
        "Connect your site to top platforms like Stripe, Notion, and more.",
      imgSrc: "https://miro.medium.com/v2/resize:fit:1200/1*TrWsS0V19V8AX5obfo6QKw.jpeg",
      icon: <CloudIcon className="w-12 h-12 text-red-600 dark:text-red-400" />,
      delay: 0,
    },
    {
      title: "Design Toolkit",
      description:
        "Craft beautiful, responsive layouts visually with drag-and-drop ease.",
      imgSrc: "https://images.squarespace-cdn.com/content/v1/5ce4377caeb1ce00013a02fd/2374b36b-4e23-43d9-9217-1da4114affd4/LSSC-DigitalToolkit-Thumb.png",
      icon: (
        <Cog6ToothIcon className="w-12 h-12 text-blue-600 dark:text-blue-400" />
      ),
      delay: 100,
    },
    {
      title: "Chat GPT",
      description:
        "Organize your content with intuitive, visual page linking tools.",
      imgSrc: "https://i.ytimg.com/vi/AXn2XVLf7d0/maxresdefault.jpg",
      icon: (
        <CubeTransparentIcon className="w-12 h-12 text-green-600 dark:text-green-400" />
      ),
      delay: 200,
    },
    {
      title: "AI Automation",
      description:
        "Automate workflows with AI-powered agents that learn and improve over time.",
      imgSrc: "https://th.bing.com/th/id/OIP.ylrSjFW6An1SIlWX0ae7-wHaEK?rs=1&pid=ImgDetMain",
      icon: <BoltIcon className="w-12 h-12 text-yellow-600 dark:text-yellow-400" />,
      delay: 300,
      spanTwoCols: true,
    },
    {
      title: "Design Toolkit",
      description:
        "Craft beautiful, responsive layouts visually with drag-and-drop ease. Automate workflows with AI-powered agents that learn and improve over time. Organize your content with intuitive, visual page linking tools.",
      imgSrc: "https://pivotpoint.ai/wp-content/uploads/2023/09/Real_Time_Data3-copy-scaled.jpg",
      icon: (
        <Cog6ToothIcon className="w-12 h-12 text-purple-600 dark:text-purple-400" />
      ),
      delay: 400,
    },
  ];

  return (
    <section id={id} className="w-full px-6 sm:px-10 md:px-16 py-20 flex flex-col items-center text-center bg-gradient-to-tr from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Section Header */}
      <div
        className="max-w-4xl mb-16 flex flex-col gap-5"
        data-aos="fade-up"
        data-aos-delay="150"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-gray-100 leading-tight drop-shadow-sm">
          Get hands-on with industry-leading AI tools
        </h2>
        <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto tracking-wide">
          Build real projects using the same platforms powering modern innovation.
        </p>
      </div>

      {/* Features Grid */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl w-full"
        style={{ containerType: "inline-size" }}
      >
        {cards.map(
          ({ title, description, imgSrc, icon, delay, spanTwoCols }, idx) => (
            <div
              key={idx}
              className={`flex flex-col bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-lg dark:shadow-black/50 transition-transform duration-400 ease-in-out hover:scale-[1.05] cursor-pointer relative group border border-transparent 
              ${spanTwoCols ? "sm:col-span-2" : ""}
              `}
              data-aos="zoom-in-up"
              data-aos-delay={delay}
            >
              {/* Decorative gradient overlay */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-pink-500/10 opacity-0 group-hover:opacity-75 transition-opacity duration-700 rounded-3xl pointer-events-none"
              />

              {/* Image with fixed aspect ratio */}
              <div className="w-full aspect-[3/1] sm:aspect-[4/1] lg:aspect-[3/1] bg-gray-100 dark:bg-gray-700 overflow-hidden relative rounded-t-3xl">
                <img
                  src={imgSrc}
                  alt={`${title} Preview`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  width={400}
                  height={300}
                  sizes="(min-width: 1024px) 66vw, (min-width: 640px) 50vw, 100vw"
                  style={{ willChange: "transform" }}
                />
              </div>

              {/* Content */}
              <div className="p-8 text-left flex flex-col gap-5 relative z-10">
                <div className="flex items-center gap-4">
                  {/* Icon container with subtle background and rounded shadow */}
                  <div className="p-3 rounded-lg bg-white/30 dark:bg-gray-900/30 shadow-md shadow-indigo-400/30 dark:shadow-indigo-900/50">
                    {icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 tracking-wide">
                    {title}
                  </h3>
                </div>
                <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                  {description}
                </p>

                {/* Badge or tag example */}
                <span className="inline-block mt-auto self-start rounded-full bg-red-600 text-white text-xs font-semibold px-4 py-1.5 select-none shadow-lg shadow-indigo-500/50">
                  AI Powered
                </span>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
}

export default Tools;
