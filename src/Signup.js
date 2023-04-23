import { useState } from 'react'
import TextInput from './TextInput'

const Signup = ({ onSubmit }) => {
  const [values, setValues] = useState({
    name: '',
    username: '',
    email: '',
    gender: '',
    password: '',
    confirmPassword: '',
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

  const handleChangeGender = event => {
    setValues(prevState => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }))
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextInput
        type='text'
        label='Имя'
        name='name'
        placeholder='Ваше имя...'
        withAsterisk={true}
        disabled={false}
        radius='xl'
        size='xl'
        variant='default'
        onChange={handleChange}
      />
      <TextInput
        type='text'
        label='Ник'
        name='username'
        placeholder='Ваш ник...'
        withAsterisk={false}
        disabled={false}
        size='xl'
        variant='default'
        onChange={handleChange}
      />
      <TextInput
        type='email'
        label='Почта'
        name='email'
        placeholder='Ваша почта...'
        withAsterisk={false}
        disabled={false}
        radius='xl'
        size='xl'
        variant='filled'
        onChange={handleChange}
      />
      <div>
        <label>
          Пол:
          <input
            type='radio'
            name='gender'
            value='male'
            onChange={handleChangeGender}
          />
          Мужской
        </label>
        <label>
          <input
            type='radio'
            name='gender'
            value='female'
            onChange={handleChangeGender}
          />
          Женский
        </label>
      </div>
      <TextInput
        type='password'
        label='Пароль'
        name='password'
        placeholder='Ваш пароль...'
        withAsterisk={true}
        disabled={false}
        radius='lg'
        size='sm'
        variant='filled'
        onChange={handleChange}
      />
      <TextInput
        type='password'
        label='Повторите пароль'
        name='confirmPassword'
        placeholder='Повторите пароль...'
        withAsterisk={true}
        disabled={false}
        radius='md'
        size='md'
        variant='filled'
        onChange={handleChange}
      />
      <button type='submit'>Зарегистрироваться</button>
    </form>
  )
}

export default Signup
