import cl from 'clsx'
import ProjectItem from '../project-item/ProjectItem'

import styles from './ListOfProjects.module.scss'

const ListOfProjects = () => {
  return (
    <div className={styles.main}>
      <div className={cl(styles.grid, 'container')}>
        <div className={styles.item0}>
          <ProjectItem variant='vertical' />
        </div>
        <div className={styles.item1}>
          <ProjectItem variant='horizontal' />
        </div>
        <div className={styles.item2}>
          <ProjectItem variant='normal' />
        </div>
        <div className={styles.item3}>
          <ProjectItem variant='normal' />
        </div>
      </div>
    </div>
  )
}

export default ListOfProjects
