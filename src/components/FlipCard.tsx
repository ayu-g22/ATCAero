"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState, ReactNode } from "react";

interface FlipCardProps {
  children: ReactNode;
}

export default function FlipCard({ children }: FlipCardProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.intersectionRatio > 0.05); 
      },
      {
        threshold: Array.from({ length: 101 }, (_, i) => i / 100),
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
        opacity: isVisible ? 1 : 0,
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
