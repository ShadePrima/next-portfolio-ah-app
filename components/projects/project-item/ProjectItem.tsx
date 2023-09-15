import cl from 'clsx'

import { Work_Sans } from 'next/font/google'
const work_sans = Work_Sans({ subsets: ['latin'] })

import styles from './ProjectItem.module.scss'

type ProjectItemProps = {
  variant: string
}

const ProjectItem = ({ variant }: ProjectItemProps) => {
  return (
    <div className={styles.main}>
      {variant === 'vertical' && <div className={styles.verticalImage} />}

      {variant === 'horizontal' && <div className={styles.horizontalImage} />}

      {variant === 'square-1' && <div className={styles.squareImage1} />}

      {variant === 'square-2' && <div className={styles.squareImage2} />}

      <div className={styles.content}>
        <h2 className={cl(styles.title, work_sans.className)}>
          AI Lab Granada
        </h2>
        <p className={cl(styles.text, work_sans.className)}>Web Development</p>
      </div>
    </div>
  )
}

export default ProjectItem
