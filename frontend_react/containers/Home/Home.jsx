import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
// import pdf from '../../constants/Greg_Resume_2022.pdf'

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
          <a href="https://docs.google.com/document/d/e/2PACX-1vTlAoHe1kB2RD2GaBptywmkSrpUKDbtD1cGLat_UbcRlG_aYOdYVdkJbEU4WEtDKjUaBuSAOXrRQozx/pub">
            <button>Resume</button>
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default AppWrap(Home, "Home");
