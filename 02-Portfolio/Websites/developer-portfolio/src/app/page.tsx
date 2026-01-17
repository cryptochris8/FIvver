import Link from 'next/link';
import { ArrowRight, Code2, Palette, Rocket, Zap } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { ServiceCard } from '@/components/ui/ServiceCard';
import { TestimonialCard } from '@/components/ui/TestimonialCard';
import { SITE_CONFIG, SKILLS, STATS } from '@/lib/constants';
import { PROJECTS, SERVICES, TESTIMONIALS } from '@/lib/data';

export default function HomePage() {
  const featuredProjects = PROJECTS.filter((p) => p.featured);
  const topServices = SERVICES.slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero py-20 md:py-32">
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10" />
        <div className="container-custom relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/10 border border-primary-500/20 rounded-full text-primary-400 text-sm mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
              </span>
              {SITE_CONFIG.availability}
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              I build{' '}
              <span className="text-gradient">modern websites</span>
              <br />
              that drive results
            </h1>

            <p className="text-xl text-secondary-300 mb-8 max-w-2xl">
              {SITE_CONFIG.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/projects">
                <Button size="lg">
                  View My Work
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b border-secondary-200">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-secondary-900 mb-1">
                  {stat.value}
                </p>
                <p className="text-secondary-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
                Featured Projects
              </h2>
              <p className="text-secondary-600 max-w-2xl">
                A selection of my recent work. Each project is crafted with attention
                to detail and focus on performance.
              </p>
            </div>
            <Link
              href="/projects"
              className="mt-4 md:mt-0 inline-flex items-center text-primary-600 font-medium hover:text-primary-700"
            >
              View all projects
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section-padding bg-secondary-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Skills & Technologies
            </h2>
            <p className="text-secondary-600 max-w-2xl mx-auto">
              I work with modern technologies to build fast, scalable, and
              maintainable applications.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-secondary-200">
              <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-4">
                <Code2 className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {SKILLS.frontend.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-secondary-100 text-secondary-700 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-secondary-200">
              <div className="w-12 h-12 bg-accent-100 rounded-xl flex items-center justify-center mb-4">
                <Rocket className="w-6 h-6 text-accent-600" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-4">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {SKILLS.backend.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-secondary-100 text-secondary-700 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-secondary-200">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-4">Tools</h3>
              <div className="flex flex-wrap gap-2">
                {SKILLS.tools.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-secondary-100 text-secondary-700 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Services I Offer
            </h2>
            <p className="text-secondary-600 max-w-2xl mx-auto">
              From simple landing pages to complex web applications, I provide
              end-to-end development services.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {topServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services">
              <Button variant="outline" size="lg">
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-secondary-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              What Clients Say
            </h2>
            <p className="text-secondary-600 max-w-2xl mx-auto">
              Don't just take my word for it. Here's what my clients have to say
              about working with me.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-hero">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-secondary-300 max-w-2xl mx-auto mb-8">
            Let's work together to bring your ideas to life. Get in touch today
            for a free consultation.
          </p>
          <Link href="/contact">
            <Button size="lg">
              Get a Free Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
