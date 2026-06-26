export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  image: string;

  duration: string;

  recovery: string;

  benefits: string[];

  procedure: string[];
}

const services: Service[] = [
  {
    slug: "root-canal",

    title: "Root Canal Treatment",

    image: "/gallery/gallery-1.jpeg",

    shortDescription:
      "Pain-free treatment to save infected teeth.",

    description:
      "Root canal treatment removes infected pulp and protects your natural tooth using advanced painless techniques.",

    duration: "45-90 Minutes",

    recovery: "1-2 Days",

    benefits: [
      "Pain Relief",
      "Save Natural Tooth",
      "Long-lasting",
      "Improved Oral Health",
    ],

    procedure: [
      "Dental Examination",
      "Local Anesthesia",
      "Cleaning the Infection",
      "Root Filling",
      "Permanent Crown",
    ],
  },

  {
    slug: "dental-implant",

    title: "Dental Implant",

    image: "/treatments/implant.jpg",

    shortDescription:
      "Permanent replacement for missing teeth.",

    description:
      "Dental implants restore function and appearance with titanium implants that look and feel like natural teeth.",

    duration: "60-120 Minutes",

    recovery: "3-7 Days",

    benefits: [
      "Natural Look",
      "Permanent",
      "Strong Bite",
      "Prevents Bone Loss",
    ],

    procedure: [
      "Consultation",
      "X-Ray",
      "Implant Placement",
      "Healing",
      "Crown Placement",
    ],
  },

  {
    slug: "teeth-whitening",

    title: "Teeth Whitening",

    image: "/treatments/whitening.jpg",

    shortDescription:
      "Brighten your smile safely.",

    description:
      "Professional whitening removes stains and restores natural brightness.",

    duration: "45 Minutes",

    recovery: "Immediate",

    benefits: [
      "Whiter Teeth",
      "Quick Results",
      "Safe Procedure",
    ],

    procedure: [
      "Cleaning",
      "Whitening Gel",
      "LED Activation",
      "Final Polish",
    ],
  },

  {
    slug: "braces",

    title: "Braces",

    image: "/treatments/braces.jpg",

    shortDescription:
      "Straighten your teeth confidently.",

    description:
      "Orthodontic treatment for children and adults using modern braces.",

    duration: "Monthly Visits",

    recovery: "N/A",

    benefits: [
      "Straight Teeth",
      "Better Bite",
      "Improved Smile",
    ],

    procedure: [
      "Consultation",
      "Impression",
      "Bracket Placement",
      "Adjustments",
    ],
  },
];

export default services;