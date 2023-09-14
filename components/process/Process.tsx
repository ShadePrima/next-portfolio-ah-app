import cl from 'clsx'
import { Button } from '@/ui'
import ProcessCard from './processCard/ProcessCard'

import styles from './Process.module.scss'

const Process = () => {
  return (
    <div className={styles.main}>
      <div className={cl(styles.content, 'container')}>
        <div className={styles.cardBlock}>
          {cardList.map((card) => (
            <ProcessCard
              key={card.id}
              icon={card.icon}
              title={card.title}
              text={card.text}
            />
          ))}
        </div>

        <div className={styles.textBlock}>
          <p className={cl(styles.smallTitle, 'title-small')}>How it Works</p>
          <h1 className={cl(styles.title, 'title-middle mt-8')}>Our process</h1>
          <p className={cl(styles.text, 'text-middle mt-24')}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec enim
            vel ac donec et tincidunt in et. Sed erat mattis lacus nunc. Enim
            nam malesuada ipsum enim. Ut velit massa a consequat commodo. Leo at
            sed nunc mattis tincidunt mauris interdum. Sem ante nunc, nisi
            adipiscing viverra nunc.
          </p>
          <div className={styles.button}>
            <Button title='Learn more' variant='blue-dark' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Process

const cardList = [
  {
    id: 1,
    icon: '/icons/process-one.svg',
    title: 'Hello',
    text: 'Lorem ipsum dolor sit amet, consect-etur adipiscing elit. Turpis vel sit nisi, feugiat.',
  },
  {
    id: 2,
    icon: '/icons/process-two.svg',
    title: 'Discovery',
    text: 'Lorem ipsum dolor sit amet, consect-etur adipiscing elit. Turpis vel sit nisi, feugiat.',
  },
  {
    id: 3,
    icon: '/icons/process-three.svg',
    title: 'Work',
    text: 'Lorem ipsum dolor sit amet, consect-etur adipiscing elit. Turpis vel sit nisi, feugiat.',
  },
  {
    id: 4,
    icon: '/icons/process-four.svg',
    title: 'Delivery',
    text: 'Lorem ipsum dolor sit amet, consect-etur adipiscing elit. Turpis vel sit nisi, feugiat.',
  },
]
