'use client'

import { GlobeIcon, ListIcon } from 'lucide-react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const navItems = [
    { href: '/map', Icon: GlobeIcon },
    { href: '/feed', Icon: ListIcon },
]

export default function NavIcons() {
    const pathname = usePathname()
    const indicatorRef = useRef<HTMLDivElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        const updateIndicator = () => {
            if (indicatorRef.current && containerRef.current) {
                const activeLink = containerRef.current.querySelector('.nav-link.active')
                if (activeLink) {
                    const { offsetLeft, offsetWidth } = activeLink as HTMLElement
                    indicatorRef.current.style.left = `${offsetLeft}px`
                    indicatorRef.current.style.width = `${offsetWidth}px`
                    indicatorRef.current.style.opacity = '1'
                } else {
                    // Hide the indicator when no link is active
                    indicatorRef.current.style.opacity = '0'
                }
            }
        }

        updateIndicator()
        setIsLoaded(true)

        // Add a small delay to ensure DOM is fully rendered
        const timeoutId = setTimeout(updateIndicator, 0)

        return () => clearTimeout(timeoutId)
    }, [pathname, isLoaded])

    const isActive = (path: string) => pathname.endsWith(path)

    return (
        <div ref={containerRef} className='relative flex rounded-full bg-white/5 p-1'>
            <motion.div
                ref={indicatorRef}
                className='absolute bottom-1 top-1 rounded-full bg-[#9D84F9] transition-all duration-300 ease-in-out'
                layout
                transition={{
                    type: 'spring',
                    stiffness: 500,
                    damping: 30,
                }}
            />
            {navItems.map(({ href, Icon }) => (
                <Link
                    key={href}
                    href={href}
                    className={`nav-link relative z-10 rounded-full p-2 ${isActive(href) ? 'active' : ''}`}>
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className='transition-colors duration-200 ease-in-out hover:text-[#9D84F9]'>
                        <Icon className='size-6 text-white' />
                    </motion.div>
                </Link>
            ))}
        </div>
    )
}
