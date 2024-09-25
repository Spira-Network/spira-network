import './globals.css'
import type { Metadata } from 'next'
import Navbar from '@/components/navbar'
import { poppins, spaceGrotesk } from '@/lib/fonts'
import { ThemeProvider } from 'next-themes'

export const metadata: Metadata = {
    title: 'Spira Network',
    description: 'A Social App For Regenerative Networks',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang='en' suppressHydrationWarning>
            <body className={`${spaceGrotesk.variable} ${poppins.variable} font-body`}>
                <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
                    <Navbar />
                    {children}
                </ThemeProvider>
            </body>
        </html>
    )
}
