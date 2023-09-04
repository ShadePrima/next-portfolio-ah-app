import cl from 'clsx'
import styles from './Navbar.module.scss'

const navList = [
  { id: 1, text: 'Home' },
  { id: 2, text: 'Expertise' },
  { id: 3, text: 'Portfolio' },
  { id: 4, text: 'Contact Us' },
]

const Navbar = () => {
  return (
    <div className={styles.main}>
      <div className={cl(styles.content, 'container')}>
        <h1 className={styles.logo}>LOS GURUS DE LA TECNOLOGIA</h1>

        <ul className={styles.nav}>
          {navList.map((nav) => (
            <li key={nav.id} className={styles.navItem}>
              {nav.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Navbar
