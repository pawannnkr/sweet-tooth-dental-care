"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";

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
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
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
            <h1 className="text-xl font-bold leading-none text-blue-600">
              Sweet Tooth
            </h1>

            <p className="text-sm text-slate-500">
              Dental Care
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/" &&
                pathname.startsWith(item.href));

            return (
              <Link
                key={item.title}
                href={item.href}
                className={`relative pb-1 font-medium transition-colors duration-300 ${
                  isActive
                    ? "text-blue-600"
                    : "text-slate-700 hover:text-blue-600"
                }`}
              >
                {item.title}

                <span
                  className={`absolute bottom-0 left-0 h-0.5 rounded-full bg-blue-600 transition-all duration-300 ${
                    isActive ? "w-full" : "w-0"
                  }`}
                />
              </Link>
            );
          })}

          <Button
            asChild
            className="rounded-full px-6"
          >
            <Link href="/contact">
              Book Appointment
            </Link>
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>

            <SheetContent side="right">
              <div className="mt-10 flex flex-col gap-6">
                {links.map((item) => {
                  const isActive =
                    pathname === item.href ||
                    (item.href !== "/" &&
                      pathname.startsWith(item.href));

                  return (
                    <Link
                      key={item.title}
                      href={item.href}
                      className={`text-lg font-medium transition ${
                        isActive
                          ? "text-blue-600"
                          : "text-slate-700 hover:text-blue-600"
                      }`}
                    >
                      {item.title}
                    </Link>
                  );
                })}

                <Button
                  asChild
                  className="mt-4 rounded-full"
                >
                  <Link href="/contact">
                    Book Appointment
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}