import cl from 'clsx'
import ProjectItem from '../project-item/ProjectItem'
import styles from './ListOfProjects.module.scss'
import { projectList } from '@/static/data/project_list'

const ListOfProjects = () => {
  return (
    <div className={styles.main}>
      <div className={cl('container')}>
        <div className={styles.content}>
          {projectList.map(({ id, image, title, description }) => (
            <ProjectItem
              key={id}
              image={image}
              title={title}
              description={description}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ListOfProjects
