import React from 'react'
import { motion } from 'framer-motion';

import { images } from '../../constants';
import styles from './About.module.scss';

const About = () => {
  return (
    <div className={styles.aboutProfile}>
      <motion.img
        initial={{
          opacity: 0,
        }}
        transition={{
          duration: 1.7,
        }}
        whileInView={{ opacity: 1}}
        viewport={{ once: true }}
        src="https://cdn.sanity.io/images/e9plal3b/production/f62a38299b9162aff6cfd5bd3b0b9d1fe81d4711-3999x2999.png"
        alt=''
        className={styles.aboutImg}
      />
      <motion.div
        initial={{
          x: -250,
          opacity: 0,
        }}
        transition={{
          duration: 1,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className={styles.aboutInfo}>
      <h1>About&nbsp;
        <span>Me</span>
      </h1>
      <p>I am a software engineer with a unique background in pharmacy and prior experience from a bootcamp. My background as a pharmacy technician has provided me with a strong attention to detail and ability to problem-solve in a fast-paced environment. My bootcamp experience has given me a solid foundation in software development, including experience with multiple programming languages and a strong understanding of agile methodologies. I have a particular interest in full-stack development and have focused on learning to build full-stack applications.</p>
      <p>In my free time, I enjoy experimenting with different recipes and techniques in the kitchen. Cooking is not only a hobby for me, but also a way to learn about different cultures and cuisines. I also enjoy playing video games as a way to unwind and relax.</p>
      <p>I am excited to continue to grow and develop my skills in the software engineering industry, and am eager to apply my unique background to tackle new and projects.</p>
      </motion.div>
    </div>
  )
}

export default About
