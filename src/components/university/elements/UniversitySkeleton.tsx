import { Card } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

export function UniversitySkeleton() {
  return (
    <Card className="w-full max-w-full">
      <div>
        <Skeleton className="w-full h-40 sm:h-48 rounded-t-xl" />
      </div>
      <div className="p-4 sm:p-6">
        <Skeleton className="h-6 sm:h-8 w-3/4 mb-2" />
        <Skeleton className="h-4 w-1/2 mb-4" />
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-2/3 mb-4" />
        <div className="flex gap-2 mb-4">
          <Skeleton className="h-5 sm:h-6 w-14 sm:w-16" />
          <Skeleton className="h-5 sm:h-6 w-14 sm:w-16" />
          <Skeleton className="h-5 sm:h-6 w-14 sm:w-16" />
        </div>
        <Skeleton className="h-9 sm:h-10 w-full" />
      </div>
    </Card>
  );
}
