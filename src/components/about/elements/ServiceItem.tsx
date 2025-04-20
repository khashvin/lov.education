import * as m from 'motion/react-m';

interface ServiceItemProps {
  title: string;
  description: string;
  number: string;
  index: number;
}

export function ServiceItem({
  title,
  description,
  number,
  index,
}: ServiceItemProps) {
  return (
    <m.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      className="flex gap-6"
    >
      <div className="text-5xl font-bold text-[#89c540]/20">{number}</div>
      <div>
        <h3 className="text-xl font-bold text-[#001e57] mb-3">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </m.div>
  );
}
