import cl from 'clsx'

import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

import styles from './Button.module.scss'

type ButtonProps = {
  title: string
  variant: string
  type?: 'button' | 'submit' | 'reset' | undefined
}

/**
 * @requires title string
 * @requires variant - white | expert | process |
 *
 */

const Button = ({ title, variant, type }: ButtonProps) => {
  return (
    <button
      type={type}
      className={cl(
        styles.main,
        variant === 'white' && styles.buttonWhite,
        variant === 'dark' && styles.buttonDark,
        variant === 'dark' && inter.className,
        variant === 'blue' && styles.buttonBlue,
        variant === 'blue' && inter.className
      )}
    >
      {title}
    </button>
  )
}

export default Button
