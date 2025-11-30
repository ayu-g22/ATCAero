"use client";

export const Course = () => {
  return (
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
          Discover a wide range of professional aviation courses including Pilot
          Training, Cabin Crew, Drone Operations, and Airport Management
          designed to build a successful career in aviation.
        </p>

        <button className="mt-10 bg-[#C49A60] text-white px-8 py-3 rounded-md w-fit font-monda hover:opacity-90 transition">
          CONTACT US
        </button>
      </div>

      {/* RIGHT SIDE */}
      <div className="bg-[#0D0D0D] px-10 lg:px-20 py-20 text-white">

        {/* ROW 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

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

      </div>

    </section>
  );
};
