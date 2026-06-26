import Image from "next/image";

import gallery from "@/data/gallery";

import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import SectionHeader from "@/components/common/SectionHeader";

interface GalleryProps {
  showHeader?: boolean;
}

export default function Gallery({
  showHeader = true,
}: GalleryProps) {
  return (
    <Section>
      <Container>
        {showHeader && (
          <SectionHeader
            badge="Gallery"
            title="A Glimpse of Our Clinic"
            subtitle="Explore our modern clinic, advanced dental equipment, and comfortable treatment environment."
          />
        )}

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {gallery.map((item) => (
            <div
              key={item.id}
              className="group overflow-hidden rounded-3xl shadow-lg"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={600}
                height={450}
                className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="bg-white p-5">
                <h3 className="text-lg font-semibold">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}