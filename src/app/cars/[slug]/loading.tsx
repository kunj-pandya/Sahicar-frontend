import { ArrowLeft } from "lucide-react"
import { Skeleton } from "@/components/ui/skeleton"

export default function CarDetailLoading() {
  return (
    <main className="min-h-screen bg-[radial-gradient(ellipse_at_top,#e8edf5_0%,#f1f5f9_40%,#f8fafc_100%)]">

      <div className="max-w-7xl mx-auto px-6 pt-8 pb-4">
        <div className="inline-flex items-center gap-2 text-sm text-zinc-400">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to listings</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mb-6 flex flex-col gap-2">
        <Skeleton className="h-4 w-32" />
        <Skeleton className="h-8 w-64" />
        <Skeleton className="h-4 w-40" />
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white/70 backdrop-blur-xl border border-white/80 rounded-3xl p-4 shadow-[0_4px_24px_-2px_rgba(0,0,0,0.08)] space-y-3">
              <Skeleton className="aspect-video w-full rounded-2xl" />
              <div className="grid grid-cols-4 gap-3">
                {Array.from({ length: 4 }).map((_, i) => (
                  <Skeleton key={i} className="aspect-video rounded-xl" />
                ))}
              </div>
            </div>

            <div className="bg-white/70 backdrop-blur-xl border border-white/80 rounded-3xl shadow-[0_4px_24px_-2px_rgba(0,0,0,0.08)] p-6 space-y-4">
              <Skeleton className="h-5 w-24" />
              <div className="h-px bg-zinc-100" />
              <div className="flex gap-6">
                <Skeleton className="h-4 w-28" />
                <Skeleton className="h-4 w-28" />
                <Skeleton className="h-4 w-28" />
              </div>
            </div>

            <div className="bg-white/70 backdrop-blur-xl border border-white/80 rounded-3xl shadow-[0_4px_24px_-2px_rgba(0,0,0,0.08)] p-6 space-y-4">
              <Skeleton className="h-5 w-32" />
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div key={i} className="flex flex-col gap-2 p-3 rounded-2xl bg-zinc-50 border border-zinc-100">
                    <Skeleton className="w-8 h-8 rounded-xl" />
                    <div className="space-y-1">
                      <Skeleton className="h-3 w-12" />
                      <Skeleton className="h-4 w-16" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/70 backdrop-blur-xl border border-white/80 rounded-3xl shadow-[0_4px_24px_-2px_rgba(0,0,0,0.08)] p-6 space-y-4">
              <Skeleton className="h-5 w-40" />
              <div className="flex flex-wrap gap-2">
                {Array.from({ length: 6 }).map((_, i) => (
                  <Skeleton key={i} className="h-8 w-28 rounded-full" />
                ))}
              </div>
            </div>

            <div className="bg-white/70 backdrop-blur-xl border border-white/80 rounded-3xl shadow-[0_4px_24px_-2px_rgba(0,0,0,0.08)] p-6 space-y-3">
              <Skeleton className="h-5 w-28" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
                <Skeleton className="h-4 w-2/3" />
              </div>
            </div>

          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-6 space-y-4">

              <div className="bg-white/70 backdrop-blur-xl border border-white/80 rounded-3xl shadow-[0_4px_24px_-2px_rgba(0,0,0,0.08)] p-5 space-y-5">
                <div className="space-y-2">
                  <div className="flex items-baseline gap-2">
                    <Skeleton className="h-8 w-32" />
                    <Skeleton className="h-5 w-16" />
                  </div>
                  <Skeleton className="h-4 w-44" />
                </div>

                <div className="h-px bg-zinc-100" />

                <div className="grid grid-cols-2 gap-3">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div key={i} className="space-y-1">
                      <Skeleton className="h-3 w-12" />
                      <Skeleton className="h-4 w-16" />
                    </div>
                  ))}
                </div>

                <div className="h-px bg-zinc-100" />

                <div className="space-y-2">
                  <Skeleton className="h-4 w-48" />
                  <Skeleton className="h-4 w-36" />
                </div>

                <div className="h-px bg-zinc-100" />

                <div className="space-y-2">
                  <Skeleton className="h-10 w-full rounded-2xl" />
                  <Skeleton className="h-10 w-full rounded-2xl" />
                </div>
              </div>

              <div className="bg-white/70 backdrop-blur-xl border border-white/80 rounded-3xl shadow-[0_4px_24px_-2px_rgba(0,0,0,0.08)] p-5 space-y-4">
                <Skeleton className="h-4 w-28" />
                <div className="space-y-3">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <div key={i} className="flex gap-3 items-center">
                      <Skeleton className="w-8 h-8 rounded-xl" />
                      <div className="space-y-1 flex-1">
                        <Skeleton className="h-3 w-28" />
                        <Skeleton className="h-2 w-36" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </main>
  )
}
