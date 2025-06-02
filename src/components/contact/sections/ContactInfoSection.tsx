import * as m from 'motion/react-m';
import ContactInfoCard from '../elements/ContactInfoCard';
import SocialLinks from '../elements/SocialLinks';
import ContactForm from '../elements/ContactForm';

export function ContactInfoSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 md:grid-cols-2">
          {/* Contact Information */}
          <m.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <h2 className="relative inline-block pb-2 text-2xl font-bold text-[#001e57] after:absolute after:right-0 after:bottom-0 after:left-0 after:h-1 after:rounded-full after:bg-[#89c540] after:content-[''] md:text-3xl">
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
