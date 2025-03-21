import { createFileRoute } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useState } from 'react'

export const Route = createFileRoute('/university')({
  component: UniversityPage,
})

// Mock data for universities
const universities = [
  {
    id: 1,
    name: 'University of Cambridge',
    country: 'United Kingdom',
    ranking: '#3 World Ranking',
    programs: ['Business', 'Engineering', 'Arts', 'Science'],
    image: 'https://example.com/cambridge.jpg',
  },
  {
    id: 2,
    name: 'Harvard University',
    country: 'United States',
    ranking: '#1 World Ranking',
    programs: ['Law', 'Medicine', 'Business', 'Arts'],
    image: 'https://example.com/harvard.jpg',
  },
  {
    id: 3,
    name: 'University of Toronto',
    country: 'Canada',
    ranking: '#18 World Ranking',
    programs: ['Engineering', 'Medicine', 'Arts', 'Science'],
    image: 'https://example.com/toronto.jpg',
  },
  // Add more universities as needed
]

function UniversityPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCountry, setSelectedCountry] = useState('all')

  const filteredUniversities = universities.filter(uni => {
    const matchesSearch = uni.name.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCountry = selectedCountry === 'all' || uni.country === selectedCountry
    return matchesSearch && matchesCountry
  })

  const countries = [...new Set(universities.map(uni => uni.country))]

  return (
    <div>
      {/* Universities Hero Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Partner Universities</h1>
            <p className="text-xl text-gray-600">
              Explore our network of prestigious universities worldwide and find
              the perfect institution for your academic journey.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-10 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="w-full md:w-1/3">
              <Input
                type="search"
                placeholder="Search universities..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex gap-4">
              <select
                className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
              >
                <option value="all">All Countries</option>
                {countries.map(country => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Universities List Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredUniversities.map(uni => (
              <div key={uni.id} className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="aspect-w-16 aspect-h-9 bg-gray-100">
                  {/* Replace with actual university image */}
                  <div className="w-full h-48 bg-gray-200"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{uni.name}</h3>
                  <p className="text-gray-600 mb-2">{uni.country}</p>
                  <p className="text-blue-600 font-semibold mb-4">{uni.ranking}</p>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold mb-2">Popular Programs:</h4>
                    <div className="flex flex-wrap gap-2">
                      {uni.programs.map(program => (
                        <span
                          key={program}
                          className="text-xs bg-gray-100 px-2 py-1 rounded-full"
                        >
                          {program}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Need Help Choosing a University?</h2>
          <p className="text-xl mb-8">
            Our expert consultants can help you find the perfect university based on
            your academic goals and preferences.
          </p>
          <Button variant="secondary" size="lg">
            Get Free Consultation
          </Button>
        </div>
      </section>
    </div>
  )
} 