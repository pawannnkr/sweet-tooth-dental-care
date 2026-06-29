import { Metadata } from "next";

export const siteConfig = {
  name: "Sweet Tooth Dental Care",

  title: "Sweet Tooth Dental Care | Dr. Jyoti Kumari Patna | Best Dentist in Kankarbagh, Patna",

  description:
    "Sweet Tooth Dental Care is a modern dental clinic in Kankarbagh, Patna, led by Dr. Jyoti Kumari. We provide Root Canal Treatment, Dental Implants, Teeth Whitening, Smile Makeovers, Braces, Wisdom Tooth Extraction, and complete family dental care.",

  url: "https://sweettoothdentalcare.vercel.app",

  ogImage: "https://sweettoothdentalcare.vercel.app/og-image.png",

  keywords: [
    "Dentist in Patna",
    "Dentist in Kankarbagh",
    "Dental Clinic Patna",
    "Root Canal Treatment Patna",
    "Dental Implants Patna",
    "Teeth Whitening Patna",
    "Smile Makeover Patna",
    "Braces Patna",
    "Wisdom Tooth Extraction Patna",
    "Dr. Jyoti Kumari",
    "Sweet Tooth Dental Care",
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

  title: {
    default: siteConfig.title,
    template: "%s | Sweet Tooth Dental Care | Dr. Jyoti Kumari Patna | Best Dentist in Kankarbagh, Patna",
  },

  description: siteConfig.description,

  keywords: siteConfig.keywords,

  applicationName: siteConfig.name,

  authors: [
    {
      name: "Sweet Tooth Dental Care",
    },
  ],

  creator: "Sweet Tooth Dental Care",

  publisher: "Sweet Tooth Dental Care",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: "https://res.cloudinary.com/dgfff5bfx/image/upload/w_120,f_auto,q_auto/v1782730630/sweet_tooth/icon_iemmak.png",
    shortcut: "https://res.cloudinary.com/dgfff5bfx/image/upload/w_120,f_auto,q_auto/v1782730630/sweet_tooth/icon_iemmak.png",
    apple: "https://res.cloudinary.com/dgfff5bfx/image/upload/w_120,f_auto,q_auto/v1782730630/sweet_tooth/icon_iemmak.png",
  },
};