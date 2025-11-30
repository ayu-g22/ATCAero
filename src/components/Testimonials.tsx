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
    <section className="relative w-full min-h-[80vh] flex items-center justify-center">

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
      <div className="relative z-10 w-full px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* LEFT SIDE */}
        <div className="flex flex-col justify-center">

          {/* Quote */}
          <div className="text-[120px] text-gold leading-none mb-6">
            &rdquo;
          </div>

          {/* Text Lines */}
          <p className="text-white/90 text-xl lg:text-2xl italic font-inter leading-relaxed max-w-3xl">
            {t.text1}
          </p>

          <p className="text-white/90 text-xl lg:text-2xl italic font-inter leading-relaxed mt-3 max-w-3xl">
            {t.text2}
          </p>

          {/* Name */}
          <p className="mt-10 text-white font-monda text-lg lg:text-xl">
            {t.name}
          </p>

          {/* ARROWS — now placed after testimonial text */}
          <div className="flex items-center gap-4 mt-12">

            {/* Left Arrow */}
            <button className="p-3 bg-white/10 border border-white/30 rounded-full hover:bg-white/20 transition">
              <ChevronLeft size={28} className="text-white" />
            </button>

            {/* Right Arrow */}
            <button className="p-3 bg-white/10 border border-white/30 rounded-full hover:bg-white/20 transition">
              <ChevronRight size={28} className="text-white" />
            </button>

          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col justify-center lg:pl-20 lg:pr-10">
          {/* Small Title */}
          <p className="tracking-[0.3em] text-gold uppercase mb-6 text-sm font-monda">
            TESTIMONIALS
          </p>


          {/* Big Title */}
          <h2 className="font-cormorant text-white text-5xl lg:text-6xl leading-tight mb-8">
            What Client <br />
            Says About <br />
            ATC AERO
          </h2>

          {/* Subtext */}
          <p className="text-white/80 font-inter text-lg leading-relaxed max-w-md">
            Hear from our students and alumni about their successful journey
            and training experience at ATC AERO.
          </p>

        </div>
      </div>
    </section>
  );
}
