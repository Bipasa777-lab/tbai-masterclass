'use client';
import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { AvatarCircles } from './magicui/avatar-circles';
import { dummyAvatars } from '@/constant';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-[90vh] md:min-h-screen bg-gradient-to-br from-[#7d0000] via-[#a30000] to-[#7d0000] text-white px-4 sm:px-8 py-16 md:py-24 overflow-hidden flex items-center">
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
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 tracking-tight"
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
            className="text-lg md:text-xl text-gray-100 max-w-lg mx-auto lg:mx-0 mb-8"
          >
            Learn to use GPT-4o, Canva AI, and more directly from industry
            experts and IIT professionals. No tech background needed.
          </motion.p>
          
          {/* Social Proof */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center justify-center lg:justify-start mb-8"
          >
            <div className="flex items-center gap-3">
              {/* Custom Avatar SVG Images */}
              <div className="flex -space-x-4">
                <Image
                  src="assets/avatars/avatar1.svg"
                  alt="Avatar 1"
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
                <Image
                  src="assets/avatars/avatar2.svg"
                  alt="Avatar 2"
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
                <Image
                  src="assets/avatars/avatar3.svg"
                  alt="Avatar 3"
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
                <Image
                  src="assets/avatars/avatar4.svg"
                  alt="Avatar 4"
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
              </div>

              {/* Text Section */}
              <div className="flex flex-col items-start">
                <span className="text-white font-medium">Join 4000 Students</span> {/* Display "4000" */}
                <span className="text-xs text-gray-200">⭐⭐⭐⭐⭐ (4.9/5 avg rating)</span>
              </div>
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
          
          {/* Feature Tags - Added for better conversion */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 flex flex-wrap gap-3 justify-center lg:justify-start"
          >
            {['Limited Seats', 'Live Classes', 'Hands-on Projects', 'Certificate'].map((tag, index) => (
              <span key={index} className="text-xs bg-white/10 px-3 py-1 rounded-full border border-white/20">
                {tag}
              </span>
            ))}
          </motion.div>
        </div>
        
        {/* Right Image - Hidden on mobile/tablet */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="hidden lg:flex w-full lg:w-1/2 justify-center relative"
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
            className="absolute -left-10 top-1/4 opacity-60 animate-pulse duration-[4000ms]"
          />
          
          <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/5 rounded-full blur-md"></div>
        </motion.div>
      </div>
      
      {/* Absolute Design Elements */}
      <div className="absolute top-1 right-0 w-full h-32 bg-gradient-to-b from-black/20 to-transparent pointer-events-none"></div>
      <Image
        src="/design/m3.svg"
        alt="Decorative Pattern"
        width={600}
        height={600}
        className="absolute top-1/2 right-0 w-[400px] h-[400px] opacity-30 pointer-events-none hidden sm:block animate-pulse duration-[5000ms]"
      />
      
      {/* Mobile-only small graphic at bottom - moved higher to avoid cutoff */}
      <div className="lg:hidden sm:hidden absolute bottom-4 left-1/2 -translate-x-1/2 w-28 h-28 opacity-40">
        <Image
          src="/icons/gpt.svg"
          alt="AI Mini Icon"
          width={120}
          height={120}
          className="w-full h-full object-contain"
        />
      </div>
      
      {/* Mobile scroll indicator */}
      <div className="lg:hidden absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-xs text-white/70 mb-1">Scroll for more</span>
        <svg className="w-5 h-5 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;