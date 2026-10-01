import type { Project } from '~/types/project'

function requestProjects() {
  return useFetch<Project[]>('/data/projects.json', {
    key: 'projects',
    default: () => [],
  })
}

export function useProjects() {
  const { data, status, error, refresh } = requestProjects()

  const isLoading = computed(() => status.value === 'pending')

  return { projects: data, isLoading, error, retry: refresh }
}

export async function useProject(slug: string) {
  const { data: projects } = await requestProjects()
  const project = projects.value.find((item) => item.slug === slug)

  if (!project) {
    throw createError({ statusCode: 404, statusMessage: 'Project not found', fatal: true })
  }

  return project
}
