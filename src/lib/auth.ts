import NextAuth from 'next-auth'
// import CredentialsProvider from 'next-auth/providers/credentials'
// import { SiweMessage } from 'siwe'
// import { getCsrfToken } from 'next-auth/react'
// import { DrizzleAdapter } from '@/lib/auth/drizzle-adapter'
// import { db } from '@/drizzle/db'

export const { handlers, auth, signIn, signOut } = NextAuth({
    //     adapter: DrizzleAdapter(db),
    providers: [
        //         CredentialsProvider({
        //             name: 'Ethereum',
        //             credentials: {
        //                 message: {
        //                     label: 'Message',
        //                     type: 'text',
        //                     placeholder: '0x0',
        //                 },
        //                 signature: {
        //                     label: 'Signature',
        //                     type: 'text',
        //                     placeholder: '0x0',
        //                 },
        //             },
        //             async authorize(credentials) {
        //                 try {
        //                     const siwe = new SiweMessage(JSON.parse(credentials?.message || '{}'))
        //                     const nextAuthUrl = new URL(process.env.NEXTAUTH_URL!)
        //                     const result = await siwe.verify({
        //                         signature: credentials?.signature || '',
        //                         domain: nextAuthUrl.host,
        //                         nonce: await getCsrfToken({ req: { headers: { 'x-csrf-token': credentials?.csrfToken } } }),
        //                     })
        //                     if (result.success) {
        //                         return {
        //                             id: siwe.address,
        //                         }
        //                     }
        //                     return null
        //                 } catch (e) {
        //                     return null
        //                 }
        //             },
        //         }),
    ],
    //     session: {
    //         strategy: 'jwt',
    //     },
    //     callbacks: {
    //         async session({ session, token }) {
    //             session.address = token.sub
    //             session.user.name = token.sub
    //             session.user.image = 'https://www.fillmurray.com/128/128'
    //             return session
    //         },
    //     },
    //     pages: {
    //         signIn: '/auth/signin',
    //     },
})
