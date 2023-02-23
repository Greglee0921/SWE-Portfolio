import { React, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { modal } from "@mantine/core";
import { Carousel } from "@mantine/carousel";

import { urlFor, sanityClient } from "../../sanity";
import styles from "./Projects.module.scss";

const Projects = ({ projects }) => {
  let orderedProjects = [projects[0], projects[2], projects[1]];

  return (
    <div className="app__wrapper app__flex">
      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.8 }}
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2 className={styles.project__head}>Projects</h2>
        <Carousel
          w={{ base: "100%" }}
          align="center"
          h={{ base: 580 }}
          slideGap="lg"
          withIndicators
          withControls={false}
          loop
          className={styles.app__projects}
        >
          {orderedProjects?.map((project) => (
            <Carousel.Slide key={project.title}>
              <div className={styles.app__projectContainer}>
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
                      className={styles[project.title]}

                    >
                      <div className={styles.app__projectTitle}>
                        <h2>{project?.title}</h2>
                      </div>
                      <div>
                        <h2>Summary</h2>
                        <p className="p-text">{project?.summary}</p>
                      </div>
                      <div>
                        <h2>Tech</h2>
                        <p className="p-text">{project?.techStack}</p>
                      </div>

                      <div>
                        <h2>Live</h2>
                        {project.gitHubLink ? (
                        <a
                          href={project.linkToBuild}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {project.linkToBuild}
                        </a> )
                      : <p style={{color: 'white'}}>Coming Soon</p>
                        }
                      </div>
                      <div>
                        <h2>GitHub</h2>
                        {project.gitHubLink ? (
                        <a
                          href={project.gitHubLink}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {project.gitHubLink}
                        </a> )
                      : <p style={{color: 'white'}}>Coming Soon</p>
                        }
                      </div>

                      {/* {project.linkToBuild || project.gitHubLink ? (
                      <div style={{ display: "flex" }}>
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
                      </div>
                    ) : (
                      ""
                    )} */}
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </Carousel.Slide>
          ))}
        </Carousel>
      </motion.div>
    </div>
  );
};

export default Projects;
