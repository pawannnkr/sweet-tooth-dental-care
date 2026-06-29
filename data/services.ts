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

    image: "https://res.cloudinary.com/dgfff5bfx/image/upload/w_700,f_auto,q_auto/v1782754908/sweet_tooth/rct_gziuoi.png",

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

    image: "https://res.cloudinary.com/dgfff5bfx/image/upload/w_700,f_auto,q_auto/v1782730552/sweet_tooth/implant_t2fi4s.jpg",

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

    image: "https://res.cloudinary.com/dgfff5bfx/image/upload/w_700,f_auto,q_auto/v1782754909/sweet_tooth/whitening_jbixeu.png",

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

    image: "https://res.cloudinary.com/dgfff5bfx/image/upload/w_700,f_auto,q_auto/v1782754908/sweet_tooth/braces_rmje7d.png",

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
  
  {
  slug: "wisdom-tooth-extraction",

  title: "Wisdom Tooth Extraction",

  image: "https://res.cloudinary.com/dgfff5bfx/image/upload/w_700,f_auto,q_auto/v1782754907/sweet_tooth/wisdom_tcn1zt.png",

  shortDescription:
    "Safe and comfortable removal of impacted or painful wisdom teeth.",

  description:
    "Wisdom tooth extraction is a common dental procedure performed to remove impacted, infected, or problematic wisdom teeth. Our advanced techniques ensure minimal discomfort, faster healing, and a smooth recovery process.",

  duration: "30–60 Minutes",

  recovery: "3–7 Days",

  benefits: [
    "Relieves Tooth Pain",
    "Prevents Infection",
    "Protects Nearby Teeth",
    "Quick Recovery",
  ],

  procedure: [
    "Clinical Examination",
    "Digital X-Ray",
    "Local Anesthesia",
    "Tooth Removal",
    "Post-Operative Care",
  ],
},

{
  slug: "smile-makeover",

  title: "Smile Makeover",

  image: "https://res.cloudinary.com/dgfff5bfx/image/upload/w_700,f_auto,q_auto/v1782754911/sweet_tooth/smile_ncd9xa.png",

  shortDescription:
    "Transform your smile with personalized cosmetic dental treatments.",

  description:
    "A smile makeover combines multiple cosmetic dental procedures such as veneers, whitening, bonding, and contouring to enhance the appearance of your smile. Every treatment plan is customized to match your facial features and aesthetic goals.",

  duration: "2–4 Visits",

  recovery: "Minimal",

  benefits: [
    "Beautiful Smile",
    "Boosts Confidence",
    "Natural Appearance",
    "Customized Treatment Plan",
  ],

  procedure: [
    "Smile Analysis",
    "Treatment Planning",
    "Cosmetic Procedures",
    "Final Adjustments",
    "Smile Evaluation",
  ],
}
];

export default services;