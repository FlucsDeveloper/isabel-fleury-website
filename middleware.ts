import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // Only handle /pt routes for now
  // English routes work normally at root level
  if (pathname.startsWith('/pt')) {
    // Let PT routes through (will be 404 until pages are created)
    return NextResponse.next()
  }

  // All other routes work normally
  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|images|.*\\..*).*)'],
}
