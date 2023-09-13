import cl from 'clsx'

import Navbar from './navbar/Navbar'
import { Button } from '@/ui'

import { Darker_Grotesque, Work_Sans } from 'next/font/google'
const darkerGrotesque = Darker_Grotesque({ subsets: ['latin'] })
const workSans = Work_Sans({ subsets: ['latin'] })

import styles from './Header.module.scss'

const Header = () => {
  return (
    <div className={styles.main}>
      <Navbar />

      <div className={cl(styles.content, 'container')}>
        <div className={styles.leftBlock}>
          <h1
            className={cl(
              styles.title,
              darkerGrotesque.className,
              'title-large'
            )}
          >
            THIS IS WHAT WE DO YEAH YEAH
          </h1>
          <p
            className={cl(styles.text, workSans.className, 'text-middle mt-24')}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis vel
            sit nisi, feugiat sociis.
          </p>
          <div className={styles.button}>
            <Button title='Get in Touch' variant='blue-dark' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
