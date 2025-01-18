import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getToken } from 'next-auth/jwt'

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request })
  
  // Check if this is an admin route
  if (request.nextUrl.pathname.startsWith('/admin')) {
    if (!token) {
      return NextResponse.redirect(new URL('/auth/signin', request.url))
    }
    
    if (token.role !== 'admin') {
      return NextResponse.redirect(new URL('/unauthorized', request.url))
    }
  }

  // Verification check for sensitive routes
  if (request.nextUrl.pathname.startsWith('/stream') || 
      request.nextUrl.pathname.startsWith('/chat')) {
    const verificationToken = request.cookies.get('verification')
    if (!verificationToken) {
      return NextResponse.redirect(new URL('/verify', request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*', '/stream/:path*', '/chat/:path*']
}

