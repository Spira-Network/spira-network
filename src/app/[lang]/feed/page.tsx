import { FeedPage } from '@/components/pages/feed'

export default function Feed({ params }: { params: { lang: string } }) {
    return <FeedPage lang={params.lang} />
}
