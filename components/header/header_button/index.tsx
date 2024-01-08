'use client'

import { Button } from '@/ui'
import { scrollTo } from '@/utils/scrollTo'
import React from 'react'

const HeaderButton = () => {
  return (
    <Button
      onClick={() => scrollTo({ namepath: 'talk' })}
      title='Get in Touch'
      variant='blue-dark'
    />
  )
}

export default HeaderButton
