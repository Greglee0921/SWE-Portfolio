import React from 'react'
import Link from 'next/link'
import { SocialIcon } from "react-social-icons";
import { About } from '../../containers';

import styles from './Navbar.module.scss';

const Navbar = () => {
  return (
    <div className={styles.app__navbar}>

      <div>Logo</div>
      <ul className={styles.app__navbar__links}>
        {['Home', 'About', 'Skills', 'Projects','Experience', 'Contact'].map((item) => (
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
