import Image from 'next/image'
import styles from './ProjectItem.module.scss'

type ProjectItemProps = {
  variant: string
}

const ProjectItem = ({ variant }: ProjectItemProps) => {
  return (
    <div className={styles.main}>
      {variant === 'vertical' && (
        <Image
          src='/images/project-vertical.png'
          className={styles.image}
          width={335}
          height={536}
          alt='project-image'
        />
      )}

      {variant === 'horizontal' && (
        <Image
          src='/images/project-horizontal.png'
          className={styles.image}
          width={689}
          height={206}
          alt='project-image'
        />
      )}

      {variant === 'normal' && (
        <Image
          src='/images/project-normal.png'
          className={styles.image}
          width={335}
          height={206}
          alt='project-image'
        />
      )}

      <div className={styles.content}>
        <h2 className={styles.title}>AI Lab Granada</h2>
        <p className={styles.text}>Web Development</p>
      </div>
    </div>
  )
}

export default ProjectItem
