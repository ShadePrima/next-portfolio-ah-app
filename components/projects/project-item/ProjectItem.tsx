import styles from './ProjectItem.module.scss'

type ProjectItemProps = {
  variant: string
}

const ProjectItem = ({ variant }: ProjectItemProps) => {
  return (
    <div className={styles.main}>
      {variant === 'vertical' && <div className={styles.verticalImage} />}

      {variant === 'horizontal' && <div className={styles.horizontalImage} />}

      {variant === 'normal' && <div className={styles.normalImage} />}

      <div className={styles.content}>
        <h2 className={styles.title}>AI Lab Granada</h2>
        <p className={styles.text}>Web Development</p>
      </div>
    </div>
  )
}

export default ProjectItem
