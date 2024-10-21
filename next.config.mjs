import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin('./src/features/i18n/server/request.ts')

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
}

export default withNextIntl(nextConfig)
