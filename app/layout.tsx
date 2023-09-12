import './globals.scss'
import type { Metadata } from 'next'
import { Inter, Darker_Grotesque, Manrope, Work_Sans } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const darkerGrotesque = Darker_Grotesque({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio App',
  description: 'LOS GURUS DE LA TECNOLOGIA',
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
