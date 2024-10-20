import { ActivityPage } from '@/components/pages/activity'

export default function Activity({ params }: { params: { lang: string } }) {
    return <ActivityPage lang={params.lang} />
}
