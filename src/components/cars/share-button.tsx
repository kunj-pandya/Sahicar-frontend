"use client"

import { useEffect } from "react"
import { Share2, Check, Link } from "lucide-react"
import { toast } from "sonner"
import { useShareCar } from "@/hooks/use-share-car"
import { cn } from "@/lib/utils"

interface ShareButtonProps {
  carTitle: string
  carSlug: string
  price?: string
  year?: number
  fuelType?: string
  variant?: "icon" | "full"
  className?: string
}

export function ShareButton({
  carTitle,
  carSlug,
  price,
  year,
  fuelType,
  variant = "icon",
  className,
}: ShareButtonProps) {
  const url = typeof window !== "undefined"
    ? `${window.location.origin}/cars/${carSlug}`
    : `/cars/${carSlug}`

  const { isShared, isCopied, handleShare } = useShareCar({
    title: carTitle,
    url,
    price,
    year,
    fuelType,
    text: `Check out this ${carTitle} on SahiCar`,
  })

  useEffect(() => {
    if (isShared) {
      toast.success("Shared successfully", {
        description: "Car details shared",
        duration: 2000,
      })
    }
  }, [isShared])

  useEffect(() => {
    if (isCopied) {
      toast.success("Link copied!", {
        description: "Car link copied to clipboard",
        duration: 2000,
        icon: <Link className="w-4 h-4" />,
      })
    }
  }, [isCopied])

  const isActive = isShared || isCopied

  if (variant === "icon") {
    return (
      <button
        onClick={(e) => {
          e.stopPropagation()
          handleShare()
        }}
        aria-label={`Share ${carTitle}`}
        className={cn(
          "flex items-center justify-center",
          "w-8 h-8 rounded-xl",
          "border border-zinc-200",
          "text-zinc-400",
          "hover:text-zinc-700 hover:border-zinc-300",
          "hover:bg-zinc-50",
          "transition-all duration-200",
          isActive && "border-emerald-200 text-emerald-600 bg-emerald-50",
          className
        )}
      >
        {isActive
          ? <Check className="w-3.5 h-3.5" />
          : <Share2 className="w-3.5 h-3.5" />
        }
      </button>
    )
  }

  return (
    <button
      onClick={handleShare}
      aria-label={`Share ${carTitle}`}
      className={cn(
        "flex items-center gap-2",
        "h-9 px-4 rounded-xl",
        "text-sm font-medium",
        "border border-zinc-200 text-zinc-600",
        "hover:border-zinc-300 hover:text-zinc-900 hover:bg-zinc-50",
        "transition-all duration-200",
        isActive && "border-emerald-200 text-emerald-700 bg-emerald-50",
        className
      )}
    >
      {isActive
        ? <Check className="w-4 h-4 text-emerald-500" />
        : <Share2 className="w-4 h-4" />
      }
      {isActive ? "Shared!" : "Share"}
    </button>
  )
}
