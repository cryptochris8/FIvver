import type { Metadata } from 'next';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { PROJECTS } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Browse my portfolio of web development projects including websites, web apps, and e-commerce solutions.',
};

export default function ProjectsPage() {
  const categories = ['all', 'website', 'webapp', 'landing', 'ecommerce'] as const;

  return (
    <>
      {/* Header */}
      <section className="bg-gradient-hero py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              My Projects
            </h1>
            <p className="text-xl text-secondary-300">
              A showcase of my recent work. Each project represents a unique
              challenge and solution crafted with care and attention to detail.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding">
        <div className="container-custom">
          {/* Filter Tags */}
          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full text-sm font-medium capitalize transition-colors bg-secondary-100 text-secondary-700 hover:bg-primary-100 hover:text-primary-700"
              >
                {category === 'all' ? 'All Projects' : category}
              </button>
            ))}
          </div>

          {/* Projects */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {/* Empty State Note */}
          <div className="mt-16 text-center p-8 bg-secondary-50 rounded-2xl">
            <p className="text-secondary-600">
              Want to see more? Check out my{' '}
              <a
                href="https://github.com/cryptochris8"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:underline font-medium"
              >
                GitHub profile
              </a>{' '}
              for open source contributions and additional projects.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
