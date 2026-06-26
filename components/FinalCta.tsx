import { WhatsAppButton } from "./WhatsAppButton";

export function FinalCta() {
  return (
    <section className="pb-24 pt-20 sm:pb-28 sm:pt-20">
      <div className="site-container">
        <div className="overflow-hidden rounded-3xl bg-supreme-gradient px-6 py-12 text-center shadow-[0_32px_80px_rgba(139,92,246,0.28)] sm:px-10 sm:py-16">
          <h2 className="mx-auto max-w-3xl text-[31px] font-black leading-tight text-white sm:text-5xl">
            Quer testar a Supreme Flix agora?
          </h2>
          <p className="mx-auto mt-4 max-w-[560px] text-[13px] font-bold leading-relaxed text-white/78 sm:text-sm">
            Fale com nosso atendimento pelo WhatsApp e receba as orientações para começar.
          </p>
          <WhatsAppButton variant="light" className="mt-8 px-8">
            Solicitar teste
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
}
