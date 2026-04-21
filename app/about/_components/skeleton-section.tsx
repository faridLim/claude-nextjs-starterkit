import { Skeleton } from "@/components/ui/skeleton"

export function SkeletonSection() {
  return (
    <div className="flex flex-col gap-4">
      {/* 프로필 카드 스켈레톤 */}
      <div className="flex items-center gap-4">
        <Skeleton className="size-12 rounded-full" />
        <div className="flex flex-col gap-2">
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-3 w-24" />
        </div>
      </div>

      {/* 콘텐츠 스켈레톤 */}
      <div className="flex flex-col gap-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
      </div>
    </div>
  )
}
