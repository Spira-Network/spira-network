import Image from 'next/image'

export default function Functionalities() {
    return (
        <div>
            <Summary />
        </div>
    )
}

const functionalityData = [
    {
        functionality: 'explore & navigate',
        tag: 'organic visualisation',
        title: 'explore & connect',
        subtitle: 'find people, projects, communities, and events that resonate with you',
        text: 'We are a collective of individuals with a shared purpose: planetary transformation, creativity and regenerative impact. Spira makes it easy for us to find and connect with one another organically, like cells, molecules, and tissues coming together as part of a greater body.<br />We invite you to explore the map and the 12 living systems spheres of this new era we’re building. Here, you can visualize creations, projects, events, and initiatives, all organized to help you navigate quickly and practically. Use keywords, filters, and parameters like time or location to refine your search in browse mode, and discover everything happening in your areas of interest. Get ready to create and connect.',
        image: 'organic.png',
    },
    {
        functionality: 'whole matching system',
        tag: 'perfect match creation',
        title: 'attributes match',
        subtitle: 'create syntropic conections by resonance find thriving complements much more easier',
        text: 'We are frequency and resonance.<br />Together, we are complementary forces that amplify one another by connecting and sharing. We seek to connect, to make synapses, and to build new neural networks. Dive into CREATE mode and align with the people and projects that reflect your own pulse.<br />Become a creator of Nodes—whether they’re Projects, Events, Communities, or even Recommendations, Resources, and Solutions. Explore the map and network feed to accelerate synchronicities and connect directly with all you specifically want.<br />Let yourself be surprised also by playing with our living algorithm, spell your intention and spin the spiral of the wheel of wills.',
        image: 'perfect.png',
    },
    {
        functionality: 'pulse & flow',
        tag: 'logistic sync solutions',
        title: 'logistic sync',
        subtitle: 'pulse and flow mode for daily life find resources and solutions in record time',
        text: 'We offer a tool that addresses both local and global challenges, spanning environmental, socio-cultural, educational, and other systemic issues that impact us as a human collective.<br /> Spira provides a space where practical solutions can be found or proposed for both the smallest and most significant issues we face today.<br />We foster a space of trust, where human values are held in radical respect as non-negotiable principles. This synchronization opens up a world of solutions, whether it’s taking care of our pets, plants, and homes while we travel, asking for favors, arranging international package deliveries, or sharing road trips. We also facilitate collective donations and organized initiatives to help during emergencies in any city.',
        image: 'logistic.png',
    },
    {
        functionality: 'co-creation founding',
        tag: 'giving and receiving tool',
        title: 'co-creating & co-financing',
        subtitle: 'collaborations for projects in different phases of development',
        text: 'Give and receive. There are countless ways to enrich our transformative projects—whether through exchanging assets, money, time, energy, knowledge, ideas, virtues, or resources in all their varied forms. Support others in their projects and receive collaboration on yours.<br />Everything our creations need to be conceived, developed, and expanded at any stage already exists within our network.<br />Optimize your search and profiles by specifying what you want to activate, offer, or Give, and what you hope to attract, find, or receive. There’s always someone looking to give exactly what you need. By supporting each other, we make everything lighter, more effective, and fun.',
        image: 'giving.png',
    },
    {
        functionality: 'here & now trip mode',
        tag: 'real time geolocalization',
        title: 'real time geolocalization',
        subtitle: 'efficient time saving for precise, assertive or spontaneous encounters while traveling',
        text: 'Space-time synchronicity enables us to create valuable collective experiences and build global community networks, all while being fully present wherever you are! With real-time geo-localization, you can skip endless screen searches and connect instantly with the right people, events, and opportunities—all with a single click.<br />We also invite you to explore our Node Creator tool during your travels. Use it to recommend sacred places on Earth, impactful projects, tours, and stops, or even to tackle planetary tasks. You can create a node to record your feelings, actions, and impressions of a place, sharing and contributing to a bigger picture that captures the story of each location.',
        image: 'realtime.png',
    },
    {
        functionality: 'biomimicry equalization',
        tag: 'forum for creation',
        title: 'forum',
        subtitle: 'harmonic Equalization of perspectives for evolutionary innovation processes',
        text: 'We invite you to explore fresh perspectives that can help expand and transform our viewpoints. It’s essential to creatively rethink the 12 key systems that form the backbone of our biological and social fabric.  By learning from the technologies found in nature, we can create harmonious frameworks for our cultures.<br />Let’s honor our past achievements by recycling, transforming, and reusing successful ideas. Together, we can elevate our vision and push beyond our expectations. Our forum encourages us to assess outdated systems while embracing new ones that show promise. Unlimited imagination is not just welcomed here; it’s essential as we work to manifest the meaningful changes we want to see in the world.',
        image: 'forum.png',
    },
]

function Summary() {
    return (
        <div className='container mx-auto px-4 py-8'>
            <h2 className='mb-8 text-center font-heading uppercase'>functionalities</h2>
            <div className='flex flex-wrap justify-center gap-8 lg:flex-nowrap'>
                {functionalityData.map((item, index) => (
                    <div key={index} className='flex w-full flex-col items-center sm:w-1/2 md:w-1/3 lg:w-auto'>
                        <div className='flex flex-col items-center lg:flex-row'>
                            <div className='mt-4 flex flex-col items-center gap-4 lg:mt-12'>
                                <div className='relative h-24 w-24 lg:h-36 lg:w-36'>
                                    <Image
                                        src={`/landing/functionalities/${item.image}`}
                                        alt={item.title}
                                        className='object-contain mix-blend-lighten'
                                        fill
                                    />
                                </div>
                                <h3 className='text-center text-xs uppercase'>{item.title}</h3>
                            </div>
                            {index < functionalityData.length - 1 && (
                                <div className='mx-4 hidden h-24 w-px bg-white lg:block'></div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

function ListItem({ item }: { item: (typeof functionalityData)[number] }) {
    return (
        <div>
            <h3 className='text-2xl font-bold'>{item.title}</h3>
            <p>{item.subtitle}</p>
        </div>
    )
}

function List() {
    return (
        <div>
            <h2>
                {functionalityData.map((item, index) => (
                    <ListItem key={index} item={item} />
                ))}
            </h2>
        </div>
    )
}
