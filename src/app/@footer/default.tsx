'use client'

import Footer from '@/features/landing/components/footer'
import { usePathname } from 'next/navigation'

export default function HomeFooter() {
    const pathname = usePathname()
    if (pathname === '/') {
        return <Footer />
    }
    return null
}
