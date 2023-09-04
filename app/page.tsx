import Image from 'next/image'
import styles from './page.module.scss'
import { Header } from '@/components'

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
    </main>
  )
}
