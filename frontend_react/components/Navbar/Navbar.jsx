import React from 'react'
import { SocialIcon } from "react-social-icons";

import styles from './Navbar.module.scss';

const Navbar = () => {
  return (
    <header>

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
      </div>

      <div>
      <SocialIcon
          className='cursor-pointer'
          network='email'
          url="https://github.com/Greglee0921"
          fgColor='gray'
          bgColor='transparent'
        />
      </div>

      </header>
  )
}

export default Navbar
