import { useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface LightboxProps {
  images: string[];
  initialIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onChangeIndex: (index: number) => void;
}

export default function Lightbox({
  images,
  initialIndex,
  isOpen,
  onClose,
  onChangeIndex,
}: LightboxProps) {
  const current = images[initialIndex];

  const goNext = useCallback(() => {
    onChangeIndex((initialIndex + 1) % images.length);
  }, [initialIndex, images.length, onChangeIndex]);

  const goPrev = useCallback(() => {
    onChangeIndex((initialIndex - 1 + images.length) % images.length);
  }, [initialIndex, images.length, onChangeIndex]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose, goNext, goPrev]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-coffee/90 backdrop-blur-sm">
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 md:top-6 md:right-6 p-2 text-paper hover:text-rust transition-colors z-10"
        aria-label="Close"
      >
        <X size={28} />
      </button>

      {/* Prev */}
      {images.length > 1 && (
        <button
          onClick={goPrev}
          className="absolute left-2 md:left-6 p-2 text-paper hover:text-rust transition-colors z-10"
          aria-label="Previous"
        >
          <ChevronLeft size={32} />
        </button>
      )}

      {/* Image */}
      <div className="max-w-[90vw] max-h-[85vh] px-8">
        <img
          src={current}
          alt=""
          className="max-w-full max-h-[85vh] object-contain rounded-vintage"
        />
        <p className="text-center text-paper/60 text-xs mt-3 font-mono">
          {initialIndex + 1} / {images.length}
        </p>
      </div>

      {/* Next */}
      {images.length > 1 && (
        <button
          onClick={goNext}
          className="absolute right-2 md:right-6 p-2 text-paper hover:text-rust transition-colors z-10"
          aria-label="Next"
        >
          <ChevronRight size={32} />
        </button>
      )}
    </div>
  );
}
