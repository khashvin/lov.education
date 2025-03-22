import ServiceCard from '../elements/ServiceCard';

export function ServicesSection() {
  const services = [
    {
      icon: 'fas fa-user-friends',
      title: 'Free Consultation',
      description: 'Our qualified education specialists will guide you in finding the right course and institution in Malaysia based on your academic background, budget, and career aspirations.'
    },
    {
      icon: 'fas fa-handshake',
      title: 'Application Assistance',
      description: 'We\'ll guide you through the entire application process - from choosing Malaysian universities to preparing documents for visa applications and submissions.'
    },
    {
      icon: 'fas fa-paper-plane',
      title: 'Pre-Departure Support',
      description: 'We ensure you\'re fully prepared for life in Malaysia with comprehensive briefings, cultural orientation, and practical advice for a smooth transition.'
    },
    {
      icon: 'fas fa-home',
      title: 'Accommodation Arrangement',
      description: 'No need to worry about where you\'ll stay in Malaysia - we arrange comfortable, convenient accommodation options before your arrival for a stress-free experience.'
    }
  ];

  return (
    <section id="services" className="services-section py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto">
          <div className="text-center mb-16">
            <span className="bg-[#89c540]/10 text-[#89c540] px-4 py-2 rounded-full text-sm font-semibold inline-block mb-4">OUR SERVICES</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#001e57] mb-6">How We Can Help You</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">We're with you every step of the way, from initial consultation to settling into your new life in Malaysia.</p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="grid lg:grid-cols-5">
              {/* Left Side Image */}
              <div className="lg:col-span-2 relative">
                <div className="h-full bg-[#001e57] p-10 flex items-center justify-center">
                  <div className="relative z-10 text-center">
                    <div className="w-32 h-32 bg-white/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                      <i className="fas fa-globe-asia text-[#89c540] text-5xl"></i>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Your Journey to Malaysia Begins Here</h3>
                    <p className="text-white/80">With over a decade of experience, we've helped thousands of international students achieve their dreams of studying in Malaysian institutions.</p>
                  </div>
                </div>
              </div>
              
              {/* Right Side Services */}
              <div className="lg:col-span-3 p-10">
                <div className="space-y-8">
                  {services.map((service, index) => (
                    <ServiceCard 
                      key={index}
                      icon={service.icon}
                      title={service.title}
                      description={service.description}
                    />
                  ))}
                </div>
                
                <div className="mt-10">
                  <a
                    href="#main-form"
                    className="bg-[#001e57] hover:bg-[#001e57]/90 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 inline-flex items-center gap-2 shadow-lg hover:shadow-xl"
                  >
                    Get Started Today
                    <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Why Choose Us */}
          <div className="mt-20 grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-[#001e57] rounded-xl mx-auto mb-5 flex items-center justify-center text-white">
                <i className="fas fa-check-circle text-2xl"></i>
              </div>
              <h3 className="text-lg font-bold text-[#001e57] mb-3">100% Success Rate</h3>
              <p className="text-gray-600">We have a proven track record of successful placements with top universities worldwide.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-[#001e57] rounded-xl mx-auto mb-5 flex items-center justify-center text-white">
                <i className="fas fa-university text-2xl"></i>
              </div>
              <h3 className="text-lg font-bold text-[#001e57] mb-3">University Partnerships</h3>
              <p className="text-gray-600">We maintain strong relationships with prestigious universities across Malaysia.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-[#001e57] rounded-xl mx-auto mb-5 flex items-center justify-center text-white">
                <i className="fas fa-headset text-2xl"></i>
              </div>
              <h3 className="text-lg font-bold text-[#001e57] mb-3">24/7 Support</h3>
              <p className="text-gray-600">Our team is always available to assist you throughout your educational journey.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection; 