'use client'

import React from 'react'
import cl from 'clsx'
import Image from 'next/image'

import { Work_Sans } from 'next/font/google'
const work_sans = Work_Sans({ subsets: ['latin'] })

import { Button } from '@/ui'

import styles from './ExpertCard.module.scss'
import OpenModalExpertise from '../openModalExpertise'

type ExpertCardProps = {
  id: number
  title: string
  text: string
}

const ExpertCard = ({ id, title, text }: ExpertCardProps) => {
  const [selectedCard, setSelectedCard] = React.useState({
    iconSrc: '/icons/expert-icon-disabled.svg',
    buttonVariant: 'dark',
  })

  const handleButtonClick = () => {
    setSelectedCard((prevState) => ({
      ...prevState,
      iconSrc:
        prevState.buttonVariant === 'dark'
          ? '/icons/expert-icon-enabled.svg'
          : '/icons/expert-icon-disabled.svg',
      buttonVariant: prevState.buttonVariant === 'dark' ? 'blue-light' : 'dark',
    }))
  }

  return (
    <div className={styles.main}>
      <div className={styles.content}>
        <Image
          src={selectedCard.iconSrc}
          width={104}
          height={104}
          alt='expert-icon'
        />

        <h3 className={cl(styles.title)}>{title}</h3>
        <p className={cl(styles.text, work_sans.className)}>{text}</p>
      </div>
      <div onClick={handleButtonClick}>
        <OpenModalExpertise
          id={id}
          selectedCard={selectedCard}
          title={title}
          text={text}
        />
      </div>
    </div>
  )
}

export default ExpertCard
