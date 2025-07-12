import { createFileRoute } from '@tanstack/react-router';
import { domAnimation, LazyMotion } from 'motion/react';

import {
  ContactHeroSection,
  ContactInfoSection,
  MapSection,
} from '@/components/contact';

export const Route = createFileRoute('/contact')({
  head: () => ({
    meta: [{ title: 'Contact - Literacy of Virtue' }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <LazyMotion features={domAnimation}>
      <div className="bg-white">
        <ContactHeroSection />
        <ContactInfoSection />
        <MapSection />
      </div>
    </LazyMotion>
  );
}
