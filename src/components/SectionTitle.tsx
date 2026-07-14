interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  gradient?: boolean;
}

export default function SectionTitle({ title, subtitle, centered = true, gradient = true }: SectionTitleProps) {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? "text-center" : ""}`}>
      <h2 className={`font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide ${gradient ? "gradient-text" : "text-text-main"}`}>
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-sm md:text-base text-text-secondary/70 font-light tracking-wider">
          {subtitle}
        </p>
      )}
      <div
        className={`mt-4 flex items-center gap-3 ${centered ? "justify-center" : ""}`}
      >
        <span className="block w-12 h-[1.5px] bg-gradient-to-r from-primary via-secondary to-accent" />
        <span className="block w-3 h-3 rotate-45 bg-gradient-to-br from-primary to-secondary" />
        <span className="block w-12 h-[1.5px] bg-gradient-to-l from-primary via-secondary to-accent" />
      </div>
    </div>
  );
}
