import cl from 'clsx'
import Image from 'next/image'

import { Darker_Grotesque, Work_Sans } from 'next/font/google'
const darker_grotesque = Darker_Grotesque({ subsets: ['latin'] })
const work_sans = Work_Sans({ subsets: ['latin'] })

import styles from './ProcessCard.module.scss'

type ProcessCardProps = {
  icon: string
  title: string
  text: string
}

const ProcessCard = ({ icon, title, text }: ProcessCardProps) => {
  return (
    <div className={styles.main}>
      <Image src={icon} width={80} height={80} alt='icon' />
      <h3 className={cl(styles.title, darker_grotesque.className)}>{title}</h3>
      <p className={cl(styles.text, work_sans.className)}>{text}</p>
    </div>
  )
}

export default ProcessCard
