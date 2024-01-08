'use client'

import React from 'react'
import cl from 'clsx'
import { Work_Sans } from 'next/font/google'
const workSans = Work_Sans({ subsets: ['latin'] })
import { scrollTo } from '@/utils/scrollTo'
import styles from './NavbarMenu.module.scss'

const NavbarMenu = () => {
  return (
    <ul className={cl(styles.nav, workSans.className)}>
      {navList.map((nav) => (
        <li
          key={nav.id}
          value={nav.id}
          onClick={() => scrollTo({ namepath: nav.link })}
          className={cl(styles.navItem)}
        >
          {nav.text}
        </li>
      ))}
    </ul>
  )
}

export default NavbarMenu

const navList = [
  { id: 1, text: 'Home', link: '/' },
  { id: 2, text: 'Expertise', link: 'expertise' },
  { id: 3, text: 'Portfolio', link: 'project' },
  { id: 4, text: 'Contact Us', link: 'talk' },
]
