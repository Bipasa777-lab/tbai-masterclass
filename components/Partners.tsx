import Image from 'next/image'
import React from 'react'

type Props = {}

function Partners({}: Props) {
  return (
    <div className=" w-full bg-[#f3f4f6] flex flex-col sm:flex-row items-center justify-between px-6 sm:px-10 py-4 gap-4 sm:gap-0">
        {/* Tagline */}
        <span className="text-sm sm:text-base font-medium text-center text-black">
          Upscaling <span className="text-red-600 font-semibold">billions</span>{" "}
          at
        </span>

        {/* Logos */}
        <div className="flex items-center justify-center gap-4">
          <Image
            src="/icons/corover.svg"
            alt="CoRover"
            width={90}
            height={40}
            className="object-contain h-10"
          />
          <Image
            src="/icons/bengal-council.svg"
            alt="Bengal Science Council"
            width={60}
            height={40}
            className="object-contain h-10"
          />
          <Image
            src="/icons/nvidia.svg"
            alt="NVIDIA"
            width={80}
            height={40}
            className="object-contain h-10"
          />
          <Image
            src="/icons/gemini.svg"
            alt="Gemini"
            width={70}
            height={40}
            className="object-contain h-10"
          />
        </div>
      </div>
  )
}

export default Partners