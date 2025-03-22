import { GraduationCapIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'

import { UniversityCard } from '../elements/UniversityCard'
import { UniversitySkeleton } from '../elements/UniversitySkeleton'

interface University {
  id: string | number
  name: string
  location: string
  description: string
  intake: string
}

interface UniversityListSectionProps {
  universities: University[]
  isLoading: boolean
  isError: boolean
}

export function UniversityListSection({ universities, isLoading, isError }: UniversityListSectionProps) {
  // Handle errors
  if (isError) {
    return (
      <section className="py-12 lg:py-20">
        <div className="container mx-auto px-4 text-center">
          <GraduationCapIcon className="mx-auto h-16 w-16 text-red-500 mb-4" />
          <h2 className="text-2xl font-bold mb-2">Error Loading Universities</h2>
          <p className="text-gray-600 mb-6">There was a problem loading the university data. Please try again later.</p>
          <Button onClick={() => window.location.reload()}>Refresh Page</Button>
        </div>
      </section>
    )
  }

  return (
    <section className="py-12 lg:py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Partner Universities in Malaysia</h2>
        
        {isLoading ? (
          // Loading state
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map(i => (
              <UniversitySkeleton key={i} />
            ))}
          </div>
        ) : universities.length === 0 ? (
          // No results
          <div className="text-center py-12">
            <GraduationCapIcon className="mx-auto h-12 w-12 text-gray-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">No universities found</h3>
            <p className="text-gray-500">Please check back later</p>
          </div>
        ) : (
          // University cards
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {universities.map((uni) => (
              <UniversityCard key={uni.id} university={uni} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
} 