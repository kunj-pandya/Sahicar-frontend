"use client"

import { useCarStore } from "@/store/use-car-store"
import { FILTER_OPTIONS, SortOption } from "@/lib/car-utils"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function CarSort() {
  const { filters, setSortBy } = useCarStore()

  return (
    <Select
      value={filters.sortBy}
      onValueChange={(val) => setSortBy(val as SortOption)}
    >
      <SelectTrigger className="w-[160px] sm:w-[180px] h-9 text-xs sm:text-sm text-zinc-600 bg-white/80 backdrop-blur-sm border border-zinc-200 rounded-xl cursor-pointer focus:ring-0 focus:ring-offset-0 focus:outline-none transition-colors duration-200">
        <SelectValue placeholder="Sort by" />
      </SelectTrigger>
      <SelectContent className="bg-white/95 backdrop-blur-md border border-zinc-200 rounded-xl">
        {FILTER_OPTIONS.sortOptions.map((opt) => (
          <SelectItem key={opt.value} value={opt.value} className="text-xs sm:text-sm cursor-pointer rounded-lg">
            {opt.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
