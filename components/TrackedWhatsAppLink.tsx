"use client";

import { WHATSAPP_URL } from "@/lib/site";
import { trackWhatsAppConversion } from "@/lib/googleAds";

type TrackedWhatsAppLinkProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
};

export function TrackedWhatsAppLink({
  children,
  className = "",
  onClick,
}: TrackedWhatsAppLinkProps) {
  function handleClick(event: React.MouseEvent<HTMLAnchorElement>) {
    trackWhatsAppConversion();
    onClick?.(event);
  }

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      className={className}
      onClick={handleClick}
    >
      {children}
    </a>
  );
}
