import Image from 'next/image'
import { Button } from '../ui/button'

export default function Wheel() {
    return (
        <div className='flex flex-col items-center gap-4 text-white sm:gap-6 md:gap-8'>
            <div className='relative size-64 sm:size-80 md:size-96'>
                <Image
                    src='/wheel.png'
                    alt='A spinning wheel with a spiral pattern.'
                    className='object-cover'
                    priority
                    fill
                />
            </div>
            <h1 className='text-center text-2xl font-bold sm:text-3xl md:text-4xl'>Spira Wheel of wills</h1>
            <h2 className='text-center text-sm font-medium text-[#C9CEFF] sm:text-base md:text-lg'>
                Know thyself & Know thyEarth
            </h2>
            <Button className='rounded-full bg-[#C9CEFF] px-5 py-2 font-heading text-sm text-[#121212] sm:px-6 sm:py-3 sm:text-base'>
                Start To Spin!
            </Button>
            <h2 className='max-w-md text-center text-sm font-medium text-[#C9CEFF] sm:text-base md:text-lg'>
                Join us and begin your journey
                <br /> Your wish is your command
            </h2>
            <ul className='max-w-md list-["*"] space-y-3 text-sm font-medium text-white sm:space-y-4 sm:text-base'>
                <li className='pl-2'>
                    Command <strong>Here & Now inspirations</strong>
                    <br />
                    to receive your daily frequency match guide message
                </li>
                <li className='pl-2'>
                    Command <strong>Time & Space inspirations</strong>
                    <br />
                    to receive your multidimensional blueprint map charts
                </li>
            </ul>
        </div>
    )
}
