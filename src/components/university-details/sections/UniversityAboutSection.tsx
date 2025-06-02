import { Card, CardContent } from '@/components/ui/card';

interface UniversityAboutSectionProps {
  description: string;
}

export function UniversityAboutSection({
  description,
}: UniversityAboutSectionProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <h2 className="mb-4 text-2xl font-bold">About the University</h2>
        <p className="whitespace-pre-wrap text-gray-700">{description}</p>
      </CardContent>
    </Card>
  );
}
