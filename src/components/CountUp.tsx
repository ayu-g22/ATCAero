"use client";
import { useState, useEffect, useRef } from "react";

interface CountUpProps {
  end: number;
  duration?: number;
}

export default function CountUp({ end, duration = 2000 }: CountUpProps) {
  const safeEnd = Number(end);
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  const started = useRef(false);

  useEffect(() => {
    if (isNaN(safeEnd)) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;

          const fps = 60;
          const totalFrames = Math.round((duration / 1000) * fps);
          const increment = safeEnd / totalFrames;

          let frame = 0;
          let current = 0;

          const timer = setInterval(() => {
            frame++;
            current += increment;

            if (frame >= totalFrames) {
              setCount(safeEnd);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, 1000 / fps);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [safeEnd, duration]);

  return <span ref={ref}>{count}</span>;
}
