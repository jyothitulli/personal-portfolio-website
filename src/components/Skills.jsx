import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaCode,
  FaJava,
} from 'react-icons/fa'

import {
  SiMongodb,
  SiExpress,
  SiPostgresql,
  SiFastapi,
  SiVercel,
  SiTailwindcss,
  SiBootstrap,
  SiCplusplus,
} from 'react-icons/si'
import { VscVscode } from 'react-icons/vsc'
const skillCategories = [
  {
    title: 'Languages',

    skills: [
      {
        name: 'C',
        icon: <SiCplusplus />,
      },

      {
        name: 'Java',
        icon: <FaJava />,
      },

      {
        name: 'C++',
        icon: <SiCplusplus />,
      },

      {
        name: 'Python',
        icon: <FaPython />,
      },

      {
        name: 'JavaScript',
        icon: <FaJsSquare />,
      },
    ],
  },

  {
    title: 'Frontend',

    skills: [
       {
        name: 'HTML',
        icon: <FaHtml5 />,
      },

      {
        name: 'CSS',
        icon: <FaCss3Alt />,
      },
      {
        name: 'React.js',
        icon: <FaReact />,
      },

      {
        name: 'Tailwind CSS',
        icon: <SiTailwindcss />,
      },

      {
        name: 'Bootstrap',
        icon: <SiBootstrap />,
      },

    ],
  },

  {
    title: 'Backend',

    skills: [
      {
        name: 'Node.js',
        icon: <FaNodeJs />,
      },

      {
        name: 'Express.js',
        icon: <SiExpress />,
      },

      {
        name: 'MongoDB',
        icon: <SiMongodb />,
      },

      {
        name: 'FastAPI',
        icon: <SiFastapi />,
      },
    ],
  },

  {
    title: 'Core CS',

    skills: [
      {
        name: 'DBMS',
        icon: <SiPostgresql />,
      },

      {
        name: 'DSA',
        icon: <FaCode />,
      },

      {
        name: 'OOP',
        icon: <FaCode />,
      },

      {
        name: 'OS Basics',
        icon: <FaCode />,
      },
    ],
  },

  {
    title: 'Tools',

    skills: [
      {
        name: 'Git',
        icon: <FaGitAlt />,
      },

      {
        name: 'GitHub',
        icon: <FaGithub />,
      },

      {
        name: 'VS Code',
        icon: <VscVscode />,
      },

      {
        name: 'Docker',
        icon: <FaDocker />,
      },

      {
        name: 'Vercel',
        icon: <SiVercel />,
      },
    ],
  },

  
]

function Skills() {
  return (
    <section id="skills" className="py-28 px-6">

      <div className="max-w-4xl mx-auto">

        <h2 className="text-4xl font-bold mb-14">
          Skills
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="
                group rounded-3xl p-6

                bg-white/60 dark:bg-white/5

                border border-black/10 dark:border-white/10

                shadow-[0_0_25px_rgba(168,85,247,0.08)]

                transition-all duration-500 ease-out

                hover:-translate-y-1
                hover:border-purple-500/40
                hover:shadow-[0_0_60px_rgba(168,85,247,0.22)]
              "
            >

              <h3
                className="
                  text-xl font-semibold mb-6

                  transition duration-300

                  group-hover:text-purple-400
                "
              >
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">

                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="
                      flex items-center gap-3

                      px-2 py-2 rounded-2xl

                      bg-blue-50 dark:bg-white/5

                      border border-black/5 dark:border-white/10

                      transition-all duration-300

                      hover:-translate-y-1
                      hover:border-purple-500/30
                      hover:shadow-[0_0_25px_rgba(168,85,247,0.16)]
                    "
                  >

                    <span className="text-lg text-purple-500">
                      {skill.icon}
                    </span>

                    <span className="text-sm font-medium">
                      {skill.name}
                    </span>

                  </div>
                ))}

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  )
}

export default Skills