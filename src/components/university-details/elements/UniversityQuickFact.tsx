import type { LucideIcon } from 'lucide-react'

interface UniversityQuickFactProps {
  icon: LucideIcon;
  title: string;
  value: string;
}

export function UniversityQuickFact({ icon: Icon, title, value }: UniversityQuickFactProps) {
  return (
    <div className="flex items-start space-x-3">
      <Icon className="h-5 w-5 text-gray-500 mt-1" />
      <div>
        <h4 className="font-medium">{title}</h4>
        <p className="text-sm text-gray-600">{value}</p>
      </div>
    </div>
  );
} 