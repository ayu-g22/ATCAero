"use client";

import Image from "next/image";

export const AboutSection = () => {
  return (
    <section
      id="black-bg"
      className="w-full bg-blackDeep py-20 lg:py-32 relative overflow-hidden"
    >
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0 opacity-20">
        <Image
          src="/pilots.jpg"
          alt="Background"
          fill
          className="object-cover object-center"
        />
      </div>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* ABOUT TEXT */}
          <div className="text-white order-1">
            <p className="text-gold font-bold tracking-[0.25em] mb-4">
              ABOUT ATC AERO
            </p>

            <h2 className="font-playfair text-4xl lg:text-5xl leading-[1.1] font-semibold mb-6">
              Your Trusted <br className="hidden lg:block" />
              Partner in <br className="hidden lg:block" />
              Aviation Training
            </h2>

            <p className="font-inter text-white/80 text-sm lg:text-md leading-relaxed max-w-xl">
              ATC AERO is a premier aviation training institute offering
              expert-led programs in Pilot Training, Cabin Crew, Drone
              Operations, and Airport Management with DGCA-approved curriculum
              and global affiliations.
            </p>

            <button className="mt-8 lg:mt-12 px-8 py-4 border border-gold text-gold rounded-md hover:bg-gold hover:text-black transition">
              READ MORE
            </button>
          </div>

          {/* BOXES */}
          <div className="relative order-2">
            <div
              className="
                flex flex-col gap-6 
                lg:absolute 
                lg:right-0 
                lg:top-1/2 lg:-translate-y-1/2 
                lg:mr-10 xl:mr-20
              "
            >
              <InfoBox
                title="Expertise"
                desc="Learn from certified and experienced instructors."
              />
              <InfoBox
                title="Placement"
                desc="Get 100% job assistance after training."
              />
              <InfoBox
                title="Global"
                desc="International tie-ups for worldwide opportunities."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const InfoBox = ({ title, desc }: { title: string; desc: string }) => {
  return (
    <div
      className="
        bg-gold text-black
        w-full 
        max-w-[340px] sm:max-w-[380px] md:max-w-[400px] lg:max-w-[440px]
        min-h-[130px]
        rounded-3xl shadow-xl
        px-6 py-6 lg:px-8
        flex flex-col justify-center
        mx-auto
      "
    >
      <h3 className="text-xl lg:text-2xl font-montserrat font-semibold flex items-center gap-2">
        <span className="text-red text-xl">✔</span> {title}
      </h3>

      <p className="pl-6 text-black/70 font-inter leading-relaxed text-sm lg:text-[15px] mt-1">
        {desc}
      </p>
    </div>
  );
};
