import { NextResponse } from 'next/server';
import { verifyToken } from '@/lib/jwt';

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Paths that don't require authentication
  const publicPaths = [
    '/',
    '/login',
    '/register',
    '/about',
    '/contact',
    '/product',
    '/403',
    '/admin',
    '/api/auth/login',
    '/api/auth/register',
    '/api/auth/google',
    '/api/auth/google/callback',
    '/api/product',
    '/api/toprated',
  ];

  // Check if the path is public
  const isPublicPath = publicPaths.some(path => 
    pathname === path || pathname.startsWith(path + '/')
  );

  // Also allow static files, images, and public assets
  const isStaticFile = 
    pathname.startsWith('/_next') || 
    pathname.startsWith('/favicon') || 
    pathname.startsWith('/file.svg') ||
    pathname.startsWith('/globe.svg') ||
    pathname.startsWith('/window.svg') ||
    pathname.startsWith('/next.svg') ||
    pathname.startsWith('/vercel.svg') ||
    pathname.includes('.jpg') ||
    pathname.includes('.jpeg') ||
    pathname.includes('.png') ||
    pathname.includes('.gif') ||
    pathname.includes('.ico') ||
    pathname.includes('.svg');

  // Allow admin routes - role check is done in the page itself
  const isAdminRoute = pathname.startsWith('/admin');

  if (isPublicPath || isStaticFile || isAdminRoute) {
    return NextResponse.next();
  }

  // Get token from cookies or authorization header
  let token = request.cookies.get('token')?.value;

  // Also check Authorization header for API routes
  const authHeader = request.headers.get('authorization');
  if (authHeader && authHeader.startsWith('Bearer ')) {
    token = authHeader.split(' ')[1];
  }

  if (!token) {
    // For client-side routes, redirect to login
    if (!pathname.startsWith('/api')) {
      const loginUrl = new URL('/login', request.url);
      loginUrl.searchParams.set('redirect', pathname);
      return NextResponse.redirect(loginUrl);
    }
    // For API routes, return 401
    return NextResponse.json(
      { error: 'Authentication required' },
      { status: 401 }
    );
  }

  // Verify token
  const decoded = verifyToken(token);

  if (!decoded) {
    // Token is invalid or expired
    if (!pathname.startsWith('/api')) {
      const response = NextResponse.redirect(new URL('/login', request.url));
      response.cookies.delete('token');
      return response;
    }
    return NextResponse.json(
      { error: 'Invalid or expired token' },
      { status: 401 }
    );
  }

  // Add user ID and role to headers for API routes
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-user-id', decoded.userId);
  requestHeaders.set('x-user-role', decoded.role || 'user');
  requestHeaders.set('x-user-email', decoded.email || '');

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  return response;
}

export const config = {
  matcher: [
    '/((?!api|_next/).*)',
  ],
};
