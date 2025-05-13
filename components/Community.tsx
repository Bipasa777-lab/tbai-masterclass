import React from 'react'
import { Earth } from 'lucide-react';
import { SliderImage } from './SliderImage';

type Props = {}

function Community({}: Props) {
  return (
    <section className="w-full px-4 sm:px-6 md:px-12 py-12 flex flex-col gap-8 items-center text-center">
      
      <div className="max-w-3xl flex flex-col gap-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 dark:text-white">
          Connect with professionals and mentors from 150+ countries
        </h2>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
          It’s your gateway to a career in design. With Educore, you’ll gain the skills,
          confidence, and portfolio to stand out in the competitive world of UI/UX design.
        </p>
      </div>

      <button
        className="mt-2 inline-flex items-center gap-2 px-5 py-3 rounded-full bg-black text-white dark:bg-white dark:text-black text-sm font-medium shadow-md hover:bg-gray-800 dark:hover:bg-gray-100 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
        aria-label="Join our global design community"
      >
        <span>Join Community</span>
        <Earth className="w-5 h-5" />
      </button>

      <div className="w-full max-w-6xl mt-8">
        <SliderImage />
      </div>
      
    </section>
  )
}

export default Community;
