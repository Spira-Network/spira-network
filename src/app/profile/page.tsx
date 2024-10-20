import { ProfilePage } from '@/components/pages/profile'
export { generateStaticParams } from '@/lib/utils/static-params'

export default function Profile({ params }: { params: { lang: string } }) {
    return <ProfilePage lang={params.lang} />
}
