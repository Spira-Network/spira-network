import { Button } from '../ui/button'

const SECTIONS = [
    {
        title: 'What Is Spira About?',
        content: [
            'We provide a tool to respond in multiple ways to global issues or needs of all environmental socio-cultural- education and every other critical system situation that we are going through as a human collective.',
            'A space to propose practical and simple positive solutions for the smallests and biggest problems that call us today. We are a channel of quality content where creative ideas, experiences and solutions can be collaboratively shared and grow.',
        ],
        className: 'md:w-2/3',
    },
    {
        title: 'How It Works?',
        content: [
            'With A Very Simple Click We Reach Infinite Potentials',
            'We merge consciousness, technology & algorithms with regeneration and biomimetic science in service for all life on Earth. This is accomplished through the combination of three functional tools within the platform:',
        ],
        className: 'md:w-1/3 self-end text-right',
    },
]

const FEATURES = [
    {
        title: 'Interactive Map',
        description:
            'A map in the user interface to navigate the earth in the 12 main key Spheres of social body structure , to clearly visualize, filter and find people, projects, initiatives or events happening around you',
        buttonText: 'Learn more',
    },
    {
        title: 'Decentralized Profiles',
        description:
            'With ICP technology we provide the ability to easily create content ensuring our users to be sovereign unique owners of their personal data in a safe ecosystem.',
        buttonText: 'ICP Profiles',
    },
    {
        title: 'Matching Sync System',
        description:
            'Designed to facilitate perfect encounters, collaborations, resources and everyday needs in record time, as well as catalyzing multidisciplinary solutions for local communities and global development processes.',
        buttonText: 'How?',
    },
]

const Section = ({ title, content, className }: { title: string; content: string[]; className: string }) => (
    <div className={`space-y-4 md:space-y-6 ${className}`}>
        <h1 className='font-heading text-2xl font-bold text-[#C9CEFF] md:text-3xl lg:text-4xl'>{title}</h1>
        {content.map((paragraph, index) => (
            <p key={index} className='text-sm md:text-base lg:text-lg'>
                {paragraph}
            </p>
        ))}
    </div>
)

const FeatureCard = ({
    title,
    description,
    buttonText,
}: {
    title: string
    description: string
    buttonText: string
}) => (
    <div className='flex min-h-min flex-col items-center justify-between gap-4 rounded-[2.25rem] border border-[#C9CEFF] bg-[#121212] p-4 md:gap-6 md:p-6 lg:p-8'>
        <div className='flex flex-grow flex-col items-center text-center'>
            <h1 className='mb-2 font-heading text-xl font-bold text-[#C9CEFF] md:mb-4 md:text-2xl'>{title}</h1>
            <p className='my-auto text-sm leading-relaxed md:text-base'>{description}</p>
        </div>
        <Button className='mt-4 min-w-max rounded-full bg-[#C9CEFF] px-4 py-2 text-xs font-medium text-black transition-colors hover:bg-[#A0A2CC] md:mt-6 md:px-6 md:py-3 md:text-sm'>
            {buttonText}
        </Button>
    </div>
)

export default function Features() {
    return (
        <section className='px-4 py-8 md:px-6 md:py-12 lg:px-8 lg:py-16'>
            <div className='flex flex-col gap-8 md:gap-12'>
                {SECTIONS.map((section, index) => (
                    <Section key={index} {...section} />
                ))}
            </div>
            <div className='mt-12 grid grid-cols-1 gap-6 md:mt-16 md:grid-cols-2 md:gap-8 lg:mt-24 lg:grid-cols-3'>
                {FEATURES.map((feature, index) => (
                    <FeatureCard key={index} {...feature} />
                ))}
            </div>
        </section>
    )
}
