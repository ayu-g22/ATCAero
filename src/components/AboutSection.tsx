"use client";

import Image from "next/image";

export const AboutSection = () => {
    return (
        <section className="w-full bg-blackDeep py-32 relative overflow-hidden">

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
                </div>

            </div>

        </section>
    );
};
