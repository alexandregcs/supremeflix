import { Star } from "lucide-react";
import { testimonials } from "@/lib/site";
import { SectionHeading } from "./SectionHeading";

export function Testimonials() {
  return (
    <section className="section-spacing">
      <div className="site-container">
        <SectionHeading
          title={
            <>
              O que dizem nossos <span className="text-gradient">usuários</span>
            </>
          }
          subtitle="Depoimentos de quem já usa a Supreme Flix no dia a dia."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((testimonial) => (
            <article key={testimonial.name} className="glass-card rounded-2xl p-5">
              <div className="flex items-center gap-0.5 text-yellow-400">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" aria-hidden="true" />
                ))}
              </div>
              <p className="mt-4 min-h-[58px] text-[13px] font-semibold leading-relaxed text-slate-300">
                “{testimonial.quote}”
              </p>
              <div className="mt-5 flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-supreme-gradient text-[11px] font-black text-white">
                  {testimonial.initials}
                </span>
                <span className="text-sm font-extrabold text-white">{testimonial.name}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
