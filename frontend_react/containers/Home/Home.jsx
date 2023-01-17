import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

import AppWrap from "../../wrapper/AppWrap";
import styles from "./Home.module.scss";

const Home = () => {
  return (
    <div className={styles.home}>
      <motion.div
        initial={{
          x: -250,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ x: 0, opacity: 1 }}
        className={styles.app__header__info}
      >
        <div className={styles.app__header}>
          <div className={styles.app__header__badge}>
            <h1>Hello! My name is Gregory Lee!</h1>
            <p>
              I am a Software Engineer who loves to solve problems through code
            </p>
          </div>
          <button>Download Resume</button>
        </div>
      </motion.div>
    </div>
  );
};

export default AppWrap(Home, "Home");
