import MapIcon from './icons/map-icon'
import FeedIcon from './icons/feed-icon'
import LogoIcon from './icons/logo-icon'
import { Button } from './ui/button'
import BurgerMenuIcon from './icons/burger-menu-icon'

export default function Navbar() {
    return (
        <header className='border-b border-[#C9CEFF] bg-[#121212] py-4'>
            <nav className='container mx-auto flex items-center justify-between'>
                <span className='flex items-center gap-1 font-heading font-bold'>
                    <LogoIcon className='size-6 fill-white' />
                    <span className='text-2xl font-bold text-white'>Spira</span>
                </span>
                <span className='flex items-center gap-5'>
                    <MapIcon className='size-6 fill-white' />
                    <FeedIcon className='size-6 fill-white' />
                    <Button className='mx-5 rounded-full bg-[#C9CEFF] px-5 text-[#121212]'>LaunchSpira</Button>
                    <BurgerMenuIcon className='size-6 stroke-white' />
                </span>
            </nav>
        </header>
    )
}
