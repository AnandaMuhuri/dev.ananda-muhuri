import React from 'react'
import { GITHUB_URL, GITHUB_USERNAME } from '../config'

const WEEKS = 52
const DAYS = 7
const CELL_COLORS = [
  'bg-slate-800',
  'bg-slate-700',
  'bg-blue-900/60',
  'bg-blue-700/70',
  'bg-blue-500/80',
]

function randomLevel() {
  return Math.floor(Math.random() * CELL_COLORS.length)
}

const GitHubActivity: React.FC = () => {
  const grid = React.useMemo(() => {
    const rows: number[][] = []
    for (let w = 0; w < WEEKS; w++) {
      const week: number[] = []
      for (let d = 0; d < DAYS; d++) {
        week.push(randomLevel())
      }
      rows.push(week)
    }
    return rows
  }, [])

  return (
    <section className="py-16 md:py-20 border-t border-slate-800/50">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-2">
            <svg className="w-8 h-8 text-slate-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            {GITHUB_USERNAME} GitHub activity
          </h2>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            className="text-blue-400 hover:text-blue-300 font-medium text-sm"
          >
            View Profile
          </a>
        </div>
        <div className="overflow-x-auto">
          <div className="inline-flex gap-[3px] p-4 rounded-lg bg-slate-800/40 border border-slate-700/50">
            {grid.map((week, wi) => (
              <div key={wi} className="flex flex-col gap-[3px]">
                {week.map((level, di) => (
                  <div
                    key={di}
                    className={`w-3 h-3 rounded-sm min-w-[12px] ${CELL_COLORS[level]}`}
                    title={`Week ${wi + 1}, Day ${di + 1}`}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
        <p className="mt-4 text-sm text-slate-500">
          Learn how we count contributions. Contribution intensity is shown by cell color.
        </p>
      </div>
    </section>
  )
}

export default GitHubActivity
