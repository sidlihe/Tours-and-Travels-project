// src/components/Navbar.tsx
import React from 'react';
import { Phone } from 'lucide-react';

export default function Navbar() {
  return (
    // Background is off-white (bg-slate-50)
    <nav className="bg-blue-50/85 border-b border-blue-100 shadow-sm sticky top-0 z-50 w-full backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* Logo Brand Area - Same Height and Width */}
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

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8 text-slate-700 font-bold text-sm">
            <a href="#home" className="hover:text-blue-600 transition duration-200">Home</a>
            <a href="#fleet" className="hover:text-blue-600 transition duration-200">Our Fleet</a>
            <a href="#about" className="hover:text-blue-600 transition duration-200">About Us</a>
            <a href="#booking" className="hover:text-blue-600 transition duration-200">Book Now</a>
          </div>

          {/* Call to Action Button */}
          <div className="flex items-center">
            <a 
              href="tel:+919664000715" 
              className="flex items-center text-xs sm:text-sm font-bold text-slate-700 bg-white hover:bg-slate-100 px-4 py-2.5 rounded-xl transition duration-200 border border-slate-200 shadow-sm"
            >
              <Phone className="w-4 h-4 mr-2 text-blue-600 shrink-0" />
              +91 96640 00715
            </a>
          </div>

        </div>
      </div>
    </nav>
  );
}