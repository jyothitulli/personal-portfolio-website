import { motion } from 'framer-motion'
import {
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa'

import { SiLeetcode, SiCodechef } from 'react-icons/si'

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6"
    >
      <div className="max-w-5xl text-center">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="
            uppercase tracking-[0.3em]
            text-purple-500
            text-sm mb-4
          "
        >
          SOFTWARE DEVELOPER
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="
            text-5xl md:text-7xl
            font-black
            leading-tight
          "
        >
          Jyothirmayi Tulli
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="
            mt-8 text-lg md:text-xl leading-relaxed
            text-gray-700 dark:text-gray-400
          "
        >
          Computer Science undergraduate focused on scalable backend systems,
          modern frontend architecture, and problem solving through
          Data Structures & Algorithms.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1 }}
          className="mt-10 flex flex-wrap justify-center gap-5"
        >
          <a
            href="#projects"
            className="
  px-7 py-3 rounded-2xl
  bg-purple-600 hover:bg-purple-700
  text-white transition font-medium
  hover:shadow-[0_0_30px_rgba(168,85,247,0.35)]
"
          >
            View Projects
          </a>

          <a
            href="/resume.pdf"
            download
            className="
              px-7 py-3 rounded-2xl
              border border-black/10 dark:border-white/20
              hover:bg-black/5 dark:hover:bg-white/10
              transition font-medium
            "
          >
            Download Resume
          </a>
        </motion.div>
        {/* <div className="flex items-center gap-5 mt-8">/ */}
        <div className="flex justify-center items-center gap-5 mt-8">

  <a
    href="https://github.com/jyothitulli"
    target="_blank"
    rel="noopener noreferrer"
    className="text-2xl text-gray-400 transition-transform duration-700 ease-out hover:-translate-y-1 hover:text-purple-700"   
  >
    <FaGithub />
  </a>

  <a
    href="https://www.linkedin.com/in/jyothirmayi-tulli/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-2xl  text-gray-400  transition-transform 
  duration-700 ease-out
  hover:-translate-y-1
  hover:text-purple-700
"   
  >
    <FaLinkedin />
  </a>

  <a
    href="https://leetcode.com/u/jt_codes519/"
    target="_blank"
    rel="noopener noreferrer"
    className="  text-2xl text-gray-400
  transition-transform 
  duration-700 ease-out
  hover:-translate-y-1
  hover:text-purple-700
"   
  >
    <SiLeetcode />
  </a>

  <a
    href="https://www.codechef.com/users/jyothirmayi_19"
    target="_blank"
    rel="noopener noreferrer"
    className="
  text-2xl
  text-gray-400

  transition-transform 
  duration-700 ease-out

  hover:-translate-y-1
  hover:text-purple-700
"   
  >
    <SiCodechef />
  </a>

</div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-12 flex flex-wrap justify-center gap-4"
        >

          <div
            className="
              px-4 py-2 rounded-full text-sm
              bg-black/[0.04] dark:bg-white/5
              border border-black/10 dark:border-white/10
            "
          >
            400+ LeetCode Problems
          </div>

          <div
            className="
              px-4 py-2 rounded-full text-sm
              bg-black/[0.04] dark:bg-white/5
              border border-black/10 dark:border-white/10
            "
          >
            LeetCode Rating: 1393
          </div>

          <div
            className="
              px-4 py-2 rounded-full text-sm
              bg-black/[0.04] dark:bg-white/5
              border border-black/10 dark:border-white/10
            "
          >
            CGPA: 9.25
          </div>

        </motion.div>
      </div>
    </section>
  )
}

export default Hero