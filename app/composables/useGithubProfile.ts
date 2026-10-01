import type { GithubRepo, GithubUser } from '~/types/github'

const API_URL = 'https://api.github.com'

type GithubErrorKind = 'notFound' | 'rateLimit' | 'network'

function toErrorKind(statusCode?: number): GithubErrorKind {
  if (statusCode === 404) return 'notFound'
  if (statusCode === 403 || statusCode === 429) return 'rateLimit'
  return 'network'
}

function onlyOwnRecent(repos: GithubRepo[]): GithubRepo[] {
  return repos
    .filter((repo) => !repo.fork)
    .sort((a, b) => Date.parse(b.pushed_at) - Date.parse(a.pushed_at))
}

export function useGithubProfile() {
  const username = useRuntimeConfig().public.githubUser

  const user = useFetch<GithubUser>(`${API_URL}/users/${username}`, { key: 'github-user' })
  const repos = useFetch<GithubRepo[]>(`${API_URL}/users/${username}/repos`, {
    key: 'github-repos',
    query: { per_page: 100, sort: 'pushed' },
    transform: onlyOwnRecent,
    default: () => [],
  })

  const isLoading = computed(
    () => user.status.value === 'pending' || repos.status.value === 'pending',
  )
  const errorKind = computed<GithubErrorKind | null>(() => {
    const error = user.error.value ?? repos.error.value
    return error ? toErrorKind(error.statusCode) : null
  })

  async function retry() {
    await Promise.all([user.refresh(), repos.refresh()])
  }

  return { user: user.data, repos: repos.data, isLoading, errorKind, retry }
}
