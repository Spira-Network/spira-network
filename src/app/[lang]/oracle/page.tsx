import { OraclePage } from '@/components/pages/oracle'

export default function Oracle({ params }: { params: { lang: string } }) {
    return <OraclePage lang={params.lang} />
}
