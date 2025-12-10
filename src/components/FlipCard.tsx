"use client";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function FlipCard({ children }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.intersectionRatio > 0.05); 
        // visible only when 5% is on screen
      },
      {
        threshold: Array.from({ length: 101 }, (_, i) => i / 100), 
        // gives smooth 0 → 1 tracking
      }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={ref}
      animate={{
        rotateY: isVisible ? 0 : 180,
        opacity: isVisible ? 1 : 0,   // Optional: fade out when off-screen
      }}
      transition={{
        duration: 0.6,
        ease: "easeInOut",
      }}
      style={{
        transformStyle: "preserve-3d",
        backfaceVisibility: "hidden",
      }}
    >
      {children}
    </motion.div>
  );
}
