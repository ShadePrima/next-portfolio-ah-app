'use client'
import React, { ReactNode, useState } from 'react'
import Image from 'next/image'
import styles from './style.module.scss'

type Props = {
  title: string
  children: ReactNode
  onClick?: () => void
}

const ModalContent = ({ title, children, onClick }: Props) => {
  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      if (onClick) {
        onClick()
      }
    }
  }

  return (
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div className={styles.modal}>
        <Image
          onClick={onClick}
          className={styles.modal__close}
          src={'/icons/close.svg'}
          width={24}
          height={24}
          alt='close'
        />
        <h1 className={styles.modal__title}>{title}</h1>
        {children}
      </div>
    </div>
  )
}

export default ModalContent
