'use client';

import React from 'react';
import Image from 'next/image';

type Props = {};

function Cta({}: Props) {
  return (
    <section
      className="w-full flex items-center justify-between px-4 sm:px-6 lg:px-12 py-12 sm:py-16 text-white bg-gradient-to-r from-[#6E090B] to-[#D41115] overflow-hidden relative"
    >
      {/* Left side: Text */}
      <div className="w-full sm:w-2/3 lg:w-1/2 space-y-4 z-10">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-snug sm:leading-tight">
          Seats Are Limited. <br className="hidden sm:block" />
          Start Your AI Journey Today.
        </h1>
        <p className="text-sm sm:text-base text-white/85 max-w-md">
          The tools are ready. All you need is curiosity.
        </p>
        <button className="bg-white text-black font-semibold px-6 py-2 rounded-md shadow hover:bg-gray-200 transition duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white">
          Join Now
        </button>
      </div>

      {/* Right side: Image */}
      <div className="hidden sm:flex sm:w-1/3 lg:w-1/2 justify-center items-center h-full relative">
        <Image
          src="/assets/mobile_cta.svg" // Ensure this image is inside public/assets/
          alt="Techno Billion AI Preview"
          width={600}
          height={800}
          className="absolute max-w-none drop-shadow-2xl pointer-events-none"
          priority
        />
      </div>
    </section>
  );
}

export default Cta;
