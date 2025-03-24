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