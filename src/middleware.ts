import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import i18n from '../i18n'


export function middleware(request: NextRequest) {
  const locale = request.nextUrl.locale || i18n.defaultLocale
  request.nextUrl.searchParams.set('lang', locale)
  
  console.log('*********Middleware request.nextURL vorher',request); 
    if (
      request.nextUrl.pathname.startsWith('/_next') || 
      request.nextUrl.pathname.includes('/api/') ||
      /\.(.*)$/.test(request.nextUrl.pathname)
      )
    {
      console.log('*-*-*-*-*-*-Middleware request.nextURL -Treffer')
      return}

    /*console.log('Middleware   request ',request); */
  console.log('---------Middleware request.nextURL nachher',request); 
  request.nextUrl.href = request.nextUrl.href.replace(`/${locale}`, "")
 /* console.log('Middleware   request.nextURL--------',request.nextUrl.href); */
  return NextResponse.rewrite(request.nextUrl)

}

/*export const config = {
  // do not localize next.js paths
    matcher: ["/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)",],
  };*/

  /*export const config = {
    // do not localize next.js paths
      matcher: ["/((?!/public).*)",],
    };
/*export const config = {
  matcher: '/((?!_next/image).*)'
} 
*/
