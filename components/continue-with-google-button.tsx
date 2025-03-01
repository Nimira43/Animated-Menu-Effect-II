'use client'

import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { Button } from './ui/button'
import { auth } from '@/firebase/client'
import { useAuth } from '@/context/auth'

export default function ContinueWithGoogleButton() {
  const auth = useAuth()

  return (
    <Button
      onClick={() => {
        auth?.loginWithGoogle()
      }}
    >
      Continue with Google
    </Button>
  )
}
