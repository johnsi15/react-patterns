import { withForm } from './withForm'

function LoginFormBase({ values, handleChange, handleSubmit }) {
  const onSubmit = formData => {
    console.log('Datos del formulario:', formData)
  }

  return (
    <form onSubmit={e => handleSubmit(e, onSubmit)}>
      <input type='email' name='email' value={values.email || ''} onChange={handleChange} placeholder='Email' />
      <input
        type='password'
        name='password'
        value={values.password || ''}
        onChange={handleChange}
        placeholder='Password'
      />
      <button type='submit'>Login</button>
    </form>
  )
}

const LoginFormHoc = withForm(LoginFormBase)

export default LoginFormHoc
