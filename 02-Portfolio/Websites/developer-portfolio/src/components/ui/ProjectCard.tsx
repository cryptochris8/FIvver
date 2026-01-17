import Image from 'next/image';
import { ExternalLink, Github } from 'lucide-react';
import type { Project } from '@/lib/data';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white border border-secondary-200 transition-all duration-300 hover:shadow-xl hover:shadow-secondary-900/10 hover:-translate-y-1">
      <div className="aspect-video bg-gradient-to-br from-secondary-100 to-secondary-200 relative overflow-hidden">
        {project.image && (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
        )}
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-secondary-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full text-secondary-900 hover:bg-primary-500 hover:text-white transition-colors"
              aria-label="View live site"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full text-secondary-900 hover:bg-primary-500 hover:text-white transition-colors"
              aria-label="View source code"
            >
              <Github className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="px-2.5 py-0.5 text-xs font-medium bg-primary-100 text-primary-700 rounded-full capitalize">
            {project.category}
          </span>
          {project.featured && (
            <span className="px-2.5 py-0.5 text-xs font-medium bg-accent-100 text-accent-700 rounded-full">
              Featured
            </span>
          )}
        </div>

        <h3 className="text-xl font-semibold text-secondary-900 mb-2 group-hover:text-primary-600 transition-colors">
          {project.title}
        </h3>

        <p className="text-secondary-600 mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs bg-secondary-100 text-secondary-600 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
