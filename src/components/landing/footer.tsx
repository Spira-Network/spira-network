import Link from 'next/link'
import LogoIcon from '../icons/logo-icon'
import Image from 'next/image'

export default function Footer() {
    return (
        <footer className='mt-12 bg-[#121212] py-12'>
            <div className='container mx-auto border-t-2 border-white px-4 pt-12'>
                <div className='flex flex-wrap justify-between gap-8 lg:flex-nowrap'>
                    <div className='flex flex-col gap-6 lg:justify-between'>
                        <SpiraLogo />
                        <ContactUs />
                        <Copyright />
                    </div>
                    <Links />
                    <Socials />
                </div>
            </div>
        </footer>
    )
}

function SpiraLogo() {
    return (
        <span className='flex items-center gap-1 font-heading font-bold'>
            <LogoIcon className='size-6 fill-white' />
            <span className='text-2xl font-bold text-white'>Spira</span>
        </span>
    )
}

function ContactUs() {
    return (
        <div className='text-sm font-medium'>
            Contact us:
            <br />
            <Link href='mailto:spirasynctropy@gmail.com'>spirasynctropy@gmail.com</Link>
        </div>
    )
}

function Copyright() {
    return <span className='text-xs font-medium'>©2024 Spira Network. All rights reserved.</span>
}

function Links() {
    const linkSections = [
        {
            title: 'About',
            links: ['Spira History', 'Features', 'Next Steps', 'Blog'],
        },
        {
            title: 'Learn',
            links: ['Be regenerative', 'User Guide', 'Newsletter'],
        },
        {
            title: 'Participate',
            links: ['Community', 'Contributors', 'Careers', 'Investors'],
        },
        {
            title: 'Resources',
            links: ['Docs', 'Architecture', 'Design'],
        },
    ]

    return (
        <div className='mx-auto grid grid-cols-2 justify-center gap-6 sm:grid-cols-4 lg:flex lg:flex-1 lg:flex-nowrap xl:gap-12'>
            {linkSections.map((section, index) => (
                <LinkSection key={index} title={section.title} links={section.links} />
            ))}
        </div>
    )
}

function LinkSection({ title, links }: { title: string; links: string[] }) {
    return (
        <div className='mb-4 lg:mb-0' id='footer-links'>
            <h1 className='mb-4 font-heading text-sm font-bold'>{title}</h1>
            <ul className='flex flex-col gap-2 text-sm text-white/45'>
                {links.map((link, index) => (
                    <li key={index}>
                        <Link href='#footer-links'>{link}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

function Socials() {
    const socials = [
        { name: 'Discord', icon: 'discord-icon.png' },
        { name: 'Medium', icon: 'medium-icon.png' },
        { name: 'X', icon: 'x-icon.png' },
        { name: 'Gitbook', icon: 'gitbook-icon.png' },
        { name: 'Telegram', icon: 'telegram-icon.png' },
        { name: 'Linkedin', icon: 'linkedin-icon.png' },
        { name: 'Instagram', icon: 'instagram-icon.png' },
        { name: 'Github', icon: 'github-icon.png' },
    ]

    return (
        <ul className='mx-auto mb-auto grid grid-cols-4 content-center gap-4' id='footer-socials'>
            {socials.map((social, index) => (
                <li key={index} className='size-8'>
                    <Link href='#footer-socials' className='block size-full'>
                        <div className='relative size-full'>
                            <Image
                                src={`/landing/socials/${social.icon}`}
                                alt={`${social.name} Icon`}
                                className='object-contain'
                                fill
                            />
                        </div>
                    </Link>
                </li>
            ))}
        </ul>
    )
}
