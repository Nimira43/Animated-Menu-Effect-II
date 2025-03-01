'use client'

import { useAuth } from '@/context/auth'
import Link from 'next/link'
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuTrigger } from './ui/dropdown-menu'
import { Avatar, AvatarFallback } from './ui/avatar'
import Image from 'next/image'

export default function AuthButtons() {
  const auth = useAuth()

  return (
    <div>
      {!!auth?.currentUser && (
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              {!!auth.currentUser.photoURL && (
                <Image
                  src={auth.currentUser.photoURL}
                  alt={`${auth.currentUser.displayName} avatar`}
                  width={70}
                  height={70}
                />
              )}
              <AvatarFallback>
                {(auth.currentUser.displayName || auth.currentUser.email)?.[0]}
              </AvatarFallback>
              
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>
              <div>{auth.currentUser.displayName}</div>
              <div
                className='font-normal text-xs'
              >
                {auth.currentUser.email}
              </div>
            </DropdownMenuLabel>
          </DropdownMenuContent>
        </DropdownMenu>
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
