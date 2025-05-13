'use client';

import React from 'react';
import Image from 'next/image';

type Props = {};

function Cta({}: Props) {
  return (
    <main
      className="w-full h-[38vh] flex items-center justify-between px-6 md:px-10 text-white overflow-hidden"
      style={{
        background: 'linear-gradient(to right, #6E090B 0%, #D41115 100%)',
      }}
    >
      {/* Left side: Text */}
      <div className="w-full md:w-1/2 space-y-4">
        <h1 className="text-4xl font-bold leading-tight">
          Seats Are Limited. <br /> Start Your AI Journey Today.
        </h1>
        <p className="text-md text-white/80">
          The tools are ready. All you need is curiosity.
        </p>
        <button className="bg-white text-black font-semibold px-6 py-2 rounded-md shadow hover:bg-gray-200 transition">
          Join Now
        </button>
      </div>

      {/* Right side: Image */}
      <div className="w-1/2 flex justify-center items-center relative overflow-hidden h-full">
        <Image
          src="/assets/mobile_cta.svg" // Ensure the image is in the /public/assets folder
          alt="Techno Billion AI Preview"
          width={900} 
          height={1000} 
          className="absolute bottom-[-90%] drop-shadow-2xl" // Adjusted bottom positioning to hide the lower section
        />
      </div>
    </main>
  );
}

export default Cta;