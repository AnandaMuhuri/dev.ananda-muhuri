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
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {SKILLS.map((s) => (
            <div
              key={s}
              className="py-3 px-4 bg-slate-800/80 border border-slate-700/50 rounded-lg text-slate-200 text-sm font-medium text-center"
            >
              {s}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechSkills
