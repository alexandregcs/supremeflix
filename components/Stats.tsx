import { stats } from "@/lib/site";

export function Stats() {
  return (
    <section aria-label="Prova rápida" className="relative z-10 -mt-6 pb-20 sm:-mt-10 sm:pb-24 lg:pb-28">
      <div className="site-container">
        <div className="grid grid-cols-2 gap-3.5 lg:grid-cols-4 lg:gap-5">
          {stats.map(({ label, description, Icon }) => (
            <article key={label} className="glass-card rounded-2xl p-4 sm:p-5 lg:min-h-[154px]">
              <span className="icon-bubble h-9 w-9 rounded-xl">
                <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-[13px] font-extrabold leading-snug text-white sm:text-sm">
                {label}
              </h3>
              <p className="mt-1.5 text-[11px] font-medium leading-relaxed text-slate-400 sm:text-xs">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
