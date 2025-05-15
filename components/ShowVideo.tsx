'use client';

import React, { useState, useEffect } from 'react';
import { Sparkles, Play, Users, Calendar, Star } from 'lucide-react';

const ShowVideo = ({ id }: { id?: string }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  // Animation on scroll effect
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id={id} className="w-full bg-gradient-to-br from-black via-gray-900 to-black text-white py-24 px-4 sm:px-8 lg:px-24 overflow-hidden relative">
      {/* Background animated elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-red-500 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-purple-600 blur-3xl"></div>
      </div>

      <div
        className={`max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center transition-all duration-1000 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {/* Left: Enhanced Text Content */}
        <div className="space-y-8 z-10 relative">
          {/* Badge with animation */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-500 text-white px-5 py-2 rounded-full text-sm font-medium w-max shadow-lg shadow-red-500/20 animate-pulse">
            <Sparkles className="w-4 h-4" />
            AI Masterclass Preview
          </div>

          {/* Heading with gradient */}
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
            Experience the Future of Learning with AI
          </h2>

          {/* Enhanced Subheading */}
          <p className="text-white/80 text-lg leading-relaxed max-w-lg">
            Discover how artificial intelligence can transform your career path and unlock new opportunities in today's digital landscape.
          </p>

          {/* Stats section */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 py-6 max-w-md">
            <div className="flex flex-col">
              <div className="flex items-center gap-2 text-red-400">
                <Users className="w-5 h-5" />
                <span className="font-semibold">2,500+</span>
              </div>
              <p className="text-sm text-white/60">Enrolled Students</p>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2 text-red-400">
                <Calendar className="w-5 h-5" />
                <span className="font-semibold">8 Weeks</span>
              </div>
              <p className="text-sm text-white/60">Course Duration</p>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2 text-red-400">
                <Star className="w-5 h-5" />
                <span className="font-semibold">4.9/5</span>
              </div>
              <p className="text-sm text-white/60">Student Rating</p>
            </div>
          </div>

          {/* Enhanced CTA */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-red-500 to-red-600 px-8 py-4 font-bold text-white transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg hover:shadow-red-500/30">
              <span className="relative flex items-center gap-2">
                Reserve Your Seat Now
                <svg
                  className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </span>
            </button>
            <button className="inline-flex items-center justify-center gap-2 px-6 py-4 font-semibold text-white border border-white/20 rounded-lg hover:bg-white/10 transition-all duration-300">
              View Curriculum
            </button>
          </div>
        </div>

        {/* Right: Inline Video Embed */}
        <div className="relative flex justify-center items-center z-10">
          {/* Decorative corners */}
          <div className="absolute -top-6 -left-6 w-24 h-24 border-t-2 border-l-2 border-red-500 opacity-50 pointer-events-none"></div>
          <div className="absolute -bottom-6 -right-6 w-24 h-24 border-b-2 border-r-2 border-red-500 opacity-50 pointer-events-none"></div>

          <div className="relative w-full max-w-[600px] rounded-2xl overflow-hidden shadow-2xl shadow-red-500/10 transition-all duration-500 hover:shadow-red-500/20 hover:scale-[1.02] bg-black">
            {!isPlaying ? (
              <button
                onClick={() => setIsPlaying(true)}
                className="relative flex items-center justify-center w-full aspect-video cursor-pointer bg-cover bg-center"
                style={{ backgroundImage: 'url(https://i.ytimg.com/vi/uctCvnWHrbM/maxresdefault.jpg)' }}
                aria-label="Play Video"
              >
                <div className="flex items-center justify-center w-20 h-20 rounded-full bg-red-600 text-white shadow-lg shadow-red-600/30 transition-transform duration-300 hover:scale-110">
                  <Play className="w-8 h-8 fill-current ml-1" />
                </div>
              </button>
            ) : (
              <iframe
                className="w-full aspect-video"
                src="https://www.youtube.com/embed/Rd6F5wHIysM?autoplay=1&rel=0"
                title="AI Masterclass Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                frameBorder="0"
              />
            )}
            {isPlaying && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white font-medium pointer-events-none">
                Watch Demo Session: "Building AI Skills for Tomorrow's Workplace"
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Additional testimonial badge - fixed position */}
      {/* <div className="fixed bottom-12 left-12 max-w-xs bg-white/10 backdrop-blur-lg rounded-lg p-4 border border-white/20 hidden lg:block z-20 shadow-lg">
        <div className="flex items-start gap-3">
          <div className="flex shrink-0">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="w-4 h-4 fill-current text-yellow-400" />
            ))}
          </div>
          <p className="text-sm text-white/80">
            "This masterclass completely changed how I approach AI integration in my work. Absolutely life-changing!"
          </p>
        </div>
        <div className="mt-2 text-xs text-white/60">― Sarah Johnson, Data Scientist</div>
      </div> */}
    </section>
  );
};

export default ShowVideo;
