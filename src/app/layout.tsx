import '@/style/globals.css'
import '@coinbase/onchainkit/styles.css'

import type { Metadata } from 'next'
import { poppins, spaceGrotesk } from '@/lib/fonts'
import { ThemeProvider } from 'next-themes'
import { cn } from '@/lib/utils'
import { Providers } from '@/components/providers'
import { NextIntlClientProvider } from 'next-intl'
import { getLocale, getMessages } from 'next-intl/server'
import Header from '@/components/header'

export const metadata: Metadata = {
    title: 'Spira Network',
    description: 'A Social App For Regenerative Networks',
    icons: {
        icon: '/favicon.svg',
    },
}

type Props = {
    children: React.ReactNode
    footer: React.ReactNode
}

export default async function RootLayout({ children, footer }: Readonly<Props>) {
    const locale = await getLocale()
    const messages = await getMessages()

    return (
        <html lang={locale} suppressHydrationWarning>
            <body
                className={cn(`${spaceGrotesk.variable} ${poppins.variable}`, 'flex min-h-screen flex-col font-body')}>
                <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
                    <Providers>
                        <NextIntlClientProvider messages={messages}>
                            <Header />
                            <main className='container flex grow flex-col'>{children}</main>
                            {footer}
                        </NextIntlClientProvider>
                    </Providers>
                </ThemeProvider>
            </body>
        </html>
    )
}
