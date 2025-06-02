interface StatsItemProps {
  value: string;
  label: string;
}

export function StatsItem({ value, label }: StatsItemProps) {
  return (
    <div className="flex flex-col items-center text-center md:items-start md:text-left">
      <span className="text-4xl font-bold text-[#89c540]">{value}</span>
      <p className="mt-2 text-gray-600">{label}</p>
    </div>
  );
}
