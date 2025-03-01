'use client'

import { useAuth } from '@/context/auth'
import Link from 'next/link'

export default function AuthButtons() {
  const auth = useAuth()

  return (
    <div>
      {!!auth?.currentUser && (
        <>
          <div>{auth.currentUser.email}</div>
          <div onClick={() => {
            auth.logout()
          }}>Logout</div>  
        </>
      )}
      {!auth?.currentUser &&
        <div className='flex gap-6 items-center'>
          <Link
            href='/login'
            className='uppercase font-semibold hover:text-dark transition-colors duration-500'
          >
            Login
          </Link>
          <Link
            href='/register'
            className='uppercase font-semibold hover:text-dark transition-colors duration-500'
          >
            Register
          </Link>
        </div>
      }
    </div>
  )
}
