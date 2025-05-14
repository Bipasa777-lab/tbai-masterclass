import React from 'react';
import { Earth } from 'lucide-react';
import { SliderImage } from './SliderImage';

type Props = {};

function Community({}: Props) {
  return (
    <section className="w-full px-6 sm:px-8 md:px-16 py-16 flex flex-col gap-12 items-center text-center">
      {/* Header Section */}
      <div className="max-w-4xl flex flex-col gap-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 dark:text-white">
          Connect with professionals and mentors from 150+ countries
        </h2>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
          It’s your gateway to a career in design. With Educore, you’ll gain the skills,
          confidence, and portfolio to stand out in the competitive world of UI/UX design.
        </p>
      </div>

      {/* Call-to-Action Button */}
      <button
  className="mt-4 inline-flex items-center gap-4 px-8 py-4 rounded-full bg-red-600 text-white dark:bg-white dark:text-black text-base font-medium shadow-lg hover:bg-red-500 dark:hover:bg-gray-100 transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600"
  aria-label="Join our global design community"
>
  <span>Join Community</span>
  <Earth className="w-6 h-6" />
</button>

      {/* Slider Section */}
      <div className="w-full max-w-7xl mt-12 overflow-hidden">
        <SliderImage />
      </div>
    </section>
  );
}

export default Community;
