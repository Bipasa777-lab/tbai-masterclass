'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet'
import { Menu, X } from 'lucide-react'

const navItems = ['Overview', 'Curriculum', 'Instructor', 'Testimonials', 'Pricing', 'FAQs']

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
      
      // Detect active section for highlighting in nav
      const sections = navItems.map(item => document.getElementById(item.toLowerCase()))
      const scrollPosition = window.scrollY + 100
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].toLowerCase())
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (item:any) => activeSection === item.toLowerCase()

  return (
    <header
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        isScrolled
          ? 'backdrop-blur-md bg-black/30  border-red-900/20 shadow-lg shadow-red-900/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        {/* Logo */}
        <div
          className={`transition-all duration-500 ease-in-out overflow-hidden flex items-center`}
        >
          <Image
            src="/assets/logo_text.svg"
            alt="Techno Billion AI"
            width={180}
            height={40}
            priority
            className="hover:opacity-80 transition-opacity"
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 text-sm font-medium text-white">
          {navItems.map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`hover:text-red-400 transition-colors duration-200 py-1 relative ${
                isActive(item) ? 'text-red-400' : 'text-white/90'
              }`}
            >
              {item}
              {isActive(item) && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-500 rounded-full"></span>
              )}
            </Link>
          ))}
        </nav>

        {/* CTA (desktop) */}
        <div className="hidden md:block">
          <Button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-full px-6 py-1.5 text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-red-700/20 border border-red-600/20">
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
                className="text-white hover:bg-red-900/20 rounded-full transition-colors"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent 
              side="right" 
              className="bg-black/95 border-l border-red-900/30 text-white p-0 w-full sm:w-80"
            >
              <div className="flex flex-col h-full">
                <div className="flex justify-between items-center p-6 border-b border-red-900/20">
                  <Image
                    src="/assets/logo_text.svg"
                    alt="Techno Billion AI"
                    width={140}
                    height={30}
                    priority
                  />
                  
                </div>
                
                <nav className="flex flex-col space-y-1 mt-6 p-6">
                  {navItems.map((item) => (
                    <SheetClose asChild key={item}>
                      <Link
                        href={`#${item.toLowerCase()}`}
                        className={`px-4 py-3 text-lg font-medium rounded-lg transition-colors ${
                          isActive(item) 
                            ? 'bg-red-900/20 text-red-400' 
                            : 'hover:bg-white/5 text-white/80 hover:text-red-400'
                        }`}
                      >
                        {item}
                      </Link>
                    </SheetClose>
                  ))}
                </nav>
                
                <div className="mt-auto p-6 border-t border-red-900/20">
                  <SheetClose asChild>
                    <Button className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white py-6 font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-red-700/20">
                      Enroll now
                    </Button>
                  </SheetClose>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}