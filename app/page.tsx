import {
  Expertise,
  Footer,
  Header,
  Process,
  Projects,
  Talk,
} from '@/components'
import styles from './page.module.scss'

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Expertise />
      {/* <Process /> */}
      {/* <Projects /> */}
      {/* <Talk /> */}
      {/* <Footer /> */}
    </main>
  )
}
