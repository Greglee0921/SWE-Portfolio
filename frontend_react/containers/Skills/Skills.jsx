import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';


import { urlFor, sanityClient } from '../../sanity';
import styles from './Skills.module.scss';

let code = '';
const Skills = ({skills}) => {
  const orderedSkills = [skills[5], skills[7], skills[2], skills[1], skills[3], skills[11], skills[9], skills[12], skills[8], skills[0], skills[4], skills[13], skills[10], skills[6]];



  return (
    <>
    <motion.div
      whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
      transition={{ duration: 0.8 }}
      className={'app__wrapper app__flex'}
    >
      <div>
    <div><h2 className='head-text'>Skills</h2></div>
    <div className={styles.app__skillsContainer}>
      <motion.div className={styles.app__skillsList}>
        {orderedSkills?.map((skill) => (
          <motion.div
            whileInView={{opacity: [0,1]}}
            transition={{duration: 0.5}}
            className={styles.app__skillsItem}
            key={skill.name}
            >
              <div className={styles[skill.bgColor]}>
              <div className={`app__flex`}>
                <img src={urlFor(skill?.icon).url()} alt={skill.name}></img>
              </div>
              <p className='p-text'>{skill.name}</p>
              </div>
          </motion.div>
      ))}
      </motion.div>
    </div>
    </div>
    </motion.div>
    </>
        )
}
export default Skills
