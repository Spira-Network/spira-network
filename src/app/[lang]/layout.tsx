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

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang='en' suppressHydrationWarning>
            <body
                className={cn(`${spaceGrotesk.variable} ${poppins.variable}`, 'flex min-h-screen flex-col font-body')}>
                <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
                    <Providers>
                        <Navbar />
                        <main className='container grow'>{children}</main>
                        <Footer />
                    </Providers>
                </ThemeProvider>
            </body>
        </html>
    )
}
