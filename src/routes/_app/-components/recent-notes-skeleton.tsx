import { Skeleton } from "@/components/ui/skeleton"
import { Clock } from "lucide-react"

export function RecentNotesSkeleton() {
  return (
    <div className="space-y-3">
      {/* Header skeleton */}
      <div className="flex items-center gap-2">
        <Clock className="h-4 w-4 text-muted-foreground/50" />
        <Skeleton className="h-4 w-24" />
      </div>
      
      {/* Notes list skeleton */}
      <div className="space-y-2">
        {/* Repeat skeleton items 3-5 times for loading state */}
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="rounded-lg border border-border/50 bg-card p-3 space-y-2"
          >
            {/* Title skeleton */}
            <Skeleton className="h-4 w-3/4" />
            
            {/* Preview text skeleton - two lines */}
            <div className="space-y-1">
              <Skeleton className="h-3 w-full" />
              <Skeleton className="h-3 w-2/3" />
            </div>
            
            {/* Date skeleton */}
            <Skeleton className="h-3 w-16" />
          </div>
        ))}
      </div>
    </div>
  )
}