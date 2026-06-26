import { features } from "@/lib/site";
import { SectionHeading } from "./SectionHeading";

export function Features() {
  return (
    <section id="recursos" className="section-spacing">
      <div className="site-container">
        <SectionHeading
          title={
            <>
              O que você encontra na <span className="text-gradient">Supreme Flix</span>
            </>
          }
          subtitle="Uma experiência completa para assistir seus conteúdos favoritos com praticidade."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map(({ title, description, Icon }) => (
            <article key={title} className="glass-card rounded-2xl p-6 sm:p-7">
              <span className="icon-bubble">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-7 text-base font-extrabold text-white">{title}</h3>
              <p className="mt-3 text-[13px] font-medium leading-relaxed text-slate-400">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
