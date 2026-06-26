import {
  ShieldCheck,
  Smile,
  Clock,
  Stethoscope,
} from "lucide-react";

import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import SectionHeader from "@/components/common/SectionHeader";

const features = [
  {
    title: "Experienced Dentist",
    description:
      "Personalized treatment backed by years of clinical experience and patient trust.",
    icon: Stethoscope,
  },
  {
    title: "Modern Technology",
    description:
      "Advanced equipment and techniques for accurate diagnosis and painless treatment.",
    icon: ShieldCheck,
  },
  {
    title: "Gentle & Comfortable Care",
    description:
      "A calm and patient-friendly environment designed to reduce dental anxiety.",
    icon: Smile,
  },
  {
    title: "Flexible Appointments",
    description:
      "Convenient appointment scheduling to fit your busy lifestyle.",
    icon: Clock,
  },
];

export default function WhyChooseUs() {
  return (
    <Section background="gray">
      <Container>
        <SectionHeader
          badge="Why Choose Us"
          title="Your Smile Is Our Priority"
          subtitle="At Sweet Tooth Dental Care, we combine expertise, technology, and compassion to deliver the highest quality dental care."
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-3xl bg-white p-8 text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                <feature.icon
                  className="text-blue-600"
                  size={32}
                />
              </div>

              <h3 className="mt-6 text-xl font-semibold">
                {feature.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}