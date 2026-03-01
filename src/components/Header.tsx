import React from 'react'
import { RESUME_URL } from '../config'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/50 bg-slate-900/95 backdrop-blur supports-[backdrop-filter]:bg-slate-900/80">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 flex items-center justify-between h-16">
        <a href="#" className="text-xl font-bold text-white tracking-tight">
          AM
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="text-slate-300 hover:text-white transition-colors text-sm font-medium"
            >
              {label}
            </a>
          ))}
        </nav>
        <a
          href={RESUME_URL}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center px-4 py-2 rounded-lg border border-slate-600 text-slate-200 hover:bg-slate-800 hover:border-slate-500 transition-colors text-sm font-medium"
        >
          Resume
        </a>
      </div>
    </header>
  )
}

export default Header
