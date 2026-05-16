import {
  FaGithub,
  FaLinkedin,
  FaHackerrank,
} from 'react-icons/fa'

import {
  SiLeetcode,
  SiCodechef,
  SiGeeksforgeeks,
} from 'react-icons/si'

const profiles = [
  {
    name: 'GitHub',

    username: 'jyothitulli',

    description:
      'Projects, backend systems, contributions, and development experiments.',

    link: 'https://github.com/jyothitulli',

    icon: <FaGithub />,

    stats: [
      {
        label: 'Repositories',
        value: 'Software Development and Full-Stack',
      },

      {
        label: 'Activity',
        value: 'Year-round commits',
      },
    ],
  },

  {
    name: 'LinkedIn',

    username: 'Jyothirmayi Tulli',

    description:
      'Professional experience, internships, and engineering growth journey.',

    link: 'https://linkedin.com',

    icon: <FaLinkedin />,

    stats: [
      {
        label: 'Focus',
        value: 'Software Engineering',
      },

      {
        label: 'Open To',
        value: 'Internships',
      },
    ],
  },

  {
    name: 'LeetCode',

    username: 'jyothirmayi',

    description:
      'Problem solving, contest preparation, algorithms, and DSA practice.',

    link: 'https://leetcode.com',

    icon: <SiLeetcode />,

    stats: [
      {
        label: 'Problems',
        value: '400+ solved',
      },

      {
        label: 'Rating',
        value: '1393',
      },
    ],
  },

  {
    name: 'CodeChef',

    username: 'jyothirmayi',

    description:
      'Competitive programming contests and logical problem solving practice.',

    link: 'https://codechef.com',

    icon: <SiCodechef />,

    stats: [
      {
        label: 'Contests',
        value: 'Regular participation',
      },

      {
        label: 'Focus',
        value: 'DSA & CPP',
      },
    ],
  },

  {
    name: 'GeeksforGeeks',

    username: 'jyothirmayfxs9',

    description:
      'Structured coding practice, interview preparation, and technical learning.',

    link: 'https://www.geeksforgeeks.org/user/jyothirmayfxs9/',

    icon: <SiGeeksforgeeks />,

    stats: [
      {
        label: 'Practice',
        value: 'Consistent learning',
      },

      {
        label: 'Topics',
        value: 'DSA & Core CS',
      },
    ],
  },

  {
    name: 'HackerRank',

    username: 'jyochinnu019',

    description:
      'Programming challenges, certifications, and language-based coding practice.',

    link: 'https://www.hackerrank.com/profile/jyochinnu019',

    icon: <FaHackerrank />,

    stats: [
      {
        label: 'Domains',
        value: 'Problem Solving',
      },

      {
        label: 'Practice',
        value: 'Coding challenges',
      },
    ],
  },
]

function Profiles() {
  return (
    <section id="profiles" className="py-32 px-6">

      <div className="max-w-6xl mx-auto">

        <div className="mb-14">

          <h2 className="text-4xl font-bold mb-4">
            Coding Profiles
          </h2>

          <p
            className="
              max-w-2xl
              text-gray-700 dark:text-gray-400
            "
          >
            Platforms showcasing problem solving, competitive programming,
            development activity, and continuous technical learning.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {profiles.map((profile) => (
            <div
              key={profile.name}
              className="
                group

                rounded-3xl p-6

                transition-all duration-500 ease-out

                bg-black/[0.03] dark:bg-white/5

                border border-black/10 dark:border-white/10

                hover:-translate-y-2
                hover:scale-[1.02]

                hover:border-purple-500/40

                hover:shadow-[0_0_60px_rgba(168,85,247,0.25)]
              "
            >

              <div className="flex items-start gap-4 mb-5">

  <div
    className="
      min-w-[56px] h-14 rounded-2xl

      flex items-center justify-center

      bg-purple-500/10

      text-2xl text-purple-500

      transition-all duration-500

      group-hover:rotate-6
      group-hover:scale-110

      group-hover:shadow-[0_0_30px_rgba(168,85,247,0.25)]
    "
  >
    {profile.icon}
  </div>

  <div>

    <h3
      className="
        text-2xl font-bold mb-1

        transition duration-300

        group-hover:text-purple-400
      "
    >
      {profile.name}
    </h3>

    <p
      className="
        text-sm

        text-purple-500
      "
    >
      @{profile.username}
    </p>

  </div>

</div>

              <p
                className="
                  leading-relaxed text-sm mb-6

                  text-gray-700 dark:text-gray-400
                "
              >
                {profile.description}
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">

                {profile.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="
                      rounded-2xl p-3

                      bg-purple-500/5

                      border border-purple-500/10
                    "
                  >

                    <p
                      className="
                        text-[11px]
                        uppercase tracking-wider

                        mb-2

                        text-gray-500
                      "
                    >
                      {stat.label}
                    </p>

                    <p
                      className="
                        text-sm font-medium

                        text-gray-800 dark:text-gray-200
                      "
                    >
                      {stat.value}
                    </p>

                  </div>
                ))}

              </div>

              <a
                href={profile.link}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex items-center gap-2

                  text-purple-500 hover:text-purple-400

                  text-sm font-medium

                  transition duration-300
                "
              >
                Visit Profile →
              </a>

            </div>
          ))}

        </div>

      </div>

    </section>
  )
}

export default Profiles