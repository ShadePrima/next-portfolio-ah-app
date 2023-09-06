import cl from 'clsx'
import { Button } from '@/ui'
import styles from './Process.module.scss'
import ProcessCard from './processCard/ProcessCard'

const cardList = [
  {
    id: 1,
    icon: 1,
    title: 'Hello',
    text: 'Lorem ipsum dolor sit amet, consect-etur adipiscing elit. Turpis vel sit nisi, feugiat sociis. ',
  },
  {
    id: 2,
    icon: 1,
    title: 'Discovery',
    text: 'Lorem ipsum dolor sit amet, consect-etur adipiscing elit. Turpis vel sit nisi, feugiat sociis. ',
  },
  {
    id: 3,
    icon: 1,
    title: 'Work',
    text: 'Lorem ipsum dolor sit amet, consect-etur adipiscing elit. Turpis vel sit nisi, feugiat sociis. ',
  },
  {
    id: 4,
    icon: 1,
    title: 'Delivery',
    text: 'Lorem ipsum dolor sit amet, consect-etur adipiscing elit. Turpis vel sit nisi, feugiat sociis. ',
  },
]

const Process = () => {
  return (
    <div className={styles.main}>
      <div className={cl(styles.content, 'container')}>
        <div className={styles.cardBlock}>
          {cardList.map((card) => (
            <ProcessCard key={card.id} />
          ))}
        </div>

        <div className={styles.textBlock}>
          <p className={styles.smallTitle}>How it Works</p>
          <h1 className={cl(styles.title, 'title-middle mt-8')}>Our process</h1>
          <p className={cl(styles.text, 'text-middle mt-20')}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec enim
            vel ac donec et tincidunt in et. Sed erat mattis lacus nunc. Enim
            nam malesuada ipsum enim. Ut velit massa a consequat commodo. Leo at
            sed nunc mattis tincidunt mauris interdum. Sem ante nunc, nisi
            adipiscing viverra nunc.
          </p>
          <div className={styles.button}>
            <Button title='Get in Touch' variant='blue' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Process
