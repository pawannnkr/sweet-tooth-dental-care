import Link from "next/link";
import Image from "next/image";

import { Home, Phone } from "lucide-react";

import clinic from "@/data/clinic";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-sky-50 via-white to-cyan-50 px-6">
      <div className="max-w-xl text-center">
        <Image
          src="https://res.cloudinary.com/dgfff5bfx/image/upload/f_auto,q_auto,w_120/v1782730641/sweet_tooth/logo_g5hah9"
          alt="Sweet Tooth Dental Care"
          width={90}
          height={90}
          className="mx-auto h-auto w-24"
          priority
          unoptimized
        />

        <h1 className="mt-8 text-7xl font-extrabold text-blue-600">
          404
        </h1>

        <h2 className="mt-4 text-3xl font-bold text-slate-900">
          Oops! Page Not Found
        </h2>

        <p className="mt-5 leading-8 text-slate-600">
          The page you're looking for doesn't exist or may have been moved.
          Let's get you back to a healthy smile.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Button asChild className="rounded-full px-8">
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            className="rounded-full px-8"
          >
            <a href={`tel:${clinic.phone.replace(/\s/g, "")}`}>
              <Phone className="mr-2 h-4 w-4" />
              Call Clinic
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}