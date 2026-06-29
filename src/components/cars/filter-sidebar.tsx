"use client"

import { X } from "lucide-react"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { useCarStore } from "@/store/use-car-store"
import { formatPrice, formatKm } from "@/lib/formatters"
import { getActiveFilterCount, FILTER_OPTIONS } from "@/lib/car-utils"
import { ScrollArea } from "@/components/ui/scroll-area"

function FilterSection({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="py-3 sm:py-4 border-b border-zinc-100/80 last:border-0">
      <h3 className="text-[10px] sm:text-[11px] font-semibold text-zinc-400 uppercase tracking-widest mb-2 sm:mb-3">
        {title}
      </h3>
      {children}
    </div>
  )
}

export function FilterSidebarSkeleton({ className = "" }: { className?: string }) {
  return (
    <aside className={`w-72 shrink-0 bg-white/70 backdrop-blur-xl border border-white/80 rounded-3xl shadow-[0_4px_24px_-2px_rgba(0,0,0,0.08),0_0_0_1px_rgba(0,0,0,0.04)] p-5 sticky top-6 self-start max-h-[calc(100vh-3rem)] overflow-y-auto ${className}`}>
      <div className="flex items-center justify-between mb-5">
        <div className="h-5 w-16 bg-zinc-200 rounded-lg animate-pulse" />
      </div>
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="py-4 border-b border-zinc-100 last:border-0">
          <div className="h-3 w-24 bg-zinc-200 rounded-md animate-pulse mb-4" />
          <div className="space-y-3">
            <div className="h-4 w-full bg-zinc-100 rounded-md animate-pulse" />
            <div className="h-4 w-3/4 bg-zinc-100 rounded-md animate-pulse" />
          </div>
        </div>
      ))}
    </aside>
  )
}

