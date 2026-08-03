// src/components/Navbar.tsx
import React, { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // Off-white responsive header
    <nav className="bg-slate-50 border-b border-slate-200 shadow-sm sticky top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* Logo Brand Area (Sizes scaled down for mobile viewports to prevent wrapping) */}
          <div className="flex flex-col justify-center">
            {/* English Title - Blue, Bold, custom size */}
            <span className="text-sm sm:text-base md:text-lg font-black text-blue-600 tracking-wide leading-none uppercase block">
              SAYALI TOURS & TRAVELS
            </span>
            
            {/* Marathi Subtitle - Identical Size (Height), Orange Color, Micro-spaced (Width) */}
            <span 
              className="text-sm sm:text-base md:text-[19px] font-black text-center text-orange-500 mt-2 block leading-none antialiased"
            >
              सायली टूर्स अँड ट्रॅव्हल्स
            </span>
          </div>

          {/* Desktop Navigation Links (Hidden on mobile via 'hidden md:flex') */}
          <div className="hidden md:flex space-x-8 text-slate-700 font-bold text-sm">
            <a href="#home" className="hover:text-blue-600 transition duration-200">Home</a>
            <a href="#fleet" className="hover:text-blue-600 transition duration-200">Our Fleet</a>
            <a href="#about" className="hover:text-blue-600 transition duration-200">About Us</a>
            <a href="#booking" className="hover:text-blue-600 transition duration-200">Book Now</a>
          </div>

          {/* Call to Action Button & Mobile Menu Toggle */}
          <div className="flex items-center space-x-3">
            <a 
              href="tel:+919664000715" 
              className="flex items-center text-xs sm:text-sm font-bold text-slate-700 bg-white hover:bg-slate-100 px-3 py-2.5 sm:px-4 sm:py-2.5 rounded-xl transition duration-200 border border-slate-200 shadow-sm"
            >
              <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1 sm:mr-2 text-blue-600 shrink-0" />
              {/* Shows full number on larger screens, and a simple 'Call' label on small screens */}
              <span className="hidden xs:inline">+91 96640 00715</span>
              <span className="xs:hidden">Call</span>
            </a>

            {/* Hamburger Toggle Button (Only visible on mobile via 'md:hidden') */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 hover:bg-slate-150 transition-colors shadow-sm"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Dropdown Menu (Only opens on mobile when isOpen is true) */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 px-4 py-4 space-y-2.5 shadow-inner">
          <a 
            href="#home" 
            onClick={() => setIsOpen(false)}
            className="block text-slate-700 hover:text-blue-600 font-bold text-sm py-2 px-3 hover:bg-slate-50 rounded-lg transition-colors"
          >
            Home
          </a>
          <a 
            href="#fleet" 
            onClick={() => setIsOpen(false)}
            className="block text-slate-700 hover:text-blue-600 font-bold text-sm py-2 px-3 hover:bg-slate-50 rounded-lg transition-colors"
          >
            Our Fleet
          </a>
          <a 
            href="#about" 
            onClick={() => setIsOpen(false)}
            className="block text-slate-700 hover:text-blue-600 font-bold text-sm py-2 px-3 hover:bg-slate-50 rounded-lg transition-colors"
          >
            About Us
          </a>
          <a 
            href="#booking" 
            onClick={() => setIsOpen(false)}
            className="block text-slate-700 hover:text-blue-600 font-bold text-sm py-2 px-3 hover:bg-slate-50 rounded-lg transition-colors"
          >
            Book Now
          </a>
        </div>
      )}
    </nav>
  );
}