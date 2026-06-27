"use client";
import Link from "next/link";
import clinic from "@/data/clinic";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Phone,
  Calendar,
  Star,
  ShieldCheck,
} from "lucide-react";

import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-cyan-50">
      <div className="absolute -top-40 -left-32 h-96 w-96 rounded-full bg-blue-200 blur-3xl opacity-30" />

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-200 blur-3xl opacity-30" />

      <div className="max-w-7xl mx-auto min-h-screen px-6 flex items-center">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-5 py-2">
              <ShieldCheck
                size={18}
                className="text-blue-600"
              />

              <span className="text-sm font-medium text-blue-700">
                Trusted Dental Clinic
              </span>
            </div>

            <h1 className="mt-8 text-5xl lg:text-7xl font-extrabold leading-tight">
              Healthy Smiles

              <span className="text-blue-600">
                {" "}
                Start Here.
              </span>
            </h1>

            <p className="mt-8 text-lg leading-8 text-slate-600 max-w-xl">
              At <strong>Sweet Tooth Dental Care</strong>,
              Dr. Jyoti Kumari provides painless,
              personalized and modern dental
              treatments for patients of every age.
            </p>

            <div className="mt-10 flex flex-wrap gap-5">
              <Button
                asChild
                size="lg"
                className="rounded-full px-8"
              >
                <Link
                  href={`https://wa.me/${clinic.whatsapp.replace("+", "")}?text=${encodeURIComponent(
                    "Hi Dr. Jyoti,\n\nI'd like to book an appointment at Sweet Tooth Dental Care."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Appointment
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full px-8"
              >
                <a href={`tel:${clinic.phone.replace(/\s/g, "")}`}>
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="relative"
          >
            <div className="absolute -left-10 top-24 rounded-3xl bg-blue-100 shadow-xl p-4">
              <div className="absolute -left-5 top-1/2 h-16 w-8 -translate-y-1/2 rounded-full bg-blue-100"></div>
              <div className="flex items-center gap-3">
                <Star
                  fill="#FFD700"
                  color="#FFD700"
                />

                <div>
                  <h3 className="font-semibold">
                    5.0 Google Rating
                  </h3>

                  <p className="text-sm text-slate-500">
                    Trusted by Patients
                  </p>
                </div>
              </div>
            </div>

            <Image
              src="/doctor/doctor-2.png"
              alt="Doctor"
              width={650}
              height={750}
              priority
              className="rounded-[40px]"
            />

            <div className="absolute -right-8 bottom-12 rounded-3xl bg-blue-100 shadow-xl px-8 py-6">
              <div className="absolute -right-5 top-1/2 h-16 w-8 -translate-y-1/2 rounded-full bg-blue-100"></div>
              <h3 className="font-semibold">
                Pain-Free
              </h3>

              <p className="text-sm text-slate-500">
                Advanced Dental Care
              </p>
            </div>
          </motion.div>


        </div>
      </div>
    </section>
  );
}