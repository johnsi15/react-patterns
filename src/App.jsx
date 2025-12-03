import './App.css'
import { TodoList } from './compound-components/todo-list-compound'
import { Counter } from './custom-hook/counter-use-custom-hook'
import { RepoList } from './custom-hook/repo-list-use-custom-hook'
import { Button } from './extensible-styles/button'
import { Button as ButtonWithExtensibleStyles } from './extensible-styles/button-with-extensible-styles'
import { LoginForm } from './hoc/login-form'
import LoginFormHoc from './hoc/login-form-hoc'
import { withForm } from './hoc/withForm'
import { Mouse } from './render-props/Mouse'

function ContactFormBase({ values, handleChange, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <input name='name' value={values.name || ''} onChange={handleChange} placeholder='Nombre' />
      <input name='email' value={values.email || ''} onChange={handleChange} placeholder='Email' />
      <ButtonWithExtensibleStyles type='submit' style={{ backgroundColor: 'crimson', color: 'white', padding: '10px' }}>
        Enviar Contacto
      </ButtonWithExtensibleStyles>
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

  const handleClick = () => alert('¡Clic!')

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

      <Button name='defaultButton' type='button' onClick={handleClick}>
        Botón por Defecto
      </Button>

      <ButtonWithExtensibleStyles type='button' onClick={handleClick} name='customButton' className='button secondary'>
        Botón Secundario
      </ButtonWithExtensibleStyles>

      <ButtonWithExtensibleStyles
        type='button'
        onClick={handleClick}
        name='inlineButton'
        style={{ backgroundColor: 'red', color: 'white', padding: '10px' }}
      >
        Botón Inline
      </ButtonWithExtensibleStyles>

      {/* puedes usar varios [TodoList]src/compound-components/todo-list-compound.jsx ) independientes en la misma app, ya que cada uno crea su propio contexto y estado. Esto saca provecho del patrón: composición flexible y estado aislado sin interferencias. */}
      <h2>Lista de Trabajo</h2>
      <TodoList>
        <TodoList.Title />
        <TodoList.Form />
        <TodoList.List />
      </TodoList>

      <h2>Lista Personal</h2>
      <TodoList>
        <TodoList.Title />
        <TodoList.Form />
        <TodoList.List />
      </TodoList>

      <Mouse
        render={position => (
          <div>
            <p>
              Posición: {position.x}, {position.y}
            </p>
          </div>
        )}
      />

      <Mouse
        render={position => (
          <img src='cat.jpg' style={{ position: 'absolute', left: position.x, top: position.y }} alt='Gato' />
        )}
      />
    </main>
  )
}

export default App
