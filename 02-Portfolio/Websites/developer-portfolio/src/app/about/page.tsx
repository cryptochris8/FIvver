import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Award, BookOpen, Coffee, Code2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG, SKILLS, STATS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn more about my journey as a web developer, my skills, and what drives me to create exceptional digital experiences.',
};

const journey = [
  {
    year: '2019',
    title: 'Started Coding',
    description: 'Discovered my passion for web development and began learning HTML, CSS, and JavaScript.',
  },
  {
    year: '2020',
    title: 'First Freelance Project',
    description: 'Completed my first paid project - a small business website that launched my freelance career.',
  },
  {
    year: '2021',
    title: 'Expanded to Full-Stack',
    description: 'Learned Node.js, databases, and backend development to offer complete solutions.',
  },
  {
    year: '2022',
    title: 'Joined Fiverr',
    description: 'Started offering services on Fiverr, growing my client base globally.',
  },
  {
    year: '2023',
    title: '50+ Projects Completed',
    description: 'Reached a milestone of 50+ successful projects with clients worldwide.',
  },
  {
    year: 'Present',
    title: 'Continuous Growth',
    description: 'Always learning new technologies and refining my craft to deliver better results.',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-hero py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              About Me
            </h1>
            <p className="text-xl text-secondary-300">
              A passionate web developer dedicated to creating beautiful,
              functional, and user-friendly digital experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="/images/profile.jpg"
                  alt="Chris Campbell"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-secondary-900 mb-6">
                Hi, I'm Chris
              </h2>
              <div className="space-y-4 text-secondary-600">
                <p>
                  I'm a web developer and published author based in Spartanburg, SC.
                  I build modern web applications, interactive experiences, and
                  e-commerce solutions for clients worldwide.
                </p>
                <p>
                  My work spans from creating engaging web games like Declassified.io
                  to building online stores and promotional websites. I'm also the
                  author of <em>The Red Brick Road</em>, a fantasy novel reimagining
                  the Land of Oz, available on Amazon Kindle.
                </p>
                <p>
                  I believe in creating digital experiences that are fast,
                  accessible, and user-friendly. Whether it's code or prose,
                  I focus on quality craftsmanship and attention to detail.
                </p>
                <p>
                  When I'm not coding or writing, you can find me exploring new
                  technologies, working on my next creative project, or developing
                  the mobile version of Declassified.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-secondary-50">
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

      {/* Journey */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              My Journey
            </h2>
            <p className="text-secondary-600 max-w-2xl mx-auto">
              A timeline of key milestones in my development career.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-secondary-200 md:left-1/2 md:-translate-x-1/2" />

              {journey.map((item, index) => (
                <div
                  key={item.year}
                  className={`relative flex items-start gap-8 mb-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-8 w-4 h-4 bg-primary-500 rounded-full border-4 border-white shadow md:left-1/2 md:-translate-x-1/2" />

                  {/* Content */}
                  <div className={`flex-1 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                    <span className="text-sm font-medium text-primary-600">
                      {item.year}
                    </span>
                    <h3 className="text-xl font-semibold text-secondary-900 mt-1">
                      {item.title}
                    </h3>
                    <p className="text-secondary-600 mt-2">{item.description}</p>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-secondary-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              What I Value
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-primary-100 rounded-2xl flex items-center justify-center mb-4">
                <Code2 className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                Clean Code
              </h3>
              <p className="text-secondary-600 text-sm">
                Writing maintainable, well-documented code that stands the test of time.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-accent-100 rounded-2xl flex items-center justify-center mb-4">
                <Award className="w-8 h-8 text-accent-600" />
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                Quality First
              </h3>
              <p className="text-secondary-600 text-sm">
                Never compromising on quality, even under tight deadlines.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-green-100 rounded-2xl flex items-center justify-center mb-4">
                <BookOpen className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                Always Learning
              </h3>
              <p className="text-secondary-600 text-sm">
                Staying current with new technologies and industry best practices.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-orange-100 rounded-2xl flex items-center justify-center mb-4">
                <Coffee className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                Communication
              </h3>
              <p className="text-secondary-600 text-sm">
                Clear, honest communication throughout every project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-hero">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Let's Work Together
          </h2>
          <p className="text-secondary-300 max-w-2xl mx-auto mb-8">
            I'm always excited to take on new challenges and help bring ideas to
            life. Let's create something amazing together.
          </p>
          <Link href="/contact">
            <Button size="lg">
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
