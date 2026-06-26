// interface Props {
//   title: string;
//   subtitle: string;
// }

// export default function PageHero({
//   title,
//   subtitle,
// }: Props) {
//   return (
//     <section className="bg-gradient-to-br from-sky-50 via-white to-cyan-50 py-32">

//       <div className="max-w-7xl mx-auto px-6 text-center">

//         <h1 className="text-5xl lg:text-6xl font-bold">
//           {title}
//         </h1>

//         <p className="mt-8 text-slate-600 max-w-2xl mx-auto text-lg leading-8">
//           {subtitle}
//         </p>

//       </div>

//     </section>
//   );
// }


import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface PageHeroProps {
  title: string;
  description: string;
}

export default function PageHero({
  title,
  description,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-sky-50 via-white to-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-sky-100 blur-3xl" />
        <div className="absolute -bottom-32 -right-20 h-96 w-96 rounded-full bg-cyan-100 blur-3xl" />
      </div>

      <div className="relative container mx-auto px-6 py-20 lg:py-28">
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-sm text-slate-500">
          <Link
            href="/"
            className="flex items-center gap-1 transition hover:text-sky-600"
          >
            <Home className="h-4 w-4" />
            Home
          </Link>

          <ChevronRight className="h-4 w-4" />

          <span className="font-medium text-slate-800">{title}</span>
        </div>

        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
            {title}
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}