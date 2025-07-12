import { createFileRoute } from '@tanstack/react-router';

import {
  ContactFormSection,
  HeroSection,
  ServicesSection,
} from '@/components/home';

export const Route = createFileRoute('/')({
  component: HomePage,
});

function HomePage() {
  return (
    <div className="bg-white">
      <HeroSection />
      <ServicesSection />
      <ContactFormSection />
    </div>
  );
}
