"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import { Navbar } from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";

export default function ContactPage() {
  return (
    <div className="min-h-screen w-full bg-black text-white font-inter">

      <Navbar />

      {/* PAGE WRAPPER */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-44 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-16">

        {/* LEFT SIDE — FORM */}
        <div>
          <h1 className="text-5xl font-cormorant font-semibold">
            Get in <span className="text-gold">Touch Now!</span>
          </h1>

          {/* FORM */}
          <form className="mt-12 space-y-6">

            {/* ROW 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <Input placeholder="Enter Your First Name" />
              <Input placeholder="Enter Your Last Name" />
            </div>

            {/* ROW 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <Input placeholder="Enter Your Phone Number" />
              <Input placeholder="Enter Your Email" />
            </div>

            {/* MESSAGE BOX */}
            <textarea
              rows={6}
              placeholder="Enter Your Message"
              className="w-full bg-[#111] border border-[#333] rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:border-gold focus:ring-1 focus:ring-gold outline-none"
            />

            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              className="
                w-full bg-gradient-to-r from-[#d4a043] to-[#b67a12]
                text-black font-monda text-lg py-4 rounded-xl shadow 
                hover:opacity-90 transition
              "
            >
              Send Message
            </button>
          </form>
        </div>

        {/* RIGHT SIDE — CONTACT INFO */}
        <div className="pt-4">
          {/* TAG */}
          <div className="inline-flex items-center gap-2 border border-[#333] px-4 py-2 rounded-full text-sm text-gold">
            <span className="text-lg font-bold">✦</span> Contact
          </div>

          <h2 className="text-4xl lg:text-5xl font-cormorant font-semibold mt-6 leading-tight">
            Get In Touch <br />
            <span className="text-gold">With ATCAero</span>
          </h2>

          {/* PHONE */}
          <div className="mt-10 space-y-3">
            <p className="text-xl font-semibold">Contact Us</p>
            <div className="flex items-center gap-4 text-gray-300">
              <Phone className="text-gold" size={28} />
              <div className="leading-relaxed text-lg">
                +91 9897567890 <br />
                +91 9876543458
              </div>
            </div>
          </div>

          {/* EMAIL */}
          <div className="mt-10 space-y-3">
            <p className="text-xl font-semibold">Email Us At</p>
            <div className="flex items-center gap-4">
              <Mail className="text-gold" size={28} />
              <p className="text-lg font-semibold text-white">
                jijaji@atc_aero.com
              </p>
            </div>
          </div>

          {/* LOCATION */}
          <div className="mt-10 space-y-3">
            <p className="text-xl font-semibold">Location</p>
            <div className="flex items-start gap-4">
              <MapPin className="text-gold" size={28} />
              <p className="text-lg leading-relaxed text-gray-300">
                123 Main Street, <br />
                City, State, Country
              </p>
            </div>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
}



/* ---------- INPUT COMPONENT ---------- */
function Input({ placeholder }: { placeholder: string }) {
  return (
    <input
      placeholder={placeholder}
      className="
        w-full bg-[#111] border border-[#333] rounded-xl px-4 py-3 
        text-white placeholder-gray-500
        focus:border-gold focus:ring-1 focus:ring-gold outline-none
      "
    />
  );
}
