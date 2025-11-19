import { useState } from 'react'

// eslint-disable-next-line no-unused-vars
function withForm(WrappedComponent) {
  return function FormWrapper({ onSubmit, ...props }) {
    const [values, setValues] = useState({})

    const handleChange = e => {
      const { name, value } = e.target
      setValues(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = e => {
      e.preventDefault()
      onSubmit(JSON.stringify(values))
    }

    return <WrappedComponent {...props} values={values} handleChange={handleChange} handleSubmit={handleSubmit} />
  }
}

export { withForm }
