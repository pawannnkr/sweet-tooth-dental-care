import Image from "next/image";
import { Button } from "@/components/ui/button";

import services from "@/data/services";

import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import SectionHeader from "@/components/common/SectionHeader";

export default function Services() {
  return (
    <Section background="gray">
      <Container>
        <SectionHeader
          badge="Our Services"
          title="Complete Dental Care"
          subtitle="Comprehensive dental solutions for every age using advanced technology and patient-friendly treatments."
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.slug}
              className="overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <Image
                src={service.image}
                alt={service.title}
                width={500}
                height={350}
                className="h-60 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-semibold">
                  {service.title}
                </h3>

                <p className="mt-4 text-slate-600 leading-7">
                  {service.shortDescription}
                </p>

                <div className="mt-6 flex items-center justify-between">
                  <span className="text-sm text-slate-500">
                    {service.duration}
                  </span>

                  <Button className="rounded-full">
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}