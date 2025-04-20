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
        <h2 className="text-2xl font-bold mb-4">About the University</h2>
        <p className="text-gray-700 whitespace-pre-wrap">{description}</p>
      </CardContent>
    </Card>
  );
}
