import Image from 'next/image'
import React from 'react'

type Props = {}

function Partners({}: Props) {
  return (
    <div className="w-full bg-[#f3f4f6] py-6 px-4 sm:px-8">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between flex-wrap gap-4 sm:gap-6">
        {/* Tagline */}
        <span className="text-sm sm:text-base font-medium text-center sm:text-left text-black whitespace-nowrap">
          Upscaling <span className="text-red-600 font-semibold">billions</span> with the partnership of
        </span>

        {/* Logos */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 min-w-0">
          <Image
            src="/icons/corover.svg"
            alt="CoRover"
            width={90}
            height={40}
            className="h-10 w-auto object-contain"
          />
          <Image
            src="/icons/bengal-council.svg"
            alt="Bengal Science Council"
            width={60}
            height={40}
            className="h-10 w-auto object-contain"
          />
          <Image
            src="/icons/nvidia.svg"
            alt="NVIDIA"
            width={80}
            height={40}
            className="h-10 w-auto object-contain"
          />
          <Image
            src="/icons/gemini.svg"
            alt="Gemini"
            width={70}
            height={40}
            className="h-10 w-auto object-contain"
          />
        </div>
      </div>
    </div>
  )
}

export default Partners
