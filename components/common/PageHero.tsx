interface Props {
  title: string;
  subtitle: string;
}

export default function PageHero({
  title,
  subtitle,
}: Props) {
  return (
    <section className="bg-gradient-to-br from-sky-50 via-white to-cyan-50 py-32">

      <div className="max-w-7xl mx-auto px-6 text-center">

        <h1 className="text-5xl lg:text-6xl font-bold">
          {title}
        </h1>

        <p className="mt-8 text-slate-600 max-w-2xl mx-auto text-lg leading-8">
          {subtitle}
        </p>

      </div>

    </section>
  );
}