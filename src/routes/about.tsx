import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: AboutPage,
})

function AboutPage() {
  return (
    <div>
      {/* About Hero Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">About Literacy of Virtue</h1>
            <p className="text-xl text-gray-600">
              We are dedicated to helping students achieve their dreams of studying abroad
              through expert guidance and personalized support.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-600 mb-6">
              Founded with a vision to bridge the gap between ambitious students and quality
              international education, Literacy of Virtue has been at the forefront of
              educational consultancy since its inception.
            </p>
            <p className="text-gray-600 mb-6">
              Our journey began with a simple mission: to make quality education accessible
              to students worldwide. Today, we have helped thousands of students achieve
              their academic goals and build successful careers.
            </p>
            <p className="text-gray-600">
              We take pride in our personalized approach, understanding that each student
              is unique with different aspirations and needs. Our team of experienced
              consultants works tirelessly to ensure that every student receives the
              guidance they need to succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in everything we do, ensuring the highest
                quality of service for our students.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Integrity</h3>
              <p className="text-gray-600">
                We maintain the highest standards of integrity and transparency in
                our dealings with students and institutions.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Student Success</h3>
              <p className="text-gray-600">
                Our students' success is our success. We are committed to helping
                each student achieve their educational goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gray-200"></div>
              <h3 className="text-xl font-semibold">John Doe</h3>
              <p className="text-gray-600">Founder & CEO</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gray-200"></div>
              <h3 className="text-xl font-semibold">Jane Smith</h3>
              <p className="text-gray-600">Education Consultant</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gray-200"></div>
              <h3 className="text-xl font-semibold">Mike Johnson</h3>
              <p className="text-gray-600">Student Relations</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 