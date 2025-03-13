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
    if (!verifiedToken) {
      return
    }
    const userRecord = await auth.getUser(verifiedToken.uid)
    if (process.env.ADMIN_EMAIL === userRecord.email && !userRecord.customClaims?.admin) {
      auth.setCustomUserClaims(verifiedToken.uid, {
        admin: true
      })
    }
  } catch (e) {
    console.log(e)
  }  
}