import cl from 'clsx'
import Image from 'next/image'

import { Work_Sans } from 'next/font/google'
const workSans = Work_Sans({ subsets: ['latin'] })

import NavbarMenu from './navbar-menu/NavbarMenu'

import styles from './Navbar.module.scss'

const Navbar = () => {
  return (
    <div className={styles.main}>
      <div className={cl(styles.content, 'container')}>
        <div className={styles.logo}>
          <Image src='/icons/logo.svg' width={40} height={40} alt='logo' />
          <h1 className={cl(styles.logoTextContainer, workSans.className)}>
            <span className={styles.logoTextFirst}>LOS</span>
            <span className={styles.logoDivider}>|</span>
            <span className={styles.logoTextSecond}>GURUS</span>
          </h1>
        </div>

        <NavbarMenu />
      </div>
    </div>
  )
}

export default Navbar
