import { createFileRoute } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'

export const Route = createFileRoute('/university/$unipath')({
  component: UniversityDetailsPage,
})

// Mock data for a specific university
const universityData = {
  id: 1,
  name: 'University of Cambridge',
  country: 'United Kingdom',
  ranking: '#3 World Ranking',
  established: 1209,
  type: 'Public Research University',
  location: 'Cambridge, England',
  totalStudents: '23,247',
  internationalStudents: '8,000+',
  acceptanceRate: '21%',
  description: `The University of Cambridge is one of the world's oldest and most prestigious universities. 
    Founded in 1209, it has been home to some of history's most influential thinkers and has consistently 
    ranked among the top universities globally.`,
  programs: [
    {
      name: 'Computer Science',
      degree: 'Bachelor of Science',
      duration: '3 years',
      tuition: '£33,825 per year',
    },
    {
      name: 'Business Administration',
      degree: 'Master of Business Administration',
      duration: '1 year',
      tuition: '£59,000 total',
    },
    {
      name: 'Engineering',
      degree: 'Master of Engineering',
      duration: '4 years',
      tuition: '£35,517 per year',
    },
  ],
  facilities: [
    'World-class libraries',
    'State-of-the-art laboratories',
    'Sports facilities',
    'Student accommodation',
    'Research centers',
  ],
  admissionRequirements: [
    'Strong academic record',
    'English language proficiency',
    'Letters of recommendation',
    'Personal statement',
    'Standardized test scores',
  ],
}

function UniversityDetailsPage() {
  return (
    <div>
      {/* University Hero Section */}
      <section className="relative bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold mb-4">{universityData.name}</h1>
            <p className="text-xl mb-4">{universityData.location}</p>
            <div className="flex items-center gap-4">
              <span className="bg-blue-500 px-3 py-1 rounded-full text-sm">
                {universityData.ranking}
              </span>
              <span className="bg-blue-500 px-3 py-1 rounded-full text-sm">
                Established {universityData.established}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-blue-600 mb-2">{universityData.totalStudents}</h3>
              <p className="text-gray-600">Total Students</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-blue-600 mb-2">{universityData.internationalStudents}</h3>
              <p className="text-gray-600">International Students</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-blue-600 mb-2">{universityData.acceptanceRate}</h3>
              <p className="text-gray-600">Acceptance Rate</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-blue-600 mb-2">{universityData.type}</h3>
              <p className="text-gray-600">Institution Type</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Left Column - About and Programs */}
            <div className="md:col-span-2 space-y-12">
              {/* About Section */}
              <div>
                <h2 className="text-3xl font-bold mb-6">About the University</h2>
                <p className="text-gray-600 leading-relaxed">{universityData.description}</p>
              </div>

              {/* Programs Section */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Popular Programs</h2>
                <div className="space-y-6">
                  {universityData.programs.map((program, index) => (
                    <div key={index} className="border rounded-lg p-6">
                      <h3 className="text-xl font-bold mb-4">{program.name}</h3>
                      <div className="grid md:grid-cols-3 gap-4 text-gray-600">
                        <div>
                          <p className="font-semibold">Degree</p>
                          <p>{program.degree}</p>
                        </div>
                        <div>
                          <p className="font-semibold">Duration</p>
                          <p>{program.duration}</p>
                        </div>
                        <div>
                          <p className="font-semibold">Tuition</p>
                          <p>{program.tuition}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Requirements and Facilities */}
            <div className="space-y-12">
              {/* Application Requirements */}
              <div className="border rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-6">Admission Requirements</h2>
                <ul className="space-y-3">
                  {universityData.admissionRequirements.map((req, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      {req}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Facilities */}
              <div className="border rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-6">Facilities</h2>
                <ul className="space-y-3">
                  {universityData.facilities.map((facility, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      {facility}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Apply Now CTA */}
              <div className="bg-gray-50 rounded-lg p-6 text-center">
                <h3 className="text-2xl font-bold mb-4">Ready to Apply?</h3>
                <p className="text-gray-600 mb-6">
                  Get expert guidance through the application process.
                </p>
                <Button size="lg" className="w-full">
                  Start Application
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 