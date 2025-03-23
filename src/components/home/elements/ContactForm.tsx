import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

interface FormData {
  name: string;
  phone: string;
  email: string;
  university: string;
  study: string;
  message: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    university: '',
    study: '',
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
    // Here you would handle form submission, such as sending data to an API
    console.log('Form submitted:', formData);
    // Reset form data
    setFormData({
      name: '',
      phone: '',
      email: '',
      university: '',
      study: '',
      message: ''
    });
  };

  return (
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
  );
}

export default ContactForm; 