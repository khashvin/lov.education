import * as m from 'motion/react-m';

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
      className="rounded-lg bg-white p-8 shadow-sm transition-shadow duration-300 hover:shadow-md"
    >
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-[#001e57] text-2xl font-bold text-white">
        {icon}
      </div>
      <h3 className="mb-3 text-xl font-bold text-[#001e57]">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </m.div>
  );
}
