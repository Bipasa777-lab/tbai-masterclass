'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

type Props = {};

function Cta({}: Props) {
  return (
    <section
      className="w-full relative px-6 py-16 md:px-16 lg:p-20 flex flex-col md:flex-row items-start md:items-center justify-between text-white bg-gradient-to-r from-[#6E090B] to-[#D41115] overflow-hidden"
    >
      {/* Left side: Text */}
      <div className="z-10 max-w-xl space-y-4 text-center md:text-left mx-auto md:mx-0">
  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-snug sm:leading-tight">
    Seats Are Limited. <br className="hidden sm:block" />
    Start Your AI Journey Today.
  </h1>
  <p className="text-sm sm:text-base text-white/85 max-w-md mx-auto md:mx-0">
    The tools are ready. All you need is curiosity.
  </p>
  <Link
    href="https://www.technobillion.ai/career"
    target="_blank"
    className="inline-block bg-white text-black font-semibold px-6 py-2 rounded-md shadow hover:bg-gray-200 transition duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
  >
    Join Now
  </Link>
</div>

      {/* Right side: Image (hidden on md and below) */}
      <img
        src="/assets/mobile_cta.svg"
        alt="Techno Billion AI Preview"
        width={900}
        height={1000}
        className="hidden lg:block absolute right-0 top-[-60%] object-cover"
      />
    </section>
  );
}

export default Cta;
