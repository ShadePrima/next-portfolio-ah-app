import cl from 'clsx'

import { Work_Sans } from 'next/font/google'

const work_sans = Work_Sans({ subsets: ['latin'] })

import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <div className={styles.main}>
      <h1 className={cl(styles.title, work_sans.className)}>
        (C) 2023 LOS GURUS DE LA TECNOLOGIA
      </h1>
    </div>
  )
}

export default Footer
