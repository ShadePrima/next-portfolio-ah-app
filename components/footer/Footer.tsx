import cl from 'clsx'
import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <div className={styles.main}>
      <h1 className={cl(styles.title)}>(C) 2023 LOS GURUS DE LA TECNOLOGIA</h1>
    </div>
  )
}

export default Footer
