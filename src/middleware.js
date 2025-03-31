import { NextResponse } from 'next/server';

export function middleware(request) {
  // Get the pathname of the request
  const path = request.nextUrl.pathname;

  // If the path starts with /api, allow the request to proceed
  if (path.startsWith('/api')) {
    return NextResponse.next();
  }

  // For all other paths, proceed normally
  return NextResponse.next();
}

// Configure which paths the middleware should run on
export const config = {
  matcher: [
    '/api/:path*',
  ],
}; 