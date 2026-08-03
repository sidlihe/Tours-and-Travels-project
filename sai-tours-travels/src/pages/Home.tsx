// src/pages/Home.tsx
import React, { useState } from 'react';
import { Phone, MapPin, CheckCircle, Send, MessageSquare, Shield, Award, Users } from 'lucide-react';
import { FLEET_DATA, OWNER_DATA, BUSINESS_INFO } from '../data/travelData';
import { sendWhatsAppMessage } from '../utils/whatsapp';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    vehicle: 'Toyota Innova Crysta',
    date: '',
    message: ''
  });

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formattedText = `*New Booking Inquiry - Sayali Tours*\n\n` +
                          `*Name:* ${formData.name}\n` +
                          `*Vehicle:* ${formData.vehicle}\n` +
                          `*Travel Date:* ${formData.date}\n` +
                          `*Inquiry Details:* ${formData.message}`;
    
    sendWhatsAppMessage(BUSINESS_INFO.whatsappNumbers[0], formattedText);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-full bg-slate-50 text-slate-800">
      
      {/* 1. HERO SECTION (id="home" added + Full Width Edge-to-Edge Visuals) */}
      <section id="home" className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center bg-blue-950 overflow-hidden">
        {/* Dynamic background layers with subtle animations */}
        <div className="absolute inset-0 bg-cover bg-center opacity-35 scale-105 animate-[pulse_10s_infinite_alternate]" 
             style={{ backgroundImage: `url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80')` }}>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/95 via-blue-950/80 to-blue-950/60" />
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <span className="bg-orange-500/20 text-orange-400 font-extrabold px-4 py-1.5 rounded-full text-xs uppercase tracking-widest border border-orange-500/30">
            Welcome to Sayali Tours & Travels
          </span>
          <h1 className="text-4xl md:text-7xl font-black tracking-tight mt-6 mb-6 leading-tight drop-shadow-lg">
            Your Trusted Travel Partner <br />
            <span className="text-orange-400">In Kalyan & Beyond</span>
          </h1>
          <p className="text-base md:text-xl text-slate-200 max-w-3xl mx-auto mb-10 leading-relaxed font-medium">
            Premium fleet of SUVs and Mini Buses on rental bases for Weddings, Picnics, Campaigns, and Family Package Tours.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto">
            <a href="#booking" className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-xl shadow-lg shadow-orange-500/20 transition-all text-center text-sm">
              Book Your Ride
            </a>
            <button 
              onClick={() => sendWhatsAppMessage(BUSINESS_INFO.whatsappNumbers[0], "Hi Sayali Tours, I want to inquire about package tours.")}
              className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg shadow-emerald-650/20 flex items-center justify-center gap-2 transition-all text-sm"
            >
              <MessageSquare size={18} />
              Chat on WhatsApp
            </button>
          </div>
        </div>
      </section>

      {/* 2. DYNAMIC FLEET SHOWCASE SECTION (id="fleet" added + Polished Layout Grid) */}
      <section id="fleet" className="w-full py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-orange-500 font-extrabold uppercase tracking-widest text-xs">Our Vehicles</span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mt-2">Our Premium Fleet</h2>
          <p className="text-slate-500 mt-4 max-w-xl mx-auto text-sm md:text-base">Choose from our maintained vehicles for a safe and comfortable journey.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FLEET_DATA.map((vehicle) => (
            <div key={vehicle.id} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl border border-slate-150 transition-all duration-300 flex flex-col group">
              
              {/* 1. Image container - Enforced to fit the section edge-to-edge */}
              <div className=" overflow-hidden relative w-full">
                <img 
                  src={vehicle.image} 
                  alt={vehicle.name} 
                  // object-cover forces the image to fill the container completely
                  className="w-full h-[25vh] object-cover group-hover:scale-105 transition-transform duration-500"
                  style={{
                    objectPosition: vehicle.objectPosition || "center",
                    transform: 'translate3d(0, 0, 0)',
                    WebkitTransform: 'translate3d(0, 0, 0)',
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden'
                  }}
                />
                <span className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-md">
                  {vehicle.type}
                </span>
              </div>

              {/* 2. Details area below the image - Color matched to the Navbar (bg-slate-50) */}
              <div className="p-6 flex-grow flex flex-col justify-between bg-slate-50 border-t border-slate-200">
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-lg font-black text-slate-900">{vehicle.name}</h3>
                    <span className="text-xs font-bold text-orange-600 bg-orange-100 px-2.5 py-1 rounded-md">
                      {vehicle.capacity}
                    </span>
                  </div>
                  <p className="text-sm text-slate-500 leading-relaxed mb-6">{vehicle.description}</p>
                </div>
                
                <div className="space-y-4">
                  {/* White badges to stand out beautifully against the bg-slate-50 background */}
                  <div className="flex flex-wrap gap-1.5">
                    {vehicle.features.map((feature, i) => (
                      <span key={i} className="text-[11px] bg-white border border-slate-200 text-slate-700 px-2.5 py-1 rounded-md font-semibold shadow-sm">
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                  <a 
                    href="#booking"
                    onClick={() => setFormData({ ...formData, vehicle: vehicle.name })}
                    className="w-full bg-slate-900 hover:bg-blue-600 text-white text-center font-bold py-3 rounded-xl transition-all text-xs tracking-wider block"
                  >
                    Inquire For This Vehicle
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* 3. ABOUT US & OWNER INFO SECTION (id="about" added + Aspect Ratio Image Crop Fixes) */}
      <section id="about" className="w-full py-24 bg-white border-y border-slate-100">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Reduced gap from 16 to 8 to save horizontal space for the cards */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* About segment (Reduced from col-span-6 to col-span-5) */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-orange-500 font-extrabold uppercase tracking-widest text-xs">Since 2019</span>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">About Sayali Tours & Travels</h2>
              <p className="text-slate-600 leading-relaxed">
                Established with a vision to provide dependable transit accommodations in Kalyan and neighbouring sectors, we host a fleet designed to serve corporate trips, wedding occasions, school trips, election journeys, and personalized family events.
              </p>
              
              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 bg-blue-50 rounded-xl text-blue-600 shrink-0"><MapPin size={22} /></div>
                  <div>
                    <h5 className="font-bold text-slate-900">Registered Office Address</h5>
                    <p className="text-slate-600 text-sm mt-0.5">{BUSINESS_INFO.address}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
                  {BUSINESS_INFO.services.map((srv, i) => (
                    <div key={i} className="flex items-center gap-2.5 bg-slate-50 p-3 rounded-xl border border-slate-100">
                      <CheckCircle className="text-emerald-500 shrink-0" size={18} />
                      <span className="text-slate-700 text-sm font-semibold">{srv}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Leadership segment (Expanded from col-span-6 to col-span-7 for maximum card width) */}
            <div className="lg:col-span-7 bg-slate-50 p-5 md:p-8 rounded-3xl border border-slate-100 w-full">
              <h3 className="text-2xl font-black text-slate-900 mb-8 text-center">Our Leadership</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                {OWNER_DATA.map((owner, index) => (
                  <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
                    
                    {/* Rounded photo frame using anti-aliasing masks & 3D rendering smoothers */}
                    <div 
                      className=" mb-4  overflow-hidden border-4 border-white shadow-md relative"
                      style={{
                        WebkitMaskImage: '-webkit-radial-gradient(white, black)',
                        maskImage: 'radial-gradient(white, black)'
                      }}
                    >
                      <img 
                        src={owner.image} 
                        alt={owner.name} 
                        className="rounded-full object-cover object-center aspect-square"
                        style={{
                          transform: 'translate3d(0, 0, 0)',
                          WebkitTransform: 'translate3d(0, 0, 0)',
                          backfaceVisibility: 'hidden',
                          WebkitBackfaceVisibility: 'hidden'
                        }}
                      />
                    </div>
                    
                    <h4 className="font-bold text-slate-900 text-lg leading-none">{owner.name}</h4>
                    <p className="text-xs text-orange-500 font-bold uppercase tracking-wider mt-2.5 mb-4">{owner.role}</p>
                    
                    <button 
                      onClick={() => sendWhatsAppMessage(owner.phone, `Hi ${owner.name}, I would like to inquire about tour services.`)}
                      className="w-full flex items-center justify-center gap-2 text-xs bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold py-2.5 rounded-full transition-all"
                    >
                      <Phone size={12} />
                      Call / Chat
                    </button>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. DYNAMIC BOOKING FORM SECTION (id="booking" preserved) */}
      <section id="booking" className="w-full py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-slate-900 text-white rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden border border-slate-800">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">Send an Instant Booking Request</h2>
            <p className="text-slate-300 text-center text-sm mb-10 max-w-lg mx-auto">
              Fill out the form below. It will automatically generate and open a pre-formatted chat window on WhatsApp.
            </p>
            
            <form onSubmit={handleInquirySubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Your Name</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter name"
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3.5 text-white focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder-slate-500 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Select Fleet Vehicle</label>
                  <select 
                    name="vehicle"
                    value={formData.vehicle}
                    onChange={handleInputChange}
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3.5 text-white focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
                  >
                    {FLEET_DATA.map((v) => (
                      <option key={v.id} value={v.name}>{v.name} ({v.capacity})</option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Tentative Travel Date</label>
                <input 
                  type="date" 
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3.5 text-white focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
                />
              </div>
              
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Route or Specific Requirements</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  required
                  placeholder="Tell us about the trip (e.g., Kalyan to Pune 2-day wedding itinerary)"
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3.5 text-white focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder-slate-500 text-sm"
                />
              </div>
              
              <button 
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-orange-500/15 text-sm"
              >
                <Send size={16} />
                Generate Inquiry via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </section>

    </div>
  );
}