import PageHero from "@/components/common/PageHero";
import Gallery from "@/components/sections/Gallery";
import Contact from "@/components/sections/Contact";

export default function GalleryPage() {
  return (
    <>
      <PageHero
        title="Gallery"
        description="Explore our modern clinic, advanced dental facilities, and the welcoming environment where we create healthy, confident smiles."
      />

      <Gallery showHeader={false} />

      <Contact />
    </>
  );
}