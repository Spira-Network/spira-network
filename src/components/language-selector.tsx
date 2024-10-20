'use client'

import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'

export default function LanguageSelector() {
    const router = useRouter()
    const pathname = usePathname()
    const [currentLang, setCurrentLang] = useState('en')

    useEffect(() => {
        const lang = pathname.split('/')[1]
        if (['en', 'es', 'pt', 'fr'].includes(lang)) {
            setCurrentLang(lang)
        }
    }, [pathname])

    const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newLang = e.target.value
        const newPathname = pathname.replace(/^\/[^\/]+/, `/${newLang}`)
        router.push(newPathname)
    }

    return (
        <div className='text-sm font-medium'>
            <label htmlFor='language-select' className='mb-2 block'>
                Select Language:
            </label>
            <select
                id='language-select'
                value={currentLang}
                onChange={handleLanguageChange}
                className='rounded bg-white/10 px-2 py-1 text-white'>
                <option value='en'>English</option>
                <option value='es'>Español</option>
                <option value='pt'>Português</option>
                <option value='fr'>Français</option>
            </select>
        </div>
    )
}
