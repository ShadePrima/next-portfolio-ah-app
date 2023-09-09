'use client'

import { ChangeEventHandler } from 'react'
import styles from './Input.module.scss'

type Props = {
  type: string
  placeholder: string
  value?: string
  onChange: ChangeEventHandler<HTMLInputElement>
}

export default function Input({ type, placeholder, value, onChange }: Props) {
  return (
    <div className={styles.main}>
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
