import '@/app/globals.css'
import '@coinbase/onchainkit/styles.css'

import type { Metadata } from 'next'
import Navbar from '@/components/navbar'
import { poppins, spaceGrotesk } from '@/lib/fonts'
import { ThemeProvider } from 'next-themes'
import Footer from '@/components/landing/footer'
import { cn } from '@/lib/utils'
import { Providers } from '@/components/providers'

export const metadata: Metadata = {
    title: 'Spira Network',
    description: 'A Social App For Regenerative Networks',
    icons: {
        icon: '/favicon.svg',
    },
}

export async function generateStaticParams() {
    return ['en', 'es', 'pt', 'fr'].map(lang => ({ lang }))
}

type Props = {
    children: React.ReactNode
    params: { lang: string }
}

export default async function RootLayout({ children, params }: Readonly<Props>) {
    return (
        <html lang={params.lang} suppressHydrationWarning>
            <body
                className={cn(`${spaceGrotesk.variable} ${poppins.variable}`, 'flex min-h-screen flex-col font-body')}>
                <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
                    <Providers>
                        <Navbar />
                        <main className='container flex grow'>{children}</main>
                        <Footer />
                    </Providers>
                </ThemeProvider>
            </body>
        </html>
    )
}
