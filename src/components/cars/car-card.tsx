"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  MapPin,
  CheckCircle,
  Shield,
  FileCheck,
  ArrowRight,
} from "lucide-react";
import {
  formatPrice,
  formatEMI,
  formatKm,
  getDiscount,
} from "@/lib/formatters";
import type { Car } from "@/types/car-types";

import { ShareButton } from "@/components/cars/share-button";

interface CarCardProps {
  car: Car;
}

const badgeStyles = {
  "Top Pick": "bg-amber-50/80 text-amber-700 border-amber-200/60",
  "Assured": "bg-emerald-50/80 text-emerald-700 border-emerald-200/60",
  "Great Deal": "bg-sky-50/80 text-sky-700 border-sky-200/60",
};

export function CarCard({ car }: CarCardProps) {
  const router = useRouter();
  const [imgSrc, setImgSrc] = useState<string>(car.images[0] || "/images/car-placeholder.png");

  const handleImageError = () => {
    setImgSrc("/images/car-placeholder.png");
  };

  return (
    <article
      className="group relative flex flex-col bg-white/70 backdrop-blur-xl border border-white/80 rounded-3xl overflow-hidden transition-all duration-300 ease-out cursor-pointer shadow-lg"
      onClick={() => router.push(`/cars/${car.slug}`)}
      aria-label={`${car.brand} ${car.model}, ${formatPrice(car.discountedPrice)}`}
    >
      <div
        className="relative h-52 overflow-hidden"

      >
        <div className="absolute" />

        <Image
          src={imgSrc}
          alt={`${car.brand} ${car.model} ${car.variant}`}
          fill
          sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, (max-width: 1279px) 33vw, 290px"
          className="object-contain p-6 transition-transform duration-500 ease-out group-hover:scale-[1.04]"
          onError={handleImageError}
          priority={car.featured}
        />

        {car.badge && (
          <span
            className={`absolute top-3 left-3 z-10 text-[10px] font-semibold px-2.5 py-1 rounded-full backdrop-blur-md border shadow-sm ${badgeStyles[car.badge]}`}
          >
            {car.badge}
          </span>
        )}

      </div>

      <div className="px-4 pt-3 pb-0 flex-1 flex flex-col">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <h3 className="text-[15px] font-semibold text-zinc-900 leading-snug tracking-[-0.01em] truncate">
              {car.brand} {car.model}
            </h3>
            <p className="text-[12px] text-zinc-400 mt-0.5 truncate">
              {car.variant}
            </p>
          </div>
          <span className="shrink-0 text-[11px] font-medium text-zinc-500 bg-zinc-100/80 backdrop-blur-sm border border-zinc-200/60 px-2 py-0.5 rounded-full mt-0.5">
            {car.year}
          </span>
        </div>

        <p className="flex items-center gap-1 text-[11px] text-zinc-400 mt-2">
          <MapPin className="w-3 h-3 text-zinc-300 shrink-0" />
          {car.location.city}, {car.location.state}
        </p>

        <div className="flex flex-wrap gap-1.5 mt-3">
          {[car.fuelType, car.transmission, formatKm(car.kmDriven)].map((spec) => (
            <span
              key={spec}
              className="text-[11px] text-zinc-500 bg-zinc-50/80 backdrop-blur-sm border border-zinc-100 px-2.5 py-1 rounded-full shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]"
            >
              {spec}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-auto px-4 pt-3 pb-4">
        <div className="h-px from-transparent via-zinc-200/80 to-transparent mb-3" />

        <div className="flex items-center justify-between gap-3">
          <div>
            <div className="flex items-baseline gap-1.5 flex-wrap">
              <span className="text-[18px] font-bold text-zinc-900 tracking-tight">
                {formatPrice(car.discountedPrice)}
              </span>
              {car.originalPrice > car.discountedPrice && (
                <span className="text-xs text-zinc-400 line-through">
                  {formatPrice(car.originalPrice)}
                </span>
              )}
            </div>
            <div className="flex items-center gap-2 mt-0.5">
              {car.originalPrice > car.discountedPrice && (
                <span className="text-[11px] font-semibold text-emerald-600">
                  ↓ {getDiscount(car.originalPrice, car.discountedPrice)}% off
                </span>
              )}
              <span className="text-[11px] text-zinc-400">
                EMI {formatEMI(car.emi)}
              </span>
            </div>
          </div>

        </div>

        <div className="flex items-center gap-2 mt-3">
          <button
            className="flex-1 py-2.5 rounded-2xl text-[13px] font-medium bg-zinc-50/80 backdrop-blur-sm border border-zinc-200/80 text-zinc-500 flex items-center justify-center gap-1.5 group-hover:bg-zinc-900 group-hover:border-zinc-900 group-hover:text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] group-hover:shadow-lg group-hover:shadow-zinc-900/20 transition-all duration-300 ease-out pointer-events-none select-none"
            tabIndex={-1}
            aria-hidden="true"
          >
            View Details
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
          </button>

          <ShareButton
            carTitle={`${car.brand} ${car.model}`}
            carSlug={car.slug}
            price={formatPrice(car.discountedPrice)}
            year={car.year}
            fuelType={car.fuelType}
            variant="icon"
          />

        </div>

        <div className="flex items-center gap-3 mt-3 pt-3 border-t border-zinc-100/80">
          {car.serviceHistory && (
            <span className="flex items-center gap-1 text-[10px] text-zinc-400">
              <CheckCircle className="w-3 h-3 text-emerald-400 shrink-0" />
              Service History
            </span>
          )}
          {car.warrantyAvailable && (
            <span className="flex items-center gap-1 text-[10px] text-zinc-400">
              <Shield className="w-3 h-3 text-blue-400 shrink-0" />
              Warranty
            </span>
          )}
          {car.rcAvailable && (
            <span className="flex items-center gap-1 text-[10px] text-zinc-400">
              <FileCheck className="w-3 h-3 text-zinc-300 shrink-0" />
              RC Available
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
