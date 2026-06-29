"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { useCarStore } from "@/store/use-car-store"
import { useFilteredCars } from "@/hooks/use-filtered-cars"
import { useUrlFilters } from "@/hooks/use-url-filters"
import { CarGrid } from "@/components/cars/car-grid"
import { CarSearch } from "@/components/cars/car-search"
import { CarSort } from "@/components/cars/car-sort"
import { FilterSidebar, FilterSidebarSkeleton, FilterContent } from "@/components/cars/filter-sidebar"
import { cars } from "@/data/cars"
import { getActiveFilterCount } from "@/lib/car-utils"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { SlidersHorizontal, X } from "lucide-react"

export default function CarsPage() {
  const { visibleCars, totalCount, hasMore } = useFilteredCars()
  const { filters, incrementPage, resetFilters } = useCarStore()
  useUrlFilters()

  const [initialLoading, setInitialLoading] = useState(true)
  const [filterLoading, setFilterLoading] = useState(false)
  const prevFiltersRef = useRef(filters)

  useEffect(() => {
    const t = setTimeout(() => setInitialLoading(false), 800)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    if (initialLoading) {
      prevFiltersRef.current = filters
      return
    }

    if (JSON.stringify(filters) !== JSON.stringify(prevFiltersRef.current)) {
      setFilterLoading(true)
      prevFiltersRef.current = filters
      const t = setTimeout(() => setFilterLoading(false), 400)
      return () => clearTimeout(t)
    }
  }, [filters, initialLoading])

  const loadMore = useCallback(() => {
    incrementPage()
  }, [incrementPage])

  const activeCount = getActiveFilterCount(filters)
  const isFiltered = activeCount > 0 || filters.search.trim() !== ""

  return (
    <main className="min-h-screen bg-[radial-gradient(ellipse_at_top,#e8edf5_0%,#f1f5f9_40%,#f8fafc_100%)]">
      <section className="max-w-7xl mx-auto px-6 pt-10 pb-6">
        <p className="text-xs font-medium text-zinc-400 uppercase tracking-widest mb-2">
          Used Cars · Verified · Trusted
        </p>

        <div className="flex items-end justify-between gap-4 flex-wrap">
          <div>
            <h1 className="text-2xl font-semibold text-zinc-900 tracking-tight">
              Find Your Next Car
            </h1>
            <p className="text-sm text-zinc-400 mt-1">
              {isFiltered
                ? `${totalCount} of ${cars.length} cars match your filters`
                : `${cars.length} cars available across India`}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Dialog>
              <DialogTrigger asChild>
                <button className="lg:hidden flex items-center gap-2 h-9 px-4 text-sm font-medium text-zinc-600 bg-white/80 backdrop-blur-sm border border-zinc-200 rounded-xl hover:bg-zinc-50 hover:text-zinc-900 transition-colors">
                  <SlidersHorizontal className="w-4 h-4 text-zinc-500" />
                  Filters
                  {activeCount > 0 && (
                    <span className="flex items-center justify-center min-w-5 h-5 px-1 text-[10px] font-bold text-white bg-zinc-900 rounded-full">
                      {activeCount}
                    </span>
                  )}
                </button>
              </DialogTrigger>
              <DialogContent className="max-w-md w-[calc(100%-1.5rem)] p-0 bg-white overflow-hidden rounded-3xl border-0 shadow-2xl max-h-[85vh] flex flex-col">
                <div className="p-4 sm:p-5 border-b border-zinc-100 flex items-center justify-between">
                  <h2 className="text-sm font-semibold text-zinc-900">Filters</h2>
                  {activeCount > 0 && (
                    <button
                      onClick={() => resetFilters()}
                      className="flex items-center gap-1 text-xs text-zinc-500 hover:text-zinc-900 transition-colors"
                    >
                      <X className="w-3 h-3" />
                      Reset ({activeCount})
                    </button>
                  )}
                </div>
                <div className="p-4 sm:p-6 overflow-y-auto flex-1 max-h-[calc(85vh-80px)] scrollbar-thin">
                  <FilterContent />
                </div>
              </DialogContent>
            </Dialog>

            <CarSort />
          </div>
        </div>

        <div className="mt-5">
          <CarSearch />
        </div>

        <div className="h-px bg-linear-to-r from-transparent via-zinc-200 to-transparent mt-8" />
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-16">
        <div className="flex gap-6 items-start">
          {initialLoading ? <FilterSidebarSkeleton className="hidden lg:block" /> : <FilterSidebar />}

          <div className="flex-1 min-w-0">
            <CarGrid
              cars={visibleCars}
              loading={initialLoading || filterLoading}
              hasMore={hasMore}
              onLoadMore={loadMore}
            />
          </div>
        </div>
      </section>
    </main>
  )
}
