export interface NavLink {
  key: 'about' | 'projects' | 'contact'
  label: string
  to: string
}

/** Main navigation shared by the sidebar (desktop) and the mobile menu. */
export function useNavLinks() {
  const { t } = useI18n()
  const localePath = useLocalePath()

  return computed<NavLink[]>(() => [
    { key: 'about', label: t('nav.about'), to: localePath('/about') },
    { key: 'projects', label: t('nav.projects'), to: localePath('/projects') },
    { key: 'contact', label: t('nav.contact'), to: localePath('/contact') },
  ])
}
