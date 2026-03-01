import React from 'react'
import { EDUCATION } from '../data/profile'

const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-16 md:py-20 border-t border-slate-800/50">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">Education</h2>
        <div className="space-y-6">
          {EDUCATION.map((edu) => (
            <div key={edu.institution} className="py-4">
              <h3 className="text-lg font-semibold text-white">{edu.institution}</h3>
              <p className="text-slate-400 mt-1">{edu.degree}</p>
              <p className="text-sm text-slate-500 mt-1">{edu.period}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EducationSection
