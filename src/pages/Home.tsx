import React from 'react'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import TechSkills from '../components/TechSkills'
import ProjectsGrid from '../components/ProjectsGrid'
import ContactForm from '../components/ContactForm'

const Home: React.FC = () => {
  return (
    <main>
      <HeroSection name="Ananda Muhuri" subtitle="Backend Engineer | Distributed Systems | Fintech" />
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <AboutSection />
        <TechSkills />
        <ProjectsGrid />
        <ContactForm />
      </div>
    </main>
  )
}

export default Home
