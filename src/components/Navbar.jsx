import { useState } from 'react'
import { Menu, X, Moon, Sun } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'
import {
  FaGithub,
  FaLinkedin,
  FaCode
} from 'react-icons/fa'

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Coding Profiles', href: '#profiles' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
  
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const { darkMode, toggleTheme } = useTheme()

  return (
    <header
      className="
        fixed top-0 left-0 w-full z-50
        backdrop-blur-md
        bg-white/70 dark:bg-black/40
        border-b border-black/10 dark:border-white/10
      "
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <h1 className="text-xl font-bold tracking-wide">
          JT.
        </h1>

        <nav className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="
                text-sm
                text-gray-700 dark:text-gray-300
                hover:text-black dark:hover:text-white
                transition
              "
            >
              {item.name}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">

          <button
            aria-label="Toggle Theme"
            onClick={toggleTheme}
            className="
              p-2 rounded-xl
              border border-black/10 dark:border-white/10
              hover:bg-black/5 dark:hover:bg-white/10
              transition
            "
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button
            aria-label="Toggle Menu"
            className="md:hidden
             p-2 rounded-xl
              border border-black/10 dark:border-white/10
              hover:bg-black/5 dark:hover:bg-white/10
              transition"
            
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

        </div>
      </div>

      {/* {menuOpen && (
  <div
    className="
      md:hidden

      absolute top-full left-0 w-full

      backdrop-blur-2xl
      bg-black/85 dark:bg-black/85

      border-b border-white/10

      animate-in fade-in slide-in-from-top-2
      duration-300
    "
  >

    <div
      className="
        flex flex-col items-center
        py-8 gap-7
      "
    >

      {navItems.map((item) => (
        <a
          key={item.name}
          href={item.href}
          onClick={() => setMenuOpen(false)}
          className="
            text-gray-300
            hover:text-purple-400
            hover:scale-110
            text-lg font-medium

            transition duration-300
          "
        >
          {item.name}
        </a>
      ))}

      <button
        aria-label="Toggle Theme"
        onClick={toggleTheme}
        className="
          mt-2

          p-3 rounded-2xl

          border border-white/10

          hover:bg-white/10

          transition
        "
      >
        {darkMode ? <Sun size={22} /> : <Moon size={22} />}
      </button>

    </div>

  </div>
)} */}
{menuOpen && (
  <div
    className="
      md:hidden

      absolute top-[85px] left-1/2
      -translate-x-1/2

      w-[92%] max-w-sm

      rounded-3xl

      backdrop-blur-2xl
      bg-white/70 dark:bg-black/85

      border border-black/10 dark:border-white/10

      shadow-[0_0_60px_rgba(168,85,247,0.18)]

      animate-in fade-in zoom-in-95
      duration-300
    "
  >

    <div className="p-6">

      <div className="flex flex-col gap-3">

        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            onClick={() => setMenuOpen(false)}
            // className="
            //   px-5 py-4 rounded-2xl

            //   text-[15px] font-medium text-center

            //   text-gray-700 dark:text-gray-300

            //   hover:bg-purple-500/10
            //   hover:text-purple-500

            //   transition-all duration-300
            // "
            className="
  group relative

  px-6 py-4 rounded-2xl

  overflow-hidden

  text-[17px] font-medium

  text-gray-700 dark:text-gray-300

  transition-all duration-300 ease-out

  hover:bg-purple-500/10
  hover:text-purple-400

  hover:translate-x-2
"
          >
            {item.name}
          </a>
        ))}

      </div>

      <div
        className="
          mt-6 pt-5

          border-t border-black/10 dark:border-white/10

          flex items-center justify-between
        "
      >

        <span
          className="
            text-sm
            text-gray-500
          "
        >
          Switch Theme
        </span>

        <button
          aria-label="Toggle Theme"
          onClick={toggleTheme}
          className="
            p-3 rounded-2xl

            bg-purple-500/10

            text-purple-500

            hover:scale-110

            transition
          "
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>

      </div>

    </div>

  </div>
)}
    </header>
  )
}

export default Navbar