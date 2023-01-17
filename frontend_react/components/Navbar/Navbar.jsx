import React from 'react'
import Link from 'next/link'
import { SocialIcon } from "react-social-icons";
import { About } from '../../containers';

import images from '../../constants';
import styles from './Navbar.module.scss';
import Image from 'next/image';

const Navbar = () => {
  return (
    <div className={styles.app__navbar}>
    <div className='app__navbarLogo'>
      <Image
      src='/assets/logo.png' alt=''
      height ={40}
      width = {40} />
      </div>
      <ul className={styles.app__navbar__links}>
        {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
          <li
            key={`link-${item}`}>
            <div />
            <Link href={`#${item}`}>{item}</Link>
          </li>
        ))}
      </ul>
      <div className={styles.socials}>
        <SocialIcon
          url="https://www.linkedin.com/in/gregorylee7/"
          fgColor='gray'
          bgColor='transparent'
        />
        <SocialIcon
          url="https://github.com/Greglee0921"
          fgColor='gray'
          bgColor='transparent'
        />
         <SocialIcon
          className='cursor-pointer'
          network='email'
          fgColor='gray'
          bgColor='transparent'
        />
      </div>
      </div>
  )
}

export default Navbar
