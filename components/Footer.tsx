import Image from "next/image";
import { footerLegal, navItems } from "@/lib/site";
import { TrackedWhatsAppLink } from "./TrackedWhatsAppLink";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-12 sm:py-16">
      <div className="site-container">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_0.7fr_0.8fr]">
          <div>
            <Image
              src="/supreme-flix-logo.png"
              alt="Supreme Flix"
              width={500}
              height={208}
              className="h-[31px] w-auto sm:h-[36px]"
            />
            <p className="mt-6 max-w-[470px] text-[13px] font-medium leading-relaxed text-slate-400">
              Supreme Flix — entretenimento digital com praticidade para você assistir em seus
              dispositivos favoritos.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-extrabold text-white">Navegação</h3>
            <nav className="mt-4 flex flex-col gap-2.5 text-[13px] font-semibold text-slate-400">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="transition hover:text-white">
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="text-sm font-extrabold text-white">Contato</h3>
            <div className="mt-4 flex flex-col gap-2.5 text-[13px] font-semibold text-slate-400">
              <p>WhatsApp: (24) 98139-9104</p>
              <TrackedWhatsAppLink className="transition hover:text-white">
                Falar pelo WhatsApp
              </TrackedWhatsAppLink>
              <a href="#privacidade" className="transition hover:text-white">
                Política de Privacidade
              </a>
              <a href="#termos" className="transition hover:text-white">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>

        <p className="mt-12 text-[11px] font-medium leading-relaxed text-slate-500">
          A disponibilidade de conteúdos, qualidade de transmissão e funcionamento podem variar
          conforme dispositivo, conexão de internet e configurações do usuário.
        </p>

        <div className="mt-8 grid gap-4">
          {footerLegal.map((item, index) => (
            <section
              key={item.title}
              id={index === 0 ? "privacidade" : "termos"}
              className="glass-card rounded-2xl px-5 py-4"
            >
              <h3 className="text-[13px] font-extrabold text-white">{item.title}</h3>
              <p className="mt-2 text-[11px] font-medium leading-relaxed text-slate-400 sm:text-xs">
                {item.text}
              </p>
            </section>
          ))}
        </div>

        <div className="mt-9 flex flex-col gap-3 border-t border-white/[0.06] pt-7 text-[11px] font-semibold text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Supreme Flix. Todos os direitos reservados.</p>
          <p>Feito para você assistir com praticidade.</p>
        </div>
      </div>
    </footer>
  );
}
