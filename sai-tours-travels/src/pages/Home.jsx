import React, { useState, useEffect } from 'react';
import TourCard from '../components/TourCard';
import { getTourPackages, sendInquiry } from '../services/api';

export default function Home() {
  const [tours, setTours] = useState([]);
  const [formData, setFormData] = useState({ name: '', phone: '', destination: '' });
  const [statusMessage, setStatusMessage] = useState('');

  // Fetch package list when page loads
  useEffect(() => {
    getTourPackages().then((data) => setTours(data));
  }, []);

  // Handle inquiry form submit
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const result = await sendInquiry(formData);
    if (result.success) {
      setStatusMessage("Thank you! Our travel expert will call you shortly.");
      setFormData({ name: '', phone: '', destination: '' }); // Clear inputs
    } else {
      setStatusMessage("Could not submit. Please try again.");
    }
  };

  return (
    <div id="home" className="min-h-screen bg-gray-50 pb-16">
      {/* Banner / Hero Section */}
      <div className="bg-linear-to-r from-amber-600 via-yellow-400 to-amber-700 text-slate-900 py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-5xl font-extrabold mb-4">
            Explore India with Sayali Tours & Travels
          </h1>
          <p className="text-base sm:text-lg text-blue-100">
            Professional tour planning, premium transport, and memories that last forever.
          </p>
        </div>
      </div>

      {/* Tour Packages Display Section */}
      <section id="tours" className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8">
          Popular Packages
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tours.map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>
      </section>

      {/* Booking Form Section */}
      <section id="contact" className="max-w-md mx-auto bg-white p-6 sm:p-8 rounded-xl shadow-md border border-gray-100 mt-8">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 text-center">
          Inquire About a Tour
        </h2>
        <form onSubmit={handleFormSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input 
              type="text" 
              required
              className="mt-1 block w-full rounded-md border-gray-300 border p-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input 
              type="tel" 
              required
              className="mt-1 block w-full rounded-md border-gray-300 border p-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Select Destination</label>
            <select 
              required
              className="mt-1 block w-full rounded-md border-gray-300 border p-2 bg-white focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
              value={formData.destination}
              onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
            >
              <option value="">Where do you want to go?</option>
              {tours.map((tour) => (
                <option key={tour.id} value={tour.title}>{tour.title}</option>
              ))}
            </select>
          </div>

          <button 
            type="submit" 
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition"
          >
            Submit Request
          </button>
        </form>
        
        {statusMessage && (
          <p className="mt-4 text-center text-sm font-medium text-green-600 bg-green-50 py-2 rounded">
            {statusMessage}
          </p>
        )}
      </section>
    </div>
  );
}