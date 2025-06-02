interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

export function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="flex space-x-6">
      <div className="flex-shrink-0">
        <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-[#89c540]/10 text-[#89c540]">
          <i className={`${icon} text-2xl`}></i>
        </div>
      </div>
      <div>
        <h3 className="mb-2 text-xl font-bold text-[#001e57] group-hover:text-[#001e57]">
          {title}
        </h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}

export default ServiceCard;
