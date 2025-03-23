import * as m from "motion/react-m";

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  index: number;
}

export function TimelineItem({ year, title, description, index }: TimelineItemProps) {
  return (
    <m.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} mb-12`}
    >
      <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
        <div className="inline-block bg-[#001e57] text-white px-3 py-1 rounded-md text-sm font-medium mb-2">{year}</div>
        <h3 className="text-xl font-bold text-[#001e57] mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
      <div className="w-0 relative flex items-center justify-center">
        <div className="absolute h-full w-px bg-[#89c540]/30"></div>
        <div className="w-4 h-4 rounded-full bg-[#89c540] border-4 border-white z-10"></div>
      </div>
      <div className="w-1/2"></div>
    </m.div>
  );
} 