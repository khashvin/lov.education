import { GraduationCapIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { University as UniversityType } from '@/drizzle/schema';

import { UniversityCard } from '../elements/UniversityCard';
import { UniversitySkeleton } from '../elements/UniversitySkeleton';

interface UniversityListSectionProps {
  universities: UniversityType[];
  isLoading: boolean;
  isError: boolean;
}

export function UniversityListSection({
  universities,
  isLoading,
  isError,
}: UniversityListSectionProps) {
  // Handle errors
  if (isError) {
    return (
      <section className="py-8 sm:py-12 lg:py-20">
        <div className="container px-4 mx-auto py-4">
          <div className="text-center">
            <GraduationCapIcon className="mx-auto h-12 sm:h-16 w-12 sm:w-16 text-red-500 mb-4" />
            <h2 className="text-xl sm:text-2xl font-bold mb-2">
              Error Loading Universities
            </h2>
            <p className="text-gray-600 mb-4 sm:mb-6">
              There was a problem loading the university data. Please try again
              later.
            </p>
            <Button onClick={() => window.location.reload()}>
              Refresh Page
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-8 sm:py-12 lg:py-20 overflow-hidden w-full">
      <div className="container px-4 mx-auto py-4">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">
          Our Partner Universities in Malaysia
        </h2>

        {isLoading ? (
          // Loading state
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <UniversitySkeleton key={i} />
            ))}
          </div>
        ) : universities.length === 0 ? (
          // No results
          <div className="text-center py-8 sm:py-12">
            <GraduationCapIcon className="mx-auto h-10 sm:h-12 w-10 sm:w-12 text-gray-400 mb-4" />
            <h3 className="text-lg sm:text-xl font-semibold mb-2">
              No universities found
            </h3>
            <p className="text-gray-500">Please check back later</p>
          </div>
        ) : (
          // University cards
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {universities.map((uni) => (
              <UniversityCard key={uni.id} university={uni} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
