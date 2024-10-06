import { Background } from '@/components/background'
import About from '@/components/landing/about'
import Headline from '@/components/landing/headline'
import Hero from '@/components/landing/hero'
import Preview from '@/components/landing/preview'
import Wheel from '@/components/landing/wheel'

export default function Home() {
    return (
        <>
            <div className='container mx-auto space-y-16 px-4 md:space-y-32'>
                <div className='mt-12 flex flex-col md:mt-24 md:flex-row md:justify-between'>
                    <div className='mb-8 w-full md:mb-0 md:w-1/2 md:max-w-2xl'>
                        <Hero />
                    </div>
                    <div className='w-full md:w-1/2 md:max-w-2xl'>
                        <Wheel />
                    </div>
                </div>
                <Headline />
                <Preview />
                <About />
            </div>
            <Background />
        </>
    )
}
