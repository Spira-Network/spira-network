import './globals.css'

import type { Metadata } from 'next'
import Navbar from '@/components/navbar'
import { poppins, spaceGrotesk } from '@/lib/fonts'
import { ThemeProvider } from 'next-themes'
import { Footer } from '@/components/footer'
import { cn } from '@/lib/utils'

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
                    <Navbar />
                    <main className='flex-grow px-4 py-8 sm:px-6 sm:py-12 lg:px-8'>{children}</main>
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    )
}
