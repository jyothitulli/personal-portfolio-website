function About() {
  return (
    <section id="about" className="py-32 px-6">

      <div className="max-w-6xl mx-auto">

        <div className="mb-14">

          <h2 className="text-4xl font-bold mb-6">
            About Me
          </h2>

          <p
            className="
              max-w-3xl leading-relaxed text-lg
              text-gray-700 dark:text-gray-400
            "
          >
            Full-stack developer focused on building scalable web applications,
            backend systems, and interactive user experiences. Passionate about
            problem-solving, system design, and writing clean maintainable code.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          <div
            className="
              rounded-3xl p-6

              bg-white/60 dark:bg-white/5
              border border-black/10 dark:border-white/10

              transition-all duration-500 ease-out

              hover:-translate-y-1
              hover:border-purple-500/40
              hover:shadow-[0_0_55px_rgba(168,85,247,0.22)]
            "
          >
            <h3 className="text-xl font-semibold mb-4 text-purple-500">
              Development
            </h3>

            <ul className="space-y-2 text-sm leading-relaxed text-gray-700 dark:text-gray-400">
              <li>• Full-stack web application development</li>
              <li>• REST API integration and backend workflows</li>
              <li>• Responsive and interactive frontend systems</li>
            </ul>
          </div>

          <div
            className="
              rounded-3xl p-6

              bg-white/60 dark:bg-white/5
              border border-black/10 dark:border-white/10

              transition-all duration-500 ease-out

              hover:-translate-y-1
              hover:border-purple-500/40
              hover:shadow-[0_0_55px_rgba(168,85,247,0.22)]
            "
          >
            <h3 className="text-xl font-semibold mb-4 text-purple-500">
              Problem Solving
            </h3>

            <ul className="space-y-2 text-sm leading-relaxed text-gray-700 dark:text-gray-400">
              <li>• Strong focus on Data Structures & Algorithms</li>
              <li>• Consistent competitive coding practice</li>
              <li>• Analytical and optimization-oriented thinking</li>
            </ul>
          </div>

          <div
            className="
              rounded-3xl p-6

              bg-white/60 dark:bg-white/5
              border border-black/10 dark:border-white/10

              transition-all duration-500 ease-out

              hover:-translate-y-1
              hover:border-purple-500/40
              hover:shadow-[0_0_55px_rgba(168,85,247,0.22)]
            "
          >
            <h3 className="text-xl font-semibold mb-4 text-purple-500">
              Goals
            </h3>

            <ul className="space-y-2 text-sm leading-relaxed text-gray-700 dark:text-gray-400">
              <li>• Build scalable production-grade applications</li>
              <li>• Grow as a backend and system-focused engineer</li>
              <li>• Contribute to impactful software products</li>
            </ul>
          </div>

        </div>  

      </div>
    </section>
  )
}

export default About