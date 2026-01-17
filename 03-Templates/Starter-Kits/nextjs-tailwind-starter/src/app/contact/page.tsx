import type { Metadata } from 'next';
import { Button } from '@/components/ui/Button';
import { Mail, Phone, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with us. We would love to hear from you.',
};

export default function ContactPage() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-4xl font-bold text-secondary-900">
              Contact Us
            </h1>
            <p className="text-lg text-secondary-600">
              Have a question or want to work together? We'd love to hear from you.
            </p>
          </div>

          <div className="grid gap-12 md:grid-cols-2">
            {/* Contact Form */}
            <div>
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-secondary-700"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full rounded-lg border border-secondary-300 px-4 py-3 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-secondary-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full rounded-lg border border-secondary-300 px-4 py-3 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-secondary-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full rounded-lg border border-secondary-300 px-4 py-3 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                    placeholder="Your message..."
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="mb-6 text-2xl font-semibold text-secondary-900">
                  Get in Touch
                </h2>
                <p className="text-secondary-600">
                  We're here to help and answer any question you might have.
                  We look forward to hearing from you.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-primary-100 p-3">
                    <Mail className="h-5 w-5 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-secondary-900">Email</h3>
                    <p className="text-secondary-600">hello@example.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-primary-100 p-3">
                    <Phone className="h-5 w-5 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-secondary-900">Phone</h3>
                    <p className="text-secondary-600">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-primary-100 p-3">
                    <MapPin className="h-5 w-5 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-secondary-900">Location</h3>
                    <p className="text-secondary-600">
                      123 Main Street<br />
                      City, State 12345
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
