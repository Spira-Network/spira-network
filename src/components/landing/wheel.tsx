import Image from 'next/image'
import { Button } from '../ui/button'

export default function Wheel() {
    return (
        <div className='flex flex-col items-center gap-4 text-white'>
            <div className='relative size-96'>
                <Image
                    src='/wheel.svg'
                    role='presentation'
                    loading='lazy'
                    alt='A spinning wheel with a spiral pattern.'
                    fill={true}
                    className='object-cover'
                />
            </div>
            <h1 className='font-bold'>Wheel of Spheres</h1>
            <h2 className='text-sm font-medium text-[#C9CEFF]'>Know thyself & Know thyEarth</h2>
            <Button className='rounded-full bg-[#C9CEFF] px-5 font-heading text-[#121212]'>Start To Spin!</Button>
            <h2 className='text-sm font-medium text-[#C9CEFF]'>
                Join us and begin your journey Your wish is your command
            </h2>
            <ul className='list-["*"] space-y-3 text-sm font-medium text-white [&>li]:pl-2'>
                <li>
                    Command <strong>Here & Now inspirations</strong>
                    <br />
                    to receive your daily frequency match guide message
                </li>
                <li>
                    Command <strong>Time & Space inspirations</strong>
                    <br />
                    to receive your multidimensional blueprint map charts
                </li>
            </ul>
        </div>
    )
}
