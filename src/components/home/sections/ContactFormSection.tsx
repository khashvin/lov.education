import ContactForm from '../elements/ContactForm';

export function ContactFormSection() {
  return (
    <section id="main-form" className="main-form py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mx-auto mb-16">
          <span className="bg-[#001e57]/10 text-[#001e57] px-4 py-2 rounded-full text-sm font-semibold inline-block mb-4">START YOUR JOURNEY</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#001e57] mb-4">Ready to Study in Malaysia?</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">Fill out the form below and our education experts will get in touch to guide you through the next steps of your Malaysian education journey.</p>
        </div>
        
        <div className="mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="grid md:grid-cols-5">
              {/* Left side - Form */}
              <div className="md:col-span-3 p-8 lg:p-10">
                <h3 className="text-2xl font-bold text-[#001e57] mb-6">Personal Information</h3>
                <ContactForm />
              </div>
              
              {/* Right side - Info */}
              <div className="md:col-span-2 bg-[#001e57] text-white relative overflow-hidden">
                <div className="p-8 lg:p-10 h-full flex flex-col">
                  <div className="mb-6">
                    <h4 className="text-2xl font-bold mb-5">Why Study in Malaysia?</h4>
                    <ul className="space-y-6">
                      <li className="flex gap-5">
                        <div className="flex-shrink-0 mt-1">
                          <div className="w-6 h-6 rounded-full bg-[#89c540]/20 flex items-center justify-center">
                            <i className="fas fa-check text-[#89c540] text-sm"></i>
                          </div>
                        </div>
                        <p className="text-white/80 text-base md:text-lg">World-class education at affordable costs compared to Western countries</p>
                      </li>
                      <li className="flex gap-5">
                        <div className="flex-shrink-0 mt-1">
                          <div className="w-6 h-6 rounded-full bg-[#89c540]/20 flex items-center justify-center">
                            <i className="fas fa-check text-[#89c540] text-sm"></i>
                          </div>
                        </div>
                        <p className="text-white/80 text-base md:text-lg">Diverse multicultural environment with English-taught programs</p>
                      </li>
                      <li className="flex gap-5">
                        <div className="flex-shrink-0 mt-1">
                          <div className="w-6 h-6 rounded-full bg-[#89c540]/20 flex items-center justify-center">
                            <i className="fas fa-check text-[#89c540] text-sm"></i>
                          </div>
                        </div>
                        <p className="text-white/80 text-base md:text-lg">Safe country with vibrant culture and lower cost of living</p>
                      </li>
                      <li className="flex gap-5">
                        <div className="flex-shrink-0 mt-1">
                          <div className="w-6 h-6 rounded-full bg-[#89c540]/20 flex items-center justify-center">
                            <i className="fas fa-check text-[#89c540] text-sm"></i>
                          </div>
                        </div>
                        <p className="text-white/80 text-base md:text-lg">Internationally recognized degrees and qualifications</p>
                      </li>
                      <li className="flex gap-5">
                        <div className="flex-shrink-0 mt-1">
                          <div className="w-6 h-6 rounded-full bg-[#89c540]/20 flex items-center justify-center">
                            <i className="fas fa-check text-[#89c540] text-sm"></i>
                          </div>
                        </div>
                        <p className="text-white/80 text-base md:text-lg">Strategic location in Southeast Asia with excellent travel opportunities</p>
                      </li>
                      <li className="flex gap-5">
                        <div className="flex-shrink-0 mt-1">
                          <div className="w-6 h-6 rounded-full bg-[#89c540]/20 flex items-center justify-center">
                            <i className="fas fa-check text-[#89c540] text-sm"></i>
                          </div>
                        </div>
                        <p className="text-white/80 text-base md:text-lg">Strong industry connections offering internship and job opportunities</p>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="mt-auto">
                    <div className="rounded-xl bg-white/5 p-6 backdrop-blur-sm">
                      <div className="flex gap-4 items-center">
                        <div className="w-12 h-12 bg-[#89c540]/20 rounded-full flex items-center justify-center">
                          <i className="fas fa-headset text-[#89c540]"></i>
                        </div>
                        <div>
                          <h5 className="font-medium text-[#89c540]">Need Immediate Help?</h5>
                          <a href="tel:+60124209899" className="text-white hover:text-[#89c540] transition-colors text-lg font-bold">
                            +6012 - 420 9899
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Background pattern */}
                <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none">
                  <i className="fas fa-globe-asia text-9xl"></i>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-500">By submitting this form, you agree to our <a href="#" className="text-[#001e57] hover:text-[#89c540] underline">privacy policy</a> and terms of service.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactFormSection; 