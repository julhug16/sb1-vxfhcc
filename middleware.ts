import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req, res })
  const { pathname } = req.nextUrl

  // Verify session
  const {
    data: { session },
  } = await supabase.auth.getSession()

  // Auth pages protection
  if (pathname.startsWith('/admin')) {
    // Allow access to login page
    if (pathname.startsWith('/admin/login')) {
      if (session) {
        // If user is signed in, redirect to admin dashboard
        return NextResponse.redirect(new URL('/admin', req.url))
      }
      // Allow access to login page if not signed in
      return res
    }

    // Protect other admin routes
    if (!session) {
      // If no session, redirect to login
      return NextResponse.redirect(new URL('/admin/login', req.url))
    }

    // Verify user has admin role (implement this check once roles are set up)
    const { data: { user } } = await supabase.auth.getUser()
    const isAdmin = user?.app_metadata?.role === 'super_admin' || user?.app_metadata?.role === 'admin'
    
    if (!isAdmin) {
      // If not admin, redirect to home
      return NextResponse.redirect(new URL('/', req.url))
    }
  }

  return res
}

export const config = {
  matcher: [
    '/admin/:path*',
  ],
}