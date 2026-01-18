"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaPlane } from "react-icons/fa";

export default function ScrollPlane() {
  const { scrollYProgress } = useScroll();

  const [vh, setVh] = useState(0);

  useEffect(() => {
    const update = () => setVh(window.innerHeight);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // ✅ plane size = 44px, keep it inside screen always
  const planeSize = 44;
  const travel = Math.max(0, vh - planeSize - 10);

  // ✅ y will now smoothly move from top → bottom
  const y = useTransform(scrollYProgress, [0, 1], [0, travel]);

  return (
    <div className="fixed right-5 top-0 h-screen z-[9999] pointer-events-none">
      <motion.div style={{ y }} className="absolute right-0 top-0">
        <div className="w-11 h-11">
          <img
  src="/plane.png"
  alt="plane"
  className=" object-contain"
/>

        </div>
      </motion.div>
    </div>
  );
}
