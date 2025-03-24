import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useForm } from '@tanstack/react-form';
import { InquiryFormSchema } from '@/lib/form-schema';
import { handleInquiryForm } from '@/functions/form-handlers';
import { toast } from "sonner";

export function ContactForm() {

  const form = useForm({
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      university: '',
      fieldOfStudy: '',
      additionalInfo: '',
    },  
    validators: {
      onChange: InquiryFormSchema,
      onSubmit: InquiryFormSchema,
    },
    onSubmit: async ({ formApi, value }) => {
      try {
        await handleInquiryForm({ data: value })
        toast.success("Inquiry submitted successfully! We'll get back to you soon.")
        formApi.reset()
      } catch (error) {
        console.error("Form submission error:", error)
        toast.error("Failed to submit inquiry. Please try again later.")
      }
    }
  })


  return (
    <form 
      className="space-y-6" 
      onSubmit={(e) => {
        e.preventDefault()
        e.stopPropagation()
        form.handleSubmit()
      }}
    >
      <div className="grid md:grid-cols-2 gap-6">
        <form.Field
          name="name"
        >
          {(field) => (
            <div className="form-group">
              <label htmlFor="name" className="text-sm font-medium text-gray-600 mb-2 block">Full Name</label>
              <Input 
                type="text" 
                id="name"
                name="name" 
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
                placeholder="Enter your full name" 
                className={`bg-[#f3f5f9] border-transparent focus:border-[#89c540] h-12 ${field.state.meta.errors.length ? 'border-red-500' : ''}`}
                required
              />
              {field.state.meta.errors.length > 0 && (
                <p className="text-red-500 text-xs mt-1">{field.state.meta.errors[0]?.message || "Invalid name"}</p>
              )}
            </div>
          )}
        </form.Field>
        <form.Field
          name="phone"
        >
          {(field) => (
            <div className="form-group">
              <label htmlFor="phone" className="text-sm font-medium text-gray-600 mb-2 block">Phone Number</label>
              <Input 
                type="tel" 
                id="phone"
                name="phone" 
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
                placeholder="Enter your phone number" 
                className={`bg-[#f3f5f9] border-transparent focus:border-[#89c540] h-12 ${field.state.meta.errors.length ? 'border-red-500' : ''}`}
                required
              />
              {field.state.meta.errors.length > 0 && (
                <p className="text-red-500 text-xs mt-1">{field.state.meta.errors[0]?.message || "Invalid phone number"}</p>
              )}
            </div>
          )}
        </form.Field>
      </div>
      
      <form.Field
        name="email"
      >
        {(field) => (
          <div className="form-group">
            <label htmlFor="email" className="text-sm font-medium text-gray-600 mb-2 block">Email Address</label>
            <Input 
              type="email" 
              id="email"
              name="email" 
              value={field.state.value}
              onChange={(e) => field.handleChange(e.target.value)}
              placeholder="Enter your email address" 
              className={`bg-[#f3f5f9] border-transparent focus:border-[#89c540] h-12 ${field.state.meta.errors.length ? 'border-red-500' : ''}`}
              required
            />
            {field.state.meta.errors.length > 0 && (
              <p className="text-red-500 text-xs mt-1">{field.state.meta.errors[0]?.message || "Invalid email"}</p>
            )}
          </div>
        )}
      </form.Field>
      
      <h3 className="text-xl font-bold text-[#001e57] mt-8 mb-4">Study Preferences</h3>

      <form.Field
        name="university"
      >
        {(field) => (
          <div className="form-group">
            <label htmlFor="university" className="text-sm font-medium text-gray-600 mb-2 block">Preferred University</label>
            <Input 
              type="text" 
              id="university"
              name="university" 
              value={field.state.value}
              onChange={(e) => field.handleChange(e.target.value)}
              placeholder="Enter preferred university" 
              className={`bg-[#f3f5f9] border-transparent focus:border-[#89c540] h-12 ${field.state.meta.errors.length ? 'border-red-500' : ''}`}
            />
            {field.state.meta.errors.length > 0 && (
              <p className="text-red-500 text-xs mt-1">{field.state.meta.errors[0]?.message || "Invalid input"}</p>
            )}
          </div>
        )}
      </form.Field>
      
      <form.Field
        name="fieldOfStudy"
      >
        {(field) => (
          <div className="form-group">
            <label htmlFor="study" className="text-sm font-medium text-gray-600 mb-2 block">Field of Study</label>
            <Input 
              type="text" 
              id="study"
              name="study" 
              value={field.state.value}
              onChange={(e) => field.handleChange(e.target.value)}
              placeholder="What do you want to study?" 
              className={`bg-[#f3f5f9] border-transparent focus:border-[#89c540] h-12 ${field.state.meta.errors.length ? 'border-red-500' : ''}`}
            />
            {field.state.meta.errors.length > 0 && (
              <p className="text-red-500 text-xs mt-1">{field.state.meta.errors[0]?.message || "Invalid input"}</p>
            )}
          </div>
        )}
      </form.Field>
      
      <form.Field
        name="additionalInfo"
      >
        {(field) => (
          <div className="form-group">
            <label htmlFor="message" className="text-sm font-medium text-gray-600 mb-2 block">Additional Information</label>
            <Textarea 
              id="message"
              name="message" 
              value={field.state.value}
              onChange={(e) => field.handleChange(e.target.value)}
              placeholder="Any specific requirements or questions?" 
              className={`bg-[#f3f5f9] border-transparent focus:border-[#89c540] min-h-[140px] ${field.state.meta.errors.length ? 'border-red-500' : ''}`}
            />
            {field.state.meta.errors.length > 0 && (
              <p className="text-red-500 text-xs mt-1">{field.state.meta.errors[0]?.message || "Invalid input"}</p>
            )}
          </div>
        )}
      </form.Field>
      
      <div className="form-group pt-4">
        <form.Subscribe
          selector={(formState) => [formState.canSubmit, formState.isSubmitting, Boolean(Object.keys(formState.errors).length > 0)]}
        >
          {([canSubmit, isSubmitting]) => (
            <>
              <Button 
                type="submit" 
                className="w-full bg-[#001e57] hover:bg-[#001e57]/90 text-white h-12 font-medium hover:shadow-xl transition-all duration-300"
                disabled={!canSubmit || isSubmitting}
              >
                <span className="flex items-center justify-center gap-2">
                  {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
                </span>
              </Button>
            </>
          )}
        </form.Subscribe>
      </div>
    </form>
  );
}

export default ContactForm; 