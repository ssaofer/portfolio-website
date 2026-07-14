import SectionTitle from "../components/SectionTitle";
import TimelineItem from "../components/TimelineItem";
import { experiences } from "../data/experience";
import { profile } from "../data/about";
import { GraduationCap } from "lucide-react";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const eduRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = eduRef.current;
    if (!el) return;

    gsap.set(el, { opacity: 0, y: 40 });
    const tween = gsap.to(el, {
      opacity: 1,
      y: 0,
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
  }, []);

  return (
    <section id="experience" className="section-padding relative overflow-hidden">
      <div className="absolute top-20 right-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle title="Experience" subtitle="实习与校园经历" />

        <div ref={eduRef} className="mb-16 max-w-2xl mx-auto">
          <div className="glass-card p-6 md:p-8 rounded-soft">
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap size={20} className="text-secondary" />
              <span className="text-sm font-mono text-text-light tracking-wider">
                {profile.education.period}
              </span>
            </div>
            <h3 className="font-serif text-xl md:text-2xl font-semibold text-text-main mb-1">
              {profile.education.school}
            </h3>
            <p className="text-primary font-medium mb-4">{profile.education.major}</p>
            <div className="flex flex-wrap gap-2">
              {profile.education.courses.map((course) => (
                <span
                  key={course}
                  className="text-xs bg-blush/50 text-text-secondary px-3 py-1 rounded-full border border-primary/20"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-primary/20 -translate-x-1/2" />

          {experiences.map((exp, index) => (
            <TimelineItem
              key={exp.id}
              date={exp.date}
              title={exp.title}
              subtitle={exp.subtitle}
              description={exp.description}
              align={index % 2 === 0 ? "left" : "right"}
              type={exp.type}
              bulletPoints={exp.bulletPoints}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
