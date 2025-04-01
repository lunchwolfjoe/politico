import { createServerClient, type CookieOptions } from '@supabase/ssr';
import { NextResponse, type NextRequest } from 'next/server';

// List of paths that are accessible without authentication
const publicPaths = ['/coming-soon']

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return req.cookies.get(name)?.value;
        },
        set(name: string, value: string, options: CookieOptions) {
          res.cookies.set({
            name,
            value,
            ...options,
          });
        },
        remove(name: string, options: CookieOptions) {
          res.cookies.set({
            name,
            value: '',
            ...options,
          });
        },
      },
    }
  );

  // Check if the site is in preview mode via cookies
  const isAuthenticated = req.cookies.has('preview-access')
  
  // Get the path of the request
  const path = req.nextUrl.pathname
  
  // If the path is in the public paths list, allow access
  if (publicPaths.includes(path)) {
    return res;
  }
  
  // If the path is not public and user is not authenticated, redirect to coming-soon
  if (!isAuthenticated) {
    return NextResponse.redirect(new URL('/coming-soon', req.url))
  }
  
  // Check if the request is for the dashboard
  if (req.nextUrl.pathname.startsWith('/dashboard')) {
    const {
      data: { session },
    } = await supabase.auth.getSession();

    // If there's no session, redirect to login
    if (!session) {
      return NextResponse.redirect(new URL('/login', req.url));
    }
  }

  return res;
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|.*\\.svg).*)', '/dashboard/:path*'],
} 