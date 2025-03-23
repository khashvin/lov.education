import * as m from "motion/react-m";

export function MapSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <m.div 
          className="rounded-xl overflow-hidden shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <iframe 
            title="Google Map" 
            className="w-full h-[500px]" 
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=Literacy%20of%20Virtue%20Ara%20Damansara&t=&z=15&ie=UTF8&iwloc=&output=embed"
            frameBorder="0" 
            scrolling="no" 
            marginHeight={0} 
            marginWidth={0}
            loading="lazy"
          >
          </iframe>
        </m.div>
      </div>
    </section>
  );
}

export default MapSection; 