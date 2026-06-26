import PageHero from "@/components/common/PageHero";
import AboutStory from "@/components/sections/AboutStory";
import DoctorIntro from "@/components/sections/DoctorIntro";
import MissionValues from "@/components/sections/MissionValues";
import Gallery from "@/components/sections/Gallery";
import Contact from "@/components/sections/Contact";

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Us"
        description="Learn more about Sweet Tooth Dental Care, our commitment to compassionate dentistry, and the care we provide to help every patient smile with confidence."
      />
      <AboutStory />
      <DoctorIntro />
      <MissionValues />
      <Gallery />
      <Contact />
    </>
  );
}