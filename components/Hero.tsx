'use client';
import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { AvatarCircles } from './magicui/avatar-circles';
import { dummyAvatars } from '@/constant';
import { motion } from 'framer-motion';

const HeroSection = ({ id }: { id?: string }) => {
  return (
    <section id={id} className="relative w-full min-h-[90vh] md:min-h-screen bg-gradient-to-br from-[#7d0000] via-[#a30000] to-[#7d0000] text-white px-4 sm:px-8 py-16 md:py-24 overflow-hidden flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/design/grid-pattern.svg')] bg-repeat"></div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-8 md:gap-12 relative z-10 w-full">

        {/* Left Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left mt-8 lg:mt-0">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 tracking-tight"
          >
            Master AI in Just 
            <br className="hidden sm:block" />
            <span className="text-white relative">
              <span className="relative z-10">4 Weeks – ChatGPT inDepth</span>
              <span className="absolute bottom-1 left-0 w-full bg-black/20 -z-10 skew-x-3"></span>
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base sm:text-lg md:text-xl text-gray-100 max-w-lg mx-auto lg:mx-0 mb-8"
          >
            Learn to use GPT-4o, Canva AI, and more directly from industry
            experts and IIT professionals. No tech background needed.
          </motion.p>

          {/* Social Proof */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap items-center justify-center lg:justify-start mb-8 gap-4 sm:gap-6"
          >
            <AvatarCircles numPeople={210} avatarUrls={dummyAvatars} />
            <div className="flex flex-col items-start text-center sm:text-left">
              <span className="text-white font-medium text-sm sm:text-base">Join 4000 Students</span>
              <span className="text-xs sm:text-sm text-gray-200">⭐⭐⭐⭐⭐ (4.9/5 avg rating)</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4"
          >
            <Button className="w-full sm:w-auto bg-black text-white hover:bg-gray-900 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-200 text-base font-medium px-6 py-3 h-auto">
              Enroll Now
            </Button>
            <Button
              variant="outline"
              className="w-full sm:w-auto bg-white text-black border border-white/20 hover:bg-gray-100 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-200 text-base font-medium px-6 py-3 h-auto"
            >
              Download Brochure
            </Button>
          </motion.div>

          {/* Feature Tags */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 flex flex-wrap gap-3 justify-center lg:justify-start"
          >
            {['Live Classes', 'Hands-on Projects', 'Certificate'].map((tag, index) => (
              <span key={index} className="text-xs sm:text-sm bg-white/10 px-3 py-1 rounded-full border border-white/20">
                {tag}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Right Image */}
        <motion.div 
          initial={{ opacity: 0, x: 100, rotate: 5 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="hidden lg:flex w-full lg:w-1/2 justify-end relative"
        >
          <div className="relative">
            <div className="absolute -inset-4 bg-white/10 rounded-full blur-xl"></div>
            <Image
              src="/icons/gpt.svg"
              alt="AI Course Illustration"
              width={600}
              height={600}
              className="relative z-10 w-full max-w-lg object-contain drop-shadow-2xl animate-pulse duration-[3000ms]"
              priority
            />
          </div>

          {/* Decorative Elements */}
          <Image
            src="/design/m.svg"
            alt="Decorative Element"
            width={200}
            height={200}
            className="absolute -left-10 top-1/4 opacity-60 animate-pulse"
          />

          <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/5 rounded-full blur-md"></div>
        </motion.div>
      </div>

      {/* Decorative Layer */}
      <div className="absolute top-1 right-0 w-full h-32 bg-gradient-to-b from-black/20 to-transparent pointer-events-none"></div>
      <Image
        src="/design/m3.svg"
        alt="Decorative Pattern"
        width={600}
        height={600}
        className="absolute top-1/2 right-0 w-[400px] h-[400px] opacity-30 pointer-events-none hidden sm:block animate-pulse"
      />
      <Image
        src="/design/m2.svg"
        alt="Decorative Pattern"
        width={600}
        height={600}
        className="absolute bottom-0 left-0 w-[300px] h-[300px] opacity-30 pointer-events-none hidden sm:block animate-pulse"
      />

    </section>
  );
};

export default HeroSection;
