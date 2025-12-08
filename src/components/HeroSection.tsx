"use client";

import React from "react";

export const HeroSection = () => {
  return (
    <section id="black-bg" className="relative w-full h-screen overflow-hidden bg-[#0F0F0F]">
      
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
      <div className="relative z-20 h-full w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 flex flex-col justify-center items-start">
        
        <div className="w-full max-w-3xl space-y-3 sm:space-y-4 md:space-y-6 lg:space-y-8 animate-fade-in-up">
          
          {/* Heading Group */}
          <div className="space-y-1 sm:space-y-2">
            <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-arimo tracking-tight leading-tight drop-shadow-2xl">
              Launch Your <br />
              <span className="text-white">
                Career With
              </span>
            </h1>
            
<<<<<<< Updated upstream
            <div className="flex items-center gap-4">
              <span className="text-3xl sm:text-xl md:text-3xl font-bold text-white">
                with
              </span>
              <span className="text-5xl sm:text-3xl md:text-5xl font-arimo md:text-5xl font-bold text-[#D9A74A] drop-shadow-lg">
                ATC AERO
              </span>
            </div>
          </div>

          {/* Description Box with Left Border Accent */}
          <div className="pl-6 border-l-4 border-[#D9A74A] bg-white/5 backdrop-blur-sm py-4 rounded-r-xl max-w-xl">
            <p className="text-gray-200 text-md sm:text-lg leading-relaxed font-inter">
              Join India’s leading aviation training academy for <span className="text-[#D9A74A] font-semibold">Pilot</span>, <span className="text-[#D9A74A] font-semibold">Cabin Crew</span>, Drone, and Airport Operation Courses.
=======
            <div className="flex items-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold font-arimo text-gold drop-shadow-lg">
                Aviation Training Center
              </h2>
            </div>
          </div>

          {/* Description Box */}
          <div className="py-2 sm:py-3 md:py-4 max-w-xl">
            <p className="text-gray-200 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed font-inter">
              Join India's leading aviation training academy for <span className="text-gold font-semibold">Pilot</span>, <span className="text-gold font-semibold">Cabin Crew</span>, Drone, and Airport Operation Courses.
>>>>>>> Stashed changes
            </p>
          </div>

          {/* CTA Buttons */}
<<<<<<< Updated upstream
          <div className="flex flex-wrap gap-5 pt-4">
            <button className="px-10 py-4 bg-[#D9A74A] text-black font-bold font-monda text-sm uppercase tracking-widest rounded-full shadow-[0_0_25px_rgba(217,167,74,0.4)] hover:bg-white hover:scale-105 transition-all duration-300">
=======
          <div className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-3 md:gap-4 lg:gap-5 pt-1 sm:pt-2 md:pt-4">
            <button className="px-5 sm:px-6 md:px-8 lg:px-10 py-2.5 sm:py-3 md:py-3.5 lg:py-4 bg-gold border border-black/80 text-black font-bold font-monda text-xs sm:text-sm uppercase tracking-widest rounded-full shadow-[0_0_25px_rgba(217,167,74,0.4)] hover:bg-white hover:scale-105 transition-all duration-300">
>>>>>>> Stashed changes
              Enquire Now
            </button>
            
            <button className="px-5 sm:px-6 md:px-8 lg:px-10 py-2.5 sm:py-3 md:py-3.5 lg:py-4 bg-transparent border border-white/30 text-white font-bold text-xs sm:text-sm uppercase tracking-widest rounded-full hover:bg-white/10 hover:border-white transition-all duration-300 backdrop-blur-md">
              Explore Courses
            </button>
          </div>

        </div>
      </div>

<<<<<<< Updated upstream
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
                       hover:bg-[#D9A74A] hover:border-[#D9A74A] hover:text-black transition-all duration-300 backdrop-blur-md group"
          >
            <Icon size={20} strokeWidth={1.5} className="group-hover:scale-110 transition-transform" />
          </a>
        ))}
      </div>

      {/* 4. WHATSAPP FLOATING ACTION BUTTON */}
=======
      {/* 3. WHATSAPP FLOATING ACTION BUTTON */}
>>>>>>> Stashed changes
      <a
        href="https://wa.me/917668843739"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 group flex items-center justify-end"
      >
        {/* Tooltip - Hidden on mobile */}
        <span className="hidden sm:block mr-3 px-3 py-1.5 bg-white text-black text-xs font-bold rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg transform translate-x-2 group-hover:translate-x-0 pointer-events-none">
          Chat with us
        </span>
        
        {/* Icon */}
        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-black flex items-center justify-center shadow-[0_2px_10px] hover:scale-110 hover:shadow-[0_2px_14px] transition-all duration-300">
          <i className="ri-whatsapp-line text-white text-2xl sm:text-3xl"></i>
        </div>
      </a>

    </section>
  );
};