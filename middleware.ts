import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'
import { decodeJwt } from 'jose'

export async function middleware(request: NextRequest) {
  console.log('Middleware', request.url)
  if (request.method === 'POST') {
    return NextResponse.next()
  }
  const cookieStore = await cookies()
  const token = cookieStore.get('firebaseAuthToken')
  const decodedToken = decodeJwt(token)

  if (!token) {
    return NextResponse.redirect(new URL('/', request.url))
  }
} 

export const config = {
  matcher: [
    '/admin-dashboard'
  ]
}