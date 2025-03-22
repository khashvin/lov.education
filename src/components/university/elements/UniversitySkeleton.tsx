import { Card } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

export function UniversitySkeleton() {
  return (
    <Card>
      <div>
        <Skeleton className="w-full h-48 rounded-t-xl" />
      </div>
      <div className="p-6">
        <Skeleton className="h-8 w-3/4 mb-2" />
        <Skeleton className="h-4 w-1/2 mb-4" />
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-2/3 mb-4" />
        <div className="flex gap-2 mb-4">
          <Skeleton className="h-6 w-16" />
          <Skeleton className="h-6 w-16" />
          <Skeleton className="h-6 w-16" />
        </div>
        <Skeleton className="h-10 w-full" />
      </div>
    </Card>
  )
} 