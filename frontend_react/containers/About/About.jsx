import React from 'react'
import { motion } from 'framer-motion';

import styles from './About.module.scss';

const About = () => {

  return (
    <div className='app__wrapper app__flex'>
    <div className={styles.aboutProfile}>
      <motion.img
        initial={{
          opacity: 0,
        }}
        transition={{
          duration: 1.7,
        }}
        whileInView={{ opacity: 1}}
        src='https://cdn.sanity.io/images/e9plal3b/production/f62a38299b9162aff6cfd5bd3b0b9d1fe81d4711-3999x2999.png'
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
        className={styles.aboutInfo}>
      <h1 className='head-text'>About&nbsp;
        <span>Me</span>
      </h1>
      <p >I am a software engineer with a unique background in pharmacy and development experience from the Fullstack Academy software engineering immersive. My background as a pharmacy technician has provided me with a strong attention to detail and ability to problem-solve in a fast-paced environment. My bootcamp experience has given me a solid foundation in software development, including learning how to to build full stack applications using technologies such as React.  Additionally, it has also taught me how to program such applications in a collaborative environment.</p>
      <p>In my free time, I enjoy experimenting with different recipes and techniques in the kitchen. Cooking is not only a hobby for me, but also a way to learn about different cultures and cuisines. I also enjoy playing strategy video games as it is a way to utilize my critical thinking skills in a more casual and fun setting.</p>
      <p>I am excited to continue to grow and develop my skills in the software engineering industry, and am eager to apply my unique background to tackle new projects.</p>
      </motion.div>
    </div>
    </div>
  )
}

export default About;
