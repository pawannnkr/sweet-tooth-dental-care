import Link from "next/link";
import clinic from "@/data/clinic";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white mt-24">

      <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-3 gap-10">

        <div>
          <h2 className="text-2xl font-bold">
            {clinic.name}
          </h2>

          <p className="mt-4 text-slate-300">
            Expert dental care with modern
            technology and compassionate treatment.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-3">
            Quick Links
          </h3>

          <div className="flex flex-col gap-2">

            <Link href="/">Home</Link>

            <Link href="/about">About</Link>

            <Link href="/gallery">Gallery</Link>

            <Link href="/treatments">
              Treatments
            </Link>

            <Link href="/contact">
              Contact
            </Link>

          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-3">
            Contact
          </h3>

          <p>{clinic.phone}</p>

          <p>{clinic.email}</p>

          <p>{clinic.address}</p>
        </div>

      </div>

      <div className="border-t border-slate-700 py-6 text-center text-sm">

        © {new Date().getFullYear()} Sweet Tooth Dental Care

      </div>

    </footer>
  );
}