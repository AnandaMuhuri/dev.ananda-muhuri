import React from 'react'
import { GITHUB_URL, RESUME_URL } from '../config'
import { PROFILE } from '../data/profile'
import type { Props } from '../types'
import myImage from '../assets/MyImage.png'

const HeroSection: React.FC<Props> = ({ name, subtitle }) => {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-12">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">{name}</h1>
            <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto md:mx-0 leading-relaxed">{subtitle}</p>
            <p className="mt-4 text-slate-400 max-w-2xl mx-auto md:mx-0">
              {PROFILE.tagline}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <a
                href="#about"
                className="inline-flex items-center px-5 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg text-white font-medium whitespace-nowrap transition-colors"
              >
                View Profile
              </a>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center px-4 py-3 border border-slate-600 rounded-lg text-slate-200 hover:bg-slate-700/50 whitespace-nowrap transition-colors"
              >
                GITHUB
              </a>
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center px-4 py-3 border border-slate-600 rounded-lg text-slate-200 hover:bg-slate-700/50 whitespace-nowrap transition-colors"
              >
                Resume []
              </a>
            </div>
          </div>
          <div className="avatar-borders-group relative flex-shrink-0 flex items-center justify-center w-72 h-72 md:w-80 md:h-80 cursor-default">
            {/* Outer rotating border — thicker dark blue/gray */}
            <div
              className="absolute w-60 h-60 md:w-72 md:h-72 rounded-[2.5rem] border-[3px] border-slate-500/70 bg-transparent animate-avatar-spin"
              aria-hidden
            />
            {/* Inner rotating border — thin light blue */}
            <div
              className="absolute w-56 h-56 md:w-68 md:h-68 rounded-[2.25rem] border-2 border-blue-400/80 bg-transparent animate-avatar-spin-reverse shadow-[0_0_15px_rgba(96,165,250,0.3)]"
              aria-hidden
            />
            {/* Diamond avatar (static) */}
            <div className="relative w-52 h-52 md:w-64 md:h-64 rounded-[2rem] bg-gradient-to-br from-violet-600 to-indigo-700 p-1 shadow-[0_0_30px_rgba(99,102,241,0.4)] rotate-45 overflow-hidden">
              <div className="w-full h-full rounded-[1.4rem] overflow-hidden rotate-[-45deg] scale-[1.35] origin-center">
                <img src={myImage} alt={name} className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
