import cl from 'clsx'
import { Button } from '@/ui'
import ProcessCard from './processCard/ProcessCard'
import { Work_Sans } from 'next/font/google'
const work_sans = Work_Sans({ subsets: ['latin'] })
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
          <p
            className={cl(
              styles.smallTitle,
              work_sans.className,
              'title-small'
            )}
          >
            How it Works
          </p>
          <h1 className={cl(styles.title, 'title-middle mt-8')}>Our process</h1>
          <p
            className={cl(
              styles.text,
              work_sans.className,
              'text-middle mt-24'
            )}
          >
            At Pixel Puncher, our process is a carefully curated journey that
            transforms your vision into a digital masterpiece. Here&apos;s a
            glimpse into how we make the magic happen.
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
    title: 'Acquaintance',
    text: 'Get to know your goals and vision.',
  },
  {
    id: 2,
    icon: '/icons/process-two.svg',
    title: 'Discovery',
    text: 'Craft a strategic blueprint tailored to your objectives.',
  },
  {
    id: 3,
    icon: '/icons/process-three.svg',
    title: 'Process',
    text: 'Bring your vision to life through creative design and precise development.',
  },
  {
    id: 4,
    icon: '/icons/process-four.svg',
    title: 'Delivery',
    text: 'Launch and support your project for sustained success.',
  },
]
