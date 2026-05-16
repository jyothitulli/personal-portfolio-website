const stats = [
  {
    value: '400+',
    label: 'LeetCode Problems Solved',
  },

  {
    value: '63+',
    label: 'Skills Demonstrated',
  },

  {
    value: '46+',
    label: 'Tools Worked With',
  },

  {
    value: '5',
    label: 'Technical Domains',
  },
]

const certifications = [
  {
    title: 'IT Specialist - HTML & CSS',

    issuer: 'Credly',

    image:
      'https://images.credly.com/size/680x680/images/e2dc688d-de61-44a5-81af-ee96f117a211/ITS-Badges_HTML-and-CSS_1200px.png',

    link:
      'https://www.credly.com/badges/80b878bc-cb5b-45bd-8aaf-3d8bda07375c',
  },
]

function Achievements() {
  return (
    <section id="achievements" className="py-32 px-6">

      <div className="max-w-6xl mx-auto">

        <div className="mb-14">

          <h2 className="text-4xl font-bold mb-5">
            Achievements
          </h2>

          <p
            className="
              text-lg max-w-3xl
              text-gray-700 dark:text-gray-400
            "
          >
            Consistent technical growth through problem solving,
            full-stack development, and practical engineering tasks.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {stats.map((item, index) => (
            <div
              key={index}
              className="
                rounded-3xl p-8 text-center

                bg-white/60 dark:bg-white/5

                border border-black/10 dark:border-white/10

                shadow-[0_0_25px_rgba(168,85,247,0.08)]

                transition-all duration-500 ease-out

                hover:-translate-y-1
                hover:border-purple-400/40
                hover:shadow-[0_0_60px_rgba(168,85,247,0.22)]
              "
            >

              <h3
                className="
                  text-5xl font-bold mb-4
                  text-purple-400
                "
              >
                {item.value}
              </h3>

              <p
                className="
                  text-sm leading-relaxed
                  text-gray-700 dark:text-gray-400
                "
              >
                {item.label}
              </p>

            </div>
          ))}

        </div>

        <div className="mt-20">

          <h3 className="text-2xl font-semibold mb-8">
            Certifications & Badges
          </h3>
          <div className="max-w-md">

  {certifications.map((cert, index) => (
    <div
      key={index}
      className="
        flex items-center gap-5

        rounded-2xl p-5

        bg-white/60 dark:bg-white/5

        border border-black/10 dark:border-white/10

        shadow-[0_0_20px_rgba(168,85,247,0.08)]
      "
    >

      <img
        src={cert.image}
        alt={cert.title}
        className="w-20 h-20 object-contain"
      />

      <div>

        <h4 className="text-lg font-semibold mb-1">
          {cert.title}
        </h4>

        <p
          className="
            text-sm mb-3
            text-gray-700 dark:text-gray-400
          "
        >
          Verified badge via {cert.issuer}
        </p>

        <a
          href={cert.link}
          target="_blank"
          rel="noopener noreferrer"
          className="
            text-purple-400 hover:text-purple-400
            text-sm font-medium transition
          "
        >
          View Credential →
        </a>

      </div>

    </div>
  ))}

</div>

        </div>

      </div>

    </section>
  )
}

export default Achievements