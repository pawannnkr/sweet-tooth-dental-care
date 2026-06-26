import { Star } from "lucide-react";

import testimonials from "@/data/testimonials";

import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import SectionHeader from "@/components/common/SectionHeader";

export default function Testimonials() {
  return (
    <Section background="gray">
      <Container>
        <SectionHeader
          badge="Testimonials"
          title="What Our Patients Say"
          subtitle="Nothing makes us happier than seeing our patients smile with confidence."
        />

        <div className="grid gap-8 lg:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="rounded-3xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-5 flex">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    size={18}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <p className="leading-7 text-slate-600">
                "{item.review}"
              </p>

              <div className="mt-8">
                <h3 className="font-semibold">
                  {item.name}
                </h3>

                <p className="text-sm text-slate-500">
                  Happy Patient
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}