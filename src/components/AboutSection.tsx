"use client";

import Image from "next/image";

export const AboutSection = () => {
    return (
        <section id="black-bg" className="w-full bg-blackDeep py-16 sm:py-20 md:py-24 lg:py-32 relative overflow-hidden">

<<<<<<< Updated upstream
            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                    {/* LEFT SIDE */}
                    <div className="relative flex justify-center">

                        {/* Image */}
                        <div className="rounded-2xl overflow-hidden shadow-xl w-[480px] h-[650px] left-12 relative z-0">
                            <Image
                                src="/pilots.jpg"
                                alt="Pilots"
                                fill
                                quality={100}
                                className="object-cover"
                            />
                        </div>

                        {/* Floating Gold Card */}
                        <div
                            className="
                absolute 
                -left-4 lg:-left-10
                top-1/2 -translate-y-1/2
                bg-gold2 text-black 
                rounded-2xl shadow-2xl 
                w-[360px] py-12 px-10 
                space-y-10 
                z-20
              "
                        >
                            {/* Expertise */}
                            <div className="flex items-start gap-5">
                                <span className="text-white text-4xl">✔</span>
                                <div>
                                    <h3 className="text-2xl font-montserrat font-semibold">Expertise</h3>
                                    <p className="text-black/70 font-inter leading-relaxed">
                                        Learn from certified and experienced instructors.
                                    </p>
                                </div>
                            </div>

                            {/* Placement */}
                            <div className="flex items-start gap-5">
                                <span className="text-white text-4xl">✔</span>
                                <div>
                                    <h3 className="text-2xl font-montserrat font-semibold">Placement</h3>
                                    <p className="text-black/70 font-inter leading-relaxed">
                                        Get 100% job assistance after training.
                                    </p>
                                </div>
                            </div>

                            {/* Global */}
                            <div className="flex items-start gap-5">
                                <span className="text-white text-4xl">✔</span>
                                <div>
                                    <h3 className="text-2xl font-montserrat font-semibold">Global</h3>
                                    <p className="text-black/70 font-inter leading-relaxed">
                                        International tie-ups for worldwide opportunities.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="text-white">

                        <p className="text-gold tracking-[0.25em] font-montserrat text-sm mb-6">
                            ABOUT ATC AERO
                        </p>


                        <h2 className="font-playfair text-5xl leading-[1.1] font-semibold mb-10">
=======
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
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">

                {/* GRID LAYOUT */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 md:gap-16 lg:gap-20 items-center">

                    {/* TEXT CONTENT - Left on desktop, top on mobile */}
                    <div className="text-white order-1 lg:order-1 text-center lg:text-left">
                        <p className="text-gold font-bold tracking-[0.2em] sm:tracking-[0.25em] font-montserrat text-sm sm:text-base md:text-lg mb-4 sm:mb-5 md:mb-6">
                            ABOUT ATC
                        </p>

                        <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl leading-tight sm:leading-[1.1] font-semibold mb-6 sm:mb-8 md:mb-10">
>>>>>>> Stashed changes
                            Your Trusted <br />
                            Partner in <br />
                            Aviation Training
                        </h2>

<<<<<<< Updated upstream

                        <p className="font-inter text-white/80 text-md leading-relaxed max-w-xl">
                            ATC AERO is a premier aviation training institute offering
=======
                        <p className="font-inter text-white/80 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
                            ATC is a premier aviation training institute offering
>>>>>>> Stashed changes
                            expert-led programs in Pilot Training, Cabin Crew, Drone Operations,
                            and Airport Management with DGCA-approved curriculum and global
                            affiliations.
                        </p>

                        <button
                            className="
<<<<<<< Updated upstream
                mt-12 px-8 py-4 font-montserrat text-lg
                border border-gold text-gold rounded-md
                hover:bg-gold hover:text-black transition
              "
                        >
                            READ MORE
                        </button>
=======
                                mt-8 sm:mt-10 md:mt-12 px-6 sm:px-8 py-3 sm:py-4 font-montserrat text-sm sm:text-base md:text-lg
                                border border-gold text-gold rounded-md
                                hover:bg-gold hover:text-black transition
                                w-full sm:w-auto
                            "
                        >
                            READ MORE
                        </button>
                    </div>

                    {/* FEATURE BOXES - Below text on mobile, right side on desktop */}
                    <div className="relative flex justify-center lg:justify-end order-2 lg:order-2">

                        <div className="relative w-full max-w-[500px] lg:max-w-none">

                          <div
                            className="
                              flex flex-col
                              gap-4 sm:gap-5 md:gap-6
                              z-20
                            "
                          >
                            {/* BOX 1 - Expertise */}
                            <div
                              className="
                                bg-gold text-black
                                w-full lg:w-[380px] xl:w-[440px]
                                min-h-[110px] sm:min-h-[120px] md:min-h-[130px]
                                rounded-2xl sm:rounded-3xl shadow-xl
                                px-5 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6
                                flex flex-col justify-center
                              "
                            >
                              <h3 className="text-lg sm:text-xl md:text-2xl font-montserrat font-semibold">
                                <span className="text-red text-base sm:text-lg md:text-xl p-1 sm:p-2">✔</span>
                                Expertise
                              </h3>
                              <p className="pl-6 sm:pl-7 md:pl-8 text-black/70 font-inter leading-relaxed text-xs sm:text-sm md:text-[15px] mt-1">
                                Learn from certified and experienced instructors.
                              </p>
                            </div>

                            {/* BOX 2 - Placement */}
                            <div
                              className="
                                bg-gold text-black
                                w-full lg:w-[380px] xl:w-[440px]
                                min-h-[110px] sm:min-h-[120px] md:min-h-[130px]
                                rounded-2xl sm:rounded-3xl shadow-xl
                                px-5 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6
                                flex flex-col justify-center
                              "
                            >
                              <h3 className="text-lg sm:text-xl md:text-2xl font-montserrat font-semibold">
                                <span className="text-red text-base sm:text-lg md:text-xl p-1 sm:p-2">✔</span>
                                Placement
                              </h3>
                              <p className="pl-6 sm:pl-7 md:pl-8 text-black/70 font-inter leading-relaxed text-xs sm:text-sm md:text-[15px] mt-1">
                                Get 100% job assistance after training.
                              </p>
                            </div>

                            {/* BOX 3 - Global */}
                            <div
                              className="
                                bg-gold text-black
                                w-full lg:w-[380px] xl:w-[440px]
                                min-h-[110px] sm:min-h-[120px] md:min-h-[130px]
                                rounded-2xl sm:rounded-3xl shadow-xl
                                px-5 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6
                                flex flex-col justify-center
                              "
                            >
                              <h3 className="text-lg sm:text-xl md:text-2xl font-montserrat font-semibold">
                                <span className="text-red text-base sm:text-lg md:text-xl p-1 sm:p-2">✔</span>
                                Global
                              </h3>
                              <p className="pl-6 sm:pl-7 md:pl-8 text-black/70 font-inter leading-relaxed text-xs sm:text-sm md:text-[15px] mt-1">
                                International tie-ups for worldwide opportunities.
                              </p>
                            </div>
                          </div>

                        </div>
>>>>>>> Stashed changes

                    </div>
                </div>

            </div>
<<<<<<< Updated upstream

=======
                
>>>>>>> Stashed changes
        </section>
    );
};