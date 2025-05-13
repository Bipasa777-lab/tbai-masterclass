// components/Footer.tsx
import React from 'react';
import { 
  Github, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail 
} from 'lucide-react';
import Link from 'next/link';
import { AvatarCircles } from "@/components/magicui/avatar-circles";

const dummyAvatars = [
  {
    imageUrl: "https://avatar.vercel.sh/user1",
    profileUrl: "https://example.com/profile/user1",
  },
  {
    imageUrl: "https://avatar.vercel.sh/user2",
    profileUrl: "https://example.com/profile/user2",
  },
  {
    imageUrl: "https://avatar.vercel.sh/user3",
    profileUrl: "https://example.com/profile/user3",
  },
  {
    imageUrl: "https://avatar.vercel.sh/user4",
    profileUrl: "https://example.com/profile/user4",
  },
  {
    imageUrl: "https://avatar.vercel.sh/user5",
    profileUrl: "https://example.com/profile/user5",
  },
  {
    imageUrl: "https://avatar.vercel.sh/user6",
    profileUrl: "https://example.com/profile/user6",
  },
  {
    imageUrl: "https://avatar.vercel.sh/user7",
    profileUrl: "https://example.com/profile/user7",
  },
];


const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {/* Company Info Section - Takes 2/5 of the space on large screens */}
          <div className="lg:col-span-5">
            <AvatarCircles numPeople={99} avatarUrls={dummyAvatars.slice(0, 5)}/>
            <p className="text-gray-300">
              123 Tech Street, Digital City<br />
              contact@companyname.com<br />
              +1 (555) 123-4567
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="lg:col-span-2 md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-gray-300 hover:text-white transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Pages Section */}
          <div className="lg:col-span-2 md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Pages</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-300 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-300 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/sitemap" className="text-gray-300 hover:text-white transition-colors">
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Section */}
          <div className="lg:col-span-3 md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex flex-col space-y-3">
              <Link href="https://github.com" className="flex items-center text-gray-300 hover:text-white transition-colors">
                <Github className="w-5 h-5 mr-2" />
                <span>GitHub</span>
              </Link>
              <Link href="https://twitter.com" className="flex items-center text-gray-300 hover:text-white transition-colors">
                <Twitter className="w-5 h-5 mr-2" />
                <span>Twitter</span>
              </Link>
              <Link href="https://instagram.com" className="flex items-center text-gray-300 hover:text-white transition-colors">
                <Instagram className="w-5 h-5 mr-2" />
                <span>Instagram</span>
              </Link>
              <Link href="https://linkedin.com" className="flex items-center text-gray-300 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5 mr-2" />
                <span>LinkedIn</span>
              </Link>
              <Link href="mailto:contact@companyname.com" className="flex items-center text-gray-300 hover:text-white transition-colors">
                <Mail className="w-5 h-5 mr-2" />
                <span>Email Us</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Company Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;