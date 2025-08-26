'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Toaster, toast } from 'react-hot-toast';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useEffect, useState } from 'react';

const MAX_MESSAGE_LENGTH = 1000;

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.string().email('Invalid email address.'),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters.')
    .max(MAX_MESSAGE_LENGTH, `Message cannot exceed ${MAX_MESSAGE_LENGTH} characters.`),
});

function ContactSection() {
  const [messageLength, setMessageLength] = useState(0);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  useEffect(() => {
    const subscription = form.watch((value, { name }) => {
      if (name === 'message') {
        setMessageLength(value.message?.length || 0);
      }
    });
    return () => subscription.unsubscribe();
  }, [form.watch]);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error('Something went wrong');
      }

      toast.success('Message sent successfully!');
      form.reset();
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    }
  }

  return (
    <section id="contact" className="container py-24 sm:py-32">
      <Toaster containerClassName="[font-family:var(--font-nunito-sans),_sans-serif]" />
      <h2 className="text-3xl font-bold text-center mb-8 tracking-tighter">Let's Connect</h2>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 max-w-xl mx-auto [font-family:var(--font-nunito-sans),_sans-serif]"
          suppressHydrationWarning
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="What should I call you?" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Where can I reach you?" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <div className="relative w-full">
                    <div className="w-full max-w-full ">
                      <Textarea
                        placeholder="What's on your mind? I'd love to hear about your project..."
                        className="min-h-[120px] resize-y w-full break-words whitespace-pre-wrap box-border break-all"
                        maxLength={MAX_MESSAGE_LENGTH}
                        {...field}
                        onChange={(e) => {
                          field.onChange(e);
                          setMessageLength(e.target.value.length);
                        }}
                      />
                    </div>
                    <div className="absolute bottom-2 right-2 text-xs text-gray-500">
                      {messageLength}/{MAX_MESSAGE_LENGTH}
                    </div>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex justify-center">
            <Button className="px-8" type="submit" variant="secondary">
              Send Message
            </Button>
          </div>
        </form>
      </Form>
    </section>
  );
}

export default ContactSection;
