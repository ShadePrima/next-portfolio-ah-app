'use client'

import React from 'react'
import cl from 'clsx'

import { Work_Sans } from 'next/font/google'
const workSans = Work_Sans({ subsets: ['latin'] })

import Link from 'next/link'
import styles from './NavbarMenu.module.scss'

const NavbarMenu = () => {
  const [selected, setSelected] = React.useState(1)

  const handleNavItem = (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>
  ) => {
    const target = event.target as HTMLLIElement
    const selectedValue = target.getAttribute('value')
    if (selectedValue) {
      setSelected(parseInt(selectedValue, 10))
    }
  }

  return (
    <ul className={cl(styles.nav, workSans.className)}>
      {navList.map((nav) => (
        <li
          key={nav.id}
          value={nav.id}
          onClick={(event) => handleNavItem(event)}
          className={cl(
            styles.navItem,
            selected === nav.id ? styles.active : ''
          )}
        >
          <Link href={nav.link}>{nav.text}</Link>
        </li>
      ))}
    </ul>
  )
}

export default NavbarMenu

const navList = [
  { id: 1, text: 'Home', link: '/' },
  { id: 2, text: 'Expertise', link: '/#expertise' },
  { id: 3, text: 'Portfolio', link: '/#project' },
  { id: 4, text: 'Contact Us', link: '/#talk' },
]
