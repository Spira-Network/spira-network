import { useTranslations } from 'next-intl'

export default function Hero() {
    const t = useTranslations('Hero')

    return (
        <section className='mx-auto mt-8 flex max-w-4xl flex-col gap-4 px-4 sm:mt-12 sm:gap-6 md:mt-28 xl:mt-16'>
            <h3 className='font-heading text-sm font-bold uppercase text-[#C9CEFF] sm:text-base'>{t('subtitle')}</h3>
            <h1 className='font-heading text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl'>
                {t('title')}
            </h1>
            <h2 className='text-xl font-bold text-[#C9CEFF] sm:text-2xl md:text-3xl'>{t('description')}</h2>
            <div className='space-y-3 text-base font-medium text-white sm:space-y-4 sm:text-lg'>
                <p className='text-pretty'>{t('paragraph1')}</p>
                <p className='text-pretty'>{t('paragraph2')}</p>
                <p className='text-pretty'>{t('paragraph3')}</p>
            </div>
        </section>
    )
}
