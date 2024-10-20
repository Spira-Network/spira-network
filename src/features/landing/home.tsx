import Hero from '@/features/landing/components/hero'
import Wheel from './components/wheel'
import HeadlineTop from './components/headline-top'
import Areas from './components/areas'
import { Background } from './components/background'
import Features from './components/features'
import Functionalities from './components/functionalities'
import HeadlineBottom from './components/headline-bottom'
import Preview from './components/preview'

export const HomePage: React.FC = () => {
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
                <Functionalities />
                <Areas />
                <HeadlineBottom />
            </div>
            <Background />
        </>
    )
}
