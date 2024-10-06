import Em from './empashized'

export default function Preview() {
    return (
        <section className='grid grid-cols-8 gap-10 align-middle [&>:first-child]:col-span-3'>
            <PreviewText />
            <div className='col-span-5 grid grid-cols-2 gap-8'>
                <img src='landing/card-1.png' />
                <img src='landing/card-2.png' />
            </div>
        </section>
    )
}

function PreviewText() {
    return (
        <aside className='space-y-2'>
            <h1 className='font-heading text-2xl font-bold'>
                <Em>A space to co-create</Em>, <Em>connect </Em>with <Em>proposals </Em>, <Em>resources </Em>and
                specific <Em>needs</Em>; solutions, <Em>desires </Em>& <Em>services </Em>in an <Em>easy </Em>&{' '}
                <Em>ecosystemic way</Em>.
            </h1>
            <p className='font-medium'>
                Spira allows infinite possibilities to align ourselves with our personal and collective sovereignty. It
                is a site to reconstruct new social, political, economic, cultural, techno-productive, educational and
                other systems collaboratively from each one.
            </p>
        </aside>
    )
}
