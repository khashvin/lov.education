import { Button } from '@/components/ui/button'

export function UniversityCtaSection() {
  return (
    <section className="bg-[#001e57] text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Ready to Study in Malaysia?</h2>
          <p className="text-xl mb-8 text-white/80">
            Our expert consultants can help you navigate the application process, visa requirements,
            and find the perfect Malaysian university for your academic goals.
          </p>
          <Button 
            size="lg" 
            className="bg-[#89c540] hover:bg-[#89c540]/90 text-white px-8 py-6 text-lg"
          >
            Get Free Consultation
          </Button>
        </div>
      </div>
    </section>
  )
} 