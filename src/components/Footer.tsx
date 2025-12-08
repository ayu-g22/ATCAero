"use client";

import Image from "next/image";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#0F0F0F] text-white pt-12 sm:pt-14 md:pt-16 pb-8 sm:pb-10 overflow-hidden">

      
      {/* FOOTER MAIN CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row 
                      items-center justify-between px-4 sm:px-6 md:px-8 lg:px-12 gap-8 sm:gap-10">

        {/* LEFT – LOGO */}
        <div className="flex items-center">
          <Image
            src="/logo.png"
            alt="ATC"
            width={160}
            height={64}
            className="object-contain sm:w-[180px] sm:h-[72px] md:w-[200px] md:h-[80px]"
          />
        </div>

        {/* CENTER – MENU */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 text-sm sm:text-base md:text-lg font-monda text-center">
          <a className="hover:text-[#C49A60] transition whitespace-nowrap">Home</a>
          <a className="hover:text-[#C49A60] transition whitespace-nowrap">About</a>
          <a className="hover:text-[#C49A60] transition whitespace-nowrap">Contact</a>
          <a className="hover:text-[#C49A60] transition whitespace-nowrap">Privacy Policy</a>
        </div>

        {/* RIGHT – SOCIAL ICONS */}
        <div className="flex items-center gap-4 sm:gap-5 md:gap-6">
          <SocialIcon>
            <Facebook size={16} className="sm:w-[18px] sm:h-[18px]" />
          </SocialIcon>

          <SocialIcon>
            <Instagram size={16} className="sm:w-[18px] sm:h-[18px]" />
          </SocialIcon>

          <SocialIcon>
            <Twitter size={16} className="sm:w-[18px] sm:h-[18px]" />
          </SocialIcon>

          <SocialIcon>
            <Youtube size={16} className="sm:w-[18px] sm:h-[18px]" />
          </SocialIcon>
        </div>
      </div>

      {/* Divider Line */}
      <div className="relative z-10 max-w-7xl mx-auto mt-8 sm:mt-10 border-t border-[#C49A60]/30 mx-4 sm:mx-6 md:mx-8 lg:mx-12"></div>
    
    </footer>
  );
}

/* REUSABLE SOCIAL BUTTON */
function SocialIcon({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full 
                 border border-[#C49A60] text-white hover:bg-[#C49A60] 
                 hover:text-black transition cursor-pointer"
    >
      {children}
    </div>
  );
}