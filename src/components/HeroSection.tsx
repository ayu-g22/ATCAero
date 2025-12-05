"use client";

import React from "react";
import { Facebook, Instagram, Twitter, Youtube, MessageCircle } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-[#0F0F0F]">
      
      {/* 1. BACKGROUND VIDEO & OVERLAYS */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-50"
          src="/hero.mp4"
        />

        {/* Gradient Overlay: Darker on left/bottom for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-transparent to-transparent z-10" />
      </div>

      {/* 2. MAIN CONTENT CONTAINER */}
      <div className="relative z-20 h-full max-w-7xl mx-auto px-6 sm:px-12 flex flex-col justify-center">
        
        <div className="max-w-3xl space-y-8 animate-fade-in-up">
          
          {/* Heading Group */}
          <div className="space-y-2">
            <h1 className="text-5xl sm:text-3xl md:text-5xl font-extrabold font-montserrat text-white tracking-tight leading-none drop-shadow-2xl">
              Launch Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                Aviation Career
              </span>
            </h1>
            
            <div className="flex items-center gap-4">
              <span className="text-3xl sm:text-xl md:text-3xl font-bold text-white">
                with
              </span>
              <span className="text-5xl sm:text-3xl md:text-5xl font-arimo md:text-5xl font-bold text-gold drop-shadow-lg">
                ATC AERO
              </span>
            </div>
          </div>

          {/* Description Box with Left Border Accent */}
          <div className="pl-6 border-l-4 border-gold bg-white/5 backdrop-blur-sm py-4 rounded-r-xl max-w-xl">
            <p className="text-gray-200 text-md sm:text-lg leading-relaxed font-inter">
              Join India’s leading aviation training academy for <span className="text-gold font-semibold">Pilot</span>, <span className="text-gold font-semibold">Cabin Crew</span>, Drone, and Airport Operation Courses.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-5 pt-4">
            <button className="px-10 py-4 bg-gold border border-black/80  text-black font-bold font-monda text-sm uppercase tracking-widest rounded-full shadow-[0_0_25px_rgba(217,167,74,0.4)] hover:bg-white hover:scale-105 transition-all duration-300">
              Enquire Now
            </button>
            
            <button className="px-10 py-4 bg-transparent border border-white/30 text-white font-bold text-sm uppercase tracking-widest rounded-full hover:bg-white/10 hover:border-white transition-all duration-300 backdrop-blur-md">
              Explore Courses
            </button>
          </div>

        </div>
      </div>

      {/* 3. SOCIAL SIDEBAR (Left Aligned) */}
      <div className="absolute left-6 sm:left-10 top-1/2 -translate-y-1/2 flex flex-col gap-6 z-30 hidden lg:flex">
        {[
          { Icon: Facebook, href: "#" },
          { Icon: Instagram, href: "#" },
          { Icon: Twitter, href: "#" },
          { Icon: Youtube, href: "#" },
        ].map(({ Icon, href }, index) => (
          <a
            key={index}
            href={href}
            className="w-12 h-12 flex items-center justify-center rounded-full border border-white/20 bg-black/20 text-white 
                       hover:bg-gold hover:border-gold hover:text-black transition-all duration-300 backdrop-blur-md group"
          >
            <Icon size={20} strokeWidth={1.5} className="group-hover:scale-110 transition-transform" />
          </a>
        ))}
      </div>

      {/* 4. WHATSAPP FLOATING ACTION BUTTON */}
      <a
        href="https://wa.me/917668843739"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 group flex items-center justify-end"
      >
        {/* Tooltip */}
        <span className="mr-3 px-3 py-1.5 bg-white text-black text-xs font-bold rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg transform translate-x-2 group-hover:translate-x-0 pointer-events-none">
          Chat with us
        </span>
        
        {/* Icon */}
        <div className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_4px_14px_rgba(37,211,102,0.4)] hover:scale-110 hover:shadow-[0_6px_20px_rgba(37,211,102,0.6)] transition-all duration-300">
          <i className="ri-whatsapp-line text-white text-3xl"></i>
        </div>
      </a>

    </section>
  );
};