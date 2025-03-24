import * as m from "motion/react-m";

interface ValueCardProps {
  title: string;
  description: string;
  icon: string;
  index: number;
}

export function ValueCard({ title, description, icon, index }: ValueCardProps) {
  return (
    <m.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
    >
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#001e57] text-white text-2xl font-bold mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-[#001e57] mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </m.div>
  );
} 