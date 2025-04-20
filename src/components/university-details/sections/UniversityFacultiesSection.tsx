import { FacultyAccordion } from '../elements/FacultyAccordion';

interface UniversityFacultiesSectionProps {
  universityId: number;
}

export function UniversityFacultiesSection({
  universityId,
}: UniversityFacultiesSectionProps) {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Faculties and Courses</h2>
      <FacultyAccordion universityId={universityId} />
    </div>
  );
}
