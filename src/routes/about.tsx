import { createFileRoute } from '@tanstack/react-router';
import { domAnimation, LazyMotion } from 'motion/react';

import {
  AboutCtaSection,
  AboutHeroSection,
  MissionValuesSection,
  ServicesSection,
  StorySection,
  TimelineSection,
} from '@/components/about';

export const Route = createFileRoute('/about')({
  head: () => ({
    meta: [{ title: 'About - Literacy of Virtue' }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <LazyMotion features={domAnimation}>
      <div className="bg-white">
        <AboutHeroSection />
        <StorySection />
        <MissionValuesSection />
        <ServicesSection />
        <TimelineSection />
        <AboutCtaSection />
      </div>
    </LazyMotion>
  );
}
