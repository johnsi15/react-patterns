import './App.css'
import { Counter } from './custom-hook/counter-use-custom-hook'
import { RepoList } from './custom-hook/repo-list-use-custom-hook'

function App() {
  return (
    <main>
      <Counter />
      <RepoList />
    </main>
  )
}

export default App
