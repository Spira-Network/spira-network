import Image from 'next/image'
import { Button } from '@/components/ui/button'

interface OnboardingCoverProps {
    onConnect: () => void
}

export default function OnboardingCover({ onConnect }: OnboardingCoverProps) {
    return (
        <div className='relative flex flex-col overflow-hidden bg-neutral-900'>
            <div className='relative h-[300px] w-full'>
                <Image
                    alt='wheel'
                    className='object-cover'
                    src='/wheel.png'
                    fill
                    sizes='(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw'
                    priority
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent' />
            </div>
            <div className='flex flex-grow flex-col items-center justify-between gap-12 p-8'>
                <div className='text-center'>
                    <h2 className='mb-4 text-2xl font-bold text-white'>Welcome to Spira</h2>
                    <p className='text-base font-medium text-white'>
                        Get ready to explore, connect, and grow in a space where your contributions make a difference.
                    </p>
                </div>
                <Button
                    className='h-12 w-full rounded-full bg-violet-400 text-sm font-bold text-white'
                    onClick={onConnect}>
                    Connect
                </Button>
            </div>
        </div>
    )
}
