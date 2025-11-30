"use client";

export const WhyChooseUs = () => {
  return (
    <section className="w-full bg-[#F7F5F0] py-24">
  <div className="max-w-7xl mx-auto px-3 lg:px-12 flex gap-10">

    {/* LEFT — 30% WIDTH */}
    <div className="w-[30%]">
      <p className="text-[#C49A60] tracking-[0.3em] font-monda text-lg mb-6">
        WHY CHOOSE US
      </p>

      <h2 className="font-cormorant text-6xl leading-[1.15] text-[#1A1A1A] mb-10">
        Choose ATC <br />
        AERO for <br />
        Your Aviation <br />
        Success
      </h2>

      <p className="font-cormorant text-gray-600 text-lg leading-relaxed">
        ATC AERO offers expert training, global exposure,
        and complete placement support to help you build
        a successful career in the aviation industry.
      </p>
    </div>
    <div className="px-6"></div>

    <div className="w-[70%]">

  {/* FIRST ROW */}
  <div className="grid grid-cols-3 gap-x-28 gap-y-28">

    {/* ITEM 01 */}
    <div>
      <h3 className="font-cormorant text-[#C49A60] text-4xl mb-3">01</h3>
      <h4 className="font-cormorant text-2xl text-[#1A1A1A] mb-3">
        DGCA-Approved Training
      </h4>
      <p className="font-cormorant text-gray-600 leading-relaxed">
        We provide courses that meet DGCA standards for
        top-notch aviation education.
      </p>
    </div>

    {/* ITEM 02 */}
    <div>
      <h3 className="font-cormorant text-[#C49A60] text-4xl mb-3">02</h3>
      <h4 className="font-cormorant text-2xl text-[#1A1A1A] mb-3">
        Industry-Relevant Curriculum
      </h4>
      <p className="font-cormorant text-gray-600 leading-relaxed">
        Stay ahead with courses designed according to the latest aviation industry trends.
      </p>
    </div>

    {/* ITEM 03 */}
    <div>
      <h3 className="font-cormorant text-[#C49A60] text-4xl mb-3">03</h3>
      <h4 className="font-cormorant text-2xl text-[#1A1A1A] mb-3">
        Global Opportunities
      </h4>
      <p className="font-cormorant text-gray-600 leading-relaxed">
        Career opportunities via global partnerships and tie-ups worldwide.
      </p>
    </div>

  </div>

  {/* SECOND ROW */}
  <div className="grid grid-cols-3 gap-x-28 gap-y-28 mt-20">

    {/* ITEM 04 */}
    <div>
      <h3 className="font-cormorant text-[#C49A60] text-4xl mb-3">04</h3>
      <h4 className="font-cormorant text-2xl text-[#1A1A1A] mb-3">
        Hands-On Training
      </h4>
      <p className="font-cormorant text-gray-600 leading-relaxed">
        Real-time flying and practical operational experience.
      </p>
    </div>

    {/* ITEM 05 */}
    <div>
      <h3 className="font-cormorant text-[#C49A60] text-4xl mb-3">05</h3>
      <h4 className="font-cormorant text-2xl text-[#1A1A1A] mb-3">
        Comprehensive Support
      </h4>
      <p className="font-cormorant text-gray-600 leading-relaxed">
        From cormorantview prep to career guidance, full support is provided.
      </p>
    </div>

    {/* ITEM 06 */}
    <div>
      <h3 className="font-cormorant text-[#C49A60] text-4xl mb-3">06</h3>
      <h4 className="font-cormorant text-2xl text-[#1A1A1A] mb-3">
        Personalized Learning
      </h4>
      <p className="font-cormorant text-gray-600 leading-relaxed">
        Tailored training programs to suit your aviation goals.
      </p>
    </div>

  </div>

</div>


  </div>
</section>

  );
};
