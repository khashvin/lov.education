import * as m from 'motion/react-m';

export function StorySection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
          <m.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-3xl font-bold text-[#001e57] mb-8">
              Our Story
            </h2>
            <div className="prose prose-lg text-gray-600 space-y-4">
              <p>
                Literacy of Virtue Sdn Bhd (LOV) was founded on the 15th of
                August 2012 by an individual with vast experience in the
                education industry as well as marketing and management skills.
              </p>
              <p>
                Since its establishment, LOV has been providing highly dedicated
                and professional counselling and placement services to students
                all over Malaysia through a team of highly informative and
                knowledgeable counsellors.
              </p>
            </div>
          </m.div>

          <m.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute top-4 left-4 right-4 bottom-4 border-2 border-[#89c540]/20 rounded-lg -z-10"></div>
            <img
              src="/images/banner/banner2.png"
              alt="Education consultancy"
              className="w-full h-full object-fill rounded-lg shadow-lg"
            />
          </m.div>
        </div>
      </div>
    </section>
  );
}
