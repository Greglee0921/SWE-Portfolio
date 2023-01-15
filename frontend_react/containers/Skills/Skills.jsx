import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';


import { urlFor, sanityClient } from '../../sanity';
import styles from './Skills.module.scss';

const Skills = ({skills}) => {

  return (
    <>
    <motion.div
      whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
      transition={{ duration: 0.8 }}
      className={`app__flex`}
    >
      <div className='app__wrapper app__flex'>
    <h2 className='head-text'>Skills</h2>
    <div className={styles.app__skillsContainer}>
      <motion.div className={styles.app__skillsList}>
        {skills?.map((skill) => (
          <motion.div
            whileInView={{opacity: [0,1]}}
            transition={{duration: 0.5}}
            className={styles.app__skillsItem}
            key={skill.name}
            >
              <div>
              <div className='app__flex' style={{backgroundColor: skill.bgColor}}>
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
