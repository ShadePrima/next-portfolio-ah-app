'use client'

import cl from 'clsx'
import React, { MouseEvent } from 'react'

import { Inter, Work_Sans } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
const work_sans = Work_Sans({ subsets: ['latin'] })

import styles from './Button.module.scss'

type ButtonProps = {
  id?: number
  title: string
  variant: string
  type?: 'button' | 'submit' | 'reset' | undefined
}

/**
 * @requires title string
 * @requires variant - white | expert | process |
 *
 */

const Button = ({ id, title, variant, type }: ButtonProps) => {
  return (
    <button
      type={type}
      value={id}
      className={cl(
        styles.main,
        variant === 'white' && styles.buttonWhite,
        variant === 'dark' && styles.buttonDark,
        variant === 'dark' && work_sans.className,
        variant === 'blue' && styles.buttonBlue,
        variant === 'blue' && inter.className,
        variant === 'blue-dark' && styles.buttonBlueDark,
        variant === 'blue-dark' && work_sans.className,
        variant === 'blue-light' && styles.buttonBlueLight,
        variant === 'blue-light' && work_sans.className
      )}
    >
      {title}
    </button>
  )
}

export default Button
