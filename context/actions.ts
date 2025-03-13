'use server'

import { auth } from 'firebase-admin'

export const setToken = async({
  token,
  refreshToken
}: {
  token: string
  refreshToken: string
  }) => {
  try {
    const verifiedToken = await auth.verifyIdToken(token)
  } catch (error) {
    console.log(error)
  }  
}