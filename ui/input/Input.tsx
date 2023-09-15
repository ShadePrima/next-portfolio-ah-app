'use client'

import cl from 'clsx'

import { Work_Sans } from 'next/font/google'
const work_sans = Work_Sans({ subsets: ['latin'] })

import Image from 'next/image'

import styles from './Input.module.scss'

type Props = {
  icon: string
  name: string
  type: string
  placeholder: string
  value?: string | number | readonly string[] | undefined
  handleInput?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export default function Input({
  icon,
  name,
  type,
  placeholder,
  value,
  handleInput,
}: Props) {
  // console.log(value, 'value')
  // console.log(handleInput, 'onChange')

  return (
    <div className={styles.main}>
      <Image src={icon} width={24} height={24} alt='icon' />
      <input
        className={cl(styles.input, work_sans.className)}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleInput}
      />
    </div>
  )
}
