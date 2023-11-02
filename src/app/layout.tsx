
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
//   icons: {
//     icon: ['/.favicon.ico'],
//     apple:['./apple-touch-icon.png'],
//     shortcut:['./apple-touch-icon.png']
//   },
// };


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" />
      <body>{children}</body>
    </html>
  )
}
