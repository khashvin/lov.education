import { useQuery } from '@tanstack/react-query';
import { AlertCircle, XCircle } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Skeleton } from '@/components/ui/skeleton';
import { getCoursesOptions } from '@/lib/queries';

interface CourseListProps {
  facultyId: number;
}

export function CourseList({ facultyId }: CourseListProps) {
  const {
    data: courses,
    isLoading: isCoursesLoading,
    isError: isCoursesError,
    refetch,
  } = useQuery(getCoursesOptions(facultyId));

  if (isCoursesLoading) {
    return <Skeleton className="h-[200px] rounded-md border p-4" />;
  }

  if (isCoursesError) {
    return (
      <div className="rounded-lg bg-red-50 p-4 text-center">
        <AlertCircle className="mx-auto mb-2 h-8 w-8 text-red-500" />
        <h4 className="mb-1 text-sm font-semibold text-red-700">
          Error Loading Courses
        </h4>
        <p className="mb-2 text-xs text-red-600">
          Unable to load course information.
        </p>
        <Button
          variant="outline"
          size="sm"
          onClick={() => refetch()}
          className="border-red-200 text-red-700 hover:bg-red-100"
        >
          Try Again
        </Button>
      </div>
    );
  }

  if (!courses || courses.length === 0) {
    return (
      <div className="rounded-lg bg-gray-50 p-4 text-center">
        <XCircle className="mx-auto mb-2 h-8 w-8 text-gray-400" />
        <h4 className="mb-1 text-sm font-semibold text-gray-900">
          No Courses Available
        </h4>
        <p className="text-xs text-gray-600">
          This faculty hasn't added any courses yet.
        </p>
      </div>
    );
  }

  return (
    <ScrollArea className="h-[200px] rounded-md border p-4">
      <div className="space-y-2">
        {courses.map((course) => (
          <div
            key={course.id}
            className="flex items-center space-x-2 rounded-lg p-2 hover:bg-gray-50"
          >
            <Badge variant="outline" className="flex-shrink-0">
              Course
            </Badge>
            <span className="text-sm text-gray-700">{course.name}</span>
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}
