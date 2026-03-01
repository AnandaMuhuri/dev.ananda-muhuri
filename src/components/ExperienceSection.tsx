import React, { useMemo } from 'react'
import { EXPERIENCES } from '../data/profile'

const ExperienceSection: React.FC = () => {
  const uniqueExperiences = useMemo(() => {
    const seen = new Set<string>()
    return EXPERIENCES.filter((exp) => {
      const key = `${exp.title}|${exp.company}|${exp.period}`
      if (seen.has(key)) return false
      seen.add(key)
      return true
    })
  }, [])

  return (
    <section id="experience" className="py-16 md:py-20 border-t border-slate-800/50">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">Experience</h2>

        <div className="relative pl-6 md:pl-8">
          {/* Vertical timeline line */}
          <div
            className="absolute left-0 top-0 bottom-0 w-px bg-blue-400/60"
            aria-hidden
          />

          <div className="space-y-10">
            {uniqueExperiences.map((exp, i) => (
              <div key={`${exp.company}-${exp.period}-${i}`} className="relative flex gap-4 md:gap-6">
                {/* Timeline dot — centered on the vertical line */}
                <div
                  className="absolute -left-6 md:-left-8 top-1.5 w-3 h-3 rounded-full bg-blue-400 -translate-x-1/2 ring-4 ring-[#0a0a23]"
                  aria-hidden
                />

                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                    <div>
                      <h3 className="text-lg font-semibold text-white">{exp.title}</h3>
                      <p className="text-blue-400 mt-0.5">{exp.company}</p>
                    </div>
                    <span className="text-sm text-slate-500 whitespace-nowrap sm:mt-1">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="mt-4 space-y-2 list-disc list-inside text-slate-400 text-sm leading-relaxed">
                    {exp.bullets.map((bullet, j) => (
                      <li key={j} className="text-slate-400">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection
