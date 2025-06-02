import { MapPinIcon, CalendarIcon } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface UniversitySidebarSectionProps {
  location: string;
  intake: string;
  image: string;
}

export function UniversitySidebarSection({
  location,
  intake,
  image,
}: UniversitySidebarSectionProps) {
  return (
    <div className="space-y-6">
      <Card className="overflow-hidden">
        <div className="relative aspect-[4/3]">
          <img
            src={image}
            alt="University campus"
            className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      </Card>

      <Card>
        <CardContent className="p-6">
          <h3 className="mb-6 text-xl font-bold">Quick Facts</h3>
          <div className="space-y-5">
            <div className="flex items-start space-x-3 rounded-lg bg-gray-50 p-3">
              <MapPinIcon className="mt-1 h-5 w-5 text-[#89c540]" />
              <div>
                <h4 className="font-medium text-gray-900">Location</h4>
                <p className="mt-1 text-sm text-gray-600">{location}</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 rounded-lg bg-gray-50 p-3">
              <CalendarIcon className="mt-1 h-5 w-5 text-[#89c540]" />
              <div>
                <h4 className="font-medium text-gray-900">Intake Periods</h4>
                <p className="mt-1 text-sm text-gray-600">{intake}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
