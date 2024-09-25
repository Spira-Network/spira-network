import { Poppins, Space_Grotesk } from 'next/font/google'

const poppins = Poppins({
    subsets: ['latin'],
    display: 'fallback',
    variable: '--font-heading',
    weight: ['400', '500', '600', '700', '800', '900'],
})

const spaceGrotesk = Space_Grotesk({
    subsets: ['latin'],
    display: 'fallback',
    variable: '--font-body',
})

export { poppins, spaceGrotesk }
