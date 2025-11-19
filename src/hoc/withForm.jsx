import { useState } from 'react'

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component'
}

function withForm(WrappedComponent, initialState = {}) {
  const FormWrapper = ({ onSubmit, ...props }) => {
    const [values, setValues] = useState(initialState)

    const handleChange = e => {
      const { name, value } = e.target
      setValues(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = e => {
      e.preventDefault()
      onSubmit(values)
    }

    return <WrappedComponent {...props} values={values} handleChange={handleChange} handleSubmit={handleSubmit} />
  }

  FormWrapper.displayName = `withForm(${getDisplayName(WrappedComponent)})`
  return FormWrapper
}

export { withForm }
