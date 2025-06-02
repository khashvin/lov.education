import { MapPinIcon, CalendarIcon } from 'lucide-react';

interface UniversityHeroSectionProps {
  name: string;
  location: string;
  intake: string;
}

export function UniversityHeroSection({
  name,
  location,
  intake,
}: UniversityHeroSectionProps) {
  return (
    <div className="relative h-[300px] bg-[#001e57]">
      <div className="bg-grid-white/[0.1] absolute inset-0 bg-[size:16px_16px]" />
      <div className="relative container mx-auto flex h-full flex-col justify-center px-4">
        <div className="max-w-3xl">
          <h1 className="mb-6 text-4xl leading-tight font-bold text-white md:text-5xl">
            {name}
          </h1>
          <div className="flex flex-wrap gap-6 text-white/90">
            <div className="flex items-center rounded-full bg-white/10 px-4 py-2">
              <MapPinIcon className="mr-2 h-5 w-5" />
              {location}
            </div>
            <div className="flex items-center rounded-full bg-white/10 px-4 py-2">
              <CalendarIcon className="mr-2 h-5 w-5" />
              Intake: {intake}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
