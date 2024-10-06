import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import Image from 'next/image'

const areaData = [
    {
        title: 'Art & Creativity',
        subtitle: '(Solar Star)',
        content:
            'Art as the first manifestation of the divine game. Here all artistic and creative expressions occur in their infinite forms and manifestations. Everything in the universe arises from an idea, from the creative imagination.',
    },
    {
        title: 'Spiritual Science & Consciousness',
        subtitle: '(Hypophysis/ Pituitary Gland)',
        content:
            'Self-awareness tools for personal development and sovereignty. Philosophy, alchemy, metaphysics, sciences, networks and technologies of being. Wisdom and instruments to take our place in the world.',
    },
    {
        title: 'Cosmopolitic Relations',
        subtitle: '(Pineal Gland)',
        content:
            'Planning, analysis, and integrative organization of local and global systems, cosmopolitical relations. Visions of collective direction, and strategies for real manifestation. Balance and execution over short, medium, and long-term time cycles, Ontocracy.',
    },
    {
        title: 'Holistic Education',
        subtitle: '(Thyroid Gland)',
        content:
            'Integrative and conscious pedagogies, meeting of knowledge, educational sciences for the complete development of the individual and communities: Waldorf, Montesori, Pedagogy 3000-5000, VEO system, etc.',
    },
    {
        title: 'Integrative Biological Medicine',
        subtitle: '(Thymus)',
        content:
            'Timeless sciences and healthy practices for the comprehensive training and well-being of the body. Living, conscious nutrition, orthomolecular medicine, ancestral traditional medicines, anthroposophy, and applied integrated biological sciences.',
    },
    {
        title: 'New Economies',
        subtitle: '(Heart)',
        content:
            'Here we visualize the emerging new economic systems. Projects of blockchain technology in digital assets, cryptocurrencies, circular and regenerative economies, bio-rhythmic economies, exchange model software, stablecoins, time banks, etc.',
    },
    {
        title: 'Metatechnology & Production',
        subtitle: '(Plexus)',
        content:
            'Singular, interconnected, multiple, and systemic cultures. Cultural ecosystemic biodiversity, planetary nature, planetary culture, original and indigenous cultures, ancestral worldviews, native communities, etc.',
    },
    {
        title: 'Planetary Culture',
        subtitle: '(Sacral)',
        content:
            'Singular, interconnected, multiple, and systemic cultures. Cultural ecosystemic biodiversity, planetary nature, planetary culture, original and indigenous cultures, ancestral worldviews, native communities, etc.',
    },
    {
        title: 'Regenerative Agriculture',
        subtitle: '(Root)',
        content:
            'Permaculture, biodynamics, regenerative processes for crops, orchards, organic plantations mindful of natural resources.',
    },
    {
        title: 'Communications & Transmedia',
        subtitle: '(Knees)',
        content:
            'Responsible and creative technologies for fluid and organic communication, like facets of geometry, like joints of a system. Roads, railway networks, and other interurban and regenerative ecosystemic pathways. Interconnection links with new paradigms for all media, new journalism, advertising, decentralization, social networks, etc.',
    },
    {
        title: 'Sustainable Habitat',
        subtitle: '(Ankles)',
        content:
            'Ideas, knowledge, and tools for sustainable spatial design and shared habitat, organic molecular architecture, Richard Buckminster Fuller, Jacques Fresco, etc.',
    },
    {
        title: 'Renewable Energies',
        subtitle: '(EarthStar)',
        content:
            'Scalar energy, free energy, solar panels, hydropower, wind power, infinite energy parks, orgone energy, electromagnetism, etc.',
    },
    {
        title: 'United Areas',
        subtitle: '',
        content: '',
    },
]

export default function Areas() {
    return (
        <section className='container mx-auto px-16 pt-8'>
            <h1 className='text-center font-heading text-5xl font-bold text-[#C9CEFF]'>12 Organic Areas of Being</h1>
            <div className='mb-32 flex items-center justify-center p-12'>
                <span className='relative size-36'>
                    <Image src='/landing/areas/circle.svg' alt='Areas' fill />
                </span>
                <span className='relative size-36'>
                    <Image src='/landing/areas/vector.svg' alt='Areas' fill className='mix-blend-difference' />
                </span>
                <span className='relative size-36'>
                    <Image src='/landing/areas/equilibrium.svg' alt='Areas' fill className='mix-blend-multiply' />
                </span>
            </div>
            <div className='mx-auto grid grid-cols-1 gap-4 md:grid-cols-2'>
                {areaData.slice(0, -1).map((area, index) => (
                    <Card
                        key={index}
                        className='flex h-72 flex-col items-center justify-center gap-4 rounded-[2.25rem] bg-[#EBEAEA] p-3 transition-shadow hover:shadow-lg'>
                        <CardHeader>
                            <CardTitle className='text-center font-heading text-xl font-bold text-[#2E085D]'>
                                <span className='mr-2'>{index + 1}.</span>
                                {area.title}
                                <span className='block text-lg font-normal'>{area.subtitle}</span>
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className='text-center text-sm font-medium text-black'>{area.content}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
            <div className='mt-4 flex justify-center'>
                <Card className='flex w-full max-w-md flex-col items-center justify-center gap-4 rounded-[2.25rem] bg-[#EBEAEA] p-3 transition-shadow hover:shadow-lg'>
                    <CardHeader>
                        <CardTitle className='text-center font-heading text-xl font-bold text-[#2E085D]'>
                            <span className='mr-2'>{areaData.length}.</span>
                            {areaData[areaData.length - 1].title}
                            <span className='block text-lg font-normal'>{areaData[areaData.length - 1].subtitle}</span>
                        </CardTitle>
                    </CardHeader>
                </Card>
            </div>
        </section>
    )
}
