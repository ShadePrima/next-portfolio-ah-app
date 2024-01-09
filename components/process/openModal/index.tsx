'use client'

import { Button, ModalContent } from '@/ui'
import Image from 'next/image'
import React, { useState } from 'react'
import styles from './style.module.scss'

const OpenModal = () => {
  const [showModal, setShowModal] = useState(false)
  return (
    <div>
      <Button
        onClick={() => setShowModal(!showModal)}
        title='Learn more'
        variant='blue-dark'
      />
      {showModal && (
        <ModalContent onClick={() => setShowModal(!showModal)}>
          <div className={styles.modal__wrapper}>
            <div>
              <h1 className={styles.modal__title}>Our process</h1>
              <p className={styles.modal__description}>
                At Pixel Punch we bring your digital dreams to life. From the
                first sketch to the final click, we handle every step of web
                development with precision, passion, and a personal touch.
              </p>
              <p className={styles.modal__description}>
                You have an idea? We have the expertise. With us, you can
                envision a digital presence without getting lost in the
                technicalities. We&apos;re not just developers; we&apos;re your
                partners in creating web magic. Leave the techy stuff to us and
                watch your ideas bloom online. Because when you thrive, we
                thrive.
              </p>
              <p className={styles.modal__description}>
                Let&apos;s create something spectacular together!
              </p>
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

export default OpenModal
