"use client";

import Image from "next/image";

export const AboutSection = () => {
    return (
        <section className="w-full bg-blackDeep py-32 relative overflow-hidden">

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

                {/* 🔥 SWAPPED */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                    {/* 👉 RIGHT SIDE (now moved to the LEFT position in code) */}
                    <div className="text-white order-2 lg:order-1">
                        <p className="text-gold font-bold tracking-[0.25em] font-montserrat text-lg mb-6">
                            ABOUT ATC AERO
                        </p>

                        <h2 className="font-playfair text-5xl leading-[1.1] font-semibold mb-10">
                            Your Trusted <br />
                            Partner in <br />
                            Aviation Training
                        </h2>

                        <p className="font-inter text-white/80 text-md leading-relaxed max-w-xl">
                            ATC AERO is a premier aviation training institute offering
                            expert-led programs in Pilot Training, Cabin Crew, Drone Operations,
                            and Airport Management with DGCA-approved curriculum and global
                            affiliations.
                        </p>

                        <button
                            className="
                                mt-12 px-8 py-4 font-montserrat text-lg
                                border border-gold text-gold rounded-md
                                hover:bg-gold hover:text-black transition
                            "
                        >
                            READ MORE
                        </button>
                    </div>

                    {/* 👉 LEFT SIDE CARD (now appears on RIGHT) */}
                    <div className="relative flex justify-center order-1 lg:order-2">

                        <div className="rounded-2xl overflow-hidden shadow-xl w-[600px] h-[650px] left-20 relative">

                          <div
  className="
    absolute
    left-0 lg:left-0
    top-1/2 -translate-y-1/2
    flex flex-col
    gap-6
    z-20
  "
>
  {/* BOX 1 */}
  <div
    className="
      bg-gold text-black
      w-[440px] h-[130px]
      rounded-3xl shadow-xl
      px-8 py-6
      flex flex-col justify-center
    "
  >
    
    <h3 className="text-2xl font-montserrat font-semibold"><span className="text-red text-xl p-2">✔</span>Expertise</h3>
    <p className="px-8 text-black/70 font-inter leading-relaxed text-[15px]">
      Learn from certified and experienced instructors.
    </p>
  </div>

  {/* BOX 2 */}
  <div
    className="
      bg-gold text-black
      w-[440px] h-[130px]
      rounded-3xl shadow-xl
      px-8 py-6
      flex flex-col justify-center
    "
  >
    <h3 className="text-2xl font-montserrat font-semibold"><span className="text-red text-xl p-2">✔</span>Placement</h3>
    <p className="px-8 text-black/70 font-inter leading-relaxed text-[15px]">
      Get 100% job assistance after training.
    </p>
  </div>

  {/* BOX 3 */}
  <div
    className="
      bg-gold text-black
      w-[440px] h-[130px]
      rounded-3xl shadow-xl
      px-8 py-6
      flex flex-col justify-center
    "
  >
    <h3 className="text-2xl font-montserrat font-semibold"><span className="text-red text-xl p-2">✔</span>Global</h3>
    <p className="px-8 text-black/70 font-inter leading-relaxed text-[15px]">
      International tie-ups for worldwide opportunities.
    </p>
  </div>
</div>

                            </div>

                        </div>

                    </div>

                </div>

                
        </section>
    );
};
