import cl from 'clsx'

import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

import ContactForm from './contact-form/ContactForm'
import styles from './Talk.module.scss'

const Talk = () => {
  return (
    <div className={styles.main}>
      <h1 className={cl(inter.className, 'title-large text-center')}>
        Let’s talk
      </h1>
      <div className={cl(styles.content, 'container-small flex-center mt-48')}>
        <div className={styles.leftBlock}>
          <p className='title-small'>Contact us</p>
          <h2 className='title-middle'>Write to us</h2>
          <p className='text-middle mt-20'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec enim
            vel ac donec et tincidunt in et. Sed erat mattis lacus nunc. Enim
            nam malesuada ipsum enim. Ut velit massa a consequat commodo. Leo at
            sed nunc mattis tincidunt mauris interdum. Sem ante nunc, nisi
            adipiscing viverra nunc.
          </p>
        </div>

        <ContactForm />
      </div>
    </div>
  )
}

export default Talk
