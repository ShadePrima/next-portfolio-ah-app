import { Expertise, Header, Process } from '@/components'
import styles from './page.module.scss'

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Expertise />
      <Process />
    </main>
  )
}
