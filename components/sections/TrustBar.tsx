import {
  Star,
  ShieldCheck,
  Smile,
  Clock3,
} from "lucide-react";

import Container from "@/components/common/Container";
import Section from "@/components/common/Section";

const trustItems = [
  {
    icon: Star,
    title: "5.0 Google Rating",
    subtitle: "Trusted by our patients",
  },
  {
    icon: Smile,
    title: "Pain-Free Care",
    subtitle: "Comfortable treatment",
  },
  {
    icon: ShieldCheck,
    title: "100% Sterilized",
    subtitle: "Safe & hygienic clinic",
  },
  {
    icon: Clock3,
    title: "Same-Day Consultation",
    subtitle: "Quick appointments",
  },
];

export default function TrustBar() {
  return (
    <Section className="-mt-16 relative z-20">
      <Container>
        <div className="grid overflow-hidden rounded-[32px] bg-white shadow-2xl md:grid-cols-2 lg:grid-cols-4">
          {trustItems.map((item) => (
            <div
              key={item.title}
              className="flex items-center gap-4 border-b p-8 last:border-b-0 lg:border-b-0 lg:border-r last:lg:border-r-0"
            >
              <div className="rounded-full bg-blue-100 p-4">
                <item.icon
                  className="text-blue-600"
                  size={28}
                />
              </div>

              <div>
                <h3 className="font-semibold">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-500">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}