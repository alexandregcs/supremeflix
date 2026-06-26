import { devices } from "@/lib/site";
import { WhatsAppButton } from "./WhatsAppButton";

export function Devices() {
  return (
    <section className="section-spacing">
      <div className="site-container">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#121736] px-5 py-10 text-center shadow-supreme-card sm:px-10 sm:py-14 lg:px-12">
          <div
            className="absolute inset-0 -z-0"
            aria-hidden="true"
            style={{
              background:
                "radial-gradient(72% 92% at 88% 5%, rgba(237, 76, 154, 0.25), transparent 58%), radial-gradient(75% 88% at 92% 92%, rgba(24, 165, 255, 0.28), transparent 58%), linear-gradient(135deg, rgba(35, 27, 80, 0.98), rgba(7, 31, 56, 0.98))",
            }}
          />
          <div className="relative z-10">
            <h2 className="text-[27px] font-extrabold leading-tight text-white sm:text-4xl">
              Assista onde preferir
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-[13px] font-semibold leading-relaxed text-slate-300 sm:text-sm">
              Instalação simples, orientação para começar e compatibilidade com seus dispositivos
              favoritos.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
              {devices.map(({ label, Icon }) => (
                <article
                  key={label}
                  className="rounded-2xl border border-white/10 bg-white/[0.055] px-4 py-5"
                >
                  <Icon className="mx-auto h-6 w-6 text-slate-300" aria-hidden="true" />
                  <h3 className="mt-3 text-xs font-extrabold text-white">{label}</h3>
                </article>
              ))}
            </div>

            <WhatsAppButton className="mt-9 px-7">Solicitar teste pelo WhatsApp</WhatsAppButton>
          </div>
        </div>
      </div>
    </section>
  );
}
