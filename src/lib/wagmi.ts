import { connectorsForWallets } from '@rainbow-me/rainbowkit'
import { http, cookieStorage, createConfig, createStorage } from 'wagmi'
import { baseSepolia } from 'wagmi/chains'
import { coinbaseWallet, metaMaskWallet, rainbowWallet } from '@rainbow-me/rainbowkit/wallets'

const connectors = connectorsForWallets(
    [
        {
            groupName: 'Recommended',
            wallets: [coinbaseWallet],
        },
        {
            groupName: 'Other Wallets',
            wallets: [rainbowWallet, metaMaskWallet],
        },
    ],
    {
        appName: 'Spira Network',
        appIcon: 'https://spira.network/logo.png',
        projectId: process.env.NEXT_PUBLIC_REOWN_PROJECT_ID || '',
    },
)

export function getConfig() {
    return createConfig({
        chains: [baseSepolia],
        // turn off injected provider discovery
        multiInjectedProviderDiscovery: false,
        connectors,
        storage: createStorage({
            storage: cookieStorage,
        }),
        ssr: true,
        transports: {
            [baseSepolia.id]: http(),
        },
    })
}

declare module 'wagmi' {
    interface Register {
        config: ReturnType<typeof getConfig>
    }
}
