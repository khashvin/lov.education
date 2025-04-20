import { BookOpenIcon, AlertCircle, XCircle } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { CourseList } from './CourseList';
import { Skeleton } from '@/components/ui/skeleton';
import { getFacultiesOptions } from '@/lib/queries';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useQuery } from '@tanstack/react-query';

interface FacultyAccordionProps {
  universityId: number;
}

export function FacultyAccordion({ universityId }: FacultyAccordionProps) {
  const {
    data: faculties,
    isLoading: isFacultiesLoading,
    isError: isFacultiesError,
    refetch,
  } = useQuery(getFacultiesOptions(universityId));

  if (isFacultiesLoading) {
    return <Skeleton className="h-[200px] rounded-md border p-4" />;
  }

  if (isFacultiesError) {
    return (
      <Card className="border-red-100">
        <CardContent className="p-6 text-center">
          <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-red-700 mb-2">
            Error Loading Faculties
          </h3>
          <p className="text-gray-600 mb-4">
            There was a problem loading the faculty information.
          </p>
          <Button
            variant="outline"
            onClick={() => refetch()}
            className="border-red-200 text-red-700 hover:bg-red-50"
          >
            Try Again
          </Button>
        </CardContent>
      </Card>
    );
  }

  if (!faculties || faculties.length === 0) {
    return (
      <Card className="border-gray-200">
        <CardContent className="p-6 text-center">
          <XCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            No Faculties Found
          </h3>
          <p className="text-gray-600">
            This university hasn't added any faculties yet.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Accordion type="single" collapsible className="w-full">
      {faculties.map((faculty) => (
        <AccordionItem key={faculty.id} value={`faculty-${faculty.id}`}>
          <AccordionTrigger className="text-lg hover:no-underline">
            <div className="flex items-center">
              <BookOpenIcon className="h-5 w-5 mr-2" />
              {faculty.name}
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <CourseList facultyId={faculty.id} />
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
