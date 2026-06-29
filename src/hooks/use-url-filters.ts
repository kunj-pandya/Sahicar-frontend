"use client"

import { useEffect } from "react"
import { useRouter, useSearchParams, usePathname } from "next/navigation"
import { useCarStore } from "@/store/use-car-store"
import {
  PRICE_RANGE, YEAR_RANGE, KM_RANGE,
  SortOption
} from "@/lib/car-utils"

export function useUrlFilters() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const {
    filters,
    setSearch, setSortBy,
    toggleBrand, toggleFuelType,
    toggleTransmission, toggleBodyType, toggleOwnership,
    setPriceRange, setYearRange, setKmRange,
    setFilters,
  } = useCarStore()

  useEffect(() => {
    const q = searchParams.get("q") ?? ""
    const sort = searchParams.get("sort") ?? "relevance"
    const brands = searchParams.getAll("brand")
    const fuelTypes = searchParams.getAll("fuel")
    const transmissions = searchParams.getAll("transmission")
    const bodyTypes = searchParams.getAll("bodyType")
    const ownerships = searchParams.getAll("ownership")
    const minPrice = searchParams.get("minPrice")
    const maxPrice = searchParams.get("maxPrice")
    const minYear = searchParams.get("minYear")
    const maxYear = searchParams.get("maxYear")
    const minKm = searchParams.get("minKm")
    const maxKm = searchParams.get("maxKm")

    const nextPriceRange: [number, number] = minPrice && maxPrice 
      ? [Number(minPrice), Number(maxPrice)] 
      : PRICE_RANGE;

    const nextYearRange: [number, number] = minYear && maxYear 
      ? [Number(minYear), Number(maxYear)] 
      : YEAR_RANGE;

    const nextKmRange: [number, number] = minKm && maxKm 
      ? [Number(minKm), Number(maxKm)] 
      : KM_RANGE;

    // Check if store filters differ from URL params
    const isDifferent = 
      filters.search !== q ||
      filters.sortBy !== sort ||
      JSON.stringify(filters.brands) !== JSON.stringify(brands) ||
      JSON.stringify(filters.fuelTypes) !== JSON.stringify(fuelTypes) ||
      JSON.stringify(filters.transmissions) !== JSON.stringify(transmissions) ||
      JSON.stringify(filters.bodyTypes) !== JSON.stringify(bodyTypes) ||
      JSON.stringify(filters.ownerships) !== JSON.stringify(ownerships) ||
      filters.priceRange[0] !== nextPriceRange[0] ||
      filters.priceRange[1] !== nextPriceRange[1] ||
      filters.yearRange[0] !== nextYearRange[0] ||
      filters.yearRange[1] !== nextYearRange[1] ||
      filters.kmRange[0] !== nextKmRange[0] ||
      filters.kmRange[1] !== nextKmRange[1];

    if (isDifferent) {
      setFilters({
        search: q,
        sortBy: sort as SortOption,
        brands,
        fuelTypes,
        transmissions,
        bodyTypes,
        ownerships,
        priceRange: nextPriceRange,
        yearRange: nextYearRange,
        kmRange: nextKmRange,
      })
    }
  }, [searchParams])

  useEffect(() => {
    const params = new URLSearchParams()

    if (filters.search.trim())
      params.set("q", filters.search.trim())

    if (filters.sortBy !== "relevance")
      params.set("sort", filters.sortBy)

    filters.brands.forEach((b) => params.append("brand", b))
    filters.fuelTypes.forEach((f) => params.append("fuel", f))
    filters.transmissions.forEach((t) => params.append("transmission", t))
    filters.bodyTypes.forEach((b) => params.append("bodyType", b))
    filters.ownerships.forEach((o) => params.append("ownership", o))

    if (
      filters.priceRange[0] !== PRICE_RANGE[0] ||
      filters.priceRange[1] !== PRICE_RANGE[1]
    ) {
      params.set("minPrice", String(filters.priceRange[0]))
      params.set("maxPrice", String(filters.priceRange[1]))
    }

    if (
      filters.yearRange[0] !== YEAR_RANGE[0] ||
      filters.yearRange[1] !== YEAR_RANGE[1]
    ) {
      params.set("minYear", String(filters.yearRange[0]))
      params.set("maxYear", String(filters.yearRange[1]))
    }

    if (
      filters.kmRange[0] !== KM_RANGE[0] ||
      filters.kmRange[1] !== KM_RANGE[1]
    ) {
      params.set("minKm", String(filters.kmRange[0]))
      params.set("maxKm", String(filters.kmRange[1]))
    }

    const query = params.toString()

    router.replace(
      query ? `${pathname}?${query}` : pathname,
      { scroll: false }
    )

  }, [
    filters.search,
    filters.sortBy,
    filters.brands,
    filters.fuelTypes,
    filters.transmissions,
    filters.bodyTypes,
    filters.ownerships,
    filters.priceRange,
    filters.yearRange,
    filters.kmRange,
    pathname,
    router,
  ])
}
