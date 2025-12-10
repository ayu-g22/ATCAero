"use client";
import { useState, useEffect } from "react";

export const Course = () => {
  const [openCard, setOpenCard] = useState("pilot");

  const cards = [
    {
      id: "pilot",
      title: "Pilot Training",
      desc:
        "Comprehensive training for aspiring pilots, including DGCA subjects, flying experience, and foreign license conversion for global opportunities.",
      bg: "bg-black",
      text: "text-white",
    },
    {
      id: "cabin",
      title: "Cabin Crew & Hospitality",
      desc: "Equip yourself with essential skills in grooming, safety, and customer service.",
      bg: "bg-gold",
      text: "text-black",
    },
    {
      id: "drone",
      title: "Drone Pilot Training",
      desc: "Learn to operate drones with hands-on training focusing on safety and regulations.",
      bg: "bg-black",
      text: "text-white",
    },
    {
      id: "travel",
      title: "Travel & Tourism",
      desc: "Master e-ticketing, airside operations, and terminal management.",
      bg: "bg-gold",
      text: "text-black",
    },
    {
      id: "airport",
      title: "Airport Operations Courses",
      desc: "Specialized training in fire fighting, cargo handling, & aviation security.",
      bg: "bg-black",
      text: "text-white",
    },
  ];

  // Responsive heights
  const getCollapsedHeight = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 640) return 60;
      if (window.innerWidth < 768) return 65;
      return 70;
    }
    return 70;
  };

  const getOpenHeight = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 640) return 280;
      if (window.innerWidth < 768) return 300;
      return 320;
    }
    return 320;
  };

  const [collapsedHeight, setCollapsedHeight] = useState(getCollapsedHeight());
  const [openHeight, setOpenHeight] = useState(getOpenHeight());

  useEffect(() => {
    const handleResize = () => {
      setCollapsedHeight(getCollapsedHeight());
      setOpenHeight(getOpenHeight());
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section id="red-bg" className="bg-red w-full grid grid-cols-1 lg:grid-cols-2">

      {/* LEFT SIDE */}
      <div className="px-6 sm:px-8 md:px-16 lg:px-20 xl:px-20 py-12 sm:py-16 md:py-20 flex flex-col justify-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-montserrat font-bold leading-tight text-white">
          Explore Our <br /> Aviation Courses
        </h2>

        <p className="mt-4 sm:mt-5 md:mt-6 text-white leading-relaxed font-inter text-sm sm:text-base md:text-lg max-w-lg">
          Discover a wide range of professional aviation courses including Pilot
          Training, Cabin Crew, Drone Operations, and Airport Management designed
          to build a successful career in aviation.
        </p>

        <button className="px-8 sm:px-10 py-3 sm:py-4 mt-8 sm:mt-12 md:mt-16 bg-gold w-full sm:w-64 text-white font-bold font-monda text-xs sm:text-sm uppercase tracking-widest rounded-full shadow-[0_0_25px_rgba(217,167,74,0.4)] hover:scale-105 transition-all duration-300">
          CONTACT US
        </button>
      </div>

      {/* RIGHT SIDE */}
      <div className="px-6 sm:px-8 md:px-10 lg:px-16 xl:px-20 py-12 sm:py-16 md:py-20 text-white flex flex-col items-center lg:items-start">

        {cards.map((card) => {
          const isOpen = openCard === card.id;

          return (
            <div
              key={card.id}
              onClick={() => setOpenCard(card.id)}
              className={`
                ${card.bg} ${card.text}
                rounded-2xl sm:rounded-3xl shadow-xl transition-all duration-500 overflow-hidden 
                cursor-pointer mt-[-8px] sm:mt-[-10px] w-full sm:w-[85%] md:w-[80%]
              `}
              style={{
                height: isOpen ? openHeight : collapsedHeight,
                padding: isOpen ? "20px" : "14px",
              }}
            >
              <p
                className={`
                  text-center transition-all duration-300
                  ${isOpen ? "text-xl sm:text-2xl font-semibold" : "text-sm sm:text-base font-bold"}
                `}
              >
                {card.title}
              </p>

              {isOpen && (
                <p className="mt-2 sm:mt-3 opacity-90 leading-relaxed text-xs sm:text-sm">
                  {card.desc}
                </p>
              )}
            </div>
          );
        })}

      </div>
    </section>
  );
};
