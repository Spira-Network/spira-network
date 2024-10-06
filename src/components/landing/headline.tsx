import Em from './empashized'

export default function Headline() {
    return (
        <section className='space-y-6 text-center'>
            <h1 className='font-heading text-4xl font-bold'>
                Spira inspires <Em>creativity</Em>, meaningful connections, <Em>personal growth</Em> and community
                engagement
            </h1>
            <p className='font-medium'>
                We&apos;re all about finding solutions to social and environmental challenges while fostering
                collaboration and building relationships for a better world.{' '}
                <Em>Spira is your perfect match for everything you&apos;re seeking!</Em>
            </p>
        </section>
    )
}
