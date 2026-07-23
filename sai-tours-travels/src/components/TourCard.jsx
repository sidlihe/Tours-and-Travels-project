import React from 'react';
import { Clock } from 'lucide-react';

export default function TourCard({ tour }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-100">
      {/* Tour Image */}
      <img 
        src={tour.image} 
        alt={tour.title} 
        className="w-full h-48 object-cover" 
      />
      
      {/* Tour details */}
      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-900 mb-2">{tour.title}</h3>
        
        <div className="flex items-center text-gray-500 text-sm mb-4">
          <Clock className="w-4.5 h-4.5 mr-1 text-blue-500" />
          <span>{tour.duration}</span>
        </div>
        
        <div className="flex justify-between items-center pt-3 border-t border-gray-100">
          <span className="text-blue-600 font-bold text-lg">{tour.price}</span>
          <a 
            href="#contact" 
            className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold py-2 px-4 rounded-lg transition"
          >
            Inquire Details
          </a>
        </div>
      </div>
    </div>
  );
}