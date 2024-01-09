import cl from 'clsx'

import { Work_Sans } from 'next/font/google'
const work_sans = Work_Sans({ subsets: ['latin'] })

import ContactForm from './contact-form/ContactForm'
import styles from './Talk.module.scss'

const Talk = () => {
  return (
    <div id='talk' className={styles.main}>
      <h1 className={cl(styles.title, 'title-large text-center')}>
        Let’s talk
      </h1>
      <div className={cl(styles.content, 'container-small flex-between mt-48')}>
        <ContactForm />
      </div>
    </div>
  )
}

export default Talk
