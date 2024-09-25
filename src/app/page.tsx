import { Background } from '@/components/background'
import Hero from '@/components/landing/hero'
import Wheel from '@/components/landing/wheel'

export default function Home() {
    return (
        <div className='container mx-auto'>
            <div className='mt-24 flex justify-between *:w-1/2 *:max-w-2xl'>
                <Hero />
                <Wheel />
            </div>
            <Background />
        </div>
    )
}
