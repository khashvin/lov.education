import { createFileRoute } from '@tanstack/react-router'
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
    <div>
      <ContactHeroSection />
      <ContactInfoSection />
      <MapSection />
    </div>
  )
} 