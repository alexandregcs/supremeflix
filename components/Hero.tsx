"use client";

import { useEffect, useState } from "react";
import { ChevronRight, MapPin } from "lucide-react";
import { heroPills } from "@/lib/site";
import { WhatsAppButton } from "./WhatsAppButton";

const fallbackText = "Uma experiência completa de streaming para assistir onde preferir.";

type GeoResponse = {
  city?: string;
};

export function Hero() {
  const [badgeText, setBadgeText] = useState(fallbackText);

  useEffect(() => {
    const controller = new AbortController();

    async function loadCity() {
      try {
        const response = await fetch("https://get.geojs.io/v1/ip/geo.json", {
          signal: controller.signal,
          cache: "no-store",
        });

        if (!response.ok) {
          return;
        }

        const data = (await response.json()) as GeoResponse;
        const city = data.city?.trim();

        if (city) {
          setBadgeText(`Oferta exclusiva para ${city} e região.`);
        }
      } catch {
        setBadgeText(fallbackText);
      }
    }

    loadCity();

    return () => controller.abort();
  }, []);

  return (
    <section id="inicio" className="relative isolate overflow-hidden">
      <div
        className="absolute inset-0 -z-10"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(62% 60% at 19% 0%, rgba(255, 54, 89, 0.42), transparent 62%), radial-gradient(68% 78% at 82% 8%, rgba(139, 92, 246, 0.36), transparent 66%), radial-gradient(74% 82% at 50% 85%, rgba(24, 165, 255, 0.24), transparent 64%), linear-gradient(180deg, #140719 0%, #06081a 54%, #03111f 100%)",
        }}
      />
      <div className="site-container flex min-h-[680px] flex-col items-center justify-center pb-24 pt-16 text-center sm:min-h-[708px] sm:pt-20 lg:min-h-[738px]">
        <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-white/10 bg-black/24 px-4 py-2 text-[11px] font-bold leading-none text-slate-300 shadow-[0_10px_30px_rgba(0,0,0,0.24)] backdrop-blur-md sm:text-xs">
          <MapPin className="h-3.5 w-3.5 shrink-0 text-supreme-red" aria-hidden="true" />
          <span className="truncate">{badgeText}</span>
        </div>

        <h1 className="mt-7 max-w-[1080px] text-[34px] font-black leading-[1.07] tracking-normal text-white sm:text-[58px] lg:text-[60px]">
          Tudo que você precisa em <span className="text-gradient whitespace-nowrap">um só</span>{" "}
          <span className="text-gradient">lugar</span>
        </h1>

        <p className="mt-7 max-w-[690px] text-sm font-semibold leading-relaxed text-slate-400 sm:text-base">
          Assista filmes, séries, canais, esportes, animes e muito mais em seus dispositivos
          favoritos, com praticidade e suporte para começar sem complicação.
        </p>

        <div className="mt-7 flex max-w-2xl flex-wrap justify-center gap-2.5">
          {heroPills.map(({ label, Icon }) => (
            <span
              key={label}
              className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.055] px-3 py-1.5 text-[11px] font-bold text-slate-300"
            >
              <Icon className="h-3.5 w-3.5 text-slate-400" aria-hidden="true" />
              {label}
            </span>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <WhatsAppButton>Solicitar teste</WhatsAppButton>
          <a href="#planos" className="secondary-button">
            Ver planos
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
