import type { Metadata } from 'next';
import { Mail, MapPin, Clock, ArrowUpRight, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch for your next web development project. I\'m available for freelance work and ready to help bring your ideas to life.',
};

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-hero py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Let's Talk
            </h1>
            <p className="text-xl text-secondary-300">
              Have a project in mind? I'd love to hear about it. Send me a
              message and let's start a conversation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-secondary-900 mb-6">
                Send a Message
              </h2>
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                className="space-y-6"
              >
                {/* Hidden fields for Netlify */}
                <input type="hidden" name="form-name" value="contact" />
                <div style={{ display: 'none' }}>
                  <label>
                    Don't fill this out if you're human: <input name="bot-field" />
                  </label>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-secondary-700 mb-2"
                    >
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full rounded-xl border border-secondary-300 px-4 py-3 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-secondary-700 mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full rounded-xl border border-secondary-300 px-4 py-3 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="project-type"
                    className="block text-sm font-medium text-secondary-700 mb-2"
                  >
                    Project Type
                  </label>
                  <select
                    id="project-type"
                    name="project-type"
                    className="w-full rounded-xl border border-secondary-300 px-4 py-3 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 transition-colors bg-white"
                  >
                    <option value="">Select a project type</option>
                    <option value="landing-page">Landing Page</option>
                    <option value="business-website">Business Website</option>
                    <option value="ecommerce">E-Commerce Store</option>
                    <option value="web-app">Web Application</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="budget"
                    className="block text-sm font-medium text-secondary-700 mb-2"
                  >
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    className="w-full rounded-xl border border-secondary-300 px-4 py-3 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 transition-colors bg-white"
                  >
                    <option value="">Select your budget</option>
                    <option value="100-500">$100 - $500</option>
                    <option value="500-1000">$500 - $1,000</option>
                    <option value="1000-2500">$1,000 - $2,500</option>
                    <option value="2500-5000">$2,500 - $5,000</option>
                    <option value="5000+">$5,000+</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-secondary-700 mb-2"
                  >
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full rounded-xl border border-secondary-300 px-4 py-3 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 transition-colors resize-none"
                    placeholder="Tell me about your project, goals, and timeline..."
                  />
                </div>

                <Button type="submit" size="lg" className="w-full md:w-auto">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="lg:pl-12">
              <h2 className="text-2xl font-bold text-secondary-900 mb-6">
                Contact Information
              </h2>

              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-secondary-900">Email</h3>
                    <a
                      href={`mailto:${SITE_CONFIG.email}`}
                      className="text-secondary-600 hover:text-primary-600 transition-colors"
                    >
                      {SITE_CONFIG.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent-100 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-accent-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-secondary-900">Location</h3>
                    <p className="text-secondary-600">{SITE_CONFIG.location}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-secondary-900">Response Time</h3>
                    <p className="text-secondary-600">Usually within 24 hours</p>
                  </div>
                </div>
              </div>

              {/* Fiverr CTA */}
              <div className="bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl p-8 text-white">
                <MessageSquare className="w-10 h-10 mb-4" />
                <h3 className="text-xl font-bold mb-2">Prefer Fiverr?</h3>
                <p className="text-primary-100 mb-4">
                  You can also reach me through my Fiverr profile for secure
                  payments and project management.
                </p>
                <a
                  href={SITE_CONFIG.social.fiverr}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-secondary-900 px-6 py-3 rounded-lg font-medium hover:bg-secondary-100 transition-colors"
                >
                  Contact on Fiverr
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>

              {/* FAQ */}
              <div className="mt-12">
                <h3 className="text-lg font-semibold text-secondary-900 mb-4">
                  Frequently Asked
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-secondary-900">
                      What happens after I send a message?
                    </h4>
                    <p className="text-sm text-secondary-600 mt-1">
                      I'll review your project details and respond within 24
                      hours with questions or a preliminary quote.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-secondary-900">
                      Do you offer free consultations?
                    </h4>
                    <p className="text-sm text-secondary-600 mt-1">
                      Yes! I offer a free 15-minute consultation to discuss your
                      project and see if we're a good fit.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
