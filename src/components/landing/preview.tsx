import Em from './empashized'
import Image from 'next/image'
export default function Preview() {
    return (
        <section className='mx-auto max-w-7xl px-4 py-8 md:py-12 lg:py-16'>
            <div className='grid grid-cols-1 items-center gap-8 lg:grid-cols-8 lg:gap-10'>
                <PreviewText />
                <div className='col-span-1 grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8 lg:col-span-5'>
                    <div className='relative h-96'>
                        <Image src='landing/card-1.png' alt='Preview card 1' className='object-contain' fill />
                    </div>
                    <div className='relative h-96'>
                        <Image src='landing/card-2.png' alt='Preview card 2' className='object-contain' fill />
                    </div>
                </div>
            </div>
        </section>
    )
}

function PreviewText() {
    return (
        <aside className='col-span-1 space-y-4 md:space-y-6 lg:col-span-3'>
            <h2 className='font-heading text-xl font-bold leading-tight sm:text-2xl lg:text-3xl'>
                Spira users can <Em>co-create</Em>, <Em>connect</Em> with <Em>proposals</Em>, <Em>resources</Em> and
                specific <Em>needs</Em>; <Em>objectives</Em>, <Em>interests</Em> & <Em>services</Em> in an <Em>easy</Em>{' '}
                & <Em>ecosystemic way</Em>.
            </h2>
            <p className='text-pretty text-sm font-medium sm:text-base lg:text-lg'>
                Spira allows infinite possibilities to align ourselves with our personal and collective sovereignty. It
                is a site to reconstruct new social, political, economic, cultural, techno-productive, educational and
                other systems collaboratively from each one.
            </p>
        </aside>
    )
}
