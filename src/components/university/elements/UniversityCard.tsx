import { createLink, type LinkComponent } from '@tanstack/react-router';
import { CalendarIcon, MapPinIcon } from 'lucide-react';
import * as m from 'motion/react-m';
import React from 'react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import type { University } from '@/drizzle/schema';

interface UniversityCardProps {
  university: University;
}

const BasicButtonLink = React.forwardRef<HTMLButtonElement>((props, ref) => {
  return (
    <Button
      ref={ref}
      {...props}
      className="w-full bg-[#001e57] text-white hover:bg-[#001e57]/90"
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
      <Card className="group w-full max-w-full overflow-hidden transition-all duration-300 hover:shadow-lg">
        <div className="relative aspect-[3/2] overflow-hidden sm:aspect-[16/9]">
          <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
            <img
              src={university.thumbnail}
              alt={university.name}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <CardHeader className="space-y-2 p-4 sm:p-6">
          <CardTitle className="line-clamp-2 text-lg font-bold transition-colors group-hover:text-[#89c540] sm:text-xl">
            {university.name}
          </CardTitle>
          <CardDescription className="flex items-center text-sm text-gray-600">
            <MapPinIcon className="mr-1 h-4 w-4 shrink-0" />
            <span className="line-clamp-1">{university.location}</span>
          </CardDescription>
        </CardHeader>

        <CardContent className="p-4 pt-0 sm:p-6 sm:pt-0">
          <p className="mb-3 line-clamp-3 text-sm text-gray-700 sm:mb-4 sm:text-base">
            {university.description}
          </p>

          <div className="mb-3 flex items-center text-sm text-gray-600 sm:mb-4">
            <CalendarIcon className="mr-2 h-4 w-4 shrink-0" />
            <span className="line-clamp-1">Intake: {university.intake}</span>
          </div>
          {university.fieldOfStudies && (
            <ScrollArea className="w-full rounded-md whitespace-nowrap">
              <div className="flex space-x-2 py-1">
                {university.fieldOfStudies.map((field) => (
                  <Badge
                    key={field}
                    variant="outline"
                    className={`${
                      [
                        'border-blue-200 bg-blue-50 text-blue-700',
                        'border-green-200 bg-green-50 text-green-700',
                        'border-purple-200 bg-purple-50 text-purple-700',
                        'border-orange-200 bg-orange-50 text-orange-700',
                        'border-pink-200 bg-pink-50 text-pink-700',
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

        <CardFooter className="p-4 pt-2 sm:p-6">
          <ButtonLink to="/university/$uni" params={{ uni: university.path }}>
            Learn More
          </ButtonLink>
        </CardFooter>
      </Card>
    </m.div>
  );
}
