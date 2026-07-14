import { useEffect, useRef } from "react";
import gsap from "gsap";
import TypewriterText from "../components/TypewriterText";
import SkillBar from "../components/SkillBar";
import { profile, skills } from "../data/about";
import { MapPin, Calendar, Briefcase } from "lucide-react";

export default function HeroAbout() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const children = el.querySelectorAll(".reveal-item");
    gsap.set(children, { opacity: 0, y: 30 });
    gsap.to(children, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.12,
      ease: "power2.out",
      delay: 0.3,
    });
  }, []);

  return (
    <section
      id="about"
      className="min-h-screen flex items-center section-padding pt-24 md:pt-32 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-primary/15 via-secondary/10 to-accent/10 rounded-full blur-3xl animate-pulse-soft" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-lavender/20 to-blush/15 rounded-full blur-3xl" />

      <div ref={containerRef} className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="reveal-item flex justify-center md:justify-start relative">
            <div className="relative">
              <div className="w-64 h-80 md:w-80 md:h-[26rem] overflow-hidden rounded-soft shadow-soft-pink hover:shadow-glow-pink transition-all duration-500 hover:-translate-y-2">
                <img
                  src={profile.avatar}
                  alt={profile.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = profile.avatarAlt;
                  }}
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-primary/30 rounded-soft -z-10 animate-float" />
              <div className="absolute -top-4 -left-4 w-16 h-16 border-2 border-secondary/30 rounded-soft -z-10" />
              <div className="absolute -top-2 -right-2 w-12 h-12 bg-primary/20 rounded-full blur-xl" />
            </div>
          </div>

          <div>
            <div className="reveal-item mb-4">
              <span className="inline-block text-xs font-mono text-secondary uppercase tracking-widest border border-secondary/30 px-4 py-2 rounded-full bg-gradient-to-r from-blush/40 to-lavender/30">
                Portfolio 2026
              </span>
            </div>

            <h1 className="reveal-item font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="text-3d-bulge">{profile.name}</span>
            </h1>

            <p className="reveal-item font-serif text-lg md:text-xl text-text-secondary mb-6 min-h-[1.75rem]">
              <TypewriterText
                text={profile.slogan}
                speed={80}
                delay={800}
                autoStart
              />
            </p>

            <p className="reveal-item text-sm md:text-base text-text-secondary/80 leading-relaxed mb-8 max-w-lg">
              {profile.bio}
            </p>

            <div className="reveal-item grid grid-cols-1 sm:grid-cols-3 gap-3 mb-10">
              <div className="glass-card p-4 rounded-soft text-center hover:shadow-glow-pink transition-all duration-300 hover:-translate-y-1">
                <Briefcase size={16} className="mx-auto text-primary mb-2" />
                <p className="text-[10px] font-mono text-text-light uppercase tracking-wider mb-1">
                  求职意向
                </p>
                <p className="text-xs font-medium text-text-main leading-tight">
                  {profile.jobTarget.position}
                </p>
              </div>
              <div className="glass-card p-4 rounded-soft text-center hover:shadow-glow-blue transition-all duration-300 hover:-translate-y-1">
                <Calendar size={16} className="mx-auto text-accent mb-2" />
                <p className="text-[10px] font-mono text-text-light uppercase tracking-wider mb-1">
                  到岗时间
                </p>
                <p className="text-xs font-medium text-text-main">
                  {profile.jobTarget.availability}
                </p>
              </div>
              <div className="glass-card p-4 rounded-soft text-center hover:shadow-glow-purple transition-all duration-300 hover:-translate-y-1">
                <MapPin size={16} className="mx-auto text-secondary mb-2" />
                <p className="text-[10px] font-mono text-text-light uppercase tracking-wider mb-1">
                  期望地点
                </p>
                <p className="text-xs font-medium text-text-main">
                  {profile.jobTarget.location}
                </p>
              </div>
            </div>

            <div className="reveal-item">
              <h3 className="font-serif text-lg font-semibold text-text-main mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full" />
                核心技能
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8">
                {skills.map((skill) => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
