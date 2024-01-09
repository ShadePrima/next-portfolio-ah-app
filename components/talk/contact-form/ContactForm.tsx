'use client'

import React from 'react'
import cl from 'clsx'
import { Work_Sans } from 'next/font/google'
const work_sans = Work_Sans({ subsets: ['latin'] })
import { Button, Input } from '@/ui'
import Image from 'next/image'
import styles from './ContactForm.module.scss'

type formProps = {
  name: string
  email: string
  message: string
}

const ContactForm = () => {
  const [form, setForm] = React.useState({
    name: '',
    email: '',
    message: '',
  })

  const handleTextareaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target
    console.log(event.target, 'event.target textarea')

    console.log(name, 'name')
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }))
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target

    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }))
  }

  //   const handSubmit = async (event: any) => {
  //     event.preventDefault()

  //     try {
  //       const token = 'this my token'

  //       const response = await axios.post('http://web:8000/feedback/', form, {
  //         headers: {
  //           Authorization: `Token ${token}`,
  //         },
  //       })
  //     } catch (err) {
  //       console.log(err)
  //     }
  //   }

  return (
    <div className={styles.main}>
      <div className={styles.form}>
        <form onSubmit={(event) => console.log(event)}>
          <div className={styles.inputBlock}>
            <Input
              icon='/icons/mail.svg'
              type='text'
              name='name'
              placeholder='Your name'
              value={form.name}
              handleInput={handleInputChange}
            />
            <Input
              icon='/icons/mail.svg'
              type='email'
              name='email'
              placeholder='Your email'
              value={form.email}
              handleInput={handleInputChange}
            />
          </div>

          <div className={styles.textArea}>
            <Image src='/icons/mail.svg' width={24} height={24} alt='mail' />

            <textarea
              className={work_sans.className}
              name='message'
              placeholder='Your message'
              value={form.message}
              onChange={handleTextareaChange}
            />
          </div>
          <div className={cl(styles.button, 'mt-48')}>
            <Button type='submit' title='Send message' variant='blue-dark' />
          </div>
        </form>
      </div>
    </div>
  )
}

export default ContactForm
