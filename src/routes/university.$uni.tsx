import { redirect, createFileRoute } from '@tanstack/react-router';
import { GraduationCapIcon } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardContent } from '@/components/ui/card';
import { useQuery } from '@tanstack/react-query';
import { getFacultiesOptions, getUniversityOptions } from '@/lib/queries';
import {
  UniversityHeroSection,
  UniversityAboutSection,
  UniversityFacultiesSection,
  UniversitySidebarSection,
} from '@/components/university-details';

export const Route = createFileRoute('/university/$uni')({
  loader: async ({ context, params }) => {
    const uni = await context.queryClient.ensureQueryData(
      getUniversityOptions(params.uni),
    );
    if (!uni) {
      return redirect({ to: '/university' });
    }
    await context.queryClient.ensureQueryData(getFacultiesOptions(uni.id));
  },
  head: ({ params }) => ({
    meta: [{ title: `${params.uni.toUpperCase()} - Literacy of Virtue` }],
  }),
  component: UniversityDetailsPage,
});

function UniversityDetailsPage() {
  const { uni } = Route.useParams();
  const {
    data: university,
    isLoading,
    isError,
  } = useQuery(getUniversityOptions(uni));

  if (isError) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <GraduationCapIcon className="mx-auto mb-4 h-16 w-16 text-red-500" />
        <h1 className="mb-2 text-2xl font-bold">University Not Found</h1>
        <p className="text-gray-600">
          The university you're looking for doesn't exist or there was an error
          loading it.
        </p>
      </div>
    );
  }

  if (isLoading || !university) {
    return <UniversityDetailsSkeleton />;
  }

  return (
    <div className="min-h-screen bg-white">
      <UniversityHeroSection
        name={university.name}
        location={university.location}
        intake={university.intake}
      />

      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Sidebar for mobile - will appear above content */}
          <div className="lg:hidden">
            <UniversitySidebarSection
              location={university.location}
              intake={university.intake}
              image={university.thumbnail}
            />
          </div>

          <div className="lg:col-span-2">
            <UniversityAboutSection description={university.description} />
            <UniversityFacultiesSection universityId={university.id} />
          </div>

          {/* Sidebar for desktop */}
          <div className="hidden lg:col-span-1 lg:block">
            <UniversitySidebarSection
              location={university.location}
              intake={university.intake}
              image={university.thumbnail}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function UniversityDetailsSkeleton() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section Skeleton */}
      <div className="relative h-[400px] overflow-hidden bg-gray-200">
        <div className="relative container mx-auto flex h-full flex-col justify-end px-4 pb-16">
          <Skeleton className="mb-4 h-12 w-2/3" />
          <div className="flex gap-4">
            <Skeleton className="h-6 w-32" />
            <Skeleton className="h-6 w-32" />
          </div>
        </div>
      </div>

      {/* Content Section Skeleton */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-6">
                <Skeleton className="mb-4 h-8 w-48" />
                <Skeleton className="mb-2 h-4 w-full" />
                <Skeleton className="mb-2 h-4 w-full" />
                <Skeleton className="h-4 w-2/3" />
              </CardContent>
            </Card>

            <div className="mt-8">
              <Skeleton className="mb-4 h-8 w-48" />
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <Card key={i}>
                    <CardContent className="p-6">
                      <Skeleton className="h-6 w-full" />
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <Card>
              <CardContent className="p-6">
                <Skeleton className="mb-4 h-6 w-32" />
                <div className="space-y-4">
                  <Skeleton className="h-16 w-full" />
                  <Skeleton className="h-16 w-full" />
                  <Skeleton className="h-16 w-full" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
