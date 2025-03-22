export function MapSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="rounded-xl overflow-hidden shadow-lg">
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
        </div>
      </div>
    </section>
  );
}

export default MapSection; 