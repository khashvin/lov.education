import { createFileRoute } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card } from '@/components/ui/card'
import { useState } from 'react'

export const Route = createFileRoute('/contact')({
  component: ContactPage,
})

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would handle the form submission, such as sending to an API
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div>
      {/* Contact Hero Section */}
      <section className="relative overflow-hidden py-20 bg-[#001e57]">
        <div className="absolute inset-0 bg-[#001e57]/10 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#001e57] to-transparent opacity-90"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
              Contact <span className="text-[#89c540]">Us</span>
            </h1>
            <p className="text-xl text-white/90">
              Get in touch with us for any inquiries about our services or to
              schedule a consultation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information and Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <h2 className="text-2xl md:text-3xl font-bold text-[#001e57] relative inline-block pb-2 after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-1 after:bg-[#89c540] after:rounded-full">
                Get in Touch
              </h2>
              
              <div className="bg-[#001e57] text-white p-8 rounded-xl shadow-xl">
                <div className="grid gap-8">
                  <div className="flex items-center gap-5">
                    <div className="bg-[#89c540]/20 text-[#89c540] rounded-full p-3 flex items-center justify-center w-12 h-12 flex-shrink-0">
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <div>
                      <h3 className="font-medium text-[#89c540]">Our Location</h3>
                      <p className="text-white/90 mt-1">
                        C-3A-03, Centum @ Oasis Corporate Park,<br />
                        No., 2, Jalan PJU 1A/3A, Taipan<br />
                        Ara Damansara, 47301 Petaling Jaya
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-5">
                    <div className="bg-[#89c540]/20 text-[#89c540] rounded-full p-3 flex items-center justify-center w-12 h-12 flex-shrink-0">
                      <i className="fas fa-phone-alt"></i>
                    </div>
                    <div>
                      <h3 className="font-medium text-[#89c540]">Call Us</h3>
                      <p className="text-white/90 mt-1">
                        <a href="tel:+60124209899" className="hover:text-[#89c540] transition-colors duration-300">
                          +6012 - 420 9899
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-5">
                    <div className="bg-[#89c540]/20 text-[#89c540] rounded-full p-3 flex items-center justify-center w-12 h-12 flex-shrink-0">
                      <i className="fas fa-envelope"></i>
                    </div>
                    <div>
                      <h3 className="font-medium text-[#89c540]">Email Us</h3>
                      <p className="text-white/90 mt-1">
                        <a href="mailto:info@lov.education" className="hover:text-[#89c540] transition-colors duration-300">
                          info@lov.education
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-5">
                    <div className="bg-[#89c540]/20 text-[#89c540] rounded-full p-3 flex items-center justify-center w-12 h-12 flex-shrink-0">
                      <i className="fas fa-clock"></i>
                    </div>
                    <div>
                      <h3 className="font-medium text-[#89c540]">Working Hours</h3>
                      <p className="text-white/90 mt-1">
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        Saturday: 10:00 AM - 2:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-semibold mb-5 text-[#001e57]">Connect With Us</h3>
                <div className="flex gap-4">
                  <a 
                    href="https://facebook.com/literacyofvirtue" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-[#001e57] text-white hover:bg-[#89c540] transition-all duration-300 w-12 h-12 rounded-lg flex items-center justify-center shadow-md hover:shadow-lg"
                  >
                    <i className="fab fa-facebook-f text-lg"></i>
                  </a>
                  <a 
                    href="https://instagram.com/literacyofvirtue" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-[#001e57] text-white hover:bg-[#89c540] transition-all duration-300 w-12 h-12 rounded-lg flex items-center justify-center shadow-md hover:shadow-lg"
                  >
                    <i className="fab fa-instagram text-lg"></i>
                  </a>
                  <a 
                    href="https://wa.me/60124209899" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-[#001e57] text-white hover:bg-[#89c540] transition-all duration-300 w-12 h-12 rounded-lg flex items-center justify-center shadow-md hover:shadow-lg"
                  >
                    <i className="fab fa-whatsapp text-lg"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="border-0 shadow-2xl overflow-hidden">
                <div className="p-8 md:p-10 bg-white">
                  <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#001e57] relative pb-4 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-16 after:bg-[#89c540]">
                    Send Us a Message
                  </h2>
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <Input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-[#f3f5f9] border-transparent focus:border-[#89c540] h-12"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-[#f3f5f9] border-transparent focus:border-[#89c540] h-12"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <Input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="bg-[#f3f5f9] border-transparent focus:border-[#89c540] h-12"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Subject <span className="text-red-500">*</span>
                      </label>
                      <Input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="bg-[#f3f5f9] border-transparent focus:border-[#89c540] h-12"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        required
                        className="bg-[#f3f5f9] border-transparent focus:border-[#89c540] min-h-[140px]"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-[#001e57] hover:bg-[#001e57]/90 text-white h-12 font-medium"
                    >
                      Send Message
                    </Button>
                  </form>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
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
    </div>
  )
} 