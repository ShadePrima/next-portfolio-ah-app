import './globals.scss'
import type { Metadata } from 'next'
import { Inter, Nunito_Sans } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const nunitoSans = Nunito_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={nunitoSans.className}>{children}</body>
    </html>
  )
}
