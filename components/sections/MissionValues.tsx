import { Heart, ShieldCheck, Sparkles } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Patient First",
    description:
      "Every treatment begins with listening, understanding your concerns, and creating a personalized care plan.",
  },
  {
    icon: ShieldCheck,
    title: "Honest & Ethical Care",
    description:
      "We believe in transparent consultations, clear communication, and recommending only the treatments you truly need.",
  },
  {
    icon: Sparkles,
    title: "Comfortable Experience",
    description:
      "From your first consultation to your final follow-up, we strive to make every visit relaxed, gentle, and stress-free.",
  },
];

export default function MissionValues() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-sky-600">
            Our Philosophy
          </span>

          <h2 className="mt-3 text-4xl font-bold text-slate-900">
            Dentistry Built on Trust, Care & Excellence
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Our mission is to provide high-quality dental care in a welcoming
            environment where every patient feels valued, informed, and
            confident about their oral health.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {values.map((value) => {
            const Icon = value.icon;

            return (
              <div
                key={value.title}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-100">
                  <Icon className="h-7 w-7 text-sky-600" />
                </div>

                <h3 className="mt-6 text-xl font-semibold text-slate-900">
                  {value.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}