import PageHero from "@/components/common/PageHero";
import Contact from "@/components/sections/Contact";

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        description="Have questions or ready to book your appointment? We're here to help. Get in touch with Sweet Tooth Dental Care and let us take care of your smile."
      />

      <Contact showHeader={false} />
    </>
  );
}