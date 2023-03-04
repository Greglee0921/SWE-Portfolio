import React from 'react'
import Link from 'next/link'
import { SocialIcon } from "react-social-icons";
import { About } from '../../containers';

import images from '../../constants';
import styles from './Navbar.module.scss';
import Image from 'next/image';

const Navbar = ({menuOpen, setMenuOpen}) => {
  return (
    <div className={styles.app__navbar}>
    <div className='app__navbarLogo'>
      <Image
      src='/assets/logo.png' alt=''
      height ={40}
      width = {40} />
      </div>
      <div className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
      <ul className={styles.app__navbar__links}>
        {['Home', 'Projects', 'Skills', 'About', 'Contact'].map((item) => (
          <li
            key={`link-${item}`}>
            <div />
            <Link href={`#${item}`}>{item}</Link>
          </li>
        ))}
      </ul>
      <div className={styles.socials}>
        <SocialIcon
        className={styles.linkedin}
          url="https://www.linkedin.com/in/gregorylee7/"
          fgColor='white'
          // bgColor='#bb6944'
        />
        <SocialIcon
          className={styles.github}
          url="https://github.com/Greglee0921"
          fgColor='white'
          bgColor='#2BA44E'
        />
      </div>
      </div>
  )
}

export default Navbar
