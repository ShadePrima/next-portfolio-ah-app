import cl from 'clsx'
import styles from './Expertise.module.scss'
import ExpertCard from './expertCard/ExpertCard'

const cardList = [
  {
    id: 1,
    title: 'Design',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec enim vel ac donec et tincidunt in et. Sed erat mattis lacus nunc. Enim nam malesuada ipsum enim.',
  },
  {
    id: 2,
    title: 'Design',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec enim vel ac donec et tincidunt in et. Sed erat mattis lacus nunc. Enim nam malesuada ipsum enim.',
  },
  {
    id: 3,
    title: 'Design',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec enim vel ac donec et tincidunt in et. Sed erat mattis lacus nunc. Enim nam malesuada ipsum enim.',
  },
]

const Expertise = () => {
  return (
    <div className={styles.main}>
      <div className={cl(styles.content, 'container')}>
        <p className={styles.titleSmall}>Features</p>
        <h1 className={styles.title}>Our expertise</h1>

        <div className={styles.cardContainer}>
          {cardList.map((card) => (
            <ExpertCard key={card.id} title={card.title} text={card.text} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Expertise
