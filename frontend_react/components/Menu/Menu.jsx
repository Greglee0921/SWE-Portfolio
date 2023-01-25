import React from 'react'
import Link from 'next/link'

const Menu = ({menuOpen, setMenuOpen}) => {
  return (
    <div className ={'menu ' + (menuOpen && 'active')}>
       <ul>
        {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
          <li
            key={`link-${item}`}>
            <div />
            <Link href={`#${item}`}>{item}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Menu;

