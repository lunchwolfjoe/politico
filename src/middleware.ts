import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// List of paths that are accessible without authentication
const publicPaths = ['/coming-soon']

export function middleware(request: NextRequest) {
  // Check if the site is in preview mode via cookies
  const isAuthenticated = request.cookies.has('preview-access')
  
  // Get the path of the request
  const path = request.nextUrl.pathname
  
  // If the path is in the public paths list, allow access
  if (publicPaths.includes(path)) {
    return NextResponse.next()
  }
  
  // If the path is not public and user is not authenticated, redirect to coming-soon
  if (!isAuthenticated) {
    return NextResponse.redirect(new URL('/coming-soon', request.url))
  }
  
  // Allow the request to continue
  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|.*\\.svg).*)'],
} 