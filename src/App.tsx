import { PROFILE } from './data/profile'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import ExperienceSection from './components/ExperienceSection'
import TechSkills from './components/TechSkills'
import ProjectsGrid from './components/ProjectsGrid'
import EducationSection from './components/EducationSection'
import AchievementsSection from './components/AchievementsSection'
import GitHubActivity from './components/GitHubActivity'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a23] text-white">
      <Header />
      <HeroSection
        name={PROFILE.name}
        subtitle={PROFILE.title}
      />
      <AboutSection />
      <ExperienceSection />
      <TechSkills />
      <ProjectsGrid />
      <EducationSection />
      <AchievementsSection />
      <GitHubActivity />
      <ContactForm />
      <Footer />
    </div>
  )
}

export default App
