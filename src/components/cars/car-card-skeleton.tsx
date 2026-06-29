
import { Skeleton } from "@/components/ui/skeleton";

export function CarCardSkeleton() {
    return (
        <div className="group relative flex flex-col bg-white/70 backdrop-blur-xl border border-white/80 rounded-3xl overflow-hidden shadow-[0_4px_24px_-2px_rgba(0,0,0,0.08),0_0_0_1px_rgba(0,0,0,0.04)]">
            <div className="relative h-52  from-zinc-100 to-zinc-50">
                <Skeleton className="absolute top-3 left-3 z-10 h-5 w-16 rounded-full" />
                <div className="absolute inset-0  from-zinc-100 to-zinc-50" />
            </div>
            <div className="px-4 pt-3 pb-0 space-y-2">
                <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                        <Skeleton className="h-4 w-36 rounded-lg" />
                        <Skeleton className="h-3 w-24 rounded-lg mt-1.5" />
                    </div>
                    <Skeleton className="h-5 w-10 rounded-full shrink-0" />
                </div>
                <div className="flex items-center gap-1 mt-2">
                    <Skeleton className="h-3 w-3 rounded" />
                    <Skeleton className="h-3 w-28 rounded" />
                </div>
                <div className="flex gap-1.5 mt-3">
                    <Skeleton className="h-6 w-14 rounded-full" />
                    <Skeleton className="h-6 w-20 rounded-full" />
                    <Skeleton className="h-6 w-16 rounded-full" />
                </div>
            </div>
            <div className="mt-auto px-4 pt-3 pb-4">
                <div className="h-px  from-transparent via-zinc-200/80 to-transparent mb-3" />
                <div className="flex items-center justify-between gap-3">
                    <div>
                        <Skeleton className="h-6 w-24 rounded-lg" />
                        <Skeleton className="h-3 w-32 rounded mt-1.5" />
                    </div>
                    <Skeleton className="h-12 w-14 rounded-2xl shrink-0" />
                </div>
                <Skeleton className="mt-3 h-10 w-full rounded-2xl" />
                <div className="flex gap-3 mt-3 pt-3 border-t border-zinc-100/80">
                    <Skeleton className="h-3 w-20 rounded" />
                    <Skeleton className="h-3 w-16 rounded" />
                    <Skeleton className="h-3 w-16 rounded" />
                </div>
            </div>
        </div>

    );
}
