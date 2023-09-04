import cl from 'clsx'

import Navbar from './navbar/Navbar'

import styles from './Header.module.scss'
import Image from 'next/image'
import { Button } from '@/ui'

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
          <Button title='Get in Touch' variant='white' />
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
