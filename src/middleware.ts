import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import i18n from '../i18n'


export function middleware(request: NextRequest) {
  const locale = request.nextUrl.locale || i18n.defaultLocale
  request.nextUrl.searchParams.set('lang', locale)
  /*console.log('Middleware   request ',request); 
  console.log('Middleware   request.nextURL',request.nextUrl.href); */
  request.nextUrl.href = request.nextUrl.href.replace(`/${locale}`, "")
  return NextResponse.rewrite(request.nextUrl)

}

/*export const config = {
  matcher: '/((?!_next/image).*)'
} 
*/
