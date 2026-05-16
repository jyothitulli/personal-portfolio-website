import { useState } from 'react'

import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
} from 'react-icons/fa'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log(formData)

    alert('Message Sent!')
  }

  return (
    <section id="contact" className="py-28 px-6">

      <div className="max-w-6xl mx-auto">

        <div className="mb-14">

          <h2 className="text-4xl font-bold mb-4">
            Contact
          </h2>

          <p
            className="
              text-gray-700 dark:text-gray-400
              max-w-2xl
            "
          >
            Open to internships, software engineering opportunities,
            collaborations, and technical discussions.
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {/* LEFT SIDE */}

          <div
            className="
              rounded-3xl p-8

              bg-white/60 dark:bg-white/5

              border border-black/10 dark:border-white/10

              shadow-[0_0_60px_rgba(168,85,247,0.20)]
              hover:-translate-y-1 duration-300
            "
          >

            <h3 className="text-2xl font-semibold mb-6">
              Let’s Connect
            </h3>

            <p
              className="
                text-sm leading-7 mb-8

                text-gray-700 dark:text-gray-400
              "
            >
              Feel free to reach out regarding internships,
              backend engineering, MERN stack development,
              DSA discussions, or collaborative projects.
            </p>

            <div className="space-y-5">

              <div className="flex items-center gap-4">

                <div
                  className="
                    w-11 h-11 rounded-xl

                    flex items-center justify-center

                    bg-purple-500/10
                    text-purple-500
                  "
                >
                  <FaEnvelope />
                </div>

                <div>
                  <p className="text-sm text-gray-500">
                    Email
                  </p>

                  <p className="font-medium">
                    jyothirmayitulli19@gmail.com
                  </p>
                </div>

              </div>

              <div className="flex items-center gap-4">

                <div
                  className="
                    w-11 h-11 rounded-xl

                    flex items-center justify-center

                    bg-purple-500/10
                    text-purple-500
                  "
                >
                  <FaLinkedin />
                </div>

                <div>
                  <p className="text-sm text-gray-500">
                    LinkedIn
                  </p>

                  <p className="font-medium">
                    linkedin.com/in/jyothirmayi-tulli
                  </p>
                </div>

              </div>

              <div className="flex items-center gap-4">

                <div
                  className="
                    w-11 h-11 rounded-xl

                    flex items-center justify-center

                    bg-purple-500/10
                    text-purple-500
                  "
                >
                  <FaGithub />
                </div>

                <div>
                  <p className="text-sm text-gray-500">
                    GitHub
                  </p>

                  <p className="font-medium">
                    github.com/jyothitulli
                  </p>
                </div>

              </div>

              <div className="flex items-center gap-4">

                <div
                  className="
                    w-11 h-11 rounded-xl

                    flex items-center justify-center

                    bg-purple-500/10
                    text-purple-500
                  "
                >
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <p className="text-sm text-gray-500">
                    Location
                  </p>

                  <p className="font-medium">
                    Andhra Pradesh, India
                  </p>
                </div>

              </div>

            </div>

          </div>

          {/* RIGHT SIDE */}

          <div
            className="
              rounded-3xl p-8

              bg-white/60 dark:bg-white/5

              border border-black/10 dark:border-white/10

              shadow-[0_0_40px_rgba(168,85,247,0.10)]
            "
          >

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="
                  w-full px-5 py-4 rounded-2xl

                  bg-white dark:bg-black

                  border border-black/10 dark:border-white/10

                  outline-none

                  focus:border-purple-500
                  focus:shadow-[0_0_20px_rgba(168,85,247,0.25)]

                  transition
                "
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="
                  w-full px-5 py-4 rounded-2xl

                  bg-white dark:bg-black

                  border border-black/10 dark:border-white/10

                  outline-none

                  focus:border-purple-500
                  focus:shadow-[0_0_20px_rgba(168,85,247,0.25)]

                  transition
                "
              />

              <textarea
                name="message"
                rows="5"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                className="
                  w-full px-5 py-4 rounded-2xl

                  bg-white dark:bg-black

                  border border-black/10 dark:border-white/10

                  outline-none resize-none

                  focus:border-purple-500
                  focus:shadow-[0_0_20px_rgba(168,85,247,0.25)]

                  transition
                "
              />

              <button
                type="submit"
                className="
                  w-full py-4 rounded-2xl

                  bg-purple-600 hover:bg-purple-700

                  text-white font-medium

                  transition duration-300

                  hover:shadow-[0_0_35px_rgba(168,85,247,0.35)]
                "
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Contact