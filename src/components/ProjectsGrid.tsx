import React from 'react'
import { FEATURED_PROJECTS } from '../data/profile'

const ProjectsGrid: React.FC = () => {
  return (
    <section id="projects" className="py-16 md:py-20 border-t border-slate-800/50">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">Featured Projects</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {FEATURED_PROJECTS.map((project) => (
            <article
              key={project.id}
              className="p-6 rounded-xl bg-slate-800/60 border border-slate-700/50 hover:border-slate-600 transition-colors"
            >
              <div className="text-3xl font-bold text-blue-400/90">{project.name}</div>
              <p className="text-slate-400 text-sm mt-1">
                {project.subtitle}
                {'date' in project && project.date ? ` · ${project.date}` : ''}
              </p>
              <p className="text-slate-300 mt-4 leading-relaxed">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-md bg-slate-700/80 text-slate-300 text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-4 text-blue-400 hover:text-blue-300 font-medium text-sm"
              >
                View Project →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsGrid
