import React, { useState } from 'react'
import { CONTACT } from '../data/profile'

const ContactForm: React.FC = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    alert('Message sent (dummy): ' + JSON.stringify({ name, email, message }))
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <section id="contact" className="py-16 md:py-20 border-t border-slate-800/50">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">Let&apos;s Connect</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="space-y-6">
            <p className="text-slate-300 leading-relaxed max-w-md">
              {CONTACT.blurb}
            </p>
            <div className="space-y-3">
              <a
                href={`mailto:${CONTACT.email}`}
                className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors"
              >
                <span className="text-slate-500" aria-hidden>
                  ✉
                </span>
                Email: {CONTACT.email}
              </a>
              <a
                href={CONTACT.linkedinUrl ?? `https://linkedin.com/in/${CONTACT.linkedin}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors"
              >
                <span className="text-slate-500" aria-hidden>
                  in
                </span>
                LinkedIn: {CONTACT.linkedin}
              </a>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
            <div>
              <label htmlFor="contact-name" className="sr-only">
                Name
              </label>
              <input
                id="contact-name"
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-600 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="contact-email" className="sr-only">
                Email
              </label>
              <input
                id="contact-email"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-600 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="contact-message" className="sr-only">
                Message
              </label>
              <textarea
                id="contact-message"
                placeholder="Hi Ananda, I'd like to talk about..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-600 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg text-white font-medium transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
