import { Check } from "lucide-react";
import { planFeatures, plans } from "@/lib/site";
import { SectionHeading } from "./SectionHeading";
import { WhatsAppButton } from "./WhatsAppButton";

export function Pricing() {
  return (
    <section id="planos" className="section-spacing">
      <div className="site-container">
        <SectionHeading
          title={
            <>
              Escolha o <span className="text-gradient">plano ideal para você</span>
            </>
          }
          subtitle="Planos simples, sem fidelidade e com suporte para começar."
        />

        <div className="grid gap-5 lg:grid-cols-4">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`relative flex min-h-[454px] flex-col rounded-2xl p-6 ${
                plan.highlighted
                  ? "border border-supreme-pink/80 bg-[linear-gradient(180deg,rgba(26,22,48,0.98),rgba(13,17,32,0.98))] shadow-supreme-glow"
                  : "glass-card"
              }`}
            >
              {plan.badge ? (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-supreme-gradient px-4 py-1 text-[10px] font-black text-white shadow-supreme-button">
                  {plan.badge}
                </span>
              ) : null}

              <h3 className="text-base font-extrabold text-white">{plan.name}</h3>
              <div className="mt-5 flex items-end gap-1.5">
                <span className="mb-2 text-xl font-black text-white">R$</span>
                <span className="text-[43px] font-black leading-none tracking-normal text-white">
                  {plan.price}
                </span>
                <span className="mb-2 text-xs font-bold text-slate-400">{plan.period}</span>
              </div>

              <ul className="mt-7 space-y-3.5">
                {planFeatures.map((feature) => (
                  <li key={feature} className="flex gap-2.5 text-[12px] font-semibold leading-snug text-slate-300">
                    <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-400" aria-hidden="true" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <WhatsAppButton
                className={`mt-auto w-full px-4 py-3 text-xs ${
                  plan.highlighted ? "" : "bg-none shadow-none"
                }`}
              >
                Solicitar teste
              </WhatsAppButton>
            </article>
          ))}
        </div>

        <p className="mx-auto mt-7 max-w-2xl text-center text-[11px] font-medium leading-relaxed text-slate-500">
          A qualidade da experiência pode variar conforme conexão, conteúdo e aparelho utilizado.
        </p>
      </div>
    </section>
  );
}
