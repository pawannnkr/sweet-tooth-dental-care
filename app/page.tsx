import Hero from "@/components/sections/home/Hero";
import AboutDoctor from "@/components/sections/home/AboutDoctor";
import Services from "@/components/sections/home/Services";
import WhyChooseUs from "@/components/sections/home/WhyChooseUs";
import Gallery from "@/components/sections/home/Gallery";
import Testimonials from "@/components/sections/home/Testimonials";
import FAQ from "@/components/sections/home/FAQ";
import Contact from "@/components/sections/home/Contact";
import TrustBar from "@/components/sections/home/TrustBar";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <AboutDoctor />
      <Services />
      <WhyChooseUs />
      <Gallery />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  );
}