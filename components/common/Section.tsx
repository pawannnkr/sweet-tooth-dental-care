import { ReactNode } from "react";
import clsx from "clsx";

interface SectionProps {
  children: ReactNode;
  className?: string;
  background?: "white" | "gray" | "gradient";
}

export default function Section({
  children,
  className,
  background = "white",
}: SectionProps) {
  return (
    <section
      className={clsx(
        "py-24",
        {
          "bg-white": background === "white",
          "bg-slate-50": background === "gray",
          "bg-gradient-to-br from-sky-50 via-white to-cyan-50":
            background === "gradient",
        },
        className
      )}
    >
      {children}
    </section>
  );
}