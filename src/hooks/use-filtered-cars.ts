import { useMemo } from "react"
import { cars } from "@/data/cars"
import { useCarStore } from "@/store/use-car-store"
import { filterAndSortCars, CARS_PER_PAGE } from "@/lib/car-utils"

export function useFilteredCars() {
  const { filters, page } = useCarStore()

  const allFiltered = useMemo(
    () => filterAndSortCars(cars, filters),
    [filters]
  )

  const totalCount = allFiltered.length
  const totalPages = Math.ceil(totalCount / CARS_PER_PAGE)

  const visibleCars = useMemo(
    () => allFiltered.slice(0, page * CARS_PER_PAGE),
    [allFiltered, page]
  )

  const hasMore = page < totalPages

  return { visibleCars, totalCount, totalPages, hasMore }
}
