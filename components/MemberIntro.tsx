"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function MemberIntro({ id }: { id?: string }) {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section id={id} className="bg-black text-white py-20 px-6 sm:px-10 lg:px-20">
      <div
        className="max-w-7xl mx-auto flex flex-col md:flex-row gap-14 md:gap-20 items-center"
        data-aos="fade-up"
      >
        {/* Left: Image */}
        <div
          className="w-full md:w-[45%] flex justify-center"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <img
            src="/assets/abhrajit.svg"
            alt="Abhrajit Saha"
            className="rounded-2xl max-w-[90%] max-h-[420px] object-cover shadow-xl shadow-red-500/20 transition-all duration-500 hover:scale-105"
          />
        </div>

        {/* Right: Content */}
        <div
          className="flex flex-col gap-6 md:w-1/2"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold leading-snug text-white">
            Meet <span className="text-red-500">Abhrajit Saha</span>
          </h2>

          {/* Highlights */}
          <ul className="space-y-3 text-base">
            <li className="flex items-start">
              <span className="mr-3 inline-block text-sm bg-white/10 px-3 py-1 rounded-full text-red-400 border border-white/20">
                ⭐
              </span>
              <span>Co-Founder & Director, Techno Billion AI</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 inline-block text-sm bg-white/10 px-3 py-1 rounded-full text-red-400 border border-white/20">
                🚀
              </span>
              <span>Led Google Cloud rollout for 15,000 students</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 inline-block text-sm bg-white/10 px-3 py-1 rounded-full text-red-400 border border-white/20">
                🎓
              </span>
              <span>
                IIT Kharagpur Alumnus, Innovation Awardee, National Speaker
              </span>
            </li>
          </ul>

          {/* Bio */}
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed mt-2">
            Abhrajit Saha, co-founder of Techno Billion AI, is an IIT Kharagpur
            graduate known for launching India’s fastest Google Cloud “Digital
            Campus,” onboarding 15,000 students in two weeks. Formerly with AB
            InBev, he now drives AI access through labs in underserved regions
            and national ed-tech talks. Named a Top 30 Competitive E-School
            Leader, Abhrajit champions practical AI education, blending
            economic insight with a mission to empower a billion people to turn
            ideas into impactful solutions.
          </p>

          {/* Brand logos */}
          <div className="mt-8">
            <h4 className="text-xs uppercase text-gray-400 mb-4 tracking-wider">
              Brands Educated
            </h4>
            <div
              className="flex flex-wrap gap-4 items-center"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              {[
                "iit",
                "google",
                "nv",
                "microsoft",
                "intel",
                "acer",
                "ti",
              ].map((icon, i) => (
                <img
                  key={i}
                  src={`/icons/${icon}.svg`}
                  alt={icon}
                  className="h-6 opacity-60 hover:opacity-100 transition duration-300"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MemberIntro;
