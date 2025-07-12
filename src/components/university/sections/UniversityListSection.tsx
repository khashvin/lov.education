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
        <div className="container mx-auto px-4 py-4">
          <div className="text-center">
            <GraduationCapIcon className="mx-auto mb-4 h-12 w-12 text-red-500 sm:h-16 sm:w-16" />
            <h2 className="mb-2 text-xl font-bold sm:text-2xl">
              Error Loading Universities
            </h2>
            <p className="mb-4 text-gray-600 sm:mb-6">
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
    <section className="w-full overflow-hidden py-8 sm:py-12 lg:py-20">
      <div className="container mx-auto px-4 py-4">
        <h2 className="mb-6 text-center text-2xl font-bold sm:mb-8 sm:text-3xl">
          Our Partner Universities in Malaysia
        </h2>

        {isLoading ? (
          // Loading state
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <UniversitySkeleton key={i} />
            ))}
          </div>
        ) : universities.length === 0 ? (
          // No results
          <div className="py-8 text-center sm:py-12">
            <GraduationCapIcon className="mx-auto mb-4 h-10 w-10 text-gray-400 sm:h-12 sm:w-12" />
            <h3 className="mb-2 text-lg font-semibold sm:text-xl">
              No universities found
            </h3>
            <p className="text-gray-500">Please check back later</p>
          </div>
        ) : (
          // University cards
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
            {universities.map((uni) => (
              <UniversityCard key={uni.id} university={uni} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
