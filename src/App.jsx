import { useCallback, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Architecture from './components/Architecture'
import ResumeCTA from './components/ResumeCTA'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ProjectCaseStudy from './components/ProjectCaseStudy'
import DemoCredentialsModal from './components/DemoCredentialsModal'

export default function App() {
  const [activeProject, setActiveProject] = useState(null)
  const [credentialsProject, setCredentialsProject] = useState(null)

  const openCaseStudy = useCallback((project) => setActiveProject(project), [])
  const closeCaseStudy = useCallback(() => setActiveProject(null), [])
  const showCredentials = useCallback((project) => setCredentialsProject(project), [])
  const closeCredentials = useCallback(() => setCredentialsProject(null), [])

  return (
    <div className="relative min-h-screen bg-background text-text">
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-lg focus:bg-surface focus:px-4 focus:py-2 focus:text-sm focus:text-text focus:ring-2 focus:ring-accent"
      >
        Skip to content
      </a>

      <Navbar />

      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects onOpenCaseStudy={openCaseStudy} onShowCredentials={showCredentials} />
        <Architecture />
        <ResumeCTA />
        <Contact />
      </main>

      <Footer />

      <ProjectCaseStudy project={activeProject} onClose={closeCaseStudy} />
      <DemoCredentialsModal project={credentialsProject} onClose={closeCredentials} />
    </div>
  )
}
