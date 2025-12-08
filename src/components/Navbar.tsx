"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileCoursesOpen, setMobileCoursesOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  /* ---- Close dropdown on outside click ---- */
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-4 md:px-6 lg:px-8 py-3 md:py-4"
      >
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <img src="/logo.png" className="h-10 md:h-12 w-auto" />
        </Link>

        {/* DESKTOP NAV — FIXED for md screens */}
        <div
          className="
            hidden md:flex absolute left-1/2 -translate-x-1/2
            px-4 md:px-6 lg:px-8 xl:px-10
            py-3 md:py-3 lg:py-4
            rounded-3xl shadow-xl border border-gold
            bg-black/40 font-montserrat
            items-center 
            space-x-4 md:space-x-4 lg:space-x-7 xl:space-x-8
            max-w-[90%]
          "
        >
          <NavItem label="HOME" href="/" />

          {/* Courses Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setOpen(prev => !prev)}
              className="text-white hover:text-gold flex items-center gap-1 text-sm whitespace-nowrap"
            >
              COURSES
              <motion.div
                animate={{ rotate: open ? 180 : 0 }}
                transition={{ duration: 0.25 }}
              >
                <ChevronDown size={16} className="text-gold" />
              </motion.div>
            </button>

            <AnimatePresence>
              {open && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="absolute left-0 top-full mt-2 w-64 bg-black border border-gold rounded-xl shadow-xl p-5 text-white space-y-4 z-50"
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

          <NavItem label="ABOUT" href="/about" />
          <NavItem label="GALLERY" href="/gallery" />
          <NavItem label="CAREER" href="/career" />
          <NavItem label="CONTACT" href="/contact" />
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(prev => !prev)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </motion.nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 w-4/5 max-w-sm h-screen bg-black/95 backdrop-blur-xl z-40 pt-20 px-6 flex flex-col space-y-5 md:hidden"
          >
            <MobileNavItem label="HOME" href="/" onClick={() => setMobileMenuOpen(false)} />

            {/* MOBILE COURSES TOGGLE */}
            <button
              onClick={() => setMobileCoursesOpen(prev => !prev)}
              className="flex items-center justify-between text-white text-lg border-b border-white/10 pb-3"
            >
              COURSES
              <ChevronDown
                size={22}
                className={`text-gold transition-transform ${mobileCoursesOpen ? "rotate-180" : ""}`}
              />
            </button>

            <AnimatePresence>
              {mobileCoursesOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="pl-3 text-white/70 space-y-3"
                >
                  <p>Pilot Training</p>
                  <p>Cabin Crew & Hospitality Training</p>
                  <p>Drone Pilot Training</p>
                  <p>Travel & Tourism</p>
                  <p>Airport Operation Courses</p>
                </motion.div>
              )}
            </AnimatePresence>

            <MobileNavItem label="ABOUT" href="/about" onClick={() => setMobileMenuOpen(false)} />
            <MobileNavItem label="GALLERY" href="/gallery" onClick={() => setMobileMenuOpen(false)} />
            <MobileNavItem label="CAREER" href="/career" onClick={() => setMobileMenuOpen(false)} />
            <MobileNavItem label="CONTACT" href="/contact" onClick={() => setMobileMenuOpen(false)} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const NavItem = ({ label, href }: { label: string; href: string }) => (
  <Link href={href}>
    <span className="text-white hover:text-gold transition text-sm cursor-pointer">
      {label}
    </span>
  </Link>
);

const MobileNavItem = ({
  label,
  href,
  onClick
}: {
  label: string;
  href: string;
  onClick: () => void;
}) => (
  <Link
    href={href}
    onClick={onClick}
    className="text-white text-lg border-b border-white/10 pb-3 hover:text-gold"
  >
    {label}
  </Link>
);

const DropItem = ({ label }: { label: string }) => (
  <motion.div whileHover={{ x: 6 }} className="text-white/90 hover:text-gold cursor-pointer">
    {label}
  </motion.div>
);
