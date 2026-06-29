import Image from "next/image";
import { Award, HeartHandshake, ShieldCheck } from "lucide-react";

export default function DoctorIntro() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="container mx-auto px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Doctor Image */}
          <div className="relative mx-auto max-w-md">
            <div className="overflow-hidden rounded-3xl shadow-3xl">
              {/* <Image
                src="/doctor/doctor-1.png" // <-- Replace with your doctor's image
                alt="Doctor"
                width={500}
                height={650}
                className="w-full object-cover"
                //className="w-full h-auto rounded-3xl"
                //className="w-full h-auto object-cover"
              /> */}

              <Image
                src="https://res.cloudinary.com/dgfff5bfx/image/upload/w_650,f_auto,q_auto/v1782730578/sweet_tooth/doctor-1_ov29mh"
                alt="Doctor"
                width={650}
                height={750}
                unoptimized
                className="rounded-[30px]"
              />
              </div>
          </div>

          {/* Content */}
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-sky-600">
              Meet Your Dentist
            </span>

            <h2 className="mt-3 text-4xl font-bold text-slate-900">
              Dr. Jyoti Kumari
            </h2>

            <p className="mt-2 text-lg font-medium text-sky-600">
              BDS • Dental Surgeon
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              At Sweet Tooth Dental Care, every patient receives personalized
              attention and compassionate care. Dr. Jyoti is
              committed to creating a comfortable experience while providing
              modern, evidence-based dental treatments tailored to each
              patient's needs.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex items-start gap-4">
                <Award className="mt-1 h-6 w-6 text-sky-600" />
                <div>
                  <h3 className="font-semibold text-slate-900">
                    Professional Expertise
                  </h3>
                  <p className="text-slate-600">
                    Dedicated to delivering high-quality dental care with
                    precision and attention to detail.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <HeartHandshake className="mt-1 h-6 w-6 text-sky-600" />
                <div>
                  <h3 className="font-semibold text-slate-900">
                    Patient-Centered Care
                  </h3>
                  <p className="text-slate-600">
                    Every treatment plan is personalized to ensure comfort,
                    transparency, and long-term oral health.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <ShieldCheck className="mt-1 h-6 w-6 text-sky-600" />
                <div>
                  <h3 className="font-semibold text-slate-900">
                    Safe & Modern Dentistry
                  </h3>
                  <p className="text-slate-600">
                    Following strict sterilization protocols and using modern
                    technology to provide reliable and comfortable treatment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}