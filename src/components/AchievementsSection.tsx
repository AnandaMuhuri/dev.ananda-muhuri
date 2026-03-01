import React from 'react'
import { ACHIEVEMENTS } from '../data/profile'

const AchievementsSection: React.FC = () => {
  return (
    <section id="achievements" className="py-16 md:py-20 border-t border-slate-800/50">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">Achievements</h2>
        <ul className="space-y-3 list-disc list-inside text-slate-300 leading-relaxed">
          {ACHIEVEMENTS.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default AchievementsSection
