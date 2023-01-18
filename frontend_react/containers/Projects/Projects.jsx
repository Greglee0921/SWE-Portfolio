import { React, useState } from "react";
import Image from 'next/image';
import { motion } from "framer-motion";
import { AiFillEye, AiFillGithub } from "react-icons/ai";

import { urlFor, sanityClient } from "../../sanity";
import styles from "./Projects.module.scss";

const Projects = ({ projects }) => {
  let orderedProjects = [projects[1], projects[0], projects[2]];

  return (
      <div className='app__wrapper app__flex'>
      <motion.div
      whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
      transition={{ duration: 0.8 }}
      >
        <h2 className={styles.project__head}>Projects</h2>

        <div className={styles.app__projects}>
        {orderedProjects?.map((project) => (
              <div
                className={styles.app__projectContainer}
                key={project.title}
              >
                <motion.div
                  whileInView={{ opacity: [0, 1] }}
                  transition={{ duration: 0.5 }}
                  className={styles.app__projectItem}
                >
                  <div className={styles.app__projectImg}>
                    <img
                      src={urlFor(project?.image).url()}
                      alt={project.title}
                    />
                    <motion.div
                      whileHover={{ opacity: [0, 1] }}
                      transition={{
                        duration: 0.25,
                        ease: "easeInOut",
                        staggerChildren: 0.5,
                      }}
                      className={styles.app__projectHover}
                    >
                      <a
                        href={project.linkToBuild}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <motion.div
                          whileInView={{ scale: [0, 1] }}
                          whileHover={{ scale: [1, 0.9] }}
                          transition={{ duration: 0.25 }}
                          className={styles.a__div}
                        >
                          <AiFillEye />
                        </motion.div>
                      </a>
                      <a
                        href={project.gitHubLink}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <motion.div
                          whileInView={{ scale: [0, 1] }}
                          whileHover={{ scale: [1, 0.9] }}
                          transition={{ duration: 0.25 }}
                          className={styles.a__div}
                        >
                          <AiFillGithub />
                        </motion.div>
                      </a>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            ))}
        </div>


      </motion.div>
      </div>
  );
};

export default Projects;
