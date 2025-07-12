import { Turnstile } from '@marsidev/react-turnstile';
import { useForm } from '@tanstack/react-form';
import { useState } from 'react';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { handleContactForm } from '@/functions/form-handlers';
import { ContactFormSchema, type ContactFormType } from '@/lib/form-schema';

const formDefaultValues = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
};

export function ContactForm() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [formData, setFormData] = useState<ContactFormType>(formDefaultValues);

  const form = useForm({
    defaultValues: formDefaultValues,
    validators: {
      onChange: ContactFormSchema,
      onSubmit: ContactFormSchema,
    },
    onSubmit: async ({ value }) => {
      setFormData(value);
      setDialogOpen(true);
    },
  });

  const handleTurnstileSuccess = async () => {
    try {
      await handleContactForm({ data: formData });
      toast.success("Message sent successfully! We'll get back to you soon.");
      form.reset();
    } catch (error) {
      console.error('Form submission error:', error);
      toast.error('Failed to send message. Please try again later.');
    } finally {
      setDialogOpen(false);
    }
  };

  return (
    <>
      <Card className="overflow-hidden border-0 shadow-2xl">
        <div className="bg-white p-8 md:p-10">
          <h2 className="relative mb-8 pb-4 text-2xl font-bold text-[#001e57] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-16 after:bg-[#89c540] after:content-[''] md:text-3xl">
            Send Us a Message
          </h2>

          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              e.stopPropagation();
              form.handleSubmit();
            }}
          >
            <form.Field name="name">
              {(field) => (
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                    required
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

            <form.Field name="email">
              {(field) => (
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                    required
                    className={`h-12 border-transparent bg-[#f3f5f9] focus:border-[#89c540] ${field.state.meta.errors.length ? 'border-red-500' : ''}`}
                  />
                  {field.state.meta.errors.length > 0 && (
                    <p className="mt-1 text-xs text-red-500">
                      {field.state.meta.errors[0]?.message || 'Invalid email'}
                    </p>
                  )}
                </div>
              )}
            </form.Field>

            <form.Field name="phone">
              {(field) => (
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Phone Number
                  </label>
                  <Input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                    className={`h-12 border-transparent bg-[#f3f5f9] focus:border-[#89c540] ${field.state.meta.errors.length ? 'border-red-500' : ''}`}
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

            <form.Field name="subject">
              {(field) => (
                <div>
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <Input
                    type="text"
                    id="subject"
                    name="subject"
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                    required
                    className={`h-12 border-transparent bg-[#f3f5f9] focus:border-[#89c540] ${field.state.meta.errors.length ? 'border-red-500' : ''}`}
                  />
                  {field.state.meta.errors.length > 0 && (
                    <p className="mt-1 text-xs text-red-500">
                      {field.state.meta.errors[0]?.message || 'Invalid subject'}
                    </p>
                  )}
                </div>
              )}
            </form.Field>

            <form.Field name="message">
              {(field) => (
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Message <span className="text-red-500">*</span>
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                    rows={5}
                    required
                    className={`min-h-[140px] border-transparent bg-[#f3f5f9] focus:border-[#89c540] ${field.state.meta.errors.length ? 'border-red-500' : ''}`}
                  />
                  {field.state.meta.errors.length > 0 && (
                    <p className="mt-1 text-xs text-red-500">
                      {field.state.meta.errors[0]?.message || 'Invalid message'}
                    </p>
                  )}
                </div>
              )}
            </form.Field>

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
                    disabled={!canSubmit || isSubmitting}
                    className="h-12 w-full bg-[#001e57] font-medium text-white hover:bg-[#001e57]/90"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </>
              )}
            </form.Subscribe>
          </form>
        </div>
      </Card>

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
