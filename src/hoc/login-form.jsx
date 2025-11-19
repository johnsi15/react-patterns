import { useState } from 'react'

function LoginForm({ onSubmit }) {
  const [values, setValues] = useState({ email: '', password: '' })

  const handleChange = e => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log('Login:', { email: values.email, password: values.password })
    onSubmit(JSON.stringify(values))
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type='email' name='email' value={values.email} onChange={handleChange} placeholder='Email' />
      <input type='password' name='password' value={values.password} onChange={handleChange} placeholder='Password' />
      <button type='submit'>Login</button>
    </form>
  )
}

export { LoginForm }
