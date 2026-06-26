const WHATSAPP_CONVERSION_LABEL = "AW-18275574103/NoghCPi3q8YcENfCvIpE";
const CONVERSION_DEBOUNCE_MS = 2500;

let lastWhatsAppConversionAt = 0;

type WindowWithGtag = Window & {
  gtag?: (...args: unknown[]) => void;
};

export function trackWhatsAppConversion() {
  if (typeof window === "undefined") {
    return;
  }

  const now = Date.now();

  if (now - lastWhatsAppConversionAt < CONVERSION_DEBOUNCE_MS) {
    return;
  }

  const gtag = (window as WindowWithGtag).gtag;

  if (typeof gtag !== "function") {
    return;
  }

  lastWhatsAppConversionAt = now;

  gtag("event", "conversion", {
    send_to: WHATSAPP_CONVERSION_LABEL,
  });
}
