'use server'

import { auth } from 'firebase-admin'

export const setToken = async({
  token,
  refreshToken
}: {
  token: string
  refreshToken: string
}) => {
  const verifiedToken = auth.verifyToken(token)
}