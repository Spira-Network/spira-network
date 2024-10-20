import { Background } from '../background'
import Areas from '../landing/areas'
import Features from '../landing/features'
import Functionalities from '../landing/functionalities'
import HeadlineBottom from '../landing/headline-bottom'
import HeadlineTop from '../landing/headline-top'
import Hero from '../landing/hero'
import Preview from '../landing/preview'
import Wheel from '../landing/wheel'

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
