import { BookmarksPage } from '@/components/pages/bookmarks'

export default function Bookmarks({ params }: { params: { lang: string } }) {
    return <BookmarksPage lang={params.lang} />
}
