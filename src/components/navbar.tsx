'use client'

import { useState, useEffect } from 'react'
import MapIcon from './icons/map-icon'
import FeedIcon from './icons/feed-icon'
import LogoIcon from './icons/logo-icon'
import { Button } from './ui/button'
import BurgerMenuIcon from './icons/burger-menu-icon'
import { XIcon } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const BOTTOM_BAR_HEIGHT = '64px'

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const checkIfMobile = () => {
            const mobile = window.innerWidth < 768
            setIsMobile(mobile)
            document.body.style.paddingBottom = mobile ? BOTTOM_BAR_HEIGHT : '0'
        }

        checkIfMobile()
        window.addEventListener('resize', checkIfMobile)

        return () => {
            window.removeEventListener('resize', checkIfMobile)
            document.body.style.paddingBottom = '0'
        }
    }, [])

    return (
        <>
            <header className='relative z-50 border-b border-[#C9CEFF] bg-[#121212] py-4'>
                <nav className='container mx-auto flex items-center justify-between px-4'>
                    <span className='flex items-center gap-1 font-heading font-bold'>
                        <LogoIcon className='size-6 fill-white' />
                        <span className='text-2xl font-bold text-white'>Spira</span>
                    </span>
                    {!isMobile && (
                        <div className='flex items-center gap-5'>
                            <MapIcon className='size-6 fill-white' />
                            <FeedIcon className='size-6 fill-white' />
                            <Button className='mx-5 rounded-full bg-[#C9CEFF] px-5 py-2 font-heading text-base text-[#121212]'>
                                Launch Spira
                            </Button>
                        </div>
                    )}
                    {isMobile && (
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label='Toggle menu'>
                            {isMenuOpen ? (
                                <XIcon className='size-6 stroke-white' />
                            ) : (
                                <BurgerMenuIcon className='size-6 stroke-white' />
                            )}
                        </button>
                    )}
                </nav>

                <AnimatePresence>
                    {isMenuOpen && isMobile && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className='absolute left-0 right-0 top-full overflow-hidden border-b border-[#C9CEFF] bg-[#121212] px-4 shadow-lg'>
                            <div className='flex flex-col items-center gap-4 py-4'>
                                <p className='text-white'>Follow us for updates</p>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </header>

            {isMobile && (
                <div
                    className='fixed bottom-0 left-0 right-0 z-50 border-t border-[#C9CEFF] bg-[#121212] px-4 py-3'
                    style={{ height: BOTTOM_BAR_HEIGHT }}>
                    <div className='flex items-center justify-between'>
                        <MapIcon className='size-6 fill-white' />
                        <Button className='rounded-full bg-[#C9CEFF] px-5 py-2 font-heading text-base text-[#121212]'>
                            Launch Spira
                        </Button>
                        <FeedIcon className='size-6 fill-white' />
                    </div>
                </div>
            )}
        </>
    )
}
