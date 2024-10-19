import { HomePage } from '@/components/pages/home'
export { generateStaticParams } from '@/lib/utils/static-params'

export default function Home({ params }: { params: { lang: string } }): React.ReactElement {
    return <HomePage lang={params.lang} />
}
