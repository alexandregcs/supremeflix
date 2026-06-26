type SectionHeadingProps = {
  title: React.ReactNode;
  subtitle: string;
  className?: string;
};

export function SectionHeading({ title, subtitle, className = "" }: SectionHeadingProps) {
  return (
    <div className={`mx-auto mb-10 max-w-3xl text-center sm:mb-12 ${className}`}>
      <h2 className="section-title">{title}</h2>
      <p className="section-kicker mt-3">{subtitle}</p>
    </div>
  );
}
