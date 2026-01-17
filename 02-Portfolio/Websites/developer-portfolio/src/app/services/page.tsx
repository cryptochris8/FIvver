import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { ServiceCard } from '@/components/ui/ServiceCard';
import { SERVICES } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Professional web development services including landing pages, business websites, e-commerce, and custom web applications.',
};

const process = [
  {
    step: '01',
    title: 'Discovery',
    description: 'We discuss your project requirements, goals, and timeline to ensure we\'re aligned.',
  },
  {
    step: '02',
    title: 'Planning',
    description: 'I create a detailed project plan with milestones, deliverables, and technical approach.',
  },
  {
    step: '03',
    title: 'Design',
    description: 'You receive design mockups for review and approval before any coding begins.',
  },
  {
    step: '04',
    title: 'Development',
    description: 'I build your project with regular progress updates and opportunities for feedback.',
  },
  {
    step: '05',
    title: 'Testing',
    description: 'Thorough testing across devices and browsers to ensure everything works perfectly.',
  },
  {
    step: '06',
    title: 'Launch',
    description: 'Your project goes live with deployment support and post-launch assistance.',
  },
];

const faqs = [
  {
    question: 'How long does a typical project take?',
    answer: 'Project timelines vary based on complexity. A landing page typically takes 3-5 days, while a full website takes 7-14 days. Complex web applications can take 3-4 weeks or more.',
  },
  {
    question: 'What is your revision policy?',
    answer: 'Each package includes revision rounds (specified in the service details). Additional revisions can be arranged if needed at an hourly rate.',
  },
  {
    question: 'Do you provide ongoing maintenance?',
    answer: 'Yes! I offer maintenance packages that include updates, security patches, content changes, and technical support.',
  },
  {
    question: 'Can you work with my existing design?',
    answer: 'Absolutely. If you have designs from Figma, Adobe XD, or other tools, I can implement them exactly as specified.',
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-hero py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Services & Pricing
            </h1>
            <p className="text-xl text-secondary-300">
              Transparent pricing for quality web development. Choose a package
              that fits your needs, or let's discuss a custom solution.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-secondary-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              How I Work
            </h2>
            <p className="text-secondary-600 max-w-2xl mx-auto">
              A streamlined process designed to deliver results efficiently while
              keeping you informed every step of the way.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((item) => (
              <div
                key={item.step}
                className="bg-white rounded-2xl p-8 border border-secondary-200"
              >
                <span className="text-4xl font-bold text-primary-200">
                  {item.step}
                </span>
                <h3 className="text-xl font-semibold text-secondary-900 mt-4 mb-2">
                  {item.title}
                </h3>
                <p className="text-secondary-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
                What's Included in Every Project
              </h2>
              <ul className="space-y-4">
                {[
                  'Responsive, mobile-first design',
                  'SEO optimization & meta tags',
                  'Performance optimization',
                  'Cross-browser compatibility',
                  'Clean, maintainable code',
                  'Source files & documentation',
                  'Post-launch support period',
                  'Deployment assistance',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary-500 flex-shrink-0" />
                    <span className="text-secondary-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl p-8 text-white">
              <MessageSquare className="w-12 h-12 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Need Something Custom?</h3>
              <p className="text-primary-100 mb-6">
                Every project is unique. If you don't see exactly what you need,
                let's discuss a custom solution tailored to your specific
                requirements.
              </p>
              <Link href="/contact">
                <Button variant="secondary" size="lg">
                  Let's Talk
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-secondary-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="bg-white rounded-xl p-6 border border-secondary-200"
              >
                <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                  {faq.question}
                </h3>
                <p className="text-secondary-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-hero">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-secondary-300 max-w-2xl mx-auto mb-8">
            Let's discuss your project and find the perfect solution for your needs.
          </p>
          <Link href="/contact">
            <Button size="lg">
              Request a Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
