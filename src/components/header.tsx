'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { useSession, signOut } from 'next-auth/react'
import dynamic from 'next/dynamic'
import LogoIcon from '@/components/icons/logo.icon'
import BurgerMenuIcon from '@/components/icons/burger-menu.icon'
import { XIcon } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import AppNavigation from './navigation/app-navigation'
import SearchBar from './navigation/search-bar'
import ViewSwitcher from './navigation/view-switcher'
import { Button } from '@/components/ui/button'

const OnboardingWrapper = dynamic(
    () => import('@/features/onboarding/components/onboarding').then(mod => ({ default: mod.Onboarding })),
    {
        ssr: false,
    },
)

const BOTTOM_BAR_HEIGHT = '64px'

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isMobile, setIsMobile] = useState(false)
    const [isOnboardingOpen, setIsOnboardingOpen] = useState(false)
    const { status } = useSession()

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

    const handleConnect = () => {
        if (status === 'unauthenticated') {
            setIsOnboardingOpen(true)
        } else {
            signOut()
        }
    }

    return (
        <>
            <header className='relative z-50 border-b border-white/[0.08] bg-[#121212] py-4'>
                <nav className='container flex items-center justify-between px-4 md:px-0'>
                    <Link href='/' className='flex items-center gap-2 font-heading text-2xl font-bold'>
                        <LogoIcon className='size-7 fill-white' />
                        Spira
                    </Link>
                    {!isMobile ? (
                        <div className='flex items-center gap-5'>
                            <NavbarContent />
                            <Button onClick={handleConnect}>
                                {status === 'authenticated' ? 'Disconnect' : 'Connect'}
                            </Button>
                        </div>
                    ) : (
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
                                <NavbarContent />
                                <Button onClick={handleConnect}>
                                    {status === 'authenticated' ? 'Disconnect' : 'Connect'}
                                </Button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </header>

            {isMobile && (
                <div
                    className={`fixed bottom-0 left-0 right-0 z-50 border-t border-[#C9CEFF] bg-[#121212] px-4 py-3 h-[${BOTTOM_BAR_HEIGHT}]`}>
                    <div className='flex items-center justify-between'>
                        <AppNavigation />
                    </div>
                </div>
            )}

            <OnboardingWrapper isOpen={isOnboardingOpen} onClose={() => setIsOnboardingOpen(false)} />
        </>
    )
}

const NavbarContent = () => {
    const pathname = usePathname()
    const isLandingPage = pathname === '/'

    return (
        <>
            {!isLandingPage && <SearchBar />}
            <ViewSwitcher />
        </>
    )
}
