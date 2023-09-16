import cl from 'clsx'

import { Work_Sans, Darker_Grotesque } from 'next/font/google'
const work_sans = Work_Sans({ subsets: ['latin'] })
const darker_grotesque = Darker_Grotesque({ subsets: ['latin'] })

import ContactForm from './contact-form/ContactForm'
import styles from './Talk.module.scss'

const Talk = () => {
  return (
    <div id='talk' className={styles.main}>
      <h1
        className={cl(
          styles.title,
          darker_grotesque.className,
          'title-large text-center'
        )}
      >
        Let’s talk
      </h1>
      <div className={cl(styles.content, 'container-small flex-between mt-48')}>
        <div className={styles.leftBlock}>
          <p className={cl(work_sans.className, 'title-small')}>Contact form</p>
          <h2 className={cl(darker_grotesque.className, 'title-middle mt-8')}>
            Write to us
          </h2>
          <p className={cl(work_sans.className, 'text-middle mt-20')}>
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
