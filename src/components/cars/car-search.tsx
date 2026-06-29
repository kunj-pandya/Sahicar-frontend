"use client"

import { useState, useEffect } from "react"
import { Search, X } from "lucide-react"
import { useCarStore } from "@/store/use-car-store"
import { useDebounce } from "@/hooks/use-debounce"

export function CarSearch() {
  const { filters, setSearch } = useCarStore()
  const [value, setValue] = useState("")
  const debounced = useDebounce(value, 300)

  useEffect(() => {
    setSearch(debounced)
  }, [debounced, setSearch])

  useEffect(() => {
    setValue(filters.search)
  }, [filters.search])

  const handleClear = () => {
    setValue("")
    setSearch("")
  }

  return (
    <div className="relative w-full">
      <div className="relative flex items-center bg-white/80 backdrop-blur-sm border border-zinc-200 focus-within:border-zinc-400 focus-within:shadow-md rounded-2xl h-11 shadow-sm transition-all duration-200">
        <Search className="absolute left-3.5 w-4 h-4 text-zinc-400 pointer-events-none" />
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="w-full h-full pl-10 pr-10 bg-transparent text-sm text-zinc-900 placeholder:text-zinc-400 outline-none rounded-2xl"
          placeholder="Search brand, model or variant..."
        />
        {value && (
          <button
            onClick={handleClear}
            className="absolute right-3 text-zinc-400 hover:text-zinc-600 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  )
}
