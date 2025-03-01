import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { GiCat } from 'react-icons/gi'
import Link from 'next/link'
import { AuthProvider } from '@/context/auth'
import AuthButtons from '@/components/auth-buttons'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export const metadata: Metadata = {
  title: 'Solus',
  description: 'Real Estate website using Next JS and Firebase',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={poppins.className}>
        <AuthProvider>
          <nav className='bg-primary text-light p-5 h-24 flex items-center justify-between'>
            <Link
              className='logo text-3xl tracking-wider flex gap-2 items-center'
              href='/'
            >
              <GiCat />
              <span>Solus</span>
            </Link>
            <ul>
              <li>
                <AuthButtons />
              </li>
            </ul>
          </nav>
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}
