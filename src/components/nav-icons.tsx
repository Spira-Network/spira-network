'use client'

import { GlobeIcon, ListIcon } from 'lucide-react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { useEffect, useRef } from 'react'

export default function NavIcons() {
    const pathname = usePathname()
    const indicatorRef = useRef<HTMLDivElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (indicatorRef.current && containerRef.current) {
            const activeLink = containerRef.current.querySelector('.nav-link.active')
            if (activeLink) {
                const { offsetLeft, offsetWidth } = activeLink as HTMLElement
                indicatorRef.current.style.left = `${offsetLeft}px`
                indicatorRef.current.style.width = `${offsetWidth}px`
            }
        }
    }, [pathname])

    return (
        <div ref={containerRef} className='relative flex rounded-full bg-gray-800 p-1'>
            <div
                ref={indicatorRef}
                className='absolute bottom-1 top-1 rounded-full bg-purple-600 transition-all duration-300 ease-in-out'
            />
            <Link
                href='/maps'
                className={`nav-link relative z-10 rounded-full p-2 ${pathname === '/maps' ? 'active' : ''}`}>
                <GlobeIcon className='size-6 text-white' />
            </Link>
            <Link
                href='/feed'
                className={`nav-link relative z-10 rounded-full p-2 ${pathname === '/feed' ? 'active' : ''}`}>
                <ListIcon className='size-6 text-white' />
            </Link>
        </div>
    )
}
