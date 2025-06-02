import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useForm } from '@tanstack/react-form';
import { InquiryFormSchema, type InquiryFormType } from '@/lib/form-schema';
import { handleInquiryForm } from '@/functions/form-handlers';
import { toast } from 'sonner';
import { DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { useState } from 'react';
import { Turnstile } from '@marsidev/react-turnstile';

const formDefaultValues = {
  name: '',
  phone: '',
  email: '',
  university: '',
  fieldOfStudy: '',
  additionalInfo: '',
};

export function ContactForm() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [formData, setFormData] = useState<InquiryFormType>(formDefaultValues);
  const form = useForm({
    defaultValues: formDefaultValues,
    validators: {
      onChange: InquiryFormSchema,
      onSubmit: InquiryFormSchema,
    },
    onSubmit: async ({ value }) => {
      setFormData(value);
      setDialogOpen(true);
    },
  });

  const handleTurnstileSuccess = async () => {
    try {
      await handleInquiryForm({ data: formData });
      toast.success(
        "Inquiry submitted successfully! We'll get back to you soon.",
      );
      form.reset();
    } catch (error) {
      console.error('Form submission error:', error);
      toast.error('Failed to submit inquiry. Please try again later.');
    } finally {
      setDialogOpen(false);
    }
  };

  return (
    <>
      <form
        className="space-y-6"
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
      >
        <div className="grid gap-6 md:grid-cols-2">
          <form.Field name="name">
            {(field) => (
              <div className="form-group">
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-gray-600"
                >
                  Full Name
                </label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  placeholder="Enter your full name"
                  className={`h-12 border-transparent bg-[#f3f5f9] focus:border-[#89c540] ${field.state.meta.errors.length ? 'border-red-500' : ''}`}
                  required
                />
                {field.state.meta.errors.length > 0 && (
                  <p className="mt-1 text-xs text-red-500">
                    {field.state.meta.errors[0]?.message || 'Invalid name'}
                  </p>
                )}
              </div>
            )}
          </form.Field>
          <form.Field name="phone">
            {(field) => (
              <div className="form-group">
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-medium text-gray-600"
                >
                  Phone Number
                </label>
                <Input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  placeholder="Enter your phone number"
                  className={`h-12 border-transparent bg-[#f3f5f9] focus:border-[#89c540] ${field.state.meta.errors.length ? 'border-red-500' : ''}`}
                  required
                />
                {field.state.meta.errors.length > 0 && (
                  <p className="mt-1 text-xs text-red-500">
                    {field.state.meta.errors[0]?.message ||
                      'Invalid phone number'}
                  </p>
                )}
              </div>
            )}
          </form.Field>
        </div>

        <form.Field name="email">
          {(field) => (
            <div className="form-group">
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-gray-600"
              >
                Email Address
              </label>
              <Input
                type="email"
                id="email"
                name="email"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
                placeholder="Enter your email address"
                className={`h-12 border-transparent bg-[#f3f5f9] focus:border-[#89c540] ${field.state.meta.errors.length ? 'border-red-500' : ''}`}
                required
              />
              {field.state.meta.errors.length > 0 && (
                <p className="mt-1 text-xs text-red-500">
                  {field.state.meta.errors[0]?.message || 'Invalid email'}
                </p>
              )}
            </div>
          )}
        </form.Field>

        <h3 className="mt-8 mb-4 text-xl font-bold text-[#001e57]">
          Study Preferences
        </h3>

        <form.Field name="university">
          {(field) => (
            <div className="form-group">
              <label
                htmlFor="university"
                className="mb-2 block text-sm font-medium text-gray-600"
              >
                Preferred University
              </label>
              <Input
                type="text"
                id="university"
                name="university"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
                placeholder="Enter preferred university"
                className={`h-12 border-transparent bg-[#f3f5f9] focus:border-[#89c540] ${field.state.meta.errors.length ? 'border-red-500' : ''}`}
              />
              {field.state.meta.errors.length > 0 && (
                <p className="mt-1 text-xs text-red-500">
                  {field.state.meta.errors[0]?.message || 'Invalid input'}
                </p>
              )}
            </div>
          )}
        </form.Field>

        <form.Field name="fieldOfStudy">
          {(field) => (
            <div className="form-group">
              <label
                htmlFor="study"
                className="mb-2 block text-sm font-medium text-gray-600"
              >
                Field of Study
              </label>
              <Input
                type="text"
                id="study"
                name="study"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
                placeholder="What do you want to study?"
                className={`h-12 border-transparent bg-[#f3f5f9] focus:border-[#89c540] ${field.state.meta.errors.length ? 'border-red-500' : ''}`}
              />
              {field.state.meta.errors.length > 0 && (
                <p className="mt-1 text-xs text-red-500">
                  {field.state.meta.errors[0]?.message || 'Invalid input'}
                </p>
              )}
            </div>
          )}
        </form.Field>

        <form.Field name="additionalInfo">
          {(field) => (
            <div className="form-group">
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-gray-600"
              >
                Additional Information
              </label>
              <Textarea
                id="message"
                name="message"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
                placeholder="Any specific requirements or questions?"
                className={`min-h-[140px] border-transparent bg-[#f3f5f9] focus:border-[#89c540] ${field.state.meta.errors.length ? 'border-red-500' : ''}`}
              />
              {field.state.meta.errors.length > 0 && (
                <p className="mt-1 text-xs text-red-500">
                  {field.state.meta.errors[0]?.message || 'Invalid input'}
                </p>
              )}
            </div>
          )}
        </form.Field>

        <div className="form-group pt-4">
          <form.Subscribe
            selector={(formState) => [
              formState.canSubmit,
              formState.isSubmitting,
              Boolean(Object.keys(formState.errors).length > 0),
            ]}
          >
            {([canSubmit, isSubmitting]) => (
              <>
                <Button
                  type="submit"
                  className="h-12 w-full bg-[#001e57] font-medium text-white transition-all duration-300 hover:bg-[#001e57]/90 hover:shadow-xl"
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

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Verify you're human</DialogTitle>
          </DialogHeader>
          <div className="flex justify-center py-4">
            <Turnstile
              siteKey={import.meta.env.VITE_TURNSTILE_SITE_KEY}
              onSuccess={handleTurnstileSuccess}
              onError={() => {
                toast.error('Verification failed. Please try again.');
                setDialogOpen(false);
              }}
              onExpire={() => {
                toast.warning('Verification expired. Please verify again.');
                setDialogOpen(false);
              }}
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default ContactForm;
