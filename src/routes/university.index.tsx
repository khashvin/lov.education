import { useQuery } from '@tanstack/react-query';
import { createFileRoute } from '@tanstack/react-router';
import { domAnimation, LazyMotion } from 'motion/react';

import {
  UniversityCtaSection,
  UniversityHeroSection,
  UniversityListSection,
} from '@/components/university';
import { getUniversitiesOptions } from '@/lib/queries';

export const Route = createFileRoute('/university/')({
  loader: async ({ context }) => {
    await context.queryClient.ensureQueryData(getUniversitiesOptions);
  },
  head: () => ({
    meta: [{ title: 'University - Literacy of Virtue' }],
  }),
  component: UniversityPage,
});

function UniversityPage() {
  const {
    data: universities = [],
    isLoading: isLoadingUniversities,
    isError: isUniversitiesError,
  } = useQuery(getUniversitiesOptions);

  return (
    <LazyMotion features={domAnimation}>
      <div className="min-h-screen bg-white">
        <UniversityHeroSection />
        <UniversityListSection
          universities={universities}
          isLoading={isLoadingUniversities}
          isError={isUniversitiesError}
        />
        <UniversityCtaSection />
      </div>
    </LazyMotion>
  );
}
