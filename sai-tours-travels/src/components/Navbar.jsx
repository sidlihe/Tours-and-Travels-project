import React from 'react';
import { Phone } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Company Name */}
          <div className="flex items-center">
            <span className="text-xl font-bold text-blue-600 tracking-wider">
              SAYALI TOURS & TRAVELS
            </span>
          </div>

          {/* Simple Navigation Links */}
          <div className="hidden md:flex space-x-8 text-gray-600 font-medium">
            <a href="#home" className="hover:text-blue-600 transition">Home</a>
            <a href="#tours" className="hover:text-blue-600 transition">Tour Packages</a>
            <a href="#contact" className="hover:text-blue-600 transition">Book Now</a>
          </div>

          {/* Call to Action Button */}
          <div className="flex items-center">
            <a 
              href="tel:+919876543210" 
              className="flex items-center text-sm font-semibold text-gray-700 bg-gray-100 px-3 py-2 rounded-lg hover:bg-gray-200 transition"
            >
              <Phone className="w-4 h-4 mr-2 text-blue-600" />
              +91 98765 43210
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}