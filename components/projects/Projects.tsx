import cl from 'clsx'
import Image from 'next/image'
import { Button } from '@/ui'

import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

import ListOfProjects from './list-of-projects/ListOfProjects'
import styles from './Projects.module.scss'

const Projects = () => {
  return (
    <div className={styles.main}>
      <div className={cl(styles.content, 'container')}>
        <div className={styles.leftBlock}>
          <p className={cl(styles.smallTitle, 'title-small')}>Portfolio</p>
          <h1 className='title-middle mt-8'>Featured Project</h1>
          <p className='text-middle mt-20'>
            Deployed scalable travel, event and telemedicine web and hybrid
            mobile apps using React SPA and PWA. Collaborated in 140+ projects
            with 50+ clients all around the world. I am also interested in data
            analytics and visualization.
          </p>
        </div>

        <div className={styles.rightBlock}>
          <div className={styles.buttonContainer}>
            <Image src='/icons/arrow.svg' width={57} height={57} alt='arrow' />

            <h3 className={cl(styles.buttonTitle, inter.className)}>
              Tryotell app
            </h3>

            <div className={styles.button}>
              <Button title='View' variant='blue' />
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
