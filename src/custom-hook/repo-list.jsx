import { useEffect, useState } from 'react'

function RepoList() {
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://api.github.com/users/johnsi15/repos')
      .then(res => res.json())
      .then(data => {
        setRepos(data)
        setLoading(false)
      })
  }, [])

  if (loading) return <span>Cargando...</span>

  return (
    <ul>
      {repos.map(repo => (
        <li key={repo.id}>{repo.name}</li>
      ))}
    </ul>
  )
}

export default RepoList
