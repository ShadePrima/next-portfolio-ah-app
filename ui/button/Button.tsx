import cl from 'clsx'

import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

import styles from './Button.module.scss'

/**
 * @param  title
 * @requires variant white
 *
 */

type ButtonProps = {
  title: string
  variant: string
}

const Button = ({ title, variant }: ButtonProps) => {
  return (
    <div
      className={cl(
        styles.main,
        variant === 'white' && styles.buttonWhite,
        variant === 'expert' && styles.buttonExpert,
        variant === 'expert' && inter.className
      )}
    >
      {title}
    </div>
  )
}

export default Button
