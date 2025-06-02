import { Card } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

export function UniversitySkeleton() {
  return (
    <Card className="w-full max-w-full">
      <div>
        <Skeleton className="h-40 w-full rounded-t-xl sm:h-48" />
      </div>
      <div className="p-4 sm:p-6">
        <Skeleton className="mb-2 h-6 w-3/4 sm:h-8" />
        <Skeleton className="mb-4 h-4 w-1/2" />
        <Skeleton className="mb-2 h-4 w-full" />
        <Skeleton className="mb-2 h-4 w-full" />
        <Skeleton className="mb-4 h-4 w-2/3" />
        <div className="mb-4 flex gap-2">
          <Skeleton className="h-5 w-14 sm:h-6 sm:w-16" />
          <Skeleton className="h-5 w-14 sm:h-6 sm:w-16" />
          <Skeleton className="h-5 w-14 sm:h-6 sm:w-16" />
        </div>
        <Skeleton className="h-9 w-full sm:h-10" />
      </div>
    </Card>
  );
}
