import type { Project } from '~/types/project'

export function useProjects() {
  const { data, status, error, refresh } = useFetch<Project[]>('/data/projects.json', {
    key: 'projects',
    default: () => [],
  })

  const isLoading = computed(() => status.value === 'pending')

  return { projects: data, isLoading, error, retry: refresh }
}
