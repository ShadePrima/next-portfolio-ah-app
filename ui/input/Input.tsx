'use client'

import { ChangeEventHandler } from 'react'
import Image from 'next/image'

import styles from './Input.module.scss'

type Props = {
  icon: string
  type: string
  placeholder: string
  value?: string
  onChange: ChangeEventHandler<HTMLInputElement>
}

export default function Input({
  icon,
  type,
  placeholder,
  value,
  onChange,
}: Props) {
  return (
    <div className={styles.main}>
      <Image src={icon} width={24} height={24} alt='icon' />
      <input
        className={styles.input}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}
