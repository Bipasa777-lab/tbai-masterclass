"use client";

import React, { useEffect, useState } from "react";
import { Earth, ChevronLeft, ChevronRight } from "lucide-react";
import { communityMembers } from "@/constant";

export default function Community({id}:{id?: string}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const autoplayDelay = 4000;
  const [isAutoplay, setIsAutoplay] = useState(true);

  const totalPages = Math.ceil(communityMembers.length / visibleCards);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setVisibleCards(1);
      else if (window.innerWidth < 1024) setVisibleCards(2);
      else setVisibleCards(3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Clamp index when visibleCards changes
  useEffect(() => {
    setCurrentIndex((prev) =>
      Math.min(prev, communityMembers.length - visibleCards)
    );
  }, [visibleCards]);

  useEffect(() => {
    if (!isAutoplay) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev + visibleCards >= communityMembers.length ? 0 : prev + visibleCards
      );
    }, autoplayDelay);
    return () => clearInterval(interval);
  }, [isAutoplay, visibleCards]);

  const handlePrev = () =>
    setCurrentIndex((prev) =>
      prev - visibleCards < 0
        ? (totalPages - 1) * visibleCards
        : prev - visibleCards
    );

  const handleNext = () =>
    setCurrentIndex((prev) =>
      prev + visibleCards >= communityMembers.length ? 0 : prev + visibleCards
    );

  const goToPage = (pageIndex: number) => {
    setCurrentIndex(pageIndex * visibleCards);
  };

  return (
    <section id={id} className="w-full px-4 md:px-16 py-16 bg-white dark:bg-slate-900 text-center">
      <div className="max-w-5xl mx-auto space-y-6">
        <h2 className="text-4xl font-bold text-slate-800 dark:text-white">
          Connect with professionals from 150+ countries
        </h2>
        <p className="text-slate-600 dark:text-slate-300 text-lg">
          Join Educore’s global community to build your career in UI/UX with mentorship, skill-building, and networking opportunities.
        </p>
        <button className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-red-600 text-white dark:bg-white dark:text-black font-medium shadow hover:scale-105 transition">
          Join Community <Earth className="w-5 h-5" />
        </button>
      </div>

      {/* Carousel */}
      <div
        onMouseEnter={() => setIsAutoplay(false)}
        onMouseLeave={() => setIsAutoplay(true)}
        className="relative max-w-6xl mx-auto mt-16"
      >
        <h3 className="text-2xl font-semibold mb-8 text-slate-800 dark:text-white">
          Meet Our Global Community
        </h3>

        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white dark:bg-slate-700 rounded-full shadow hover:bg-gray-100 dark:hover:bg-slate-600"
        >
          <ChevronLeft />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white dark:bg-slate-700 rounded-full shadow hover:bg-gray-100 dark:hover:bg-slate-600"
        >
          <ChevronRight />
        </button>

        <div className="overflow-hidden px-4 py-10">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${(currentIndex / communityMembers.length) * 100}%)`,
              width: `${(communityMembers.length / visibleCards) * 100}%`,
            }}
          >
            {communityMembers.map((member) => (
              <div
                key={member.id}
                className="px-4 flex-shrink-0"
                style={{ width: `${100 / communityMembers.length}%` }}
              >
                <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm overflow-hidden h-full flex flex-col">
                  <div className="aspect-video relative">
                    <img
                      src={member.imageUrl}
                      alt={member.name}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <h4 className="font-semibold text-lg">{member.name}</h4>
                      <p className="text-sm">{member.location}</p>
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <p className="text-red-600 dark:text-red-400 font-medium mb-2">
                      {member.role}
                    </p>
                    <p className="text-sm italic text-slate-600 dark:text-slate-300 mb-4">
                      "{member.testimonial}"
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Fixed Pagination */}
        <div className="mt-8 flex justify-center gap-2">
          {Array.from({ length: totalPages }).map((_, pageIndex) => (
            <button
              key={pageIndex}
              onClick={() => goToPage(pageIndex)}
              className={`h-2 rounded-full transition-all ${
                Math.floor(currentIndex / visibleCards) === pageIndex
                  ? "w-6 bg-red-600"
                  : "w-2 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
