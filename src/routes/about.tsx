;
import { LazyMotion, domAnimation } from 'motion/react';

import {
  AboutHeroSection,
  StorySection,
  MissionValuesSection,
  ServicesSection,
  TimelineSection,
  AboutCtaSection,
} from '@/components/about';

export const Route = createFileRoute({
  component: AboutPage,
  head: () => ({
    meta: [
      {
        title: 'About - Literacy of Virtue',
      },
    ],
  }),
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
