import React from 'react'
import { ABOUT } from '../data/profile'

function highlightCompany(text: string) {
  const parts = text.split(/(Stashfin)/gi)
  return parts.map((part, i) =>
    part.toLowerCase() === 'stashfin' ? (
      <span key={i} className="text-blue-400 font-medium">
        {part}
      </span>
    ) : (
      part
    )
  )
}

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-20">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
          {ABOUT.heading}
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div className="space-y-4 text-slate-300 leading-relaxed max-w-2xl">
            {ABOUT.paragraphs.map((p, i) => (
              <p key={i}>{highlightCompany(p.replace(/\s+/g, ' ').trim())}</p>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-4">
            {ABOUT.metrics.map(({ value, label }) => (
              <div
                key={label}
                className="p-5 rounded-xl bg-slate-800/90 border border-slate-600/40 text-center"
              >
                <div className="text-xl md:text-2xl font-semibold text-white">{value}</div>
                <div className="mt-1 text-sm text-slate-400">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
