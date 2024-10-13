import { withJuno } from '@junobuild/nextjs-plugin'

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: { unoptimized: true },
    output: 'export',
    reactStrictMode: true,
}

export default withJuno({ nextConfig, juno: { container: true } })
