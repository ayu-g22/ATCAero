"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      text1:
        "Learning drone operations at ATC AERO was a game-changer. The practical sessions",
      text2:
        "and guidance opened doors to freelance opportunities.",
      name: "Arjun Verma",
    },
  ];

  const [index, setIndex] = useState(0);
  const t = testimonials[index];

  return (
    <section id="black-bg" className="relative w-full min-h-[70vh] sm:min-h-[75vh] md:min-h-[80vh] flex items-center justify-center py-12 sm:py-16 md:py-20">

      {/* Background */}
      <Image
        src="/testimonials.jpg"
        alt="background"
        fill
        className="object-cover object-center"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content Wrapper */}
      <div className="relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-10">

        {/* LEFT SIDE - Testimonial */}
        <div className="flex flex-col justify-center order-2 lg:order-1">

          {/* Quote */}
          <div className="text-6xl sm:text-7xl md:text-8xl lg:text-[100px] xl:text-[120px] text-gold leading-none mb-4 sm:mb-5 md:mb-6">
            &rdquo;
          </div>

          {/* Text Lines */}
          <p className="text-white/90 text-base sm:text-lg md:text-xl lg:text-2xl italic font-inter leading-relaxed max-w-3xl">
            {t.text1}
          </p>

          <p className="text-white/90 text-base sm:text-lg md:text-xl lg:text-2xl italic font-inter leading-relaxed mt-2 sm:mt-3 max-w-3xl">
            {t.text2}
          </p>

          {/* Name */}
          <p className="mt-6 sm:mt-8 md:mt-10 text-white font-monda text-base sm:text-lg lg:text-xl">
            {t.name}
          </p>

          {/* ARROWS */}
          <div className="flex items-center gap-3 sm:gap-4 mt-8 sm:mt-10 md:mt-12">

            {/* Left Arrow */}
            <button className="p-2 sm:p-2.5 md:p-3 bg-white/10 border border-white/30 rounded-full hover:bg-white/20 transition">
              <ChevronLeft size={24} className="text-white sm:w-7 sm:h-7 md:w-7 md:h-7" />
            </button>

            {/* Right Arrow */}
            <button className="p-2 sm:p-2.5 md:p-3 bg-white/10 border border-white/30 rounded-full hover:bg-white/20 transition">
              <ChevronRight size={24} className="text-white sm:w-7 sm:h-7 md:w-7 md:h-7" />
            </button>

          </div>
        </div>

        {/* RIGHT SIDE - Header */}
        <div className="flex flex-col justify-center order-1 lg:order-2 lg:pl-10 xl:pl-20">
          
          {/* Small Title */}
          <p className="tracking-[0.2em] sm:tracking-[0.25em] md:tracking-[0.3em] text-gold uppercase mb-4 sm:mb-5 md:mb-6 text-xs sm:text-sm font-monda">
            TESTIMONIALS
          </p>

          {/* Big Title */}
          <h2 className="font-cormorant text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 sm:mb-7 md:mb-8">
            What Client <br />
            Says About <br />
            ATC AERO
          </h2>

          {/* Subtext */}
          <p className="text-white/80 font-inter text-sm sm:text-base md:text-lg leading-relaxed max-w-md">
            Hear from our students and alumni about their successful journey
            and training experience at ATC AERO.
          </p>

        </div>
      </div>
    </section>
  );
}