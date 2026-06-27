import clinic from "@/data/clinic";

export default function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Dentist",

    name: clinic.name,

    image: "https://sweettoothdentalcare.vercel.app/logo/logo.png",

    url: "https://sweettoothdentalcare.vercel.app",

    telephone: clinic.phone,

    email: clinic.email,

    address: {
      "@type": "PostalAddress",
      streetAddress: clinic.address,
      addressLocality: "Patna",
      addressRegion: "Bihar",
      postalCode: "800020",
      addressCountry: "IN",
    },

    openingHours: [
      "Mo-Fr 10:00-19:00",
      "Sa 10:00-18:00",
    ],

    sameAs: [
      clinic.googleMaps,
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd),
      }}
    />
  );
}