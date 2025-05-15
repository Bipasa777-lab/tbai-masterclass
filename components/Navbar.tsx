'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet'
import { Menu } from 'lucide-react'

const navItems = ['Overview', 'Features', 'Curriculum', 'Tools', 'Instructor', 'Community']

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState<string>('overview')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)

      const sections = navItems
        .map((item) => {
          const el = document.getElementById(item.toLowerCase())
          if (!el) return null

          const rect = el.getBoundingClientRect()
          return { id: item.toLowerCase(), top: rect.top }
        })
        .filter(Boolean) as { id: string; top: number }[]

      const inView = sections.find((section) => section.top >= 0 && section.top <= window.innerHeight / 2)

      if (inView) {
        setActiveSection(inView.id)
      } else {
        const closest = sections.reduce((prev, curr) =>
          Math.abs(curr.top) < Math.abs(prev.top) ? curr : prev
        )
        setActiveSection(closest.id)
      }
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (item: string) => activeSection === item.toLowerCase()

  return (
    <header
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        isScrolled
          ? 'backdrop-blur-md bg-black/30 border-b border-red-900/20 shadow-lg shadow-red-900/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center transition-opacity hover:opacity-80">
          <Image src="/assets/logo_text.svg" alt="Techno Billion AI" width={180} height={40} priority />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 text-sm font-medium text-white">
          {navItems.map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`relative py-1 transition-colors duration-200 ${
                isActive(item) ? 'text-red-400' : 'text-white/90 hover:text-red-400'
              }`}
            >
              {item}
              {isActive(item) && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-500 rounded-full" />
              )}
            </Link>
          ))}
        </nav>

        {/* CTA Button (Desktop) */}
        <div className="hidden md:block">
          <Link href="https://www.technobillion.ai/career" target='_blank' className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-full px-6 py-1.5 text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-red-700/20 border border-red-600/20">
            Enroll now
          </Link>
        </div>

        {/* Mobile Menu */}
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
                {/* Mobile Logo */}
                <div className="flex justify-between items-center p-6 border-b border-red-900/20">
                  <Link href="/" className="flex items-center">
                    <Image src="/assets/logo_text.svg" alt="Techno Billion AI" width={140} height={30} priority />
                  </Link>
                </div>

                {/* Mobile Nav */}
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

                {/* CTA Button (Mobile) */}
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
