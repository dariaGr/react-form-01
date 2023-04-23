import Signup from './Signup'
import Signin from './Signin'

const onSubmit = values => {
  console.log('###: Submitted values:', values)
}

function App() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '2rem',
      }}>
      <header style={{ textAlign: 'center' }}>
        <Signup onSubmit={onSubmit} />
        <Signin onSubmit={onSubmit} />
      </header>
    </div>
  )
}

export default App
