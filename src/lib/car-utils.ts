import { Car } from "@/types/car-types"

export type SortOption =
  | "relevance"
  | "price_asc"
  | "price_desc"
  | "year_desc"
  | "year_asc"
  | "km_asc"

export interface FilterState {
  search: string
  brands: string[]
  fuelTypes: string[]
  transmissions: string[]
  bodyTypes: string[]
  ownerships: string[]
  priceRange: [number, number]
  yearRange: [number, number]
  kmRange: [number, number]
  sortBy: SortOption
}

export const PRICE_RANGE: [number, number] = [100000, 5000000]
export const YEAR_RANGE: [number, number]  = [2016, 2025]
export const KM_RANGE: [number, number]    = [0, 150000]
export const CARS_PER_PAGE                 = 12

export const DEFAULT_FILTERS: FilterState = {
  search:        "",
  brands:        [],
  fuelTypes:     [],
  transmissions: [],
  bodyTypes:     [],
  ownerships:    [],
  priceRange:    PRICE_RANGE,
  yearRange:     YEAR_RANGE,
  kmRange:       KM_RANGE,
  sortBy:        "relevance",
}

export const FILTER_OPTIONS = {
  brands: [
    "Hyundai", "Tata", "Maruti Suzuki", "Honda",
    "Mahindra", "Toyota", "Kia", "Volkswagen",
    "Skoda", "MG", "Renault", "Nissan", "Jeep", "Ford",
  ],
  fuelTypes:     ["Petrol", "Diesel", "CNG", "Electric"],
  transmissions: ["Manual", "Automatic"],
  bodyTypes:     ["Hatchback", "Sedan", "SUV", "MUV"],
  ownerships:    ["1st Owner", "2nd Owner", "3rd Owner"],
  sortOptions: [
    { label: "Relevance",          value: "relevance"  },
    { label: "Price: Low to High", value: "price_asc"  },
    { label: "Price: High to Low", value: "price_desc" },
    { label: "Newest First",       value: "year_desc"  },
    { label: "Oldest First",       value: "year_asc"   },
    { label: "KM: Low to High",    value: "km_asc"     },
  ],
}

export function filterAndSortCars(
  cars: Car[],
  filters: FilterState
): Car[] {
  let result = [...cars]

  if (filters.search.trim()) {
    const q = filters.search.toLowerCase().trim()
    result = result.filter(
      (c) =>
        c.brand.toLowerCase().includes(q)   ||
        c.model.toLowerCase().includes(q)   ||
        c.variant.toLowerCase().includes(q)
    )
  }

  if (filters.brands.length > 0)
    result = result.filter((c) => filters.brands.includes(c.brand))

  if (filters.fuelTypes.length > 0)
    result = result.filter((c) => filters.fuelTypes.includes(c.fuelType))

  if (filters.transmissions.length > 0)
    result = result.filter((c) => filters.transmissions.includes(c.transmission))

  if (filters.bodyTypes.length > 0)
    result = result.filter((c) => filters.bodyTypes.includes(c.bodyType))

  if (filters.ownerships.length > 0)
    result = result.filter((c) => filters.ownerships.includes(c.ownership))

  result = result.filter(
    (c) =>
      c.discountedPrice >= filters.priceRange[0] &&
      c.discountedPrice <= filters.priceRange[1]
  )

  result = result.filter(
    (c) =>
      c.registrationYear >= filters.yearRange[0] &&
      c.registrationYear <= filters.yearRange[1]
  )

  result = result.filter(
    (c) =>
      c.kmDriven >= filters.kmRange[0] &&
      c.kmDriven <= filters.kmRange[1]
  )

  switch (filters.sortBy) {
    case "price_asc":  result.sort((a, b) => a.discountedPrice - b.discountedPrice); break
    case "price_desc": result.sort((a, b) => b.discountedPrice - a.discountedPrice); break
    case "year_desc":  result.sort((a, b) => b.registrationYear - a.registrationYear); break
    case "year_asc":   result.sort((a, b) => a.registrationYear - b.registrationYear); break
    case "km_asc":     result.sort((a, b) => a.kmDriven - b.kmDriven); break
  }

  return result
}

export function getActiveFilterCount(filters: FilterState): number {
  let count = 0
  if (filters.brands.length)        count++
  if (filters.fuelTypes.length)     count++
  if (filters.transmissions.length) count++
  if (filters.bodyTypes.length)     count++
  if (filters.ownerships.length)    count++
  if (
    filters.priceRange[0] !== PRICE_RANGE[0] ||
    filters.priceRange[1] !== PRICE_RANGE[1]
  ) count++
  if (
    filters.yearRange[0] !== YEAR_RANGE[0] ||
    filters.yearRange[1] !== YEAR_RANGE[1]
  ) count++
  if (
    filters.kmRange[0] !== KM_RANGE[0] ||
    filters.kmRange[1] !== KM_RANGE[1]
  ) count++
  return count
}