"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const links = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Treatments",
    href: "/treatments",
  },
  {
    title: "Gallery",
    href: "/gallery",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

       <Link
  href="/"
  className="flex items-center gap-3"
>
  <Image
    src="/logo/logo.png"
    alt="Sweet Tooth Dental Care"
    width={50}
    height={50}
    className="h-12 w-auto"
    priority
  />

  <div>
    <h1 className="text-xl font-bold text-blue-600 leading-none">
      Sweet Tooth
    </h1>

    <p className="text-sm text-slate-500">
      Dental Care
    </p>
  </div>
</Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="hover:text-blue-600 transition"
            >
              {item.title}
            </Link>
          ))}

          <Button className="rounded-full px-6">
            Book Appointment
          </Button>
        </nav>

        <div className="md:hidden">
          <Sheet>

            <SheetTrigger>

              <Menu />

            </SheetTrigger>

            <SheetContent side="right">

              <div className="flex flex-col gap-6 mt-10">

                {links.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                  >
                    {item.title}
                  </Link>
                ))}

              </div>

            </SheetContent>

          </Sheet>
        </div>

      </div>
    </header>
  );
}