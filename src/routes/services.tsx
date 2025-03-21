import { createFileRoute } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'

export const Route = createFileRoute('/services')({
  component: ServicesPage,
})

function ServicesPage() {
  return (
    <div>
      {/* Services Hero Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-gray-600">
              Comprehensive education consultancy services to help you achieve your
              international education goals.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">University Application Support</h2>
              <p className="text-gray-600">
                We guide you through every step of the university application process,
                from choosing the right institution to submitting your applications.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  University selection based on your academic profile
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Application document preparation
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Personal statement and essay review
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Application submission and tracking
                </li>
              </ul>
              <Button variant="outline">Learn More</Button>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Visa Application Assistance</h2>
              <p className="text-gray-600">
                Our experienced team helps you navigate the complex visa application
                process with confidence.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Document preparation and verification
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Visa application form filling
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Interview preparation
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Application tracking and follow-up
                </li>
              </ul>
              <Button variant="outline">Learn More</Button>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Test Preparation</h2>
              <p className="text-gray-600">
                Comprehensive preparation programs for international standardized tests.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  IELTS preparation
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  TOEFL coaching
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  GRE/GMAT training
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Practice tests and mock interviews
                </li>
              </ul>
              <Button variant="outline">Learn More</Button>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Pre-Departure Support</h2>
              <p className="text-gray-600">
                Comprehensive support to prepare you for your journey abroad.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Accommodation arrangements
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Travel planning assistance
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Cultural orientation
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Banking and insurance guidance
                </li>
              </ul>
              <Button variant="outline">Learn More</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8">
            Contact us today for a free consultation and take the first step towards
            your international education goals.
          </p>
          <Button variant="secondary" size="lg">
            Contact Us Now
          </Button>
        </div>
      </section>
    </div>
  )
} 