import { createFileRoute } from '@tanstack/react-router'
import { LazyMotion, domAnimation } from 'motion/react'
import { getUniversitiesOptions } from '@/lib/queries'
import { useQuery } from '@tanstack/react-query'
import { 
  UniversityHeroSection, 
  UniversityListSection, 
  UniversityCtaSection 
} from '@/components/university'

export const Route = createFileRoute('/university/')({
  component: UniversityPage,
  loader: async ({ context }) => {
    await context.queryClient.ensureQueryData(getUniversitiesOptions);
  },
  head: () => ({
    meta: [
      {
        title: 'University - Literacy of Virtue',
      },
    ],
  }),
})

function UniversityPage() {
  const { data: universities = [], isLoading: isLoadingUniversities, isError: isUniversitiesError } = useQuery(getUniversitiesOptions)

  return (
    <LazyMotion features={domAnimation}>
      <div className="bg-white min-h-screen">
        <UniversityHeroSection />
        <UniversityListSection 
          universities={universities}
          isLoading={isLoadingUniversities}
          isError={isUniversitiesError}
        />
        <UniversityCtaSection />
      </div>
    </LazyMotion>
  )
} 