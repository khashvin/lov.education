import { MapPinIcon, CalendarIcon } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"

interface UniversitySidebarSectionProps {
  location: string
  intake: string
  image: string
}

export function UniversitySidebarSection({ location, intake, image }: UniversitySidebarSectionProps) {
  return (
    <div className="space-y-6">
      <Card className="overflow-hidden">
        <div className="aspect-[4/3] relative">
          <img 
            src={image} 
            alt="University campus"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      </Card>

      <Card>
        <CardContent className="p-6">
          <h3 className="text-xl font-bold mb-6">Quick Facts</h3>
          <div className="space-y-5">
            <div className="flex items-start space-x-3 p-3 rounded-lg bg-gray-50">
              <MapPinIcon className="h-5 w-5 text-[#89c540] mt-1" />
              <div>
                <h4 className="font-medium text-gray-900">Location</h4>
                <p className="text-sm text-gray-600 mt-1">{location}</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 p-3 rounded-lg bg-gray-50">
              <CalendarIcon className="h-5 w-5 text-[#89c540] mt-1" />
              <div>
                <h4 className="font-medium text-gray-900">Intake Periods</h4>
                <p className="text-sm text-gray-600 mt-1">{intake}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 