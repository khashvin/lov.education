import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { handleContactForm } from '@/functions/form-handlers';
import { useForm } from '@tanstack/react-form';
import { ContactFormSchema } from '@/lib/form-schema';
import { toast } from "sonner";

export function ContactForm() {

  const form = useForm({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    },
    validators: {
      onChange: ContactFormSchema,
      onSubmit: ContactFormSchema,
    },
    onSubmit: async ({ formApi, value }) => {
      try {
        await handleContactForm({ data: value })
        toast.success("Message sent successfully! We'll get back to you soon.")
        formApi.reset()
      } catch (error) {
        console.error("Form submission error:", error)
        toast.error("Failed to send message. Please try again later.")
      }
    }
  })

  return (
    <Card className="border-0 shadow-2xl overflow-hidden">
      <div className="p-8 md:p-10 bg-white">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#001e57] relative pb-4 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-16 after:bg-[#89c540]">
          Send Us a Message
        </h2>

        <form 
          className='space-y-4'
          onSubmit={(e) => {
            e.preventDefault()
            e.stopPropagation()
            form.handleSubmit()
          }} 
        >
          <form.Field
            name='name'
          >
            {(field) => (
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  required
                  className={`bg-[#f3f5f9] border-transparent focus:border-[#89c540] h-12 ${field.state.meta.errors.length ? 'border-red-500' : ''}`}
                />
                {field.state.meta.errors.length > 0 && (
                  <p className="text-red-500 text-xs mt-1">{field.state.meta.errors[0]?.message || "Invalid input"}</p>
                )}
              </div>
            )}
          </form.Field>

          <form.Field
            name='email'
          >
            {(field) => (
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  required
                  className={`bg-[#f3f5f9] border-transparent focus:border-[#89c540] h-12 ${field.state.meta.errors.length ? 'border-red-500' : ''}`}
                />
                {field.state.meta.errors.length > 0 && (
                  <p className="text-red-500 text-xs mt-1">{field.state.meta.errors[0]?.message || "Invalid email"}</p>
                )}
              </div>
            )}
          </form.Field>

          <form.Field
            name='phone'
          >
            {(field) => (
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <Input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  className={`bg-[#f3f5f9] border-transparent focus:border-[#89c540] h-12 ${field.state.meta.errors.length ? 'border-red-500' : ''}`}
                />
                {field.state.meta.errors.length > 0 && (
                  <p className="text-red-500 text-xs mt-1">{field.state.meta.errors[0]?.message || "Invalid phone number"}</p>
                )}
              </div>
            )}
          </form.Field>

          
          <form.Field
            name='subject'
          >
            {(field) => (
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject <span className="text-red-500">*</span>
                </label>
                <Input
                  type="text"
                  id="subject"
                  name="subject"
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  required
                  className={`bg-[#f3f5f9] border-transparent focus:border-[#89c540] h-12 ${field.state.meta.errors.length ? 'border-red-500' : ''}`}
                />
                {field.state.meta.errors.length > 0 && (
                  <p className="text-red-500 text-xs mt-1">{field.state.meta.errors[0]?.message || "Invalid subject"}</p>
                )}
              </div>
            )}
          </form.Field>

          <form.Field
            name='message'
          >
            {(field) => (
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message <span className="text-red-500">*</span>
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  rows={5}
                  required
                  className={`bg-[#f3f5f9] border-transparent focus:border-[#89c540] min-h-[140px] ${field.state.meta.errors.length ? 'border-red-500' : ''}`}
                />
                {field.state.meta.errors.length > 0 && (
                  <p className="text-red-500 text-xs mt-1">{field.state.meta.errors[0]?.message || "Invalid message"}</p>
                )}
              </div>
            )}
          </form.Field>

          <form.Subscribe
            selector={(formState) => [formState.canSubmit, formState.isSubmitting, Boolean(Object.keys(formState.errors).length > 0)]}
          >
            {([canSubmit, isSubmitting]) => (
              <>
                <Button 
                  type="submit"
                  disabled={!canSubmit || isSubmitting}
                  className="w-full bg-[#001e57] hover:bg-[#001e57]/90 text-white h-12 font-medium"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </>
            )}
          </form.Subscribe>
        </form>
      </div>
    </Card>
  );
}

export default ContactForm; 