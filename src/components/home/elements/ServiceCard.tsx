interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

export function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="flex space-x-6">
      <div className="flex-shrink-0">
        <div className="w-14 h-14 rounded-lg bg-[#89c540]/10 flex items-center justify-center text-[#89c540]">
          <i className={`${icon} text-2xl`}></i>
        </div>
      </div>
      <div>
        <h3 className="text-xl font-bold text-[#001e57] group-hover:text-[#001e57] mb-2">
          {title}
        </h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}

export default ServiceCard;
