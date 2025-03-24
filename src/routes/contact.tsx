import { createFileRoute } from '@tanstack/react-router'
import { LazyMotion, domAnimation } from "motion/react"
import { 
  ContactHeroSection, 
  ContactInfoSection, 
  MapSection 
} from '@/components/contact'

export const Route = createFileRoute('/contact')({
  component: ContactPage,
})

function ContactPage() {
  return (
    <LazyMotion features={domAnimation}>
      <div className="bg-white">
        <ContactHeroSection />
        <ContactInfoSection />
        <MapSection />
      </div>
    </LazyMotion>
  )
} 