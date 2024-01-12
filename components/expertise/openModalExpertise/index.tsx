'use client'
import { Button, ModalContent } from '@/ui'
import Image from 'next/image'
import React, { useState } from 'react'
import styles from './style.module.scss'

type Props = {
  id: number
  selectedCard: {
    iconSrc: string
    buttonVariant: string
  }
  title: string
  text: string
}

const OpenModalExpertise = ({ id, selectedCard, title, text }: Props) => {
  const [showModal, setShowModal] = useState(false)
  return (
    <div>
      <Button
        id={id}
        onClick={() => setShowModal(!showModal)}
        title='Learn more'
        variant={selectedCard.buttonVariant}
        type='button'
      />

      {showModal && (
        <ModalContent title={title} onClick={() => setShowModal(!showModal)}>
          <div className={styles.modal__wrapper}>
            <div>
              <p className={styles.modal__description}>{text}</p>
            </div>
            <Image
              src={'/images/bulb.svg'}
              width={176}
              height={236}
              alt='bulb'
            />
          </div>
        </ModalContent>
      )}
    </div>
  )
}

export default OpenModalExpertise
