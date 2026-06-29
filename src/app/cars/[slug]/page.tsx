import type { Metadata } from "next"
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  MapPin,
  Calendar,
  Star,
  Fuel,
  Settings2,
  Users,
  Gauge,
  Activity,
  Navigation,
  Palette,
  Shield,
  FileCheck,
  ClipboardCheck,
  CheckCircle,
} from "lucide-react";
import { cars } from "@/data/cars";
import type { Car } from "@/types/car-types";
import { formatPrice, formatEMI, formatKm, getDiscount } from "@/lib/formatters";
import { CarImageGallery } from "@/components/cars/CarImageGallery";
import { CarCard } from "@/components/cars/car-card";
import { ShareButton } from "@/components/cars/share-button";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const badgeStyles = {
  "Top Pick": "bg-amber-50 text-amber-700 border-amber-200",
  "Assured": "bg-emerald-50 text-emerald-700 border-emerald-200",
  "Great Deal": "bg-sky-50 text-sky-700 border-sky-200",
};

export async function generateStaticParams() {
  return cars.map((car) => ({ slug: car.slug }));
}

export async function generateMetadata({
  params
}: PageProps): Promise<Metadata> {
  const { slug } = await params
  const car = cars.find((c) => c.slug === slug)

  if (!car) return {}

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  const absoluteUrl = (path: string) => {
    if (path.startsWith("http")) return path
    const normalizedSite = siteUrl.endsWith("/") ? siteUrl.slice(0, -1) : siteUrl
    const normalizedPath = path.startsWith("/") ? path : `/${path}`
    return `${normalizedSite}${normalizedPath}`
  }

  const title = `${car.brand} ${car.model} ${car.variant} ${car.year}`
  const description =
    `${car.year} ${car.brand} ${car.model} · ` +
    `${car.fuelType} · ${car.transmission} · ` +
    `${car.kmDriven.toLocaleString("en-IN")} km · ` +
    `₹${(car.discountedPrice / 100000).toFixed(2)} L`

  return {
    title: `${title} — SahiCar`,
    description,
    openGraph: {
      title,
      description,
      url: absoluteUrl(`/cars/${car.slug}`),
      siteName: "SahiCar",
      images: [
        {
          url: absoluteUrl(car.images[0]),
          width: 1200,
          height: 630,
          alt: `${car.brand} ${car.model} ${car.variant}`,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteUrl(car.images[0])],
    },
  }
}

export default async function CarDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const car = cars.find((c) => c.slug === slug);

  if (!car) {
    notFound();
  }

  const specs = [
    { icon: Fuel, label: "Fuel Type", value: car.fuelType },
    { icon: Settings2, label: "Transmission", value: car.transmission },
    { icon: Users, label: "Ownership", value: car.ownership },
    { icon: Calendar, label: "Year", value: String(car.year) },
    {
      icon: Gauge,
      label: "Mileage",
      value: car.fuelType === "Electric" ? "Electric" : `${car.mileage} kmpl`,
    },
    { icon: Activity, label: "Engine", value: car.engine },
    { icon: Navigation, label: "KM Driven", value: formatKm(car.kmDriven) },
    { icon: Palette, label: "Color", value: car.color },
  ];

  const similarCars = cars
    .filter((c) => c.brand === car.brand && c.slug !== car.slug)
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-[radial-gradient(ellipse_at_top,#e8edf5_0%,#f1f5f9_40%,#f8fafc_100%)]">

      <div className="max-w-7xl mx-auto px-6 mb-6 pt-8">
        <p className="text-xs font-medium text-zinc-400 uppercase tracking-widest mb-1">
          {car.bodyType} · {car.fuelType} · {car.year}
        </p>
        <h1 className="text-2xl font-semibold text-zinc-900 tracking-tight">
          {car.brand} {car.model}
        </h1>
        <p className="text-sm text-zinc-400 mt-1">{car.variant}</p>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

          <div className="lg:col-span-2 space-y-6">

            <CarImageGallery images={car.images} brand={car.brand} model={car.model} />

            <div className="bg-white/70 backdrop-blur-xl border border-white/80 rounded-3xl shadow-[0_4px_24px_-2px_rgba(0,0,0,0.08)] p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  {car.badge && (
                    <span
                      className={`inline-flex text-[11px] font-semibold px-2.5 py-1 rounded-full border mb-3 ${badgeStyles[car.badge]
                        }`}
                    >
                      {car.badge}
                    </span>
                  )}
                </div>


              </div>

              <div className="h-px bg-linear-to-r from-transparent via-zinc-200 to-transparent my-5" />

              <div className="flex flex-wrap gap-4 text-sm text-zinc-500">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-zinc-400" />
                  {car.location.city}, {car.location.state}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-zinc-400" />
                  Listed {car.postedDate}
                </span>
                <span className="flex items-center gap-1.5">
                  <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                  {car.rating} rating
                </span>
              </div>
            </div>

            <div className="bg-white/70 backdrop-blur-xl border border-white/80 rounded-3xl shadow-[0_4px_24px_-2px_rgba(0,0,0,0.08)] p-6">
              <h2 className="text-sm font-semibold text-zinc-900 mb-5">Specifications</h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {specs.map(({ icon: Icon, label, value }) => (
                  <div
                    key={label}
                    className="flex flex-col gap-2 p-3 rounded-2xl bg-zinc-50/80 border border-zinc-100"
                  >
                    <div className="w-8 h-8 rounded-xl bg-white border border-zinc-100 flex items-center justify-center shadow-sm">
                      <Icon className="w-4 h-4 text-zinc-500" />
                    </div>
                    <div>
                      <p className="text-[10px] text-zinc-400 uppercase tracking-wider">
                        {label}
                      </p>
                      <p className="text-sm font-semibold text-zinc-900 mt-0.5">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/70 backdrop-blur-xl border border-white/80 rounded-3xl shadow-[0_4px_24px_-2px_rgba(0,0,0,0.08)] p-6">
              <h2 className="text-sm font-semibold text-zinc-900 mb-4">Features & Highlights</h2>
              <div className="flex flex-wrap gap-2">
                {car.features.map((feature) => (
                  <span
                    key={feature}
                    className="flex items-center gap-1.5 text-sm text-zinc-600 bg-zinc-50 border border-zinc-100 px-3 py-1.5 rounded-full"
                  >
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    {feature}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white/70 backdrop-blur-xl border border-white/80 rounded-3xl shadow-[0_4px_24px_-2px_rgba(0,0,0,0.08)] p-6">
              <h2 className="text-sm font-semibold text-zinc-900 mb-3">About This Car</h2>
              <p className="text-sm text-zinc-500 leading-relaxed">{car.description}</p>
            </div>
          </div>


          <div className="lg:col-span-1">
            <div className="sticky top-6 space-y-4">
              <div className="bg-white/70 backdrop-blur-xl border border-white/80 rounded-3xl shadow-[0_4px_24px_-2px_rgba(0,0,0,0.08)] p-5">
                <div>
                  <div className="flex items-baseline gap-2 flex-wrap">
                    <span className="text-3xl font-bold text-zinc-900 tracking-tight">
                      {formatPrice(car.discountedPrice)}
                    </span>
                    <span className="text-sm text-zinc-400 line-through">
                      {formatPrice(car.originalPrice)}
                    </span>
                    <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
                      ↓ {getDiscount(car.originalPrice, car.discountedPrice)}% off
                    </span>
                  </div>
                  <p className="text-sm text-zinc-500 mt-1.5">
                    EMI from <span className="font-semibold text-zinc-900">{formatEMI(car.emi)}</span>
                    <span className="text-xs text-zinc-400 ml-1">(9.5% p.a., 60 months)</span>
                  </p>
                </div>

                <div className="h-px bg-linear-to-r from-transparent via-zinc-200 to-transparent my-4" />

                <div className="grid grid-cols-2 gap-3 text-sm">
                  {[
                    { label: "Year", value: String(car.year) },
                    { label: "KM Driven", value: formatKm(car.kmDriven) },
                    { label: "Fuel", value: car.fuelType },
                    { label: "Transmission", value: car.transmission },
                    { label: "Ownership", value: car.ownership },
                    { label: "Body Type", value: car.bodyType },
                  ].map(({ label, value }) => (
                    <div key={label}>
                      <p className="text-[10px] text-zinc-400 uppercase tracking-wider">{label}</p>
                      <p className="text-sm font-medium text-zinc-900 mt-0.5">{value}</p>
                    </div>
                  ))}
                </div>

                <div className="h-px bg-linear-to-r from-transparent via-zinc-200 to-transparent my-4" />

                <div className="space-y-2 text-xs text-zinc-500">
                  <div className="flex items-center gap-2">
                    <Shield className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                    Insurance valid till {car.insuranceValidTill}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                    {car.location.city}, {car.location.state}
                  </div>
                </div>

                <div className="h-px bg-linear-to-r from-transparent via-zinc-200 to-transparent my-4" />

                <div className="space-y-2">
                  <button className="w-full py-3 rounded-2xl text-sm font-semibold bg-zinc-900 text-white hover:bg-zinc-800 shadow-lg shadow-zinc-900/20 transition-all duration-200">
                    Book Test Drive
                  </button>
                  <button className="w-full py-3 rounded-2xl text-sm font-medium border border-zinc-200 text-zinc-700 hover:border-zinc-900 hover:text-zinc-900 hover:bg-zinc-50 transition-all duration-200">
                    Make an Offer
                  </button>
                  <ShareButton
                    carTitle={`${car.brand} ${car.model} ${car.variant}`}
                    carSlug={car.slug}
                    price={formatPrice(car.discountedPrice)}
                    year={car.year}
                    fuelType={car.fuelType}
                    variant="full"
                    className="w-full justify-center"
                  />
                </div>
              </div>

              <div className="bg-white/70 backdrop-blur-xl border border-white/80 rounded-3xl shadow-[0_4px_24px_-2px_rgba(0,0,0,0.08)] p-5">
                <h3 className="text-xs font-semibold text-zinc-900 mb-4 uppercase tracking-wider">
                  Verified Details
                </h3>

                <div className="space-y-3">
                  {[
                    {
                      show: car.serviceHistory,
                      icon: ClipboardCheck,
                      color: "text-emerald-500",
                      bg: "bg-emerald-50",
                      label: "Service History Available",
                      sub: "Complete maintenance records",
                    },
                    {
                      show: car.warrantyAvailable,
                      icon: Shield,
                      color: "text-blue-500",
                      bg: "bg-blue-50",
                      label: "Warranty Available",
                      sub: "Covered under warranty",
                    },
                    {
                      show: car.rcAvailable,
                      icon: FileCheck,
                      color: "text-violet-500",
                      bg: "bg-violet-50",
                      label: "RC Available",
                      sub: "Registration certificate present",
                    },
                  ]
                    .filter((item) => item.show)
                    .map(({ icon: Icon, color, bg, label, sub }) => (
                      <div key={label} className="flex items-start gap-3">
                        <div className={`w-8 h-8 rounded-xl ${bg} flex items-center justify-center shrink-0`}>
                          <Icon className={`w-4 h-4 ${color}`} />
                        </div>
                        <div>
                          <p className="text-xs font-medium text-zinc-900">{label}</p>
                          <p className="text-[11px] text-zinc-400 mt-0.5">{sub}</p>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {similarCars.length > 0 && (
          <section className="mt-12">
            <h2 className="text-lg font-semibold text-zinc-900 mb-6">Similar Cars</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {similarCars.map((c) => (
                <CarCard key={c.id} car={c} />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
