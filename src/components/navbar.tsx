

'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-3">
            <div className="flex gap-1">
              <div className="w-8 h-8 bg-[#DA5F38]" />
              <div className="w-5 h-5 bg-[#DA5F38] mt-4" />
            </div>
            <span className="text-xl font-semibold">BulkAI</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-11">
            <Link href="/" className="text-black hover:text-gray-600">
              HOME
            </Link>
            <div className="flex items-center gap-1">
              <Link href="#" className="text-black hover:text-gray-600">
                SERVICE
              </Link>
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="flex items-center gap-2">
              <Link href="/blog" className="text-black hover:text-gray-600">
                BLOGS
              </Link>
              <span className="bg-[#8885EE] text-white text-[10px] px-1.5 py-0.5 rounded">
                NEW
              </span>
              </div>
              <div className="flex items-center gap-2">
            <Link href="/contact" className=" text-black hover:text-gray-600">Contact</Link>
            </div>
            
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="#" className="text-black hover:text-gray-600">
              LOGIN
            </Link>
            <Link 
              href="#" 
              className="bg-[#DA5F38] text-white px-10 py-6 rounded-lg hover:bg-opacity-90 transition-colors"
            >
              Register Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-gray-600"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <Link href="#" className="block px-3 py-2 text-black hover:text-gray-600">
              HOME
            </Link>
            <Link href="#" className="block px-3 py-2 text-black hover:text-gray-600">
              SERVICE
            </Link>
            <div className="flex items-center gap-2 px-3 py-2">
              <Link href="#" className="text-black hover:text-gray-600">
                RESOURCES
              </Link>
              <span className="bg-[#8885EE] text-white text-[10px] px-1.5 py-0.5 rounded">
                NEW
              </span>
            </div>
            <Link href="#" className="block px-3 py-2 text-black hover:text-gray-600">
              PRICING
            </Link>
            <Link href="#" className="block px-3 py-2 text-black hover:text-gray-600">
              LOGIN
            </Link>
            <Link 
              href="#" 
              className="block px-3 py-2 bg-[#DA5F38] text-white rounded-md text-center mt-4"
            >
              Register Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
