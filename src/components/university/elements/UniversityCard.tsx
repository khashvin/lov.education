import { MapPinIcon, CalendarIcon } from 'lucide-react';
import * as m from 'motion/react-m';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import type { University } from '@/drizzle/schema';
import { createLink, type LinkComponent } from '@tanstack/react-router';
import React from 'react';

interface UniversityCardProps {
  university: University;
}

const BasicButtonLink = React.forwardRef<HTMLButtonElement>((props, ref) => {
  return (
    <Button
      ref={ref}
      {...props}
      className="w-full bg-[#001e57] hover:bg-[#001e57]/90 text-white"
    >
      Learn More
    </Button>
  );
});

const CreatedLinkComponent = createLink(BasicButtonLink);

const ButtonLink: LinkComponent<typeof BasicButtonLink> = (props) => {
  return <CreatedLinkComponent preload={'intent'} {...props} />;
};

export function UniversityCard({ university }: UniversityCardProps) {
  return (
    <m.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg w-full max-w-full">
        <div className="relative overflow-hidden aspect-[3/2] sm:aspect-[16/9]">
          <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
            <img
              src={university.thumbnail}
              alt={university.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <CardHeader className="space-y-2 p-4 sm:p-6">
          <CardTitle className="text-lg sm:text-xl font-bold group-hover:text-[#89c540] transition-colors line-clamp-2">
            {university.name}
          </CardTitle>
          <CardDescription className="flex items-center text-gray-600 text-sm">
            <MapPinIcon className="h-4 w-4 mr-1 shrink-0" />
            <span className="line-clamp-1">{university.location}</span>
          </CardDescription>
        </CardHeader>

        <CardContent className="p-4 sm:p-6 pt-0 sm:pt-0">
          <p className="text-gray-700 text-sm sm:text-base mb-3 sm:mb-4 line-clamp-3">
            {university.description}
          </p>

          <div className="flex items-center text-sm text-gray-600 mb-3 sm:mb-4">
            <CalendarIcon className="h-4 w-4 mr-2 shrink-0" />
            <span className="line-clamp-1">Intake: {university.intake}</span>
          </div>
          {university.fieldOfStudies && (
            <ScrollArea className="w-full whitespace-nowrap rounded-md">
              <div className="flex space-x-2 py-1">
                {university.fieldOfStudies.map((field) => (
                  <Badge
                    key={field}
                    variant="outline"
                    className={`${
                      [
                        'bg-blue-50 text-blue-700 border-blue-200',
                        'bg-green-50 text-green-700 border-green-200',
                        'bg-purple-50 text-purple-700 border-purple-200',
                        'bg-orange-50 text-orange-700 border-orange-200',
                        'bg-pink-50 text-pink-700 border-pink-200',
                      ][Math.floor(Math.random() * 5)]
                    } shrink-0 text-xs sm:text-sm`}
                  >
                    {field}
                  </Badge>
                ))}
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          )}
        </CardContent>

        <CardFooter className="p-4 sm:p-6 pt-2">
          <ButtonLink to="/university/$uni" params={{ uni: university.path }}>
            Learn More
          </ButtonLink>
        </CardFooter>
      </Card>
    </m.div>
  );
}
