export { auth as middleware } from './lib/auth'

// import { NextRequest, NextResponse } from 'next/server'
// import { auth } from './lib/auth'
// import createMiddleware from 'next-intl/middleware'

// const PUBLIC_FILE = /\.(.*)$/

// const intlMiddleware = createMiddleware({
//     // Configura aquí tus opciones de i18n
//     locales: ['en', 'es'],
//     defaultLocale: 'en',
// })

// export default auth((req: NextRequest) => {
//     const isAuth = !!req.auth
//     const isAuthPage = req.nextUrl.pathname.startsWith('/auth')
//     const isPublicPath = PUBLIC_FILE.test(req.nextUrl.pathname)

//     if (isAuthPage) {
//         if (isAuth) {
//             return NextResponse.redirect(new URL('/', req.url))
//         }
//         return intlMiddleware(req)
//     }

//     if (!isAuth && !isAuthPage && !isPublicPath) {
//         let from = req.nextUrl.pathname
//         if (req.nextUrl.search) {
//             from += req.nextUrl.search
//         }
//         // Evitar redirecciones en bucle
//         if (!from.startsWith('/auth/signin')) {
//             return NextResponse.redirect(new URL(`/auth/signin?from=${encodeURIComponent(from)}`, req.url))
//         }
//     }

//     return intlMiddleware(req)
// })

// export const config = {
//     matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
// }
