import Image from "next/image";

export default function AboutStory() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Image */}
          <div className="relative overflow-hidden rounded-3xl shadow-xl">
            <Image
              src="/clinic/clinic-1.png"
              alt="Sweet Tooth Dental Care Clinic"
              width={700}
              height={500}
              className="h-full w-full object-cover transition duration-500 hover:scale-105"
            />
          </div>

          {/* Content */}
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-sky-600">
              Our Story
            </span>

            <h2 className="mt-3 text-4xl font-bold text-slate-900">
              Compassionate Dental Care for Every Smile
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Sweet Tooth Dental Care was founded with a simple vision to make
              quality dental care comfortable, accessible, and stress-free for
              every patient. We believe every smile is unique, and every
              treatment should be tailored to the individual.
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Whether you're visiting us for a routine dental check-up, cosmetic
              dentistry, or restorative treatment, our focus is always on
              providing gentle care, honest guidance, and lasting results in a
              warm and welcoming environment.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="rounded-2xl bg-sky-50 p-5">
                <h3 className="text-3xl font-bold text-sky-600">100%</h3>
                <p className="mt-2 text-sm text-slate-600">
                  Personalized Care
                </p>
              </div>

              <div className="rounded-2xl bg-sky-50 p-5">
                <h3 className="text-3xl font-bold text-sky-600">Modern</h3>
                <p className="mt-2 text-sm text-slate-600">
                  Equipment & Technology
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}