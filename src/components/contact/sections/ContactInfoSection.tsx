import * as m from "motion/react-m";
import ContactInfoCard from '../elements/ContactInfoCard';
import SocialLinks from '../elements/SocialLinks';
import ContactForm from '../elements/ContactForm';

export function ContactInfoSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <m.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#001e57] relative inline-block pb-2 after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-1 after:bg-[#89c540] after:rounded-full">
              Get in Touch
            </h2>
            
            <ContactInfoCard />
            <SocialLinks />
          </m.div>

          {/* Contact Form */}
          <m.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <ContactForm />
          </m.div>
        </div>
      </div>
    </section>
  );
}

export default ContactInfoSection; 