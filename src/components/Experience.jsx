const experiences = [
  {
    role: 'Trainee',
    company: 'Partnr Network Global Placement Program',
    duration: 'October 2025 - Present',
    description:
      'Selected for a structured training program focused on scalable software engineering practices, backend systems, and professional development.',
  },
  {
  role: 'MERN Stack Intern',
  company: 'AIMS Technology',
  duration: 'May 2025 – July 2025',
  description:
    'Developed a full-stack e-commerce application using React.js, Node.js, and MongoDB with user authentication and product management features.',
  github: 'https://github.com/jyothitulli/update-mern-project',
},
  {
    role: 'Full Stack Development Trainee',
    company: 'Technical Hub',
    duration: 'december 2023 - may 2024',
    description:
      'Worked on frontend and backend web technologies while building practical full-stack projects and improving problem-solving skills.',
  },
  
]

function Experience() {
  return (
    <section id="experience" className="py-32 px-6">

      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold mb-14">
          Experience
        </h2>

        <div className="space-y-8">

          {experiences.map((exp, index) => (
            <div
              key={index}
              className="
  rounded-3xl p-8

  bg-white/60 dark:bg-white/5

  border border-black/10 dark:border-white/10

  shadow-[0_0_25px_rgba(168,85,247,0.08)]
"
            >

              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">

                <div>
                  <h3
                    className="
                      text-2xl font-bold
                      transition duration-300
                      group-hover:text-purple-400
                    "
                  >
                    {exp.role}
                  </h3>

                  <p className="text-purple-500 mt-1">
                    {exp.company}
                  </p>
                </div>

                <p
                  className="
                    text-sm
                    text-gray-700 dark:text-gray-400
                  "
                >
                  {exp.duration}
                </p>

              </div>

              <p
                className="
                  leading-relaxed
                  text-gray-700 dark:text-gray-400
                "
              >
                {exp.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  )
}

export default Experience