import Em from './empashized'

export default function Headline() {
    return (
        <section className='mx-auto max-w-4xl space-y-6 px-4 text-center'>
            <h1 className='font-heading text-3xl font-bold leading-tight md:text-4xl'>
                Spira inspires <Em>creativity</Em>, meaningful connections, <Em>personal growth</Em> and community
                engagement
            </h1>
            <p className='text-pretty font-medium'>
                We&apos;re all about finding solutions to social and environmental challenges while fostering
                collaboration and building relationships for a better world.{' '}
                <Em>Spira is your perfect match for everything you&apos;re seeking!</Em>
            </p>
        </section>
    )
}
