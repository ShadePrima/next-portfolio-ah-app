import cl from 'clsx'
import Image from 'next/image'
import { Button } from '@/ui'

import { Work_Sans, Darker_Grotesque, Inter } from 'next/font/google'
const work_sans = Work_Sans({ subsets: ['latin'] })
const darker_grotesque = Darker_Grotesque({ subsets: ['latin'] })
const inter = Inter({ subsets: ['latin'] })

import ListOfProjects from './list-of-projects/ListOfProjects'

import styles from './Projects.module.scss'

const Projects = () => {
  return (
    <div id='project' className={styles.main}>
      <div className={cl(styles.content, 'container')}>
        <div className={styles.leftBlock}>
          <p
            className={cl(
              styles.smallTitle,
              work_sans.className,
              'title-small'
            )}
          >
            Portfolio
          </p>
          <h1 className={cl(darker_grotesque.className, 'title-middle mt-8')}>
            Featured <br /> Project
          </h1>
          <p className={cl(work_sans.className, 'text-middle mt-24')}>
            Deployed scalable travel, event and telemedicine web and hybrid
            mobile apps using React SPA and PWA. Collaborated in 140+ projects
            with 50+ clients all around the world. I am also interested in data
            analytics and visualization.
          </p>
        </div>

        <div className={styles.rightBlock}>
          <div className={styles.buttonContainer}>
            <Image
              className={styles.arrow}
              src='/icons/arrow.svg'
              width={57}
              height={57}
              alt='arrow'
            />

            <h3 className={cl(styles.buttonTitle, inter.className)}>
              Tryotell app
            </h3>

            <div className={styles.button}>
              <Button title='View' variant='blue-dark' />
            </div>
          </div>

          <div className={styles.imageContainer}>
            <Image
              src='/images/phone.png'
              width={299}
              height={357}
              alt='phone'
            />
          </div>
        </div>
      </div>

      <ListOfProjects />
    </div>
  )
}

export default Projects
