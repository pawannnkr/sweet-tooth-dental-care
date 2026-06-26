import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import AboutDoctor from "@/components/sections/AboutDoctor";
import Services from "@/components/sections/Services";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Gallery from "@/components/sections/Gallery";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";

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