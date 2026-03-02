import React from 'react'
import { SKILLS } from '../data/profile'

const TechSkills: React.FC = () => {
  return (
    <section id="skills" className="py-16 md:py-20 border-t border-slate-800/50">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Technical Arsenal</h2>
        <p className="text-slate-400 mb-8">
          Tools and technologies I use to build scalable systems.
        </p>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
          {SKILLS.map((s) => (
            <div
              key={s.name}
              className="flex flex-col items-center py-3 px-2 bg-slate-800/80 border border-slate-700/50 rounded-lg text-slate-200 text-xs font-medium text-center"
            >
              {s.Icon ? <s.Icon className="w-6 h-6" /> : null}
              <span className="mt-1">{s.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechSkills
