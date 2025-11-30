"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-4 backdrop-blur-md"
    >
      {/* Logo */}
      <img src="/logo.png" alt="Logo" className="h-12 w-auto" />

      {/* Center Nav */}
      <div
        className="
          hidden lg:flex absolute left-1/2 -translate-x-1/2
          px-12 py-4 rounded-3xl shadow-xl border border-gold
          bg-gradient-to-r from-black
          items-center space-x-10 font-montserrat tracking-wide
        "
      >
        <NavItem label="HOME" />
        
        {/* COURSES WITH ANIMATION */}
        <div className="relative">
          <button
            onClick={() => setOpen(!open)}
            className="text-white hover:text-gold text-sm flex items-center gap-1"
          >
            COURSES
            <motion.div
              animate={{ rotate: open ? 180 : 0 }}
              transition={{ duration: 0.25 }}
            >
              <ChevronDown size={16} className="text-gold" />
            </motion.div>
          </button>

          {/* Dropdown animated */}
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="absolute left-0 mt-4 w-72 bg-black border border-gold rounded-xl shadow-xl p-6 text-white space-y-5"
              >
                <DropItem label="Pilot Training" />
                <DropItem label="Cabin Crew & Hospitality Training" />
                <DropItem label="Drone Pilot Training" />
                <DropItem label="Travel & Tourism" />
                <DropItem label="Airport Operation Courses" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <NavItem label="ABOUT" />
        <NavItem label="GALLERY" />
        <NavItem label="CAREER" />
        <NavItem label="CONTACT" />
      </div>
    </motion.nav>
  );
};


const NavItem = ({ label }: { label: string }) => (
  <motion.a
    whileHover={{
      scale: 1.1,
      y: -2,
    }}
    transition={{
      type: "spring",
      stiffness: 300,
      damping: 15,
    }}
    className="
      text-white 
      hover:text-gold 
      font-montserrat 
      tracking-wide 
      transition-colors
    "
  >
    {label}
  </motion.a>
);


const DropItem = ({ label }: { label: string }) => (
  <motion.div
    whileHover={{ x: 6 }}     // only animate movement
    transition={{ duration: 0.2 }}
    className="
      cursor-pointer 
      text-white/90 
      hover:text-gold 
      transition-colors
    "
  >
    {label}
  </motion.div>
);
