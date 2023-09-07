import styles from './ProcessCard.module.scss'

type ProcessCardProps = {
  icon: number
  title: string
  text: string
}

const ProcessCard = ({ icon, title, text }: ProcessCardProps) => {
  console.log(icon, 'id')
  return (
    <div className={styles.main}>
      <div className={styles.icon}>{icon}</div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.text}>{text}</p>
    </div>
  )
}

export default ProcessCard
