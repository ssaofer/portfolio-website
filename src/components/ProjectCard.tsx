import { useState } from "react";
import { Play } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  thumbnail: string;
  category?: string;
  onClick?: () => void;
  isVideo?: boolean;
}

export default function ProjectCard({
  title,
  description,
  thumbnail,
  category,
  onClick,
  isVideo = false,
}: ProjectCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="group cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
    >
      <div className="relative overflow-hidden rounded-soft bg-blush aspect-[4/3] mb-3">
        {isVideo && thumbnail.endsWith(".mp4") ? (
          <video
            src={thumbnail}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            muted
            preload="metadata"
          />
        ) : (
          <img
            src={thumbnail}
            alt={title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}

        <div
          className={`absolute inset-0 bg-gradient-to-t from-text-main/60 to-transparent flex items-end justify-center transition-all duration-300 ${
            hovered ? "opacity-100" : "opacity-0"
          }`}
        >
          {isVideo ? (
            <div className="w-12 h-12 rounded-full bg-cream/90 flex items-center justify-center mb-4">
              <Play size={20} className="text-primary ml-0.5" />
            </div>
          ) : (
            <span className="text-cream text-sm font-medium tracking-wider mb-4">
              查看详情
            </span>
          )}
        </div>
      </div>

      {category && (
        <span className="inline-block text-[10px] font-mono uppercase tracking-widest text-primary border border-primary/30 px-2 py-0.5 rounded-full mb-2">
          {category}
        </span>
      )}
      <h3 className="font-serif text-base md:text-lg font-semibold text-text-main mb-1 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-xs md:text-sm text-text-secondary/70 leading-relaxed line-clamp-2">
        {description}
      </p>
    </div>
  );
}
