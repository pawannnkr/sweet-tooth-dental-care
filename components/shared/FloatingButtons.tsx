import { Phone, MessageCircle } from "lucide-react";
import clinic from "@/data/clinic";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">

      <a
        href={`https://wa.me/${clinic.whatsapp.replace(/\+/g, "")}`}
        target="_blank"
        className="bg-green-500 p-4 rounded-full text-white shadow-xl hover:scale-110 transition"
      >
        <MessageCircle />
      </a>

      <a
        href={`tel:${clinic.phone}`}
        className="bg-blue-600 p-4 rounded-full text-white shadow-xl hover:scale-110 transition"
      >
        <Phone />
      </a>

    </div>
  );
}