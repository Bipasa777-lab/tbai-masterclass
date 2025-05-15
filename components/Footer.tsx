import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Github,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  GraduationCap,
  Star,
} from 'lucide-react';

const dummyAvatars = [
  {
    imageUrl: "/assets/avatars/avatar1.svg", // Replace with your image path
    profileUrl: "https://example.com/profile/user1",
  },
  {
    imageUrl: "/assets/avatars/avatar2.svg", // Replace with your image path
    profileUrl: "https://example.com/profile/user2",
  },
  {
    imageUrl: "/assets/avatars/avatar3.svg", // Replace with your image path
    profileUrl: "https://example.com/profile/user3",
  },
  {
    imageUrl: "/assets/avatars/avatar4.jpg", // Replace with your image path
    profileUrl: "https://example.com/profile/user4",
  },
  {
    imageUrl: "/assets/avatars/avatar5.jpg", // Replace with your image path
    profileUrl: "https://example.com/profile/user5",
  },
];

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {/* Left Side with Educore Info */}
          <div className="lg:col-span-5 space-y-4">
            {/* Avatar Group and Rating */}
            <div className="flex items-center space-x-4">
              <div className="flex -space-x-3">
                {dummyAvatars.slice(0, 3).map((avatar, idx) => (
                  <Image
                    key={idx}
                    src={avatar.imageUrl}
                    alt={`user-${idx}`}
                    width={40}
                    height={40}
                    className="rounded-full border-2 border-black"
                  />
                ))}
                <div className="flex items-center justify-center w-10 h-10 bg-white text-black text-sm font-semibold rounded-full border-2 border-black">
                  4k+
                </div>
              </div>

              <div className="flex items-center space-x-2">
                
                <span className="text-sm text-gray-400">Join 4000+ Students</span>
              </div>
            </div>

            {/* Educore Info */}
            <div className="space-y-1">
              <div className="flex items-center text-2xl font-bold text-white">
                <GraduationCap className="w-6 h-6 mr-2" />
                Educore
              </div>
              <p className="text-gray-300 text-sm">
                Here’s everything you need to know before you start your journey with Educore.
              </p>
              <p className="text-white font-medium">Instructor</p>
            </div>
          </div>

          {/* Quick Links */}
          {/* 'Overview', 'Features', 'Demo', 'Curriculum', 'Tools', 'Instructor', 'Community' */}
          <div className="lg:col-span-2 md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-300 hover:text-white">Home</Link></li>
              <li><Link href="#features" className="text-gray-300 hover:text-white">Features</Link></li>
              <li><Link href="#curriculum" className="text-gray-300 hover:text-white">Curriculum</Link></li>
              <li><Link href="#tools" className="text-gray-300 hover:text-white">Tools</Link></li>
              <li><Link href="#instructor" className="text-gray-300 hover:text-white">Instructor</Link></li>
              <li><Link href="#community" className="text-gray-300 hover:text-white">Community</Link></li>
            </ul>
          </div>

          {/* Pages */}
          <div className="lg:col-span-2 md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Pages</h3>
            <ul className="space-y-2">
              <li><Link href="https://www.technobillion.ai/blog" className="text-gray-300 hover:text-white">Blog</Link></li>
              <li><Link href="#faq" className="text-gray-300 hover:text-white">FAQ</Link></li>
              <li><Link href="https://academy.technobillion.ai/privacy-police" className="text-gray-300 hover:text-white">Privacy Policy</Link></li>
              <li><Link href="https://academy.technobillion.ai/terms-and-condition" className="text-gray-300 hover:text-white">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="lg:col-span-3 md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex flex-col space-y-3">
              <Link href="https://x.com/TechnoBillionAI" className="flex items-center text-gray-300 hover:text-white">
                <Twitter className="w-5 h-5 mr-2" /> Twitter
              </Link>
              <Link href="https://www.instagram.com/technobillionai/" className="flex items-center text-gray-300 hover:text-white">
                <Instagram className="w-5 h-5 mr-2" /> Instagram
              </Link>
              <Link href="https://www.linkedin.com/company/techno-billion-ai/" className="flex items-center text-gray-300 hover:text-white">
                <Linkedin className="w-5 h-5 mr-2" /> LinkedIn
              </Link>
              <Link href="mailto:empower@technobillionai.com" className="flex items-center text-gray-300 hover:text-white">
                <Mail className="w-5 h-5 mr-2" /> Email Us
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} techno billion ai. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
