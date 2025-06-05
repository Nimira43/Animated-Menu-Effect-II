import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import { BiSolidCat } from 'react-icons/bi'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export const metadata: Metadata = {
  title: 'Solus',
  description: 'Using Next JS 15, Tailwind 3, TypeScript and Firebase',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={poppins.className}>
        <nav className='bg-grey-dark  p-5 h-24 flex items-center justify-between'>
          <Link 
            href='/'
            className='logo text-light'  
          >
            <BiSolidCat className='text-3xl text-light'/>
            Solus
          </Link>
          <ul>
            <li>
              <Link
                href='/login'
                className='text-light'
              >Login</Link>
            </li>
            <li>
              <Link
                href='/register'
                className='text-light'
              >Register</Link>
            </li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  )
}
