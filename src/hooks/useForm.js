import { useState } from 'react'

function useForm (callback) {
  const [values, setValues] = useState({})

  const submitHandler = e => {
    if (e) e.preventDefault()
    if (values.description && values.difficulty && values.assigned) {
      callback(values)
    }
  }

  const changeHandler = e => {
    e.persist()
    setValues(values => {
      const { name, value } = e.target
      return {
        ...values,
        [name]: value
      }
    })
  }

  const textHandler = {
    arbitrarykey: 'arbitraryValue',
    onChange: function (e) {
      e.persist()
      setValues(values => {
        const { name, value } = e.target
        return {
          ...values,
          [name]: value,
          completed: false
        }
      })
    }
  }

  return [
    submitHandler,
    changeHandler,
    textHandler,
    values
  ]
}

export default useForm
