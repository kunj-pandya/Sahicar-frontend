"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarImageGalleryProps {
  images: string[];
  brand: string;
  model: string;
}

export function CarImageGallery({ images, brand, model }: CarImageGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = "/images/car-placeholder.png";
  };

  return (
    <div className="space-y-3">

      <div className="relative w-full h-[420px] rounded-3xl overflow-hidden bg-linear-to-br from-zinc-100 to-zinc-50 border border-white/80 shadow-[0_4px_24px_-2px_rgba(0,0,0,0.08)]">
        <Image
          src={images[activeIndex] || "/images/car-placeholder.png"}
          alt={`${brand} ${model} — view ${activeIndex + 1}`}
          fill
          sizes="(max-width: 1023px) 100vw, (max-width: 1279px) 66vw, 820px"
          className="object-contain p-8 transition-opacity duration-300"
          priority={activeIndex === 0}
          onError={handleImageError}
        />

        <div className="absolute inset-0 bg-linear-to-t from-black/5 to-transparent pointer-events-none" />

        <div className="absolute bottom-4 right-4 bg-black/40 backdrop-blur-sm text-white text-xs font-medium px-2.5 py-1 rounded-full">
          {activeIndex + 1} / {images.length}
        </div>

        {images.length > 1 && (
          <>
            <button
              onClick={() => setActiveIndex((i) => Math.max(0, i - 1))}
              disabled={activeIndex === 0}
              aria-label="Previous image"
              className="absolute left-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm border border-white/60 shadow-md flex items-center justify-center text-zinc-600 hover:text-zinc-900 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => setActiveIndex((i) => Math.min(images.length - 1, i + 1))}
              disabled={activeIndex === images.length - 1}
              aria-label="Next image"
              className="absolute right-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm border border-white/60 shadow-md flex items-center justify-center text-zinc-600 hover:text-zinc-900 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className="flex gap-2 mt-3 overflow-x-auto pb-1 scrollbar-thin scrollbar-thumb-zinc-200">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              aria-label={`View image ${i + 1}`}
              className={`relative shrink-0 w-20 h-14 rounded-xl overflow-hidden border-2 transition-all duration-200 ${activeIndex === i
                ? "border-zinc-900 shadow-md"
                : "border-transparent opacity-60 hover:opacity-100"
                }`}
            >
              <Image
                src={img}
                alt={`${brand} ${model} thumbnail ${i + 1}`}
                fill
                sizes="80px"
                className="object-cover"
                onError={handleImageError}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
