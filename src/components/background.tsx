import Image from 'next/image'

export const Background = () => {
    return (
        <div className='fixed inset-0 -z-10 h-dvh w-dvw'>
            <Image
                src='/bg-gradient.svg'
                role='presentation'
                loading='lazy'
                alt='A dark pastel gradient background.'
                fill={true}
                className='object-cover'
            />
        </div>
    )
}
