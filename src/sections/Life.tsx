import { useMemo } from "react";
import SectionTitle from "../components/SectionTitle";
import PolaroidCard from "../components/PolaroidCard";
import { lifeItems } from "../data/life";
import { useScrollReveal } from "../hooks/useScrollReveal";

const tagColors = {
  Photography: "bg-accent/20 text-accent border-accent/30",
  Travel: "bg-primary/20 text-primary border-primary/30",
  "Night View": "bg-secondary/20 text-secondary border-secondary/30",
  Baking: "bg-amber/20 text-primary border-primary/30",
  Food: "bg-lavender/20 text-secondary border-secondary/30",
};

export default function Life() {
  const gridRef = useScrollReveal<HTMLDivElement>({ stagger: 0.12 });

  const rotations = useMemo(() => {
    return lifeItems.map((_, index) =>
      index % 2 === 0 ? -2 + Math.random() * 1 : 1 + Math.random() * 2
    );
  }, []);

  return (
    <section id="life" className="section-padding relative overflow-hidden">
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/15 rounded-full blur-3xl animate-pulse-soft" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-secondary/15 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle title="Life" subtitle="兴趣与生活" />

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {lifeItems.map((item) => (
            <span
              key={item.tag}
              className={`text-xs font-mono px-4 py-1.5 rounded-full border ${tagColors[item.tag as keyof typeof tagColors] || "bg-blush/50 text-text-secondary border-text-light/30"}`}
            >
              {item.tag}
            </span>
          ))}
        </div>

        <div
          ref={gridRef}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 max-w-6xl mx-auto"
        >
          {lifeItems.map((item, index) => (
            <div key={item.id} className="flex justify-center">
              <PolaroidCard
                image={item.image}
                title={item.title}
                tag={item.tag}
                rotation={rotations[index]}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
