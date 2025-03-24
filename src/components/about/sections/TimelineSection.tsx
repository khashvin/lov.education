import * as m from "motion/react-m";
import { TimelineItem } from "../elements/TimelineItem";

export function TimelineSection() {
  const timelineItems = [
    { year: '2012', title: 'Foundation', description: 'Literacy of Virtue was founded with a vision to connect students with quality education opportunities.' },
    { year: '2015', title: 'Growth & Expansion', description: 'Expanded our network to include more universities and international partnerships.' },
    { year: '2018', title: 'Service Excellence', description: 'Reached the milestone of helping over 1,000 students achieve their educational goals.' },
    { year: '2022', title: 'Celebrating 10 Years', description: 'A decade of excellence in educational consultancy and student success stories.' }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-[#001e57] mb-4">Our Journey</h2>
          <p className="text-gray-600 text-lg">Key milestones in our history of educational excellence.</p>
        </m.div>
        
        <div className="max-w-5xl mx-auto">
          <div className="space-y-0">
            {timelineItems.map((item, index) => (
              <TimelineItem
                key={index}
                year={item.year}
                title={item.title}
                description={item.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 