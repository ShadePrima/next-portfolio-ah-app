'use client'

import React from 'react'
import styles from './ContactForm.module.scss'
import { Button, Input } from '@/ui'

type formProps = {
  name: string
  email: string
  message: string
}

const ContactForm = () => {
  const [form, setForm] = React.useState<formProps>({
    name: '',
    email: '',
    message: '',
  })

  const handleInput = (event: any) => {
    const { target } = event
    const value = target.value

    setForm((prevForm: formProps) => ({
      ...prevForm,
      [target.name]: value,
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
      <form onSubmit={(event) => console.log(event)}>
        <div className={styles.inputBlock}>
          <Input
            type='text'
            placeholder='Your name'
            value={form.name}
            onChange={handleInput}
          />
          <Input
            type='email'
            placeholder='Your email'
            value={form.email}
            onChange={handleInput}
          />
        </div>

        <div className={styles.textArea}>
          <textarea
            name='message'
            placeholder='Your message'
            value={form.message}
            onChange={handleInput}
          />
        </div>
        <div className={styles.button}>
          <Button type='submit' title='Send message' variant='white' />
        </div>
      </form>
    </div>
  )
}

export default ContactForm
