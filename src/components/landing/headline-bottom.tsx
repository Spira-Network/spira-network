import Em from './empashized'

export default function Headline() {
    return (
        <>
            <section className='mx-auto max-w-3xl space-y-6 text-pretty px-4 text-center'>
                <h1 className='font-heading text-3xl font-bold leading-tight md:text-4xl'>
                    Everyone has something that they may like to give or are willing to receive
                </h1>
                <p className='mx-auto max-w-xl font-medium'>
                    Spira invites us to experience our own evolutionary ascension spiral adapting our personal realities
                    and individual rhythms
                </p>
            </section>

            <section className='mx-auto max-w-5xl space-y-6 text-pretty px-4 text-center'>
                <h1 className='font-heading text-3xl font-bold leading-tight md:text-4xl'>
                    Spira invites us to experience{' '}
                    <Em>
                        our own evolutionary ascension spiral adapting our personal realities and individual rhythms
                    </Em>
                </h1>
            </section>
        </>
    )
}
