import createMiddleware from 'next-intl/middleware';

console.log('******************************in the MW*******************************');

export default createMiddleware({
  
  // A list of all locales that are supported
  locales: ['en', 'de', 'it'],
 
  // Used when no locale matches
  defaultLocale: 'de'
 

});
 
export const config = {
  // Match only internationalized pathnames
  //matcher: ['/', '/(de|en|it)/:path*']
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|apple-touch-icon.png|favicon.svg|images/books|icons|manifest).*)'
  ]

};
