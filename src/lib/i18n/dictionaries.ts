export async function getDictionary(lang: string) {
    return await import(`./dictionaries/${lang}.json`).then(module => module.default)
}
