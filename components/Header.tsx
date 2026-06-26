"use client";

import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems } from "@/lib/site";
import { WhatsAppButton } from "./WhatsAppButton";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#070616]/88 backdrop-blur-xl">
      <div className="site-container flex h-[60px] items-center justify-between sm:h-[68px]">
        <a href="#inicio" className="flex items-center" aria-label="Supreme Flix">
          <Image
            src="/supreme-flix-logo.png"
            alt="Supreme Flix"
            width={500}
            height={208}
            priority
            className="h-[30px] w-auto md:h-[38px]"
          />
        </a>

        <nav className="hidden items-center gap-8 text-[12px] font-semibold text-slate-300 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <WhatsAppButton className="px-5 py-2.5 text-[12px]">Solicitar teste</WhatsAppButton>
        </div>

        <button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.045] text-white md:hidden"
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      <div
        className={`md:hidden ${
          open ? "grid grid-rows-[1fr] border-t border-white/[0.06]" : "grid grid-rows-[0fr]"
        } overflow-hidden bg-[#070616]/96 transition-all duration-300`}
      >
        <div className="min-h-0">
          <nav className="site-container flex flex-col gap-1 py-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-sm font-semibold text-slate-200 transition hover:bg-white/[0.055]"
              >
                {item.label}
              </a>
            ))}
            <WhatsAppButton className="mt-2 w-full py-3 text-xs">Solicitar teste</WhatsAppButton>
          </nav>
        </div>
      </div>
    </header>
  );
}
