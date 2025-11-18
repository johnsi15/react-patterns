import { useFetch } from './useFetch'

function RepoList() {
  const { data: repos, loading, error } = useFetch('https://api.github.com/users/johnsi15/repos')

  if (loading) return <span>Cargando...</span>
  if (error) return <span>Error: {error.message}</span>

  return (
    <ul>
      {repos.map(repo => (
        <li key={repo.id}>{repo.name}</li>
      ))}
    </ul>
  )
}

export { RepoList }
