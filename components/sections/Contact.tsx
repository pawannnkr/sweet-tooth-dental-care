import {
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import clinic from "@/data/clinic";

import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import SectionHeader from "@/components/common/SectionHeader";

export default function Contact() {
  return (
    <Section background="gray">
      <Container>
        <SectionHeader
          badge="Contact"
          title="Visit Our Clinic"
          subtitle="We're here to help you achieve a healthy and confident smile."
        />

        <div className="grid gap-12 lg:grid-cols-2">

          <div className="space-y-8">

            <div className="flex gap-4">
              <Phone className="text-blue-600" />

              <div>
                <h3 className="font-semibold">
                  Phone
                </h3>

                <p className="text-slate-600">
                  {clinic.phone}
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Mail className="text-blue-600" />

              <div>
                <h3 className="font-semibold">
                  Email
                </h3>

                <p className="text-slate-600">
                  {clinic.email}
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <MapPin className="text-blue-600" />

              <div>
                <h3 className="font-semibold">
                  Address
                </h3>

                <p className="text-slate-600">
                  {clinic.address}
                </p>
              </div>
            </div>

          </div>

          <div className="overflow-hidden rounded-3xl shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m11!1m3!1d72049.54379887528!2d85.09297600180577!3d25.6004752!2m2!1f0!2f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed59005067d11b%3A0x575f7336694275b9!2ssweet%20tooth%20dental%20care!5e1!3m2!1sen!2sin!4v1782482290232!5m2!1sen!2sin"
              className="h-[450px] w-full"
              loading="lazy"
            />
          </div>

        </div>
      </Container>
    </Section>
  );
}