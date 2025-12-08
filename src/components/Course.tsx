"use client";
import { useState } from "react";

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
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 640) return 60; // mobile
      if (window.innerWidth < 768) return 65; // small tablet
      return 70; // desktop
    }
    return 70;
  };

  const getOpenHeight = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 640) return 280; // mobile
      if (window.innerWidth < 768) return 300; // small tablet
      return 320; // desktop
    }
    return 320;
  };

  const [collapsedHeight, setCollapsedHeight] = useState(getCollapsedHeight());
  const [openHeight, setOpenHeight] = useState(getOpenHeight());

  // Update heights on resize
  if (typeof window !== 'undefined') {
    window.addEventListener('resize', () => {
      setCollapsedHeight(getCollapsedHeight());
      setOpenHeight(getOpenHeight());
    });
  }

  return (
<<<<<<< Updated upstream
    <section className="w-full grid grid-cols-1 lg:grid-cols-2">

      {/* LEFT SIDE */}
      <div className="bg-[#F6F4EF] px-10 lg:px-20 py-20 flex flex-col justify-center">
        <p className="text-[#C49A60] tracking-widest font-monda text-sm mb-3">
          OUR COURSES
        </p>

        <h2 className="text-5xl font-montserrat font-bold leading-tight text-[#1A1A1A]">
          Explore Our <br /> Aviation Courses
        </h2>

        <p className="mt-6 text-gray-600 leading-relaxed font-inter text-lg max-w-lg">
=======
    <section id="red-bg" className="bg-red w-full grid grid-cols-1 lg:grid-cols-2">

      {/* LEFT SIDE */}
      <div className="px-6 sm:px-8 md:px-10 lg:px-16 xl:px-20 py-12 sm:py-16 md:py-20 flex flex-col justify-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-montserrat font-bold leading-tight text-white">
          Explore Our <br /> Aviation Courses
        </h2>
        <p className="mt-4 sm:mt-5 md:mt-6 text-white leading-relaxed font-inter text-sm sm:text-base md:text-lg max-w-lg">
>>>>>>> Stashed changes
          Discover a wide range of professional aviation courses including Pilot
          Training, Cabin Crew, Drone Operations, and Airport Management
          designed to build a successful career in aviation.
        </p>
<<<<<<< Updated upstream

        <button className="mt-10 bg-[#C49A60] text-white px-8 py-3 rounded-md w-fit font-monda hover:opacity-90 transition">
=======
        <button className="px-8 sm:px-10 py-3 sm:py-4 mt-8 sm:mt-12 md:mt-16 bg-gold w-full sm:w-64 text-white font-bold font-monda text-xs sm:text-sm uppercase tracking-widest rounded-full shadow-[0_0_25px_rgba(217,167,74,0.4)] hover:scale-105 transition-all duration-300">
>>>>>>> Stashed changes
          CONTACT US
        </button>
      </div>

<<<<<<< Updated upstream
      {/* RIGHT SIDE */}
      <div className="bg-[#0D0D0D] px-10 lg:px-20 py-20 text-white">
=======
     {/* RIGHT SIDE — In-Place Accordion Stack */}
      <div className="px-6 sm:px-8 md:px-10 lg:px-16 xl:px-20 py-12 sm:py-16 md:py-20 text-white flex flex-col items-center lg:items-start">
>>>>>>> Stashed changes

        {cards.map((card) => {
          const isOpen = openCard === card.id;

<<<<<<< Updated upstream
          {/* Pilot Training */}
          <div className="p-6 rounded-md shadow-lg">
            <h3 className="text-2xl font-montserrat font-semibold mb-3">
              Pilot Training
            </h3>
            <p className="text-[#D2D2D2] leading-relaxed font-inter">
              Comprehensive training for aspiring pilots, including DGCA
              subjects, flying experience, and foreign license conversion for
              global opportunities.
            </p>
          </div>

          {/* Cabin Crew Block */}
          <div className="bg-[#D3AF6B] text-black p-6 rounded-md shadow-lg">
            <h3 className="text-2xl font-montserrat font-semibold mb-3">
              Cabin Crew & Hospitality Training
            </h3>
            <p className="text-black/80 leading-relaxed font-inter">
              Equip yourself with essential skills in grooming, safety, and
              customer service for a successful cabin crew career.
            </p>
          </div>
        </div>

        {/* ROW 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-14">

          {/* Drone Pilot */}
          <div>
            <h3 className="text-2xl font-montserrat font-semibold mb-3">
              Drone Pilot Training
            </h3>
            <p className="text-[#D2D2D2] leading-relaxed font-inter">
              Learn to operate drones with hands-on training focusing on safety,
              regulations, and their applications across industries.
            </p>
          </div>

          {/* Travel & Tourism */}
          <div>
            <h3 className="text-2xl font-montserrat font-semibold mb-3">
              Travel & Tourism
            </h3>
            <p className="text-[#D2D2D2] leading-relaxed font-inter">
              Master e-ticketing, airside operations, customer service, and terminal
              management to launch your career in the tourism industry.
            </p>
          </div>
        </div>

        {/* Row 3 – Big Golden Block */}
        <div className="bg-[#D3AF6B] text-black p-6 rounded-md shadow-lg mt-14">
          <h3 className="text-2xl font-montserrat font-semibold mb-3">
            Airport Operations Courses
          </h3>
          <p className="text-black/80 leading-relaxed font-inter">
            Specialized training in fire fighting, cargo handling, aviation security
            & air traffic operations to prepare you for critical airport management roles.
          </p>
        </div>
=======
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
              <p className={`text-center ${isOpen ? "text-xl sm:text-2xl" : "text-sm sm:text-base"} ${isOpen ? "font-semibold" : "font-bold"} transition-all duration-300`}>
                {card.title}
              </p>
>>>>>>> Stashed changes

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