interface PolaroidCardProps {
  image: string;
  title: string;
  tag: string;
  rotation?: number;
}

export default function PolaroidCard({
  image,
  title,
  tag,
  rotation = 0,
}: PolaroidCardProps) {
  return (
    <div
      className="bg-cream p-3 md:p-4 rounded-soft shadow-card hover:shadow-card-hover transition-all duration-400 cursor-pointer"
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <div className="aspect-square overflow-hidden rounded-soft bg-blush">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="mt-3 text-center">
        <p className="font-serif text-sm text-text-main font-semibold">{title}</p>
        <p className="text-[10px] font-mono text-text-light uppercase tracking-widest mt-1">
          {tag}
        </p>
      </div>
    </div>
  );
}
