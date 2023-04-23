import { useState } from 'react'
import TextInput from './TextInput'

const Signin = ({ onSubmit }) => {
  const [values, setValues] = useState({
    name: '',
    password: '',
  })

  const handleSubmit = e => {
    e.preventDefault()
    onSubmit(values)
  }

  const handleChange = (name, value) => {
    setValues(prevState => ({
      ...prevState,
      [name]: value,
    }))
  }
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        style={{ display: 'flex', flexDirection: 'column' }}>
        <div>
          <TextInput
            type='email'
            name='name'
            placeholder='Введите имя...'
            label='Имя'
            withAsterisk={true}
            disabled={false}
            radius='xl'
            size='xl'
            variant='filled'
            onChange={handleChange}
          />
        </div>
        <div>
          <TextInput
            type='password'
            name='password'
            placeholder='Введите пароль...'
            label='Пароль'
            withAsterisk={true}
            disabled={false}
            radius='xl'
            size='xl'
            variant='filled'
            onChange={handleChange}
          />
        </div>
        <div>
          <button type='submit'>Войти</button>
        </div>
      </form>
    </div>
  )
}

export default Signin
