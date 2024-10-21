'use client'
// import useProfile from '@/hooks/use-profile'
import { Address, Avatar, EthBalance, Identity, Name } from '@coinbase/onchainkit/identity'
import {
    ConnectWallet,
    Wallet,
    WalletDropdown,
    WalletDropdownBasename,
    WalletDropdownDisconnect,
    WalletDropdownFundLink,
    WalletDropdownLink,
} from '@coinbase/onchainkit/wallet'
// import { CatIcon, User2Icon, UserIcon } from 'lucide-react'

type WalletWrapperParams = {
    text?: string
    className?: string
    withWalletAggregator?: boolean
}
export default function WalletWrapper({ className, text, withWalletAggregator = false }: WalletWrapperParams) {
    // const { profile } = useProfile()
    return (
        <>
            <Wallet>
                <ConnectWallet withWalletAggregator={withWalletAggregator} text={text} className={className}>
                    {/* <Avatar className='h-6 w-6' /> @{profile?.name} [ */}
                    {/* <Name />] */}
                </ConnectWallet>
                <WalletDropdown>
                    <Identity className='relative px-4 pb-2 pt-3' hasCopyAddressOnClick={true}>
                        <Avatar />
                        <Name />
                        <Address />
                        <EthBalance />
                    </Identity>
                    {/* {profile?.name && (
                        <WalletDropdownLink icon={<CatIcon />} href='/'>
                            {`Your spira handle: @${profile.name}`}
                        </WalletDropdownLink>
                    )} */}
                    <WalletDropdownBasename />
                    <WalletDropdownLink icon='wallet' href='https://wallet.coinbase.com'>
                        Go to Wallet Dashboard
                    </WalletDropdownLink>
                    <WalletDropdownFundLink />
                    <WalletDropdownDisconnect />
                </WalletDropdown>
            </Wallet>
        </>
    )
}
