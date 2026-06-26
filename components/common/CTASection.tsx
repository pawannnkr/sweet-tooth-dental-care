import Link from "next/link";
import { Phone } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <section className="py-24">

      <div className="max-w-7xl mx-auto px-6">

        <div className="rounded-[40px] bg-blue-600 text-white px-10 py-20 text-center">

          <h2 className="text-4xl font-bold">
            Ready for a Healthier Smile?
          </h2>

          <p className="mt-6 max-w-2xl mx-auto opacity-90 leading-8">
            Book your consultation today with
            Dr. Jyoti Kumari and experience
            modern, comfortable dental care.
          </p>

          <div className="flex justify-center gap-4 mt-10">

            <Button
              size="lg"
              variant="secondary"
            >
              Book Appointment
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="text-black"
            >
              <Phone className="mr-2 h-4 w-4" />

              Call Now

            </Button>

          </div>

        </div>

      </div>

    </section>
  );
}