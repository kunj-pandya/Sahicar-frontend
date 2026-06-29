"use client"

import { useState, useCallback } from "react"

interface UseShareCarProps {
  title: string
  url: string
  text?: string
  price?: string
  year?: number
  fuelType?: string
}

interface UseShareCarReturn {
  isShared: boolean
  isCopied: boolean
  handleShare: () => Promise<void>
}

export function useShareCar({
  title,
  url,
  text,
  price,
  year,
  fuelType,
}: UseShareCarProps): UseShareCarReturn {
  const [isShared, setIsShared] = useState(false)
  const [isCopied, setIsCopied] = useState(false)

  const handleShare = useCallback(async () => {
    const shareText = text ??
      [
        title,
        year && fuelType ? `${year} · ${fuelType}` : null,
        price ? `Price: ${price}` : null,
      ]
        .filter(Boolean)
        .join(" · ")


    if (
      typeof navigator !== "undefined" &&
      typeof navigator.share === "function"
    ) {
      try {
        await navigator.share({
          title,
          url,
          text: shareText,
        })
        setIsShared(true)
        setTimeout(() => setIsShared(false), 2000)
        return
      } catch (err) {

        if ((err as Error).name === "AbortError") return
      }
    }

    try {
      await navigator.clipboard.writeText(url)
      setIsCopied(true)
      setTimeout(() => setIsCopied(false), 2000)
    } catch {

      const el = document.createElement("input")
      el.value = url
      document.body.appendChild(el)
      el.select()
      document.execCommand("copy")
      document.body.removeChild(el)
      setIsCopied(true)
      setTimeout(() => setIsCopied(false), 2000)
    }
  }, [title, url, text, price, year, fuelType])

  return { isShared, isCopied, handleShare }
}
