import Image from 'next/image'
import styles from './ProcessCard.module.scss'

const ProcessCard = () => {
  return (
    <div className={styles.main}>
      <div className={styles.icon}>1</div>
      <h3 className={styles.title}>Hello</h3>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet, consect-etur adipiscing elit. Turpis vel sit
        nisi, feugiat sociis.
      </p>
    </div>
  )
}

export default ProcessCard
