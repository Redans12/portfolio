/**
 * Sets the translated title and description of a page.
 * Expects the keys `<page>.seo.title` and `<page>.seo.description` in the locale files.
 */
export function usePageSeo(page: string) {
  const { t } = useI18n()

  useSeoMeta({
    title: () => t(`${page}.seo.title`),
    description: () => t(`${page}.seo.description`),
    ogTitle: () => t(`${page}.seo.title`),
    ogDescription: () => t(`${page}.seo.description`),
  })
}
