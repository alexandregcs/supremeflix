import { CirclePlay } from "lucide-react";
import { TrackedWhatsAppLink } from "./TrackedWhatsAppLink";

type WhatsAppButtonProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "light";
};

export function WhatsAppButton({
  children,
  className = "",
  variant = "primary",
}: WhatsAppButtonProps) {
  const base =
    variant === "light"
      ? "inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-extrabold text-night-900 shadow-[0_18px_38px_rgba(255,255,255,0.18)] transition duration-200 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-supreme-purple"
      : "primary-button";

  return (
    <TrackedWhatsAppLink className={`${base} ${className}`}>
      <CirclePlay className="h-4 w-4" aria-hidden="true" />
      {children}
    </TrackedWhatsAppLink>
  );
}
