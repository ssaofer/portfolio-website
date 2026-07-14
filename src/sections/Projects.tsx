import { useState, useRef, useEffect } from "react";
import SectionTitle from "../components/SectionTitle";
import ProjectCard from "../components/ProjectCard";
import Lightbox from "../components/Lightbox";
import {
  videoProjects,
  designProjects,
  designCategories,
} from "../data/projects";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("全部");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const filteredDesigns =
    activeCategory === "全部"
      ? designProjects
      : designProjects.filter((d) => d.category === activeCategory);

  const allDesignImages = filteredDesigns.map((d) => d.thumbnail);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const items = el.querySelectorAll(".project-reveal");
    gsap.set(items, { opacity: 0, y: 40 });

    const tween = gsap.to(items, {
      opacity: 1,
      y: 0,
      duration: 0.7,
      stagger: 0.08,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    return () => {
      tween.kill();
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === el) t.kill();
      });
    };
  }, [activeCategory]);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      <div className="absolute top-40 right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse-soft" />
      <div className="absolute bottom-40 left-20 w-72 h-72 bg-secondary/10 rounded-full blur-3xl" />

      <div ref={sectionRef} className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle title="Projects" subtitle="作品集" />

        <div className="mb-16 md:mb-20">
          <h3 className="project-reveal font-serif text-xl md:text-2xl font-semibold text-text-main mb-6 md:mb-8 flex items-center gap-3">
            <span className="w-6 h-[1.5px] bg-gradient-to-r from-primary to-accent" />
            视频影像
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {videoProjects.map((video) => (
              <div key={video.id} className="project-reveal">
                <ProjectCard
                  title={video.title}
                  description={video.description}
                  thumbnail={video.cover}
                  isVideo
                  onClick={() => setPlayingVideo(video.src)}
                />
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="project-reveal font-serif text-xl md:text-2xl font-semibold text-text-main mb-6 md:mb-8 flex items-center gap-3">
            <span className="w-6 h-[1.5px] bg-gradient-to-r from-accent to-secondary" />
            平面设计
          </h3>

          <div className="project-reveal flex flex-wrap gap-2 mb-8">
            {designCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs font-mono tracking-wider rounded-full border transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-gradient-to-r from-primary to-secondary text-cream border-transparent shadow-glow-pink"
                    : "bg-transparent text-text-secondary border-text-light/30 hover:border-primary hover:text-primary hover:shadow-glow-pink"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {filteredDesigns.map((design, index) => (
              <div key={design.id} className="project-reveal">
                <ProjectCard
                  title={design.title}
                  description={design.description}
                  thumbnail={design.thumbnail}
                  category={design.category}
                  onClick={() => openLightbox(index)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {playingVideo && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-text-main/90 backdrop-blur-sm"
          onClick={() => setPlayingVideo(null)}
        >
          <div className="relative w-full max-w-4xl mx-4">
            <video
              src={playingVideo}
              controls
              autoPlay
              className="w-full rounded-soft"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

      <Lightbox
        images={allDesignImages}
        initialIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onChangeIndex={setLightboxIndex}
      />
    </section>
  );
}
