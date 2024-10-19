'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { ShellIcon } from 'lucide-react'

export default function Home() {
    const [isLoading, setIsLoading] = useState(true)
    const router = useRouter()

    useEffect(() => {
        const userLang = navigator.language || (navigator as any).userLanguage
        const defaultLang = 'en'
        const supportedLangs = ['en', 'es', 'fr', 'pt']

        const detectedLang = userLang.split('-')[0]
        const targetLang = supportedLangs.includes(detectedLang) ? detectedLang : defaultLang

        router.push(`/${targetLang}`)
        setIsLoading(false)
    }, [router])

    if (isLoading) {
        return (
            <div className='flex grow flex-col items-center justify-center gap-4'>
                <ShellIcon className='size-12 animate-spin text-white' role='status' />
                <span className='animate-pulse text-xl text-white'>Loading...</span>
            </div>
        )
    }

    return null
}
