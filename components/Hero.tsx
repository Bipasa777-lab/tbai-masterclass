"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { AvatarCircles } from "./magicui/avatar-circles";
import { dummyAvatars } from "@/constant";

const HeroSection = () => {
  return (
    <section className="relative w-full bg-gradient-to-br from-[#7d0000] via-[#a30000] to-[#7d0000] text-white pt-20 pb-10 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 leading-tight">
            Master AI in Just <br /> 4 Weeks –{" "}
            <span className="text-white">ChatGPT inDepth</span>
          </h1>
          <p className="text-lg text-gray-100 max-w-md mx-auto lg:mx-0 mb-6">
            Learn to use GPT-4o, Canva AI, and more directly from industry
            experts and IIT professionals. No tech background needed.
          </p>

          {/* Social Proof */}
          <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
            <div className="flex items-center gap-1 text-yellow-400 text-sm">
              <AvatarCircles
                numPeople={99}
                avatarUrls={dummyAvatars.slice(0, 5)}
              />
              <span className="ml-1 text-white">Join 400+ Students</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            <Button className="bg-black text-white hover:bg-gray-800 transition">
              Enroll now
            </Button>
            <Button
              variant="outline"
              className="bg-white text-black border border-gray-300 hover:bg-gray-100"
            >
              Download Brochure
            </Button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center">
          <Image
            src="/icons/gpt.svg"
            alt="OpenAI 3D"
            width={400}
            height={400}
            className="w-full max-w-xs sm:max-w-sm md:max-w-md"
          />
        </div>
      </div>

      {/* Partners Strip */}
      <div className="rounded-md bg-white flex items-center justify-between px-10 py-4">
        {/* Tagline */}
        <span className="text-sm sm:text-base font-medium text-center text-black">
          Upscaling <span className="text-red-600 font-semibold">billions</span>{" "}
          at
        </span>

        {/* Logos */}
        <div className=" flex ictem-center justify-center gap-4">
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
    </section>
  );
};

export default HeroSection;
