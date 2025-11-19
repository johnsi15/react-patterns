import './App.css'
import { Counter } from './custom-hook/counter-use-custom-hook'
import { RepoList } from './custom-hook/repo-list-use-custom-hook'
import { LoginForm } from './hoc/login-form'
import LoginFormHoc from './hoc/login-form-hoc'

function App() {
  const showFormValues = formValues => alert(formValues)

  return (
    <main>
      <Counter />
      <RepoList />

      <LoginForm onSubmit={showFormValues} />
      <LoginFormHoc onSubmit={showFormValues} />
    </main>
  )
}

export default App
