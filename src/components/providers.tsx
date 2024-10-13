'use client'

import { OnchainKitProvider } from '@coinbase/onchainkit'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { baseSepolia } from 'wagmi/chains'
import { type ReactNode, useState } from 'react'
import { type State, WagmiProvider } from 'wagmi'
import { getConfig } from '@/lib/wagmi'
// import { RainbowKitProvider } from '@rainbow-me/rainbowkit'

export function Providers({ children, initialState }: { children: ReactNode; initialState?: State }) {
    const [config] = useState(() => getConfig())
    const [queryClient] = useState(() => new QueryClient())

    return (
        <WagmiProvider config={config} initialState={initialState}>
            <QueryClientProvider client={queryClient}>
                <OnchainKitProvider apiKey={process.env.NEXT_PUBLIC_ONCHAINKIT_API_KEY} chain={baseSepolia}>
                    {/* <RainbowKitProvider modalSize='compact'> */}
                    {children}
                    {/* </RainbowKitProvider> */}
                </OnchainKitProvider>
            </QueryClientProvider>
        </WagmiProvider>
    )
}
