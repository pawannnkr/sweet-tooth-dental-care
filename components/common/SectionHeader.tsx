interface Props {
  badge: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}

export default function SectionHeader({
  badge,
  title,
  subtitle,
  center = true,
}: Props) {
  return (
    <div
      className={`mb-16 ${
        center ? "text-center" : ""
      }`}
    >
      <span className="text-blue-600 font-semibold uppercase tracking-widest text-sm">
        {badge}
      </span>

      <h2 className="mt-4 text-4xl lg:text-5xl font-bold">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-6 text-slate-600 max-w-2xl mx-auto leading-8">
          {subtitle}
        </p>
      )}
    </div>
  );
}