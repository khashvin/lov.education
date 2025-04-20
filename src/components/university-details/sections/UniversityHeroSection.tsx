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
    <div className="relative bg-[#001e57] h-[300px]">
      <div className="absolute inset-0 bg-grid-white/[0.1] bg-[size:16px_16px]" />
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {name}
          </h1>
          <div className="flex flex-wrap gap-6 text-white/90">
            <div className="flex items-center bg-white/10 rounded-full px-4 py-2">
              <MapPinIcon className="h-5 w-5 mr-2" />
              {location}
            </div>
            <div className="flex items-center bg-white/10 rounded-full px-4 py-2">
              <CalendarIcon className="h-5 w-5 mr-2" />
              Intake: {intake}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
