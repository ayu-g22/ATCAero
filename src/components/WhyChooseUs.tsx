"use client";

export const WhyChooseUs = () => {
  return (
    <section className="w-full bg-[#F7F5F0] py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 flex flex-col lg:flex-row gap-8 md:gap-10 lg:gap-10">

        {/* LEFT SECTION - Full width on mobile, 30% on desktop */}
        <div className="w-full lg:w-[30%] text-center lg:text-left">
          <p className="text-[#C49A60] tracking-[0.2em] sm:tracking-[0.25em] md:tracking-[0.3em] font-monda text-sm sm:text-base md:text-lg mb-4 sm:mb-5 md:mb-6">
            WHY CHOOSE US
          </p>

          <h2 className="font-cormorant text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight sm:leading-[1.15] text-[#1A1A1A] mb-6 sm:mb-8 md:mb-10">
            Choose ATC <br />
            AERO for <br />
            Your Aviation <br />
            Success
          </h2>

          <p className="font-cormorant text-gray-600 text-base sm:text-lg leading-relaxed mx-auto lg:mx-0 max-w-md lg:max-w-none">
            ATC offers expert training, global exposure,
            and complete placement support to help you build
            a successful career in the aviation industry.
          </p>
        </div>

        {/* RIGHT SECTION - Grid items */}
        <div className="w-full lg:w-[70%]">

          {/* GRID - Responsive columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12 lg:gap-x-16 xl:gap-x-28 lg:gap-y-16 xl:gap-y-28">

            {/* ITEM 01 */}
            <div className="text-center sm:text-left">
              <h3 className="font-cormorant text-[#C49A60] text-3xl sm:text-4xl mb-2 sm:mb-3">01</h3>
              <h4 className="font-cormorant text-xl sm:text-2xl text-[#1A1A1A] mb-2 sm:mb-3">
                DGCA-Approved Training
              </h4>
              <p className="font-cormorant text-gray-600 text-sm sm:text-base leading-relaxed">
                We provide courses that meet DGCA standards for
                top-notch aviation education.
              </p>
            </div>

            {/* ITEM 02 */}
            <div className="text-center sm:text-left">
              <h3 className="font-cormorant text-[#C49A60] text-3xl sm:text-4xl mb-2 sm:mb-3">02</h3>
              <h4 className="font-cormorant text-xl sm:text-2xl text-[#1A1A1A] mb-2 sm:mb-3">
                Industry-Relevant Curriculum
              </h4>
              <p className="font-cormorant text-gray-600 text-sm sm:text-base leading-relaxed">
                Stay ahead with courses designed according to the latest aviation industry trends.
              </p>
            </div>

            {/* ITEM 03 */}
            <div className="text-center sm:text-left">
              <h3 className="font-cormorant text-[#C49A60] text-3xl sm:text-4xl mb-2 sm:mb-3">03</h3>
              <h4 className="font-cormorant text-xl sm:text-2xl text-[#1A1A1A] mb-2 sm:mb-3">
                Global Opportunities
              </h4>
              <p className="font-cormorant text-gray-600 text-sm sm:text-base leading-relaxed">
                Career opportunities via global partnerships and tie-ups worldwide.
              </p>
            </div>

            {/* ITEM 04 */}
            <div className="text-center sm:text-left">
              <h3 className="font-cormorant text-[#C49A60] text-3xl sm:text-4xl mb-2 sm:mb-3">04</h3>
              <h4 className="font-cormorant text-xl sm:text-2xl text-[#1A1A1A] mb-2 sm:mb-3">
                Hands-On Training
              </h4>
              <p className="font-cormorant text-gray-600 text-sm sm:text-base leading-relaxed">
                Real-time flying and practical operational experience.
              </p>
            </div>

            {/* ITEM 05 */}
            <div className="text-center sm:text-left">
              <h3 className="font-cormorant text-[#C49A60] text-3xl sm:text-4xl mb-2 sm:mb-3">05</h3>
              <h4 className="font-cormorant text-xl sm:text-2xl text-[#1A1A1A] mb-2 sm:mb-3">
                Comprehensive Support
              </h4>
              <p className="font-cormorant text-gray-600 text-sm sm:text-base leading-relaxed">
                From interview prep to career guidance, full support is provided.
              </p>
            </div>

            {/* ITEM 06 */}
            <div className="text-center sm:text-left">
              <h3 className="font-cormorant text-[#C49A60] text-3xl sm:text-4xl mb-2 sm:mb-3">06</h3>
              <h4 className="font-cormorant text-xl sm:text-2xl text-[#1A1A1A] mb-2 sm:mb-3">
                Personalized Learning
              </h4>
              <p className="font-cormorant text-gray-600 text-sm sm:text-base leading-relaxed">
                Tailored training programs to suit your aviation goals.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};