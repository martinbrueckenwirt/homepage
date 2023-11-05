import './globals.css'
import { Inter } from 'next/font/google'
/*ACHTUNG!!  functions/font.js lädt alle Fonts an 1 Stelle- Perfomrance */

/*const inter = Inter({ subsets: ['latin'] }) */

/*
 return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  ) */

export const metadata = {
  title: 'Brueckenwirt Appartements',
  description: 'Familienfreundliche, moderne Ferienwohnungen direkt am Schigebiet',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  )
}
