"use client";

export const Course = () => {
  return (
    <section className="bg-red w-full grid grid-cols-1 lg:grid-cols-2">

      {/* LEFT SIDE */}
      <div className=" px-10 lg:px-20 py-20 flex flex-col justify-center">
        

        <h2 className="text-5xl font-montserrat font-bold leading-tight text-white">
          Explore Our <br /> Aviation Courses
        </h2>

        <p className="mt-6 text-white leading-relaxed font-inter text-lg max-w-lg">
          Discover a wide range of professional aviation courses including Pilot
          Training, Cabin Crew, Drone Operations, and Airport Management
          designed to build a successful career in aviation.
        </p>

        <button className="px-10 py-4 my-16 bg-gold w-64 text-white font-bold font-monda text-sm uppercase tracking-widest rounded-full shadow-[0_0_25px_rgba(217,167,74,0.4)] hover: hover:scale-105 transition-all duration-300">
          CONTACT US
        </button>
      </div>

      {/* RIGHT SIDE */}
      <div className="px-10 lg:px-20 py-20 text-white">

        {/* ROW 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Pilot Training */}
          <div className="p-6 bg-gold rounded-md shadow-lg">
            <h3 className="text-2xl font-montserrat font-semibold mb-3">
              Pilot Training
            </h3>
            <p className="text-white leading-relaxed font-inter">
              Comprehensive training for aspiring pilots, including DGCA
              subjects, flying experience, and foreign license conversion for
              global opportunities.
            </p>
          </div>

          {/* Cabin Crew Block */}
          <div className="bg-black text-white p-6 rounded-md shadow-lg">
            <h3 className="text-2xl font-montserrat font-semibold mb-3">
              Cabin Crew & Hospitality Training
            </h3>
            <p className=" leading-relaxed font-inter">
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
            <p className="text-white leading-relaxed font-inter">
              Learn to operate drones with hands-on training focusing on safety,
              regulations, and their applications across industries.
            </p>
          </div>

          {/* Travel & Tourism */}
          <div>
            <h3 className="text-2xl font-montserrat font-semibold mb-3">
              Travel & Tourism
            </h3>
            <p className="text-white leading-relaxed font-inter">
              Master e-ticketing, airside operations, customer service, and terminal
              management to launch your career in the tourism industry.
            </p>
          </div>
        </div>

        {/* Row 3 – Big Golden Block */}
        <div className="bg-gold text-black p-6 rounded-md shadow-lg mt-14">
          <h3 className="text-2xl font-montserrat font-semibold mb-3">
            Airport Operations Courses
          </h3>
          <p className="leading-relaxed font-inter">
            Specialized training in fire fighting, cargo handling, aviation security
            & air traffic operations to prepare you for critical airport management roles.
          </p>
        </div>

      </div>

    </section>
  );
};
