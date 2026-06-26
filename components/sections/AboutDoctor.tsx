import Image from "next/image";
import doctor from "@/data/doctor";
import { Button } from "@/components/ui/button";

import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import SectionHeader from "@/components/common/SectionHeader";

export default function AboutDoctor() {
  return (
    <Section>
      <Container>
        <SectionHeader
          badge="About Doctor"
          title="Meet Dr. Jyoti Kumari"
          subtitle="Dedicated to providing modern, painless and personalized dental care with compassion and excellence."
          center={false}
        />

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="flex justify-center">
            <Image
              src={doctor.image}
              alt={doctor.name}
              width={500}
              height={600}
              className="rounded-3xl shadow-xl object-cover"
            />
          </div>

          <div>
            <h3 className="text-3xl font-bold">
              {doctor.name}
            </h3>

            <p className="text-blue-600 font-semibold mt-2">
              {doctor.qualification} • {doctor.experience}
            </p>

            <p className="mt-6 text-slate-600 leading-8">
              {doctor.description}
            </p>

            <div className="grid grid-cols-2 gap-3 mt-8">
              {doctor.specialization.map((item) => (
                <div
                  key={item}
                  className="rounded-full bg-slate-100 px-4 py-3 text-center text-sm font-medium"
                >
                  {item}
                </div>
              ))}
            </div>

            <Button className="mt-10 rounded-full px-8">
              Know More
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}