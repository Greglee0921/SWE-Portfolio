import React from 'react'
import { SocialIcon } from "react-social-icons";
import { About } from '../../containers';

import styles from './Navbar.module.scss';

const Navbar = () => {
  return (
    <nav className={styles.app__navbar}>

      <div>Logo</div>
      <ul className={styles.app__navbar__links}>
        {['Home', 'About', 'Projects', 'Skills', 'Experience', 'Contact'].map((item) => (
          <li className='app__flex p-text' key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
      <div>
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
          url="https://github.com/Greglee0921"
          fgColor='gray'
          bgColor='transparent'
        />
      </div>

      </nav>
  )
}

export default Navbar
