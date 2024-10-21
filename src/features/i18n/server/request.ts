import 'server-only'

import { getRequestConfig } from 'next-intl/server'
import { cookies, headers } from 'next/headers'

export default getRequestConfig(async () => {
    const cookieStore = cookies()
    const headerStore = headers()
    const cookieLocale = cookieStore.get('NEXT_LOCALE')
    const acceptLanguage = headerStore.get('Accept-Language')

    // Determine the locale: cookie > Accept-Language header > default 'en'
    const locale = cookieLocale?.value || acceptLanguage?.split(',')[0].split('-')[0] || 'en'

    return {
        locale,
        messages: (await import(`/messages/${locale}.json`)).default,
    }
})
