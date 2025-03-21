import { createFileRoute } from '@tanstack/react-router'
import { useState, useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import * as m from "motion/react-m"
import { LazyMotion, domAnimation } from "motion/react"

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    country: '',
    university: '',
    study: '',
    message: ''
  })
  
  const banners = [
    "/banner1.png",
    "/banner2.png",
    "/banner3.png"
  ]
  
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })
  const bannerContainerRef = useRef<HTMLDivElement>(null)
  const [, setIsLoaded] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }
    
    handleResize()
    window.addEventListener('resize', handleResize)
    
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / windowSize.width,
        y: e.clientY / windowSize.height
      })
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [windowSize])
  
  useEffect(() => {
    // Auto advance banners
    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % banners.length)
    }, 5000)
    
    return () => clearInterval(interval)
  }, [banners.length])
  
  useEffect(() => {
    // Set loaded state after a delay to trigger animations
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 500)
    
    return () => clearTimeout(timer)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would handle form submission, such as sending data to an API
    console.log('Form submitted:', formData)
    // Reset form data
    setFormData({
      name: '',
      phone: '',
      email: '',
      country: '',
      university: '',
      study: '',
      message: ''
    })
  }

  return (
    <div className="bg-white">
      {/* Innovative Hero Section */}
      <LazyMotion features={domAnimation}>
        <section className="relative overflow-hidden bg-gradient-to-br from-[#001e57] to-[#001a4a]">
          {/* Animated background dots/grid */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)',
              backgroundSize: '20px 20px',
            }}></div>
          </div>
          
          {/* Main hero content */}
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col lg:flex-row min-h-[80vh] md:min-h-[70vh] py-10 md:py-14 items-center">
              {/* Left side - Text and CTA */}
              <div className="w-full lg:w-5/12 text-white z-10 mb-10 lg:mb-0">
                <m.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                >
                  <h4 className="uppercase text-sm sm:text-base tracking-widest font-bold text-[#89c540] mb-2 relative inline-flex items-center">
                    <span className="flex w-3 h-3 mr-2">
                      <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-[#89c540] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-[#89c540]"></span>
                    </span>
                    Malaysian Education Agency
                  </h4>
                  
                  <m.h1 
                    className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                  >
                    <span className="block">Your Gateway to</span>
                    <span className="text-[#89c540]">Malaysian Education</span>
                  </m.h1>
                  
                  <m.p 
                    className="text-base sm:text-lg text-white/90 mb-6 sm:mb-8 max-w-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                  >
                    Expert guidance for international students seeking quality education in Malaysia. 
                    Begin your journey with personalized support every step of the way.
                  </m.p>
                  
                  <m.div 
                    className="flex flex-wrap gap-4"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                  >
                    <a 
                      href="#main-form" 
                      className="bg-[#89c540] hover:bg-[#89c540]/90 text-white px-5 sm:px-6 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 transform hover:-translate-y-1 shadow-[0_0_20px_rgba(137,197,64,0.5)]"
                    >
                      <span>Start Application</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a 
                      href="#services" 
                      className="bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/30 text-white px-5 sm:px-6 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 group"
                    >
                      <span>Our Services</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </m.div>
                  
                  <m.div 
                    className="mt-10 sm:mt-12 flex items-center gap-3 sm:gap-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.6 }}
                  >
                    <div className="flex -space-x-2">
                      {[1, 2, 3].map((i) => (
                        <m.div 
                          key={i} 
                          className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-[#001e57] overflow-hidden"
                          initial={{ opacity: 0, x: 15 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.6 + (i * 0.1) }}
                          style={{
                            backgroundImage: `url(/banner${i}.png)`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                          }}
                        />
                      ))}
                    </div>
                    <m.div 
                      className="text-white/80 text-xs sm:text-sm"
                      initial={{ opacity: 0, x: 15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.9 }}
                    >
                      Trusted by <span className="font-bold text-white">2,000+</span> international students
                    </m.div>
                  </m.div>
                </m.div>
              </div>
              
              {/* Right side - Banners in a creative display */}
              <div 
                className="w-full lg:w-7/12 relative h-[45vh] sm:h-[50vh] md:h-[55vh] lg:h-[60vh]"
                ref={bannerContainerRef}
              >
                <m.div 
                  className="relative w-full h-full rounded-2xl overflow-hidden"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  style={{
                    perspective: '1200px',
                    transformStyle: 'preserve-3d',
                  }}
                >
                  {/* Banner Gallery */}
                  <div className="absolute inset-0 rounded-2xl overflow-hidden">
                    {banners.map((banner, index) => (
                      <m.div 
                        key={index}
                        className="absolute inset-0 w-full h-full"
                        initial={{ opacity: 0 }}
                        animate={{ 
                          opacity: activeIndex === index ? 1 : 0,
                          scale: activeIndex === index ? 1 : 1.1,
                        }}
                        transition={{ 
                          opacity: { duration: 0.8 },
                          scale: { duration: 1.2 }
                        }}
                      >
                        <m.div
                          className="w-full h-full overflow-hidden rounded-2xl"
                          animate={{
                            rotateX: (mousePosition.y - 0.5) * 5,
                            rotateY: (mousePosition.x - 0.5) * -7,
                          }}
                          transition={{ duration: 0.8, type: "spring", damping: 15 }}
                          style={{ transformStyle: 'preserve-3d' }}
                        >
                          <img 
                            src={banner} 
                            alt={`Malaysian education - banner ${index + 1}`} 
                            className="w-full h-full object-cover object-center rounded-2xl select-none"
                            loading={index === 0 ? "eager" : "lazy"}
                          />
                          
                          <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                        </m.div>
                      </m.div>
                    ))}
                  </div>
                  
                  {/* Banner Overlay Elements */}
                  <div className="absolute bottom-8 left-8 right-8 z-20 text-white pointer-events-none">
                    <m.div 
                      className="inline-block px-3 py-1.5 rounded-full text-xs font-medium bg-black/20 backdrop-blur-md border border-white/10"
                      animate={{ opacity: [0.7, 1, 0.7] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      {activeIndex + 1} / {banners.length}
                    </m.div>
                  </div>
                  
                  {/* Controls */}
                  <div className="absolute left-1/2 bottom-4 -translate-x-1/2 z-20 flex space-x-3">
                    {banners.map((_, i) => (
                      <button 
                        key={i}
                        onClick={() => setActiveIndex(i)}
                        className={`h-1.5 ${
                          activeIndex === i 
                            ? 'bg-white w-8' 
                            : 'bg-white/40 hover:bg-white/60 w-4'
                        } rounded-full transition-all duration-300`}
                        aria-label={`View banner ${i + 1}`}
                      />
                    ))}
                  </div>
                </m.div>
                
                {/* Banner Frame & Decorative elements */}
                <m.div 
                  className="absolute -bottom-6 -left-6 md:-bottom-10 md:-left-10 w-32 h-32 md:w-60 md:h-60 bg-[#89c540]/20 rounded-full blur-3xl"
                  animate={{
                    opacity: [0.2, 0.4, 0.2],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
                
                <m.div
                  className="absolute -top-6 -right-6 md:-top-10 md:-right-10 w-32 h-32 md:w-48 md:h-48 bg-[#001e57]/50 rounded-full blur-3xl"
                  animate={{
                    opacity: [0.2, 0.3, 0.2],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
              </div>
            </div>
          </div>
        </section>
      </LazyMotion>

      {/* Services Section */}
      <section id="services" className="services-section py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <span className="bg-[#89c540]/10 text-[#89c540] px-4 py-2 rounded-full text-sm font-semibold inline-block mb-4">OUR SERVICES</span>
              <h2 className="text-3xl md:text-5xl font-bold text-[#001e57] mb-6">How We Can Help You</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">We're with you every step of the way, from initial consultation to settling into your new life in Malaysia.</p>
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
                    {/* Service 1 */}
                    <div className="flex space-x-6">
                      <div className="flex-shrink-0">
                        <div className="w-14 h-14 rounded-lg bg-[#89c540]/10 flex items-center justify-center text-[#89c540]">
                          <i className="fas fa-user-friends text-2xl"></i>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[#001e57] group-hover:text-[#001e57] mb-2">Free Consultation</h3>
                        <p className="text-gray-600">
                          Our qualified education specialists will guide you in finding the right course and institution in Malaysia based on your academic background, budget, and career aspirations.
                        </p>
                      </div>
                    </div>
                    
                    {/* Service 2 */}
                    <div className="flex space-x-6">
                      <div className="flex-shrink-0">
                        <div className="w-14 h-14 rounded-lg bg-[#89c540]/10 flex items-center justify-center text-[#89c540]">
                          <i className="fas fa-handshake text-2xl"></i>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[#001e57] group-hover:text-[#001e57] mb-2">Application Assistance</h3>
                        <p className="text-gray-600">
                          We'll guide you through the entire application process - from choosing Malaysian universities to preparing documents for visa applications and submissions.
                        </p>
                      </div>
                    </div>
                    
                    {/* Service 3 */}
                    <div className="flex space-x-6">
                      <div className="flex-shrink-0">
                        <div className="w-14 h-14 rounded-lg bg-[#89c540]/10 flex items-center justify-center text-[#89c540]">
                          <i className="fas fa-paper-plane text-2xl"></i>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[#001e57] group-hover:text-[#001e57] mb-2">Pre-Departure Support</h3>
                        <p className="text-gray-600">
                          We ensure you're fully prepared for life in Malaysia with comprehensive briefings, cultural orientation, and practical advice for a smooth transition.
                        </p>
                      </div>
                    </div>
                    
                    {/* Service 4 */}
                    <div className="flex space-x-6">
                      <div className="flex-shrink-0">
                        <div className="w-14 h-14 rounded-lg bg-[#89c540]/10 flex items-center justify-center text-[#89c540]">
                          <i className="fas fa-home text-2xl"></i>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[#001e57] group-hover:text-[#001e57] mb-2">Accommodation Arrangement</h3>
                        <p className="text-gray-600">
                          No need to worry about where you'll stay in Malaysia - we arrange comfortable, convenient accommodation options before your arrival for a stress-free experience.
                        </p>
                      </div>
                    </div>
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

      {/* Main Form Section */}
      <section id="main-form" className="main-form py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="bg-[#001e57]/10 text-[#001e57] px-4 py-2 rounded-full text-sm font-semibold inline-block mb-4">START YOUR JOURNEY</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#001e57] mb-4">Ready to Study in Malaysia?</h2>
            <p className="text-gray-600">Fill out the form below and our education experts will get in touch to guide you through the next steps of your Malaysian education journey.</p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="grid md:grid-cols-5">
                {/* Left side - Form */}
                <div className="md:col-span-3 p-8 lg:p-10">
                  <h3 className="text-2xl font-bold text-[#001e57] mb-6">Personal Information</h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="form-group">
                        <label htmlFor="name" className="text-sm font-medium text-gray-600 mb-2 block">Full Name</label>
                        <Input 
                          type="text" 
                          id="name"
                          name="name" 
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Enter your full name" 
                          className="bg-[#f3f5f9] border-transparent focus:border-[#89c540] h-12"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="phone" className="text-sm font-medium text-gray-600 mb-2 block">Phone Number</label>
                        <Input 
                          type="tel" 
                          id="phone"
                          name="phone" 
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Enter your phone number" 
                          className="bg-[#f3f5f9] border-transparent focus:border-[#89c540] h-12"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="email" className="text-sm font-medium text-gray-600 mb-2 block">Email Address</label>
                      <Input 
                        type="email" 
                        id="email"
                        name="email" 
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email address" 
                        className="bg-[#f3f5f9] border-transparent focus:border-[#89c540] h-12"
                        required
                      />
                    </div>
                    
                    <h3 className="text-xl font-bold text-[#001e57] mt-8 mb-4">Study Preferences</h3>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="form-group">
                        <label htmlFor="country" className="text-sm font-medium text-gray-600 mb-2 block">Preferred Region</label>
                        <Select 
                          value={formData.country} 
                          onValueChange={(value) => handleSelectChange('country', value)}
                        >
                          <SelectTrigger id="country" className="bg-[#f3f5f9] border-transparent focus:border-[#89c540] h-12">
                            <SelectValue placeholder="Select preferred region" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="KL">Kuala Lumpur</SelectItem>
                            <SelectItem value="Selangor">Selangor</SelectItem>
                            <SelectItem value="Penang">Penang</SelectItem>
                            <SelectItem value="Johor">Johor</SelectItem>
                            <SelectItem value="Sabah">Sabah</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="form-group">
                        <label htmlFor="university" className="text-sm font-medium text-gray-600 mb-2 block">Preferred University</label>
                        <Input 
                          type="text" 
                          id="university"
                          name="university" 
                          value={formData.university}
                          onChange={handleChange}
                          placeholder="Enter preferred university" 
                          className="bg-[#f3f5f9] border-transparent focus:border-[#89c540] h-12"
                        />
                      </div>
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="study" className="text-sm font-medium text-gray-600 mb-2 block">Field of Study</label>
                      <Input 
                        type="text" 
                        id="study"
                        name="study" 
                        value={formData.study}
                        onChange={handleChange}
                        placeholder="What do you want to study?" 
                        className="bg-[#f3f5f9] border-transparent focus:border-[#89c540] h-12"
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="message" className="text-sm font-medium text-gray-600 mb-2 block">Additional Information</label>
                      <Textarea 
                        id="message"
                        name="message" 
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Any specific requirements or questions?" 
                        className="bg-[#f3f5f9] border-transparent focus:border-[#89c540] min-h-[140px]"
                      />
                    </div>
                    
                    <div className="form-group pt-4">
                      <Button 
                        type="submit" 
                        className="w-full bg-[#001e57] hover:bg-[#001e57]/90 text-white h-12 font-medium hover:shadow-xl transition-all duration-300"
                      >
                        <span className="flex items-center justify-center gap-2">
                          <span>Submit Inquiry</span>
                          <i className="fas fa-paper-plane"></i>
                        </span>
                      </Button>
                    </div>
                  </form>
                </div>
                
                {/* Right side - Info */}
                <div className="md:col-span-2 bg-[#001e57] text-white relative overflow-hidden">
                  <div className="p-8 lg:p-10 h-full flex flex-col">
                    <div className="mb-10">
                      <h4 className="text-2xl font-bold mb-4">Why Study in Malaysia?</h4>
                      <ul className="space-y-4">
                        <li className="flex gap-3">
                          <div className="flex-shrink-0 mt-1">
                            <div className="w-6 h-6 rounded-full bg-[#89c540]/20 flex items-center justify-center">
                              <i className="fas fa-check text-[#89c540] text-sm"></i>
                            </div>
                          </div>
                          <p className="text-white/80">World-class education at affordable costs compared to Western countries</p>
                        </li>
                        <li className="flex gap-3">
                          <div className="flex-shrink-0 mt-1">
                            <div className="w-6 h-6 rounded-full bg-[#89c540]/20 flex items-center justify-center">
                              <i className="fas fa-check text-[#89c540] text-sm"></i>
                            </div>
                          </div>
                          <p className="text-white/80">Diverse multicultural environment with English-taught programs</p>
                        </li>
                        <li className="flex gap-3">
                          <div className="flex-shrink-0 mt-1">
                            <div className="w-6 h-6 rounded-full bg-[#89c540]/20 flex items-center justify-center">
                              <i className="fas fa-check text-[#89c540] text-sm"></i>
                            </div>
                          </div>
                          <p className="text-white/80">Safe country with vibrant culture and lower cost of living</p>
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
    </div>
  )
}
