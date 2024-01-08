import Image from 'next/image'
import cl from 'clsx'
import Navbar from './navbar/Navbar'
import { Button } from '@/ui'
import { Work_Sans } from 'next/font/google'
const workSans = Work_Sans({ subsets: ['latin'] })
import styles from './Header.module.scss'

const Header = () => {
  return (
    <div className={styles.main}>
      <Navbar />

      <div className={cl(styles.content, 'container')}>
        <div className={styles.leftBlock}>
          <h1 className={cl(styles.title)}>
            PIXEL <span className={styles.subtitle}>PUNCHER</span> DIGITAL
            AGENCY
          </h1>
          <p
            className={cl(styles.text, workSans.className, 'text-middle mt-24')}
          >
            Crafting Digital Brilliance, One Pixel at a Time!
          </p>
          <div className={styles.button}>
            <Button title='Get in Touch' variant='blue-dark' />
          </div>
        </div>
        <Image
          className={styles.header__image}
          src={'/images/header-img_2.png'}
          width={520}
          height={520}
          alt='logo'
        />
      </div>
    </div>
  )
}

export default Header
