import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Shrivastava Lab',
  description:
    'The research in our lab ranges from exploring bacterial cell biology to investigating how oral and gut microbiomes influence human health'
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body id="outer-container" className={inter.className}>
        <Navbar/>
        <main className='mt-16'>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
