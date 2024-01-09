import cl from 'clsx'
import { Work_Sans } from 'next/font/google'
const work_sans = Work_Sans({ subsets: ['latin'] })
import Image from 'next/image'
import styles from './ProjectItem.module.scss'

type ProjectItemProps = {
  id?: number
  image: string
  title: string
  description: string
}

const ProjectItem = ({ image, title, description }: ProjectItemProps) => {
  return (
    <div className={styles.card}>
      <Image
        className={styles.image}
        src={image}
        width={334}
        height={211}
        alt='project'
      />

      <div className={styles.content}>
        <h2 className={cl(styles.title, work_sans.className)}>{title}</h2>
        <p className={cl(styles.text, work_sans.className)}>{description}</p>
      </div>
    </div>
  )
}

export default ProjectItem
