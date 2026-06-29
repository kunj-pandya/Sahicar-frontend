import { create } from "zustand"
import {
  FilterState, SortOption,
  DEFAULT_FILTERS
} from "@/lib/car-utils"

interface CarStore {
  filters: FilterState
  page: number
  setSearch: (v: string) => void
  toggleBrand: (v: string) => void
  toggleFuelType: (v: string) => void
  toggleTransmission: (v: string) => void
  toggleBodyType: (v: string) => void
  toggleOwnership: (v: string) => void
  setPriceRange: (v: [number, number]) => void
  setYearRange: (v: [number, number]) => void
  setKmRange: (v: [number, number]) => void
  setSortBy: (v: SortOption) => void
  setPage: (v: number) => void
  incrementPage: () => void
  setFilters: (v: Partial<FilterState>) => void
  resetFilters: () => void
}

export const useCarStore = create<CarStore>((set) => ({
  filters: DEFAULT_FILTERS,
  page: 1,

  setSearch: (v) =>
    set((state) => ({
      filters: { ...state.filters, search: v },
      page: 1,
    })),

  toggleBrand: (v) =>
    set((state) => {
      const exists = state.filters.brands.includes(v)
      const brands = exists
        ? state.filters.brands.filter((b) => b !== v)
        : [...state.filters.brands, v]
      return {
        filters: { ...state.filters, brands },
        page: 1,
      }
    }),

  toggleFuelType: (v) =>
    set((state) => {
      const exists = state.filters.fuelTypes.includes(v)
      const fuelTypes = exists
        ? state.filters.fuelTypes.filter((f) => f !== v)
        : [...state.filters.fuelTypes, v]
      return {
        filters: { ...state.filters, fuelTypes },
        page: 1,
      }
    }),

  toggleTransmission: (v) =>
    set((state) => {
      const exists = state.filters.transmissions.includes(v)
      const transmissions = exists
        ? state.filters.transmissions.filter((t) => t !== v)
        : [...state.filters.transmissions, v]
      return {
        filters: { ...state.filters, transmissions },
        page: 1,
      }
    }),

  toggleBodyType: (v) =>
    set((state) => {
      const exists = state.filters.bodyTypes.includes(v)
      const bodyTypes = exists
        ? state.filters.bodyTypes.filter((b) => b !== v)
        : [...state.filters.bodyTypes, v]
      return {
        filters: { ...state.filters, bodyTypes },
        page: 1,
      }
    }),

  toggleOwnership: (v) =>
    set((state) => {
      const exists = state.filters.ownerships.includes(v)
      const ownerships = exists
        ? state.filters.ownerships.filter((o) => o !== v)
        : [...state.filters.ownerships, v]
      return {
        filters: { ...state.filters, ownerships },
        page: 1,
      }
    }),

  setPriceRange: (v) =>
    set((state) => ({
      filters: { ...state.filters, priceRange: v },
      page: 1,
    })),

  setYearRange: (v) =>
    set((state) => ({
      filters: { ...state.filters, yearRange: v },
      page: 1,
    })),

  setKmRange: (v) =>
    set((state) => ({
      filters: { ...state.filters, kmRange: v },
      page: 1,
    })),

  setSortBy: (v) =>
    set((state) => ({
      filters: { ...state.filters, sortBy: v },
      page: 1,
    })),

  setPage: (v) =>
    set({ page: v }),

  incrementPage: () => set((s) => ({ page: s.page + 1 })),

  setFilters: (v) =>
    set((state) => ({
      filters: { ...state.filters, ...v },
      page: 1,
    })),

  resetFilters: () =>
    set((state) => ({
      filters: {
        ...DEFAULT_FILTERS,
        search: state.filters.search,
      },
      page: 1,
    })),
}))
