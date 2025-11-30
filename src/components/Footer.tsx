"use client";

import Image from "next/image";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#0F0F0F] text-white pt-16 pb-10 overflow-hidden">

      
      {/* FOOTER MAIN CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row 
                      items-center justify-between px-6 lg:px-12 gap-10">

        {/* LEFT – LOGO */}
        <div className="flex items-center">
          <Image
            src="/logo.png"   // Add white version logo in public folder
            alt="ATC AERO"
            width={200}
            height={80}
            className="object-contain"
          />
        </div>

        {/* CENTER – MENU */}
        <div className="flex items-center gap-12 text-lg font-monda">
          <a className="hover:text-[#C49A60] transition">Home</a>
          <a className="hover:text-[#C49A60] transition">About</a>
          <a className="hover:text-[#C49A60] transition">Contact</a>
          <a className="hover:text-[#C49A60] transition">Privacy Policy</a>
        </div>

        {/* RIGHT – SOCIAL ICONS */}
        <div className="flex items-center gap-6">
          <SocialIcon>
            <Facebook size={18} />
          </SocialIcon>

          <SocialIcon>
            <Instagram size={18} />
          </SocialIcon>

          <SocialIcon>
            <Twitter size={18} />
          </SocialIcon>

          <SocialIcon>
            <Youtube size={18} />
          </SocialIcon>
        </div>
      </div>

      {/* Divider Line */}
      <div className="relative z-10 max-w-7xl mx-auto mt-10 border-t border-[#C49A60]/30"></div>
    
    </footer>
  );
}

/* REUSABLE SOCIAL BUTTON */
function SocialIcon({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="w-10 h-10 flex items-center justify-center rounded-full 
                 border border-[#C49A60] text-white hover:bg-[#C49A60] 
                 hover:text-black transition cursor-pointer"
    >
      {children}
    </div>
  );
}
