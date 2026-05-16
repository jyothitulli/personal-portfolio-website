import BackgroundEffects from './components/BackgroundEffects'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import ScrollProgress from './components/ScrollProgress'
import Profiles from './components/Profiles'
import Experience from './components/Experience'
import Achievements from './components/Achievements'

function App() {
  return (
    // <div className="relative min-h-screen overflow-x-hidden bg-white text-black dark:bg-black dark:text-white transition-colors duration-300">
    <div className="
  relative min-h-screen overflow-x-hidden

  bg-purple-80 text-black
  dark:bg-black dark:text-white

  transition-colors duration-300
">
      <ScrollProgress />
      <BackgroundEffects />

      <Navbar />

      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
         <Achievements />
        <Profiles />
        <Contact />
      </main>
    </div>
  )
}

export default App