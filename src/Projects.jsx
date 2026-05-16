import {
  FaServer,
  FaCode,
  FaNetworkWired,
  FaShoppingCart,
  FaGithub,
  FaNodeJs,
  FaReact,
  FaPython,
  FaMarkdown,
} from 'react-icons/fa'

import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiJavascript,
} from 'react-icons/si'

const projects = [
  {
    title: 'Event-Driven User Activity Service',

    icon: <FaServer />,

    description:
      'A scalable backend system designed to process and track user activities asynchronously using event-driven architecture.',

    stack: [
      {
        name: 'Node.js',
        icon: <FaNodeJs />,
      },

      {
        name: 'MongoDB',
        icon: <SiMongodb />,
      },
    ],

    github: 'https://github.com/jyothitulli/event-tracker',
  },

  {
    title: 'Advanced Code Editor',

    icon: <FaCode />,

    description:
      'A browser-based coding environment focused on improving developer productivity through responsive editor workflows.',

    stack: [
      {
        name: 'React.js',
        icon: <FaReact />,
      },

      {
        name: 'JavaScript',
        icon: <SiJavascript />,
      },

      {
        name: 'Tailwind CSS',
        icon: <SiTailwindcss />,
      },
    ],

    github: 'https://github.com/jyothitulli/advanced-code-editor',
  },

  {
    title: 'MiniBlogger Platform',

    icon: <FaCode />,

    description:
      'A full-stack blogging platform that enables users to create, manage, and publish markdown-based blog content efficiently.',

    stack: [
      {
        name: 'React.js',
        icon: <FaReact />,
      },

      {
        name: 'Node.js',
        icon: <FaNodeJs />,
      },

      {
        name: 'MongoDB',
        icon: <SiMongodb />,
      },

      {
        name: 'Express.js',
        icon: <SiExpress />,
      },

      {
        name: 'Markdown',
        icon: <FaMarkdown />,
      },
    ],

    github: 'https://github.com/jyothitulli/my-blog-platform',
  },

  {
    title: 'Virtual Network Simulator',

    icon: <FaNetworkWired />,

    description:
      'A networking simulation project built to visualize communication flow and routing between virtual network nodes.',

    stack: [
      {
        name: 'Python',
        icon: <FaPython />,
      },
    ],

    github: 'https://github.com/jyothitulli/-Virtual-Network-Simulator',
  },

  {
    title: 'E-Commerce Catalog Project',

    icon: <FaShoppingCart />,

    description:
      'A full-stack e-commerce platform designed for product management, authentication, and seamless shopping workflows.',

    stack: [
      {
        name: 'React.js',
        icon: <FaReact />,
      },

      {
        name: 'Node.js',
        icon: <FaNodeJs />,
      },

      {
        name: 'MongoDB',
        icon: <SiMongodb />,
      },

      {
        name: 'Express.js',
        icon: <SiExpress />,
      },
    ],

    github: 'https://github.com/jyothitulli/ecommerce-catalog-project',
  },
]

function Projects() {
  return (
    <section id="projects" className="py-32 px-6">

      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold mb-14">
          Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {projects.map((project) => (
            <div
              key={project.title}
              className="
                group rounded-3xl p-5

                bg-white/60 dark:bg-white/5

                border border-black/10 dark:border-white/10

                transition-all duration-500 ease-out

                hover:-translate-y-1
                hover:border-purple-400/40
                hover:shadow-[0_0_60px_rgba(168,85,247,0.25)]
              "
            >

              <div
                className="
                  w-14 h-14 rounded-2xl mb-5

                  flex items-center justify-center

                  bg-purple-400/10

                  text-2xl text-purple-400
                "
              >
                {project.icon}
              </div>

              <h3 className="text-xl font-bold mb-4">
                {project.title}
              </h3>

              <p
                className="
                  text-sm leading-7 mb-3

                  text-gray-700 dark:text-gray-400
                "
              >
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">

                {project.stack.map((tech) => (
                  <div
                    key={tech.name}
                    className="
                      flex items-center gap-2

                      px-3 py-1.5 rounded-xl

                      text-xs font-medium

                      bg-purple-400/10

                      border border-purple-400/20
                    "
                  >

                    <span className="text-sm text-purple-400">
                      {tech.icon}
                    </span>

                    <span>
                      {tech.name}
                    </span>

                  </div>
                ))}

              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex items-center gap-2

                  text-purple-400 hover:text-purple-400

                  text-sm font-medium

                  transition
                "
              >

                <FaGithub />

                <span>
                  View on GitHub
                </span>

              </a>

            </div>
          ))}

        </div>

      </div>

    </section>
  )
}

export default Projects