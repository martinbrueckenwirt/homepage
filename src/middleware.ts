
import createMiddleware from 'next-intl/middleware';
import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'

export default createMiddleware({
  
  // A list of all locales that are supported
  locales: ['en', 'de', 'it'],
 
  // Used when no locale matches
  defaultLocale: 'de'
 

});
/*console.log('******************************in the MW*******************************');
console.log('  Middleware Request **********', NextRequest );

console.log('  Middleware response **********', NextResponse );*/
export const config = {
  // Match only internationalized pathnames
  //matcher: ['/', '/(de|en|it)/:path*']
 // matcher: [
   // '/((?!api|_next/static|_next/image|favicon.ico|apple-touch-icon.png|favicon.svg|images/books|icons|manifest).*)'
// ]
 
 matcher: ['/((?!api|_next/static|_next/image|assets|favicon.ico|logo.png|sw.js).*)']
//matcher: ['/((?!api|assets|favicon.ico|logo.png|sw.js).*)']
//von bing-chat matcher: ['/((?!api|_next/static|_next/image|assets|favicon.ico|logo.png|sw.js|images).*)']

};
