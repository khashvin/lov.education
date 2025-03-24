interface StatsItemProps {
  value: string;
  label: string;
}

export function StatsItem({ value, label }: StatsItemProps) {
  return (
    <div className="flex flex-col items-center md:items-start text-center md:text-left">
      <span className="text-4xl font-bold text-[#89c540]">{value}</span>
      <p className="text-gray-600 mt-2">{label}</p>
    </div>
  );
} 