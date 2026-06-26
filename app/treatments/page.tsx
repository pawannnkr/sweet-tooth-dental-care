import PageHero from "@/components/common/PageHero";
import TreatmentsIntro from "@/components/sections/TreatmentsIntro";
import Services from "@/components/sections/Services";
import Contact from "@/components/sections/Contact";

export default function TreatmentsPage() {
  return (
    <>
      <PageHero
        title="Our Treatments"
        description="Explore our complete range of dental treatments designed to keep your smile healthy, beautiful, and confident."
      />

      <TreatmentsIntro />

      <Services />

      <Contact />
    </>
  );
}
