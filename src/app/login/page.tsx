'use client'

import { Auth } from '@/components/auth'
import { Modal } from '@/components/modal'
import { Table } from '@/components/table'
import { initSatellite } from '@junobuild/core-peer'
import { useCallback, useEffect, useState } from 'react'

import { Avatar, Name, useAvatar, useName } from '@coinbase/onchainkit/identity'
import { base } from 'viem/chains'
import { useAccount } from 'wagmi'
import { Button } from '@/components/ui/button'
import WalletWrapper from '@/components/wallet-wrapper'
import { setDoc, getDoc } from '@junobuild/core-peer'
import { Profile, ProfileData } from '@/types/profile'
import useProfile from '@/hooks/use-profile'
import { ProfilePage } from '@/components/ProfilePage'

export default function Home() {
    const [isClient, setIsClient] = useState(false)
    const initialize = useCallback(async () => {
        await initSatellite({
            internetIdentityId: 'rdmx6-jaaaa-aaaaa-aaadq-cai',
            workers: {
                auth: true,
            },
        })
    }, [])

    const { address } = useAccount()
    const address2 = '0x02feeb0AdE57b6adEEdE5A4EEea6Cf8c21BeB6B1'
    const basename = 'zizzamia.base.eth'

    const { data: avatar, isLoading: avatarIsLoading } = useAvatar({ ensName: basename, chain: base })
    const { data: name, isLoading: nameIsLoading } = useName({ address: address2, chain: base })

    const { profile, loading } = useProfile()

    useEffect(() => {
        initialize()
    }, [])

    const editProfile = async () => {
        console.log('editProfile', address)
        if (!address) {
            console.error('No address available')
            return
        }

        try {
            // Obtener el perfil actual
            const existingDoc = await getDoc<ProfileData>({
                collection: 'profiles',
                key: address,
            })

            // Preparar los datos para actualizar
            const updatedData: ProfileData = {
                name: 'Default Name',
                bio: 'Default Bio',
                category: 'developer',
                // Puedes añadir más campos según sea necesario
            }

            // Actualizar o crear el documento
            await setDoc<ProfileData>({
                collection: 'profiles',
                doc: {
                    key: address,
                    data: updatedData,
                },
            })

            console.log('Perfil actualizado con éxito')
            // Aquí podrías añadir alguna notificación al usuario
        } catch (error: any) {
            console.error('Error detallado:', error)
            if (error.message) console.error('Mensaje de error:', error.message)
            if (error.stack) console.error('Stack trace:', error.stack)
            // Aquí podrías mostrar un mensaje de error al usuario
        }
    }

    useEffect(() => {
        setIsClient(true)
    }, [])

    if (!isClient) return null

    return (
        <>
            <h1 className='py-16 text-2xl font-bold'>Login</h1>
            <WalletWrapper text='Connect Wallet' />

            {address && (
                <>
                    <div className='py-16'>Your address: {address}</div>
                    <Avatar address={address} chain={base} className='size-32' />
                    <Name address={address} chain={base} className='text-lg' />
                    {/* {!loading && profile && <ProfilePage profile={profile} />} */}
                    <Auth>
                        <Button onClick={editProfile}>Edit Profile</Button>
                        <Table />
                        <Modal />
                    </Auth>
                </>
            )}
        </>
    )
}
