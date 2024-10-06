import { Background } from '@/components/background'
import Features from '@/components/landing/features'
import HeadlineTop from '@/components/landing/headline-top'
import HeadlineBottom from '@/components/landing/headline-bottom'
import Hero from '@/components/landing/hero'
import Preview from '@/components/landing/preview'
import Wheel from '@/components/landing/wheel'
import Areas from '@/components/landing/areas'

export default function Home() {
    return (
        <>
            <div className='space-y-16 py-16 md:space-y-32'>
                <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between lg:gap-8'>
                    <div className='mb-12 w-full lg:mb-0 lg:w-1/2'>
                        <Hero />
                    </div>
                    <div className='w-full lg:w-1/2'>
                        <Wheel />
                    </div>
                </div>
                <HeadlineTop />
                <Preview />
                <Features />
                <Areas />
                <HeadlineBottom />
            </div>
            <Background />
        </>
    )
}
