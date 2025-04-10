import { createFileRoute } from '@tanstack/react-router'
import { LazyMotion, domAnimation } from 'motion/react'
import { useUniversities } from '@/hooks/useUniversities'
import { 
  UniversityHeroSection, 
  UniversityListSection, 
  UniversityCtaSection 
} from '@/components/university'

export const Route = createFileRoute('/university/')({
  component: UniversityPage,
  head: () => ({
    meta: [
      {
        title: 'University - Literacy of Virtue',
      },
    ],
  }),
})

function UniversityPage() {
  const { 
    data: universities = [], 
    isLoading: isLoadingUniversities, 
    isError: isUniversitiesError 
  } = useUniversities()

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