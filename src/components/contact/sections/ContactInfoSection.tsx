import ContactInfoCard from '../elements/ContactInfoCard';
import SocialLinks from '../elements/SocialLinks';
import ContactForm from '../elements/ContactForm';

export function ContactInfoSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <h2 className="text-2xl md:text-3xl font-bold text-[#001e57] relative inline-block pb-2 after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-1 after:bg-[#89c540] after:rounded-full">
              Get in Touch
            </h2>
            
            <ContactInfoCard />
            <SocialLinks />
          </div>

          {/* Contact Form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactInfoSection; 