
import createMiddleware from 'next-intl/middleware';
/*neu 21.1.2024*/
import {locales, localePrefix} from './navigation';

export default createMiddleware({
  
  // A list of all locales that are supported
  /*neu 21.1.2024 entfernt und in navigation.ts verlagert
  locales: ['en', 'de', 'it'],
 */
  // Used when no locale matches
  /*neu 21.1.2024 localePrefix,
  locales*/
  defaultLocale: 'de',
  localePrefix,
  locales

});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(de|en|it)/:path*']
 
 //matcher zeigt keine Bilder an
 // matcher: ['/((?!api|_next/static|_next/image|favicon.ico|apple-touch-icon.png|favicon.svg|images/books|icons|manifest).*)']
//matcher: ['/((?!api|_next/static|_next/image|assets|favicon.ico|logo.png|sw.js).*)']
//matcher: ['/((?!api|assets|favicon.ico|logo.png|sw.js).*)']
//matcher: ['/((?!api|_next/static|_next/image|assets|favicon.ico|logo.png|sw.js).*)']

};
