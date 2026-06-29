import { Suspense } from "react"

export default function CarsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Suspense fallback={null}>
      {children}
    </Suspense>
  )
}
