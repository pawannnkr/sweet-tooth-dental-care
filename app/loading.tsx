import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-sky-50 via-white to-cyan-50">
      <Image
        src="/logo/logo.png"
        alt="Sweet Tooth Dental Care"
        width={80}
        height={80}
        className="h-auto w-20 animate-pulse"
        priority
      />

      <h2 className="mt-6 text-2xl font-bold text-slate-800">
        Sweet Tooth Dental Care
      </h2>

      <p className="mt-2 text-slate-500">
        Preparing your smile...
      </p>

      <div className="mt-8 h-1.5 w-52 overflow-hidden rounded-full bg-slate-200">
        <div className="h-full w-1/2 animate-[loading_1.2s_ease-in-out_infinite] rounded-full bg-blue-600" />
      </div>
    </div>
  );
}