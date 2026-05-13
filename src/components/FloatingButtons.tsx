import { Phone, MessageCircle } from "lucide-react";

export function FloatingButtons() {
  return (
    <>
      <a
        href="https://wa.me/916381076189"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[oklch(0.7_0.18_145)] text-white shadow-brand transition-transform hover:scale-110 animate-pulse"
      >
        <MessageCircle className="h-7 w-7" fill="currentColor" />
      </a>
      <a
        href="tel:+916381076189"
        aria-label="Call us"
        className="fixed bottom-6 left-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-purple text-white shadow-brand transition-transform hover:scale-110"
      >
        <Phone className="h-6 w-6" />
      </a>
    </>
  );
}
