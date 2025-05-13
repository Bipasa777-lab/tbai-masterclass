'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu } from 'lucide-react'

const navItems = ['Overview', 'Curriculum', 'Instructor', 'Testimonials', 'Pricing', 'FAQs']

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'backdrop-blur-md bg-white/10 border-b border-white/10'
          : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <div
          className={`transition-all duration-500 ease-in-out overflow-hidden `}
        >
          <Image
            src="/assets/logo_text.svg"
            alt="Techno Billion AI"
            width={180}
            height={40}
            priority
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium text-white">
          {navItems.map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-red-400 transition-colors duration-200"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* CTA (desktop) */}
        <div className="hidden md:block">
          <Button className="bg-white text-black rounded-full px-4 py-1 text-sm hover:bg-gray-100 transition-colors">
            Enroll now
          </Button>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/10"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background text-foreground p-6">
              <nav className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-lg font-medium hover:text-red-400 transition-colors"
                  >
                    {item}
                  </Link>
                ))}
                <Button className="mt-6 w-full bg-white text-black hover:bg-gray-100">
                  Enroll now
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
