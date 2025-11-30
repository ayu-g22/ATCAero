import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { Course } from "../components/Course";
import { AboutSection } from "../components/AboutSection";
import { StatsSection } from "../components/StatsSection";
import { WhyChooseUs } from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen text-white font-sans bg-[#0F0F0F]">

      <Navbar />

      <HeroSection />
      <div className="w-full h-28 bg-[#F6F4EF]"></div>
      <Course />
      <div className="w-full h-28 bg-[#F6F4EF]"></div>
      <AboutSection/>
      <StatsSection/>
      <div className="w-full h-28 bg-[#F6F4EF]"></div>
      <WhyChooseUs />
      <Testimonials/>
      <FAQ />


      <Footer />
    </div>
  );
}
