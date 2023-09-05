import cl from 'clsx'
import Image from 'next/image'

import Navbar from './navbar/Navbar'
import { Button } from '@/ui'

import styles from './Header.module.scss'

const Header = () => {
  return (
    <div>
      <Navbar />

      <div className={cl(styles.content, 'container')}>
        <div className={styles.leftBlock}>
          <h1 className={styles.title}>THIS IS WHAT WE DO</h1>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis vel
            sit nisi, feugiat sociis.
          </p>
          <div className={styles.button}>
            <Button title='Get in Touch' variant='white' />
          </div>
        </div>
        <Image
          src='/images/header-img.png'
          width={510}
          height={510}
          alt='face'
        />
      </div>
    </div>
  )
}

export default Header
