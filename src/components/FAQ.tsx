"use client";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./ui/accordion";

export default function FAQ() {
  return (
    <section className="w-full bg-[#F6F4EF] py-24 px-6 lg:px-20">

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[40%_60%] gap-20">

        {/* LEFT SIDE */}
        <div>
          <p className="tracking-[0.35em] text-[#C49A60] uppercase mb-6 text-sm font-monda">
            Frequently Asked Questions
          </p>

          <h2 className="text-6xl font-cormorant leading-[1.1] text-[#1A1A1A] mb-8">
            You Have a <br /> Question?
          </h2>

          <p className="font-inter text-lg text-[#505050] max-w-md leading-relaxed">
            Find answers to the most common questions about our courses,
            eligibility, training process, placements, and enrollment at ATC AERO.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full">
          <Accordion type="single" collapsible className="w-full">

            {/* FAQ ROW */}
            <AccordionItem value="item-1" className="border-b border-[#C49A60] py-4">
              <AccordionTrigger
                className="
                  text-[26px] font-cormorant text-[#1A1A1A]
                  w-full flex justify-between items-center
                  hover:no-underline
                  pr-2
                "
              >
                What courses does ATC AERO offer?
              </AccordionTrigger>

              <AccordionContent
                className="font-inter text-[#444] text-lg pt-4 pr-8 pb-6 leading-relaxed"
              >
                We offer Pilot Training, Cabin Crew, Drone Training, Travel & Tourism,
                and Airport Operations courses.
              </AccordionContent>
            </AccordionItem>

            {/* FAQ ROW */}
            <AccordionItem value="item-2" className="border-b border-[#C49A60] py-4">
              <AccordionTrigger
                className="text-[26px] font-cormorant text-[#1A1A1A] hover:no-underline pr-2"
              >
                Is your Pilot Training DGCA-approved?
              </AccordionTrigger>

              <AccordionContent className="font-inter text-lg text-[#444] pt-4 pr-8 pb-6 leading-relaxed">
                Yes, our Pilot Training meets DGCA curriculum and regulatory standards.
              </AccordionContent>
            </AccordionItem>

            {/* FAQ ROW */}
            <AccordionItem value="item-3" className="border-b border-[#C49A60] py-4">
              <AccordionTrigger
                className="text-[26px] font-cormorant text-[#1A1A1A] hover:no-underline pr-2"
              >
                Do you provide placement support after training?
              </AccordionTrigger>

              <AccordionContent className="font-inter text-lg text-[#444] pt-4 pr-8 pb-6 leading-relaxed">
                Yes. We offer complete placement assistance and interview preparation.
              </AccordionContent>
            </AccordionItem>

            {/* FAQ ROW */}
            <AccordionItem value="item-4" className="border-b border-[#C49A60] py-4">
              <AccordionTrigger
                className="text-[26px] font-cormorant text-[#1A1A1A] hover:no-underline pr-2"
              >
                How can I enroll in a course?
              </AccordionTrigger>

              <AccordionContent className="font-inter text-lg text-[#444] pt-4 pr-8 pb-6 leading-relaxed">
                You can enroll online or visit our campus for a counseling session.
              </AccordionContent>
            </AccordionItem>

          </Accordion>
        </div>
      </div>
    </section>
  );
}
