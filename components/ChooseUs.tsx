import React from 'react';
import {
  HiOutlineHome,
  HiOutlineTrendingUp,
  HiOutlineGlobeAlt,
  HiOutlineLightBulb,
  HiOutlineBriefcase,
  HiOutlineSparkles,
} from 'react-icons/hi';
import { AvatarCircles } from "@/components/magicui/avatar-circles";
import { dummyAvatars, modules } from '@/constant';

const ChooseUs = () => {
  const features = [
    {
      icon: <HiOutlineBriefcase className="text-red-500 w-6 h-6" />,
      title: 'High Paying',
      description: 'AI skills open doors to well-paying roles in tech, business, and design.',
    },
    {
      icon: <HiOutlineGlobeAlt className="text-red-500 w-6 h-6" />,
      title: 'In Demand',
      description: 'AI talent is needed across industries—from startups to global enterprises.',
    },
    {
      icon: <HiOutlineHome className="text-red-500 w-6 h-6" />,
      title: 'Work From Home',
      description: 'Master tools that power remote jobs in automation, content, and consulting.',
    },
    {
      icon: <HiOutlineLightBulb className="text-red-500 w-6 h-6" />,
      title: 'No Tech Needed',
      description: 'You don’t need a tech degree—just curiosity and a willingness to learn.',
    },
    {
      icon: <HiOutlineTrendingUp className="text-red-500 w-6 h-6" />,
      title: 'Growth Opportunities',
      description: 'Start with basics and grow into roles in AI integration, product strategy, and more.',
    },
    {
      icon: <HiOutlineSparkles className="text-red-500 w-6 h-6" />,
      title: 'Make an Impact',
      description: 'Build real tools that solve real problems—and help shape the future of work.',
    },
  ];

  return (
    <section className="w-full bg-gray-100 py-20 px-4">
      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <button
            className="bg-red-600 text-white text-sm px-4 py-1 rounded-full font-medium mb-4"
            aria-label="Why choose us"
          >
            Why Us?
          </button>
          <h2 className="text-2xl md:text-3xl font-semibold mb-12">
            Why you should choose us
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="shrink-0">{feature.icon}</div>
                <div>
                  <h4 className="text-lg font-semibold">{feature.title}</h4>
                  <p className="text-sm text-gray-600 mt-1">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modules & Course Info Section */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-10 items-stretch px-4 sm:px-6 lg:px-8">
  {/* Left: Modules */}
  <div className="flex-1 bg-black rounded-2xl p-5 sm:p-6 md:p-8 space-y-4 text-white bg-[url('/stripe-pattern.png')] bg-cover">
    <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
      What you’ll learn in this course
    </h2>
    {modules.map((mod, index) => (
      <div
        key={index}
        className="flex justify-between items-start bg-[#1a1a1a] px-4 sm:px-6 py-4 rounded-xl hover:bg-[#222] transition-colors duration-200"
      >
        <div className="pr-3">
          <h3 className="text-base sm:text-lg font-semibold">{mod.title}</h3>
          <p className="text-sm text-gray-400 mt-1">{mod.subtitle}</p>
        </div>
        <button
          className="text-white text-xl font-bold leading-none"
          aria-label={`Expand ${mod.title}`}
        >
          +
        </button>
      </div>
    ))}
  </div>

  {/* Right: Course Info */}
  <div className="w-full lg:w-[380px] bg-white rounded-2xl shadow-lg p-5 sm:p-6 flex flex-col justify-between">
    <div>
      <div className="bg-red-600 text-white rounded-xl p-4 mb-4">
        <h3 className="text-lg font-semibold">Fundamentals of AI</h3>
        <p className="text-sm mt-1">Join now for an extra discount.</p>
        <button className="mt-3 px-4 py-2 bg-white text-red-600 font-semibold rounded-md text-sm">
          See curriculum
        </button>
      </div>

      <h4 className="text-base sm:text-lg font-semibold mb-2">
        Fundamentals of AI: The Ultimate AI program by TBAI
      </h4>
      <p className="text-sm text-gray-600 mb-3">
        Live, practical, and built for your schedule.
      </p>

      {/* Avatars */}
      <div className="flex items-center space-x-2 mb-4">
        <AvatarCircles numPeople={99} avatarUrls={dummyAvatars.slice(0, 5)} />
        <span className="text-sm text-gray-500">4.8k+</span>
      </div>

      {/* Course Details */}
      <ul className="text-sm space-y-2 text-gray-700">
        <li>✅ Duration: 4 weeks (2×90-min live Zoom sessions/week)</li>
        <li>✅ Trainers: IIT-MTech grads with analogies & stories</li>
        <li>✅ Labs: Weekly GPT-4o & AI tools hands-on</li>
        <li>✅ Final Project: Build & present your own AI assistant</li>
        <li>✅ Certification: Digital badge + “Prompt Sheet”</li>
      </ul>
    </div>

    <button className="mt-6 w-full py-3 bg-red-600 text-white rounded-lg font-semibold">
      Enroll now
    </button>
  </div>
</div>

    </section>
  );
};

export default ChooseUs;
