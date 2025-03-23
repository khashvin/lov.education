import { GraduationCapIcon, MapPinIcon, CalendarIcon } from 'lucide-react'
import * as m from 'motion/react-m'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import type { University } from '@/drizzle/schema'
import { createLink, type LinkComponent } from '@tanstack/react-router'
import React from 'react'

interface UniversityCardProps {
  university: University
}

const BasicButtonLink = React.forwardRef<HTMLButtonElement>(
  (props, ref) => {
    return (
      <Button ref={ref} {...props} className="w-full bg-[#001e57] hover:bg-[#001e57]/90 text-white">
        Learn More
      </Button>
    )
  },
)

const CreatedLinkComponent = createLink(BasicButtonLink)

const ButtonLink: LinkComponent<typeof BasicButtonLink> = (props) => {
  return <CreatedLinkComponent preload={'intent'} {...props} />
}

export function UniversityCard({ university }: UniversityCardProps) {
  return (
    <m.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg">
        <div className="relative overflow-hidden aspect-[16/9]">
          <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
            <GraduationCapIcon className="h-12 w-12 text-gray-400" />
          </div>
        </div>
        
        <CardHeader>
          <CardTitle className="text-xl font-bold group-hover:text-[#89c540] transition-colors">
            {university.name}
          </CardTitle>
          <CardDescription className="flex items-center text-gray-600">
            <MapPinIcon className="h-4 w-4 mr-1 inline" />
            {university.location}
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <p className="text-gray-700 mb-4 line-clamp-3">{university.description}</p>
          
          <div className="flex items-center text-sm text-gray-600 mb-4">
            <CalendarIcon className="h-4 w-4 mr-2" />
            <span>Intake: {university.intake}</span>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
              Business
            </Badge>
            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
              Engineering
            </Badge>
            <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
              Arts
            </Badge>
          </div>
        </CardContent>
        
        <CardFooter className="pt-2">
          <ButtonLink to="/university/$uni" params={{ uni: university.path}}>
            Learn More
          </ButtonLink>
        </CardFooter>
      </Card>
    </m.div>
  )
} 