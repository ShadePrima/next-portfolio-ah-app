import './globals.scss'
import type { Metadata } from 'next'
import { Darker_Grotesque } from 'next/font/google'

const darkerGrotesque = Darker_Grotesque({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PIXEL PUNCHER DIGITAL AGENCY',
  description: 'Crafting Digital Brilliance, One Pixel at a Time!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={darkerGrotesque.className}>{children}</body>
    </html>
  )
}
