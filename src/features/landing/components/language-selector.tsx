'use client'

import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import { useLocale } from 'next-intl'

export default function LanguageSelector() {
    const router = useRouter()
    const locale = useLocale()
    const [currentLang, setCurrentLang] = useState(locale)

    useEffect(() => {
        setCurrentLang(locale)
    }, [locale])

    const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newLang = e.target.value

        // Update the cookie
        document.cookie = `NEXT_LOCALE=${newLang}; path=/; max-age=31536000; SameSite=Strict`

        // Start the fadeout effect
        document.body.classList.add('fadeout')

        // Instant scroll to the beginning
        window.scrollTo(0, 0)

        // Wait for the fadeout to finish before refreshing
        setTimeout(() => {
            router.refresh()
            // Remove the fadeout class and add fadein after the refresh
            setTimeout(() => {
                document.body.classList.remove('fadeout')
                document.body.classList.add('fadein')
                // Remove the fadein class after the animation
                setTimeout(() => {
                    document.body.classList.remove('fadein')
                }, 500)
            }, 100) // Small delay to ensure the refresh has started
        }, 300) // Adjust this time according to the duration of your fadeout animation
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
                <option value='es'>Spanish</option>
                <option value='pt'>Portuguese</option>
                <option value='fr'>French</option>
            </select>
        </div>
    )
}
