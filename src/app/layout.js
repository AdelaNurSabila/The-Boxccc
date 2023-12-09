import { Nunito } from 'next/font/google' //font//
import './globals.css'
import Navbar from './components/navbar'
import Footer from './components/footer'

const nunito = Nunito({ subsets: ['latin'] })

export const metadata = {
  title: 'THE BOX',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
          {children}
         <Footer/> 
      </body>
    </html>
  )
}