export function FilterContent() {
  const {
    filters,
    toggleBrand,
    toggleFuelType,
    toggleTransmission,
    toggleBodyType,
    toggleOwnership,
    setPriceRange,
    setYearRange,
    setKmRange,
  } = useCarStore()

  const getFuelColor = (fuel: string) => {
    switch (fuel) {
      case "Petrol":   return "bg-orange-400"
      case "Diesel":   return "bg-blue-400"
      case "CNG":      return "bg-green-400"
      case "Electric": return "bg-violet-400"
      default:         return ""
    }
  }

  return (
    <>
      <FilterSection title="Price Range">
        <div className="flex justify-between mb-2">
          <span className="text-xs font-medium text-zinc-900">
            {formatPrice(filters.priceRange[0])}
          </span>
          <span className="text-xs font-medium text-zinc-900">
            {formatPrice(filters.priceRange[1])}
          </span>
        </div>
        <Slider
          min={100000}
          max={5000000}
          step={50000}
          value={[...filters.priceRange]}
          onValueChange={(v) => setPriceRange([v[0], v[1]])}
        />
      </FilterSection>

      <FilterSection title="Brand">
        <ScrollArea className="h-36 sm:h-44 pr-3">
          {FILTER_OPTIONS.brands.map((brand) => (
            <div key={brand} className="flex items-center gap-2.5 py-1 sm:py-1.5">
              <Checkbox
                id={`brand-${brand}`}
                checked={filters.brands.includes(brand)}
                onCheckedChange={() => toggleBrand(brand)}
                className="rounded-md border-zinc-300 data-[state=checked]:bg-zinc-900 data-[state=checked]:border-zinc-900"
              />
              <Label
                htmlFor={`brand-${brand}`}
                className="text-xs sm:text-sm text-zinc-600 cursor-pointer hover:text-zinc-900 transition-colors leading-none"
              >
                {brand}
              </Label>
            </div>
          ))}
        </ScrollArea>
      </FilterSection>

      <FilterSection title="Fuel Type">
        {FILTER_OPTIONS.fuelTypes.map((fuel) => (
          <div key={fuel} className="flex items-center gap-2.5 py-1 sm:py-1.5">
            <Checkbox
              id={`fuel-${fuel}`}
              checked={filters.fuelTypes.includes(fuel)}
              onCheckedChange={() => toggleFuelType(fuel)}
              className="rounded-md border-zinc-300 data-[state=checked]:bg-zinc-900 data-[state=checked]:border-zinc-900"
            />
            <span className={`w-2 h-2 rounded-full shrink-0 ${getFuelColor(fuel)}`} />
            <Label
              htmlFor={`fuel-${fuel}`}
              className="text-xs sm:text-sm text-zinc-600 cursor-pointer hover:text-zinc-900 transition-colors leading-none"
            >
              {fuel}
            </Label>
          </div>
        ))}
      </FilterSection>

      <FilterSection title="Transmission">
        {FILTER_OPTIONS.transmissions.map((trans) => (
          <div key={trans} className="flex items-center gap-2.5 py-1 sm:py-1.5">
            <Checkbox
              id={`transmission-${trans}`}
              checked={filters.transmissions.includes(trans)}
              onCheckedChange={() => toggleTransmission(trans)}
              className="rounded-md border-zinc-300 data-[state=checked]:bg-zinc-900 data-[state=checked]:border-zinc-900"
            />
            <Label
              htmlFor={`transmission-${trans}`}
              className="text-xs sm:text-sm text-zinc-600 cursor-pointer hover:text-zinc-900 transition-colors leading-none"
            >
              {trans}
            </Label>
          </div>
        ))}
      </FilterSection>

      <FilterSection title="Body Type">
        {FILTER_OPTIONS.bodyTypes.map((body) => (
          <div key={body} className="flex items-center gap-2.5 py-1 sm:py-1.5">
            <Checkbox
              id={`body-${body}`}
              checked={filters.bodyTypes.includes(body)}
              onCheckedChange={() => toggleBodyType(body)}
              className="rounded-md border-zinc-300 data-[state=checked]:bg-zinc-900 data-[state=checked]:border-zinc-900"
            />
            <Label
              htmlFor={`body-${body}`}
              className="text-xs sm:text-sm text-zinc-600 cursor-pointer hover:text-zinc-900 transition-colors leading-none"
            >
              {body}
            </Label>
          </div>
        ))}
      </FilterSection>

      <FilterSection title="Ownership">
        {FILTER_OPTIONS.ownerships.map((owner) => (
          <div key={owner} className="flex items-center gap-2.5 py-1 sm:py-1.5">
            <Checkbox
              id={`owner-${owner}`}
              checked={filters.ownerships.includes(owner)}
              onCheckedChange={() => toggleOwnership(owner)}
              className="rounded-md border-zinc-300 data-[state=checked]:bg-zinc-900 data-[state=checked]:border-zinc-900"
            />
            <Label
              htmlFor={`owner-${owner}`}
              className="text-xs sm:text-sm text-zinc-600 cursor-pointer hover:text-zinc-900 transition-colors leading-none"
            >
              {owner}
            </Label>
          </div>
        ))}
      </FilterSection>

      <FilterSection title="Registration Year">
        <div className="flex justify-between mb-2">
          <span className="text-xs font-medium text-zinc-900 font-mono">
            {filters.yearRange[0]}
          </span>
          <span className="text-xs font-medium text-zinc-900 font-mono">
            {filters.yearRange[1]}
          </span>
        </div>
        <Slider
          min={2016}
          max={2025}
          step={1}
          value={[...filters.yearRange]}
          onValueChange={(v) => setYearRange([v[0], v[1]])}
        />
      </FilterSection>

      <FilterSection title="Kilometers Driven">
        <div className="flex justify-between mb-2">
          <span className="text-xs font-medium text-zinc-900 font-mono">
            {formatKm(filters.kmRange[0])}
          </span>
          <span className="text-xs font-medium text-zinc-900 font-mono">
            {formatKm(filters.kmRange[1])}
          </span>
        </div>
        <Slider
          min={0}
          max={150000}
          step={5000}
          value={[...filters.kmRange]}
          onValueChange={(v) => setKmRange([v[0], v[1]])}
        />
      </FilterSection>
    </>
  )
}

export function FilterSidebar() {
  const { filters, resetFilters } = useCarStore()
  const activeCount = getActiveFilterCount(filters)

  return (
    <aside className="hidden lg:block w-72 shrink-0 sticky top-6 self-start">
      <ScrollArea className="h-[calc(100vh-4rem)] w-full bg-white/70 backdrop-blur-xl border border-white/80 rounded-3xl shadow-[0_4px_24px_-2px_rgba(0,0,0,0.08),0_0_0_1px_rgba(0,0,0,0.04)]">
        <div className="p-5">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-sm font-semibold text-zinc-900">Filters</h2>
            {activeCount > 0 && (
              <button
                onClick={resetFilters}
                className="flex items-center gap-1 text-xs text-zinc-500 hover:text-zinc-900 transition-colors duration-200"
              >
                <X className="w-3 h-3" />
                Reset ({activeCount})
              </button>
            )}
          </div>

          <FilterContent />
        </div>
      </ScrollArea>
    </aside>
  )
}
