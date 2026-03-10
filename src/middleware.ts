import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const session = request.cookies.get('firebase-auth-token'); 
  
  // LOGGING: Cek di terminal saat kamu akses dashboard
  console.log("Middleware sedang cek cookie:", session ? "Ditemukan!" : "TIDAK ADA!");

  if (request.nextUrl.pathname.startsWith('/dashboard') && !session) {
    console.log("Middleware menolak akses, lempar ke login.");
    return NextResponse.redirect(new URL('/auth/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*'],
};