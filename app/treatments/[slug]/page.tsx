
import { notFound } from "next/navigation";
import Image from "next/image";

import services from "@/data/services";

import PageHero from "@/components/common/PageHero";
import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import Contact from "@/components/sections/Contact";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;

  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return {
      title: "Treatment Not Found",
    };
  }

  return {
    title: `${service.title} | Sweet Tooth Dental Care`,
    description: service.description,
  };
}

export default async function TreatmentPage({
  params,
}: PageProps) {
  const { slug } = await params;

  const service = services.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <PageHero
        title={service.title}
        description={service.shortDescription}
      />

      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <Image
              src={service.image}
              alt={service.title}
              width={700}
              height={500}
              className="rounded-3xl object-cover shadow-xl"
            />

            <div>
              <h2 className="text-3xl font-bold">
                Treatment Overview
              </h2>

              <p className="mt-6 leading-8 text-slate-600">
                {service.description}
              </p>

              <div className="mt-10 grid grid-cols-2 gap-6">
                <div className="rounded-2xl bg-sky-50 p-6">
                  <p className="text-sm text-slate-500">
                    Duration
                  </p>

                  <h3 className="mt-2 text-xl font-semibold">
                    {service.duration}
                  </h3>
                </div>

                <div className="rounded-2xl bg-sky-50 p-6">
                  <p className="text-sm text-slate-500">
                    Recovery
                  </p>

                  <h3 className="mt-2 text-xl font-semibold">
                    {service.recovery}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section background="gray">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold">
                Benefits
              </h2>

              <ul className="mt-8 space-y-4">
                {service.benefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="rounded-xl bg-white p-4 shadow"
                  >
                    ✅ {benefit}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold">
                Treatment Procedure
              </h2>

              <ol className="mt-8 space-y-5">
                {service.procedure.map((step, index) => (
                  <li
                    key={step}
                    className="flex gap-4"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-600 font-bold text-white">
                      {index + 1}
                    </div>

                    <div className="pt-2">
                      {step}
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </Container>
      </Section>

      <Contact />
    </>
  );
}