import React from 'react';
import { HiCheckCircle } from 'react-icons/hi';
import { FaBook, FaGraduationCap, FaClock } from 'react-icons/fa';

const FeatureSection = () => {
  return (
    <section className="w-full py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
        {/* Left Section */}
        <div className="flex-1 max-w-xl">
          <h2 className="text-3xl sm:text-4xl font-bold leading-snug mb-6">
            The only program you need to be <br /> among the top 1%
          </h2>

          <div className="flex flex-wrap gap-4 mb-6">
            <button className="bg-red-600 text-white px-6 py-2 rounded-lg font-semibold">
              Enroll now
            </button>
            <button className="border border-gray-300 text-black px-6 py-2 rounded-lg font-semibold">
              See curriculum
            </button>
          </div>

          <ul className="space-y-4 text-sm sm:text-base text-gray-800">
            <li className="flex items-start gap-2">
              <HiCheckCircle className="text-black mt-1" />
              Understand AI from the ground up—no tech background needed.
            </li>
            <li className="flex items-start gap-2">
              <HiCheckCircle className="text-black mt-1" />
              Explore real-world tools like GPT-4o, Canva AI, and DALL·E 3.
            </li>
            <li className="flex items-start gap-2">
              <HiCheckCircle className="text-black mt-1" />
              Build practical AI projects, from chatbots to personal assistants.
            </li>
            <li className="flex items-start gap-2">
              <HiCheckCircle className="text-black mt-1" />
              Get expert guidance and feedback to sharpen your skills.
            </li>
          </ul>
        </div>

        {/* Middle Image */}
        <div className="w-full max-w-xs lg:max-w-sm">
          <img
            src="/assets/mobile_feat.svg"
            alt="Phone with AI program"
            className="w-full h-auto"
          />
        </div>

        {/* Right Features */}
        <div className="flex-1 space-y-8">
          <div className="flex items-start gap-4">
            <div className="bg-red-600 text-white p-2 rounded-full">
              <FaBook size={20} />
            </div>
            <div>
              <h4 className="font-semibold text-lg">Learn AI Hands-on</h4>
              <p className="text-sm text-gray-600 mt-1">
                Work on real-life projects using tools like GPT-4o, Canva AI, and more.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-red-600 text-white p-2 rounded-full">
              <FaGraduationCap size={20} />
            </div>
            <div>
              <h4 className="font-semibold text-lg">Built for Non-Techies or Techies</h4>
              <p className="text-sm text-gray-600 mt-1">
                No coding required—just curiosity and a drive to explore AI.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-red-600 text-white p-2 rounded-full">
              <FaClock size={20} />
            </div>
            <div>
              <h4 className="font-semibold text-lg">Create Your Own AI Assistant</h4>
              <p className="text-sm text-gray-600 mt-1">
                Finish the course with a working AI tool built entirely by you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
