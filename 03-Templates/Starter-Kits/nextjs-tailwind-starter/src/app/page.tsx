import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { ArrowRight, Zap, Shield, Sparkles } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Built with Next.js 14 and optimized for performance out of the box.',
  },
  {
    icon: Shield,
    title: 'Secure by Default',
    description: 'Following best practices for security and data protection.',
  },
  {
    icon: Sparkles,
    title: 'Modern Design',
    description: 'Clean, responsive UI built with Tailwind CSS.',
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-primary-50 to-white">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-secondary-900 sm:text-5xl md:text-6xl">
              Build Something{' '}
              <span className="text-gradient">Amazing</span>
            </h1>
            <p className="mb-8 text-lg text-secondary-600 md:text-xl">
              A modern Next.js starter template with Tailwind CSS, TypeScript,
              and everything you need to build beautiful web applications.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button size="lg">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-secondary-900 sm:text-4xl">
              Why Choose Us
            </h2>
            <p className="mx-auto max-w-2xl text-secondary-600">
              Everything you need to launch your next project quickly and efficiently.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {features.map((feature) => (
              <Card key={feature.title} className="text-center">
                <div className="mb-4 inline-flex rounded-lg bg-primary-100 p-3">
                  <feature.icon className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-secondary-900">
                  {feature.title}
                </h3>
                <p className="text-secondary-600">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600">
        <div className="container-custom text-center">
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
            Ready to Get Started?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-primary-100">
            Let's build something great together. Contact us today to discuss your project.
          </p>
          <Button variant="secondary" size="lg">
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </>
  );
}
