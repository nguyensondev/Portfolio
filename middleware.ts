import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Check if there is a locale cookie
  const cookieLocale = request.cookies.get('NEXT_LOCALE')?.value;
  let locale = 'en';

  if (cookieLocale && ['en', 'vi'].includes(cookieLocale)) {
    locale = cookieLocale;
  } else {
    // Fallback to Accept-Language
    const acceptLang = request.headers.get('accept-language');
    if (acceptLang && acceptLang.includes('vi')) {
      locale = 'vi';
    }
  }

  const response = NextResponse.next();
  
  if (!cookieLocale) {
    response.cookies.set('NEXT_LOCALE', locale, { path: '/' });
  }

  return response;
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)'],
};
