import Image from 'next/image'
import { Button } from '@/ui'

import styles from './ExpertCard.module.scss'

type ExpertCardProps = {
  title: string
  text: string
}

const ExpertCard = ({ title, text }: ExpertCardProps) => {
  return (
    <div className={styles.main}>
      <div className={styles.content}>
        <Image
          src='/icons/expert-icon.svg'
          width={80}
          height={80}
          alt='expert-icon'
        />
        <h3 className={styles.title}>Design</h3>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec enim
          vel ac donec et tincidunt in et. Sed erat mattis lacus nunc. Enim nam
          malesuada ipsum enim.
        </p>
      </div>
      <Button title='Learn more' variant='dark' />
    </div>
  )
}

export default ExpertCard
