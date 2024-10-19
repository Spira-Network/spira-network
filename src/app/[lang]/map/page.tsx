import { MapPage } from '@/components/pages/map'

export default function Map({ params }: { params: { lang: string } }) {
    return <MapPage lang={params.lang} />
}
