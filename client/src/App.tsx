import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import axios from 'axios'
import { Header } from './components/header'

function testFetch()
{

  console.log("HELLLO")

  axios.get('http://localhost:1337/employee')
  .then(response => console.log(response.data))
  .catch(error => console.error('Error:', error));
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    </>
  )
}

export default App
