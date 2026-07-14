import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Briefcase, GraduationCap } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface TimelineItemProps {
  date: string;
  title: string;
  subtitle: string;
  description: string;
  align: "left" | "right";
  type: "work" | "campus";
  bulletPoints?: string[];
}

export default function TimelineItem({
  date,
  title,
  subtitle,
  description,
  align,
  type,
  bulletPoints,
}: TimelineItemProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const xOffset = align === "left" ? -50 : 50;
    gsap.set(el, { opacity: 0, x: xOffset });

    const tween = gsap.to(el, {
      opacity: 1,
      x: 0,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });

    return () => {
      tween.kill();
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === el) t.kill();
      });
    };
  }, [align]);

  const isLeft = align === "left";

  return (
    <div
      ref={ref}
      className={`relative flex items-start md:items-center mb-12 md:mb-16 ${
        isLeft ? "md:flex-row" : "md:flex-row-reverse"
      } flex-col`}
    >
      <div className="w-full md:w-[calc(50%-2rem)]">
        <div className="glass-card p-5 md:p-6 rounded-soft">
          <div className="flex items-center gap-2 mb-3">
            {type === "work" ? (
              <Briefcase size={16} className="text-primary" />
            ) : (
              <GraduationCap size={16} className="text-secondary" />
            )}
            <span className="text-xs font-mono text-text-light tracking-wider">
              {date}
            </span>
          </div>
          <h3 className="font-serif text-lg md:text-xl font-semibold text-text-main mb-1">
            {title}
          </h3>
          <p className="text-sm text-primary font-medium mb-3">{subtitle}</p>
          {description && (
            <p className="text-sm text-text-secondary/80 leading-relaxed">{description}</p>
          )}
          {bulletPoints && bulletPoints.length > 0 && (
            <ul className="space-y-2 mt-2">
              {bulletPoints.map((point, i) => (
                <li key={i} className="text-sm text-text-secondary/80 leading-relaxed flex gap-2">
                  <span className="text-primary mt-1.5 flex-shrink-0">◆</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center">
        <div className="w-4 h-4 bg-primary border-2 border-cream rounded-full z-10 shadow-soft-pink" />
      </div>

      <div className="hidden md:block w-[calc(50%-2rem)]" />
    </div>
  );
}
