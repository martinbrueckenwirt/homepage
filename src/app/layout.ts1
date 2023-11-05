import {Quicksand} from "next/font/google";

const quicksand = Quicksand({subsets:['latin']});


export default function RootLayout({
    children,
    params: { lang },
  }: {
    children: React.ReactNode
    params: { lang: string }
  }) {
    return (
      <html lang={lang}>
        <head />
        <body>{children}</body>
      </html>
    )
  }