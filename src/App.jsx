import './App.css'
import { Counter } from './custom-hook/counter-use-custom-hook'
import { RepoList } from './custom-hook/repo-list-use-custom-hook'
import { LoginForm } from './hoc/login-form'
import LoginFormHoc from './hoc/login-form-hoc'
import { withForm } from './hoc/withForm'

function ContactFormBase({ values, handleChange, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <input name='name' value={values.name || ''} onChange={handleChange} placeholder='Nombre' />
      <input name='email' value={values.email || ''} onChange={handleChange} placeholder='Email' />
      <button type='submit'>Enviar Contacto</button>
    </form>
  )
}

function RegisterFormBase({ values, handleChange, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <input name='username' value={values.username || ''} onChange={handleChange} placeholder='Usuario' />
      <input name='password' value={values.password || ''} onChange={handleChange} placeholder='Contraseña' />
      <button type='submit'>Registrar</button>
    </form>
  )
}

const ContactFormHoc = withForm(ContactFormBase, { name: '', email: '' })
const RegisterFormHoc = withForm(RegisterFormBase, { username: '', password: '' })

function App() {
  const showFormValues = formValues => alert(JSON.stringify(formValues))

  return (
    <main>
      <Counter />
      <RepoList />

      <LoginForm onSubmit={showFormValues} />
      <LoginFormHoc onSubmit={showFormValues} />

      <h2>Formulario de Contacto</h2>
      <ContactFormHoc onSubmit={showFormValues} />

      <h2>Formulario de Registro</h2>
      <RegisterFormHoc onSubmit={showFormValues} />
    </main>
  )
}

export default App
