import { FacultyAccordion } from '../elements/FacultyAccordion';

interface UniversityFacultiesSectionProps {
  universityId: number;
}

export function UniversityFacultiesSection({
  universityId,
}: UniversityFacultiesSectionProps) {
  return (
    <div className="mt-8">
      <h2 className="mb-4 text-2xl font-bold">Faculties and Courses</h2>
      <FacultyAccordion universityId={universityId} />
    </div>
  );
}
