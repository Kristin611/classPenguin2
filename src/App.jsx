import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginButton from './Components/loginButton';
import CreatePostButton from './Components/createPost';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <LoginButton /> 
      <CreatePostButton />
    </>
  )
}

export default App
