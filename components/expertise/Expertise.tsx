import cl from 'clsx'

import { Work_Sans, Darker_Grotesque } from 'next/font/google'
const work_sans = Work_Sans({ subsets: ['latin'] })
const darker_grotesque = Darker_Grotesque({ subsets: ['latin'] })

import ExpertCard from './expertCard/ExpertCard'

import styles from './Expertise.module.scss'

const Expertise = () => {
  return (
    <div className={styles.main}>
      <div className={cl(styles.content, 'container')}>
        <div className={styles.titleContainer}>
          <p
            className={cl(
              styles.titleSmall,
              work_sans.className,
              'title-small text-center'
            )}
          >
            Features
          </p>
          <h1
            className={cl(
              styles.title,
              darker_grotesque.className,
              'title-middle text-center mt-8'
            )}
          >
            Our expertise
          </h1>

          <p
            className={cl(work_sans.className, 'text-middle text-center mt-24')}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec enim
            vel ac donec et tincidunt in et.
          </p>
        </div>

        <div className={styles.cardContainer}>
          {cardList.map((card) => (
            <ExpertCard
              key={card.id}
              id={card.id}
              title={card.title}
              text={card.text}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Expertise

const cardList = [
  {
    id: 1,
    title: 'Backend',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec enim vel ac donec et tincidunt in et. ',
  },
  {
    id: 2,
    title: 'Design',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec enim vel ac donec et tincidunt in et. ',
  },
  {
    id: 3,
    title: 'Frontend',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec enim vel ac donec et tincidunt in et. ',
  },
]